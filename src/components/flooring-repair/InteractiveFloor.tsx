"use client";

import { useCallback, useRef, useState } from "react";

type DamageId = "crack" | "chip" | "worn" | "uneven";

const DAMAGE_LABELS: Record<DamageId, string> = {
  crack: "Visible crack",
  chip: "Chipped edge",
  worn: "Worn area",
  uneven: "Uneven area",
};

const PROXIMITY_PX = 70;

export default function InteractiveFloor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const markRefs = useRef<Record<DamageId, HTMLDivElement | null>>({
    crack: null,
    chip: null,
    worn: null,
    uneven: null,
  });

  const [activeId, setActiveId] = useState<DamageId | null>(null);
  const [labelPos, setLabelPos] = useState({ x: 0, y: 0 });
  const [tappedId, setTappedId] = useState<DamageId | null>(null);
  const activeRef = useRef<DamageId | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${x - 90}px, ${y - 90}px)`;
      glowRef.current.style.opacity = "1";
    }

    let closestId: DamageId | null = null;
    let closestDist = PROXIMITY_PX;

    (Object.keys(markRefs.current) as DamageId[]).forEach((id) => {
      const el = markRefs.current[id];
      if (!el) return;
      const markRect = el.getBoundingClientRect();
      const mx = markRect.left + markRect.width / 2 - rect.left;
      const my = markRect.top + markRect.height / 2 - rect.top;
      const dist = Math.hypot(mx - x, my - y);
      const level = Math.max(0, 1 - dist / (PROXIMITY_PX * 1.4));
      el.style.opacity = String(0.28 + level * 0.72);
      if (dist < closestDist) {
        closestDist = dist;
        closestId = id;
      }
    });

    if (closestId !== activeRef.current) {
      activeRef.current = closestId;
      setActiveId(closestId);
    }
    if (closestId) setLabelPos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
    (Object.keys(markRefs.current) as DamageId[]).forEach((id) => {
      const el = markRefs.current[id];
      if (el) el.style.opacity = "0.28";
    });
    activeRef.current = null;
    setActiveId(null);
  }, []);

  const handleTap = (id: DamageId) => {
    setTappedId((cur) => (cur === id ? null : id));
  };

  const handleKeyDown = (id: DamageId) => (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleTap(id);
    }
  };

  return (
    <div>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-md border border-concrete-900/15 bg-gradient-to-b from-sand-100 to-concrete-100"
        style={{ perspective: "1200px" }}
      >
        {/* subtle wall backdrop */}
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-sand-50 to-transparent sm:h-20" />

        <div className="relative flex h-72 items-end justify-center pb-6 sm:h-96">
          {/* perspective floor plane */}
          <div
            className="relative h-56 w-full max-w-xl sm:h-80"
            style={{ transform: "rotateX(52deg)", transformStyle: "preserve-3d" }}
          >
            <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-labelledby="fl-hero-title" preserveAspectRatio="none">
              <title id="fl-hero-title">A tiled floor viewed from an elevated angle, with several subtle surface conditions</title>
              <rect x="0" y="0" width="400" height="300" fill="url(#fl-tile)" filter="url(#fl-stone-noise)" />
              {/* tile grid */}
              {Array.from({ length: 7 }).map((_, i) => (
                <line key={`v${i}`} x1={(i + 1) * 50} y1="0" x2={(i + 1) * 50} y2="300" stroke="#9a968a" strokeWidth="1" opacity="0.5" />
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={(i + 1) * 50} x2="400" y2={(i + 1) * 50} stroke="#9a968a" strokeWidth="1" opacity="0.5" />
              ))}
              <rect x="0" y="0" width="400" height="300" fill="url(#fl-sheen)" opacity="0.3" style={{ mixBlendMode: "screen" }} />
            </svg>

            {/* damage marks, positioned by percentage within the plane */}
            <div
              ref={(el) => {
                markRefs.current.crack = el;
              }}
              onClick={() => handleTap("crack")}
              onKeyDown={handleKeyDown("crack")}
              role="button"
              tabIndex={0}
              aria-label="Inspect crack"
              className="absolute left-[28%] top-[38%] h-10 w-16 cursor-pointer"
              style={{ opacity: 0.28, transition: "opacity 180ms ease-out" }}
            >
              <svg viewBox="0 0 64 40" className="h-full w-full" aria-hidden="true">
                <path d="M4 6 L26 20 L18 26 L44 34" fill="none" stroke="#464339" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>

            <div
              ref={(el) => {
                markRefs.current.chip = el;
              }}
              onClick={() => handleTap("chip")}
              onKeyDown={handleKeyDown("chip")}
              role="button"
              tabIndex={0}
              aria-label="Inspect chipped edge"
              className="absolute left-[68%] top-[22%] h-8 w-8 cursor-pointer"
              style={{ opacity: 0.28, transition: "opacity 180ms ease-out" }}
            >
              <svg viewBox="0 0 32 32" className="h-full w-full" aria-hidden="true">
                <path d="M0 0 L18 0 L14 14 L0 18 Z" fill="#78746a" />
              </svg>
            </div>

            <div
              ref={(el) => {
                markRefs.current.worn = el;
              }}
              onClick={() => handleTap("worn")}
              onKeyDown={handleKeyDown("worn")}
              role="button"
              tabIndex={0}
              aria-label="Inspect worn area"
              className="absolute left-[45%] top-[62%] h-16 w-24 cursor-pointer"
              style={{ opacity: 0.28, transition: "opacity 180ms ease-out" }}
            >
              <svg viewBox="0 0 96 64" className="h-full w-full" aria-hidden="true">
                <ellipse cx="48" cy="32" rx="44" ry="26" fill="#78746a" filter="url(#fl-worn-noise)" />
              </svg>
            </div>

            <div
              ref={(el) => {
                markRefs.current.uneven = el;
              }}
              onClick={() => handleTap("uneven")}
              onKeyDown={handleKeyDown("uneven")}
              role="button"
              tabIndex={0}
              aria-label="Inspect uneven area"
              className="absolute left-[14%] top-[70%] h-10 w-20 cursor-pointer"
              style={{ opacity: 0.28, transition: "opacity 180ms ease-out" }}
            >
              <svg viewBox="0 0 80 40" className="h-full w-full" aria-hidden="true">
                <rect x="0" y="10" width="80" height="20" fill="#5c584f" opacity="0.5" style={{ transform: "skewY(-2deg)" }} />
              </svg>
            </div>

            {/* mobile-tapped label */}
            {tappedId && (
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-ink-950/85 px-3 py-1.5 text-xs font-medium text-sand-50 sm:hidden">
                {DAMAGE_LABELS[tappedId]}
              </span>
            )}
          </div>
        </div>

        {/* cursor inspection glow, flat overlay for a soft architectural indicator */}
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 hidden h-[180px] w-[180px] rounded-full sm:block"
          style={{ opacity: 0, transition: "opacity 220ms ease-out", backgroundImage: "radial-gradient(circle, rgba(92,88,79,0.28), transparent 70%)" }}
        />

        {/* desktop hover label */}
        {activeId && (
          <span
            className="pointer-events-none absolute hidden -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-full bg-ink-950/85 px-3 py-1.5 text-xs font-medium text-sand-50 sm:block"
            style={{ left: labelPos.x, top: labelPos.y - 20 }}
          >
            {DAMAGE_LABELS[activeId]}
          </span>
        )}
      </div>

      <p className="mt-3 text-xs text-ink-500">
        <span className="hidden sm:inline">Move over the floor to inspect it.</span>
        <span className="sm:hidden">Tap a section to inspect.</span>
      </p>
    </div>
  );
}
