"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";

const frames = [
  { at: 0, label: "Closed." },
  { at: 0.16, label: "The handle turns." },
  { at: 0.34, label: "The panel begins to move." },
  { at: 0.52, label: "The window opens." },
  { at: 0.68, label: "Air and light enter." },
  { at: 0.86, label: "The window closes again." },
];

/** Clamped piecewise-linear interpolation, mirroring Framer's useTransform mapping. */
function lerp(input: number[], output: number[], v: number): number {
  if (v <= input[0]) return output[0];
  const last = input.length - 1;
  if (v >= input[last]) return output[last];
  for (let i = 0; i < last; i++) {
    if (v >= input[i] && v <= input[i + 1]) {
      const t = (v - input[i]) / (input[i + 1] - input[i]);
      return output[i] + (output[i + 1] - output[i]) * t;
    }
  }
  return output[last];
}

function StaticFallback() {
  return (
    <section className="border-b border-glass-900/10 bg-glass-100/40 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-glass-700">A system of moving parts</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Closed. Turned. Opened. Closed again.
        </h2>
        <ol className="mt-8 space-y-4">
          {frames.map((frame, i) => (
            <li key={frame.label} className="flex gap-4">
              <span className="font-mono text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm text-ink-700">{frame.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function WdOpenCloseScroll() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgress(v);
    let idx = 0;
    for (let i = 0; i < frames.length; i++) {
      if (v >= frames[i].at) idx = i;
    }
    setFrameIndex(idx);
  });

  // handle rotates first
  const handleRotate = lerp([0, 0.16, 0.3], [0, -55, -55], progress);
  // sash slides open, then closes again at the end
  const panelSlide = lerp([0.3, 0.52, 0.68, 0.86, 1], [0, 200, 200, 0, 0], progress);
  const panelOpacity = 1;
  // air/light glyph fades in mid-sequence
  const airOpacity = lerp([0.52, 0.6, 0.68, 0.78], [0, 1, 1, 0], progress);

  if (shouldReduceMotion) return <StaticFallback />;

  return (
    <section ref={containerRef} className="relative h-[260vh] bg-glass-100/40">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden border-b border-glass-900/10">
        <div className="container-edge pt-14">
          <p className="section-label !text-glass-700">A system of moving parts</p>
          <h2 className="mt-4 max-w-xl font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
            Closed. Turned. Opened. Closed again.
          </h2>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <svg viewBox="0 0 400 280" className="h-64 w-auto sm:h-80" aria-hidden="true">
            {/* wall */}
            <rect x="0" y="0" width="400" height="280" fill="url(#wd-sand)" />
            {/* frame (fixed) */}
            <rect x="40" y="30" width="320" height="220" rx="4" fill="url(#wd-frame-dark)" />
            <rect x="58" y="46" width="284" height="188" fill="#c9d8de" opacity="0.35" />

            {/* moving sash / panel */}
            <g style={{ transform: `translateX(${panelSlide}px)`, opacity: panelOpacity, transition: "transform 60ms linear" }}>
              <rect x="60" y="48" width="140" height="184" rx="2" fill="url(#wd-glass)" stroke="#1c2733" strokeWidth="3" />
              <rect x="60" y="48" width="140" height="184" fill="url(#wd-glass-sheen)" opacity="0.5" style={{ mixBlendMode: "screen" }} />
              {/* handle on sash, rotates */}
              <g style={{ transform: `rotate(${handleRotate}deg)`, transformOrigin: "192px 140px" }}>
                <circle cx="192" cy="140" r="5" fill="#26333f" />
                <rect x="192" y="136" width="32" height="8" rx="4" fill="#26333f" />
              </g>
            </g>

            {/* air / light glyphs */}
            <g style={{ opacity: airOpacity, transition: "opacity 120ms linear" }}>
              <line x1="230" y1="90" x2="270" y2="90" stroke="#7fa0b0" strokeWidth="2" strokeLinecap="round" />
              <line x1="230" y1="115" x2="255" y2="115" stroke="#7fa0b0" strokeWidth="2" strokeLinecap="round" />
              <line x1="230" y1="140" x2="265" y2="140" stroke="#7fa0b0" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* sill / track */}
            <rect x="40" y="248" width="320" height="8" rx="2" fill="#8e97a8" />
          </svg>
        </div>

        <div className="container-edge flex items-center gap-2.5 pb-10">
          {frames.map((frame, i) => (
            <span
              key={frame.label}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i === frameIndex ? "bg-glass-600" : "bg-ink-900/10"
              }`}
            />
          ))}
        </div>
        <p className="container-edge pb-6 text-sm text-ink-600" aria-live="polite">
          {frames[frameIndex].label}
        </p>
      </div>
    </section>
  );
}
