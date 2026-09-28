"use client";

import { useCallback, useRef, useState } from "react";

const VIEW_W = 800;
const VIEW_H = 460;

// Fixed positions (percent of the scene) for the three imperfections.
const SPOTS = {
  crack: { x: 30, y: 58 },
  stain: { x: 60, y: 30 },
  damage: { x: 18, y: 28 },
};

function distance(ax: number, ay: number, bx: number, by: number) {
  return Math.hypot(ax - bx, ay - by);
}

export default function CrCeilingScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<SVGCircleElement>(null);
  const crackRef = useRef<SVGPathElement>(null);
  const stainRef = useRef<SVGEllipseElement>(null);
  const damageRef = useRef<SVGPathElement>(null);
  const [inspected, setInspected] = useState(false);

  const setOpacity = (el: SVGElement | null, value: number) => {
    if (el) el.style.opacity = String(value);
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    const spot = spotlightRef.current;
    if (!el || !spot) return;
    const rect = el.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;

    spot.setAttribute("cx", String((xPct / 100) * VIEW_W));
    spot.setAttribute("cy", String((yPct / 100) * VIEW_H));
    spot.style.opacity = "1";

    setOpacity(crackRef.current, 0.32 + Math.max(0, 1 - distance(xPct, yPct, SPOTS.crack.x, SPOTS.crack.y) / 28) * 0.68);
    setOpacity(stainRef.current, 0.32 + Math.max(0, 1 - distance(xPct, yPct, SPOTS.stain.x, SPOTS.stain.y) / 28) * 0.68);
    setOpacity(damageRef.current, 0.32 + Math.max(0, 1 - distance(xPct, yPct, SPOTS.damage.x, SPOTS.damage.y) / 28) * 0.68);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
    if (!inspected) {
      setOpacity(crackRef.current, 0.32);
      setOpacity(stainRef.current, 0.32);
      setOpacity(damageRef.current, 0.32);
    }
  }, [inspected]);

  const toggleInspected = () => {
    const next = !inspected;
    setInspected(next);
    const value = next ? 1 : 0.32;
    setOpacity(crackRef.current, value);
    setOpacity(stainRef.current, value);
    setOpacity(damageRef.current, value);
  };

  return (
    <div>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={toggleInspected}
        role="button"
        tabIndex={0}
        aria-pressed={inspected}
        aria-label="Ceiling scene — inspect for imperfections"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleInspected();
          }
        }}
        className="focus-ring relative cursor-crosshair overflow-hidden rounded-md border border-ink-900/10"
      >
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} role="img" aria-labelledby="cr-hero-title" className="h-auto w-full">
          <title id="cr-hero-title">
            A ceiling viewed from below, with a recessed light, seams, and a few small imperfections
          </title>

          <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="url(#ceiling-plaster)" filter="url(#ceiling-noise)" />

          {/* board seams */}
          <line x1="0" y1="150" x2={VIEW_W} y2="150" stroke="#ded2ba" strokeWidth="1.4" />
          <line x1="0" y1="310" x2={VIEW_W} y2="310" stroke="#ded2ba" strokeWidth="1.4" />
          <line x1="266" y1="0" x2="266" y2={VIEW_H} stroke="#ded2ba" strokeWidth="1.4" />
          <line x1="533" y1="0" x2="533" y2={VIEW_H} stroke="#ded2ba" strokeWidth="1.4" />

          {/* recessed light */}
          <circle cx="600" cy="130" r="22" fill="#e4dcc7" stroke="#b4bac6" strokeWidth="1.4" />
          <circle cx="600" cy="130" r="13" fill="#faf8f4" stroke="#8e97a8" strokeWidth="1" />

          {/* pendant drop hint (subtle, decorative) */}
          <line x1="420" y1="0" x2="420" y2="26" stroke="#c9bfa8" strokeWidth="1.4" />

          {/* damage patch */}
          <path
            ref={damageRef}
            d={`M${VIEW_W * 0.18 - 34} ${VIEW_H * 0.28 - 20} q 30 -18 60 2 q 18 22 -6 40 q -34 16 -58 -8 q -14 -18 4 -34 Z`}
            fill="#c9bfa8"
            style={{ opacity: 0.32, transition: "opacity 200ms ease-out" }}
          />

          {/* crack */}
          <path
            ref={crackRef}
            d={`M${VIEW_W * 0.3 - 40} ${VIEW_H * 0.58 - 10} l 22 18 l -8 14 l 26 16 l 10 20`}
            fill="none"
            stroke="#4a5468"
            strokeWidth="1.6"
            strokeLinecap="round"
            style={{ opacity: 0.32, transition: "opacity 200ms ease-out" }}
          />

          {/* water stain */}
          <ellipse
            ref={stainRef}
            cx={VIEW_W * 0.6}
            cy={VIEW_H * 0.3}
            rx="70"
            ry="46"
            fill="url(#ceiling-stain)"
            style={{ opacity: 0.32, transition: "opacity 200ms ease-out" }}
          />

          {/* cursor spotlight */}
          <circle
            ref={spotlightRef}
            cx={VIEW_W / 2}
            cy={VIEW_H / 2}
            r="120"
            fill="url(#ceiling-spotlight)"
            style={{ opacity: 0, transition: "opacity 250ms ease-out", mixBlendMode: "soft-light" }}
          />
        </svg>
      </div>

      <p className="mt-3 text-xs text-ink-400">
        <span className="hidden sm:inline">Move over the ceiling to inspect.</span>
        <span className="sm:hidden">Tap the ceiling to inspect.</span>
      </p>
    </div>
  );
}
