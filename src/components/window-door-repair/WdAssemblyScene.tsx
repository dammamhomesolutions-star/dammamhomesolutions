"use client";

import { useCallback, useRef, useState } from "react";

const VIEW_W = 760;
const VIEW_H = 480;

type PartId = "glass" | "frame" | "handle" | "seal" | "track" | "hinge";

const PARTS: { id: PartId; label: string }[] = [
  { id: "glass", label: "Glass" },
  { id: "frame", label: "Frame" },
  { id: "handle", label: "Handle" },
  { id: "hinge", label: "Hinge" },
  { id: "seal", label: "Seal" },
  { id: "track", label: "Track" },
];

const DIM = 0.4;
const LIT = 1;

export default function WdAssemblyScene() {
  const glassRef = useRef<SVGRectElement>(null);
  const frameRef = useRef<SVGRectElement>(null);
  const handleGroupRef = useRef<SVGGElement>(null);
  const handleGlowRef = useRef<SVGRectElement>(null);
  const sealRef = useRef<SVGRectElement>(null);
  const trackRef = useRef<SVGGElement>(null);
  const hingeGroupRef = useRef<SVGGElement>(null);
  const spotlightRef = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState<PartId | null>(null);
  const [locked, setLocked] = useState<PartId | null>(null);

  const applyState = useCallback((part: PartId | null) => {
    const level = (target: PartId) => (part === null ? LIT : part === target ? LIT : DIM);

    if (glassRef.current) glassRef.current.style.opacity = String(level("glass"));
    if (frameRef.current) frameRef.current.style.opacity = String(level("frame"));
    if (sealRef.current) sealRef.current.style.opacity = String(part === "seal" ? 1 : part === null ? 0.55 : 0.2);
    if (handleGroupRef.current) {
      handleGroupRef.current.style.opacity = String(level("handle"));
      handleGroupRef.current.style.transform = part === "handle" ? "rotate(-22deg)" : "rotate(0deg)";
    }
    if (handleGlowRef.current) handleGlowRef.current.style.opacity = part === "handle" ? "1" : "0";
    if (hingeGroupRef.current) hingeGroupRef.current.style.opacity = String(level("hinge"));
    if (trackRef.current) trackRef.current.style.opacity = String(part === "track" ? 1 : part === null ? 0.5 : 0.18);
  }, []);

  const handleEnter = (part: PartId) => {
    setActive(part);
    applyState(locked ?? part);
  };

  const handleLeave = () => {
    setActive(null);
    applyState(locked);
  };

  const handleToggle = (part: PartId) => {
    const next = locked === part ? null : part;
    setLocked(next);
    setActive(next);
    applyState(next);
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    const spot = spotlightRef.current;
    if (!el || !spot) return;
    const rect = el.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;
    spot.setAttribute("cx", String(xPct * VIEW_W));
    spot.setAttribute("cy", String(yPct * VIEW_H));
    spot.style.opacity = "1";
  }, []);

  const handleMouseLeaveScene = useCallback(() => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeaveScene}
        className="relative overflow-hidden rounded-md border border-glass-900/10 bg-glass-100"
      >
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} role="img" aria-labelledby="wd-hero-title" className="h-auto w-full">
          <title id="wd-hero-title">A window assembly showing frame, glass, handle, hinge, seal and track</title>

          <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="url(#wd-sand)" />

          {/* wall opening */}
          <rect x="60" y="40" width="640" height="400" fill="#ebe4d6" filter="url(#wd-noise)" />

          {/* track (sill) */}
          <g ref={trackRef} style={{ opacity: 0.5, transition: "opacity 220ms ease-out" }}>
            <rect x="80" y="410" width="600" height="14" rx="3" fill="#8e97a8" />
            <line x1="90" y1="417" x2="670" y2="417" stroke="#5b7d8f" strokeWidth="1.4" strokeDasharray="6 6" />
          </g>

          {/* frame */}
          <rect
            ref={frameRef}
            x="90"
            y="60"
            width="580"
            height="340"
            rx="6"
            fill="url(#wd-frame-dark)"
            style={{ opacity: 1, transition: "opacity 220ms ease-out" }}
          />

          {/* seal — thin inset line between frame and glass */}
          <rect
            ref={sealRef}
            x="112"
            y="82"
            width="536"
            height="296"
            rx="3"
            fill="none"
            stroke="#7fa0b0"
            strokeWidth="3"
            strokeDasharray="2 5"
            style={{ opacity: 0.55, transition: "opacity 220ms ease-out" }}
          />

          {/* glass */}
          <rect
            ref={glassRef}
            x="126"
            y="96"
            width="508"
            height="268"
            rx="2"
            fill="url(#wd-glass)"
            style={{ opacity: 1, transition: "opacity 220ms ease-out" }}
          />
          <rect x="126" y="96" width="508" height="268" fill="url(#wd-glass-sheen)" opacity="0.5" style={{ mixBlendMode: "screen" }} />
          {/* mullion */}
          <line x1="380" y1="96" x2="380" y2="364" stroke="#1c2733" strokeWidth="4" opacity="0.65" />

          {/* hinges — left edge */}
          <g ref={hingeGroupRef} style={{ opacity: 1, transition: "opacity 220ms ease-out" }}>
            {[110, 225, 340].map((y) => (
              <rect key={y} x="96" y={y} width="14" height="28" rx="2" fill="#5b7d8f" stroke="#26333f" strokeWidth="1" />
            ))}
          </g>

          {/* handle — right side */}
          <g
            ref={handleGroupRef}
            style={{ opacity: 1, transformOrigin: "600px 230px", transition: "transform 320ms cubic-bezier(0.34,1.56,0.64,1), opacity 220ms ease-out" }}
          >
            <rect ref={handleGlowRef} x="586" y="210" width="60" height="40" rx="10" fill="url(#wd-spotlight)" style={{ opacity: 0, transition: "opacity 220ms ease-out" }} />
            <circle cx="600" cy="230" r="7" fill="#26333f" />
            <rect x="600" y="224" width="46" height="12" rx="6" fill="#26333f" />
          </g>

          {/* cursor spotlight */}
          <circle
            ref={spotlightRef}
            cx={VIEW_W / 2}
            cy={VIEW_H / 2}
            r="130"
            fill="url(#wd-spotlight)"
            style={{ opacity: 0, transition: "opacity 250ms ease-out", mixBlendMode: "soft-light" }}
          />
        </svg>

        <p className="pointer-events-none absolute bottom-3 left-4 text-xs font-medium text-glass-700">
          <span className="hidden sm:inline">Inspect the assembly</span>
          <span className="sm:hidden">Tap a component to inspect</span>
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {PARTS.map((part) => {
          const isActive = active === part.id || locked === part.id;
          return (
            <button
              key={part.id}
              type="button"
              onMouseEnter={() => handleEnter(part.id)}
              onMouseLeave={handleLeave}
              onFocus={() => handleEnter(part.id)}
              onBlur={handleLeave}
              onClick={() => handleToggle(part.id)}
              aria-pressed={locked === part.id}
              className={`focus-ring rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                isActive
                  ? "border-glass-700 bg-glass-700 text-sand-50"
                  : "border-glass-900/15 bg-sand-50 text-glass-800 hover:border-glass-700/40"
              }`}
            >
              {part.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
