"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function WdAlignmentVisualizer() {
  const shouldReduceMotion = useReducedMotion();
  const [misaligned, setMisaligned] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => setMisaligned((v) => !v), 2600);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  const state = shouldReduceMotion ? false : misaligned;

  return (
    <section className="border-b border-glass-900/10 bg-glass-900 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-300">A closer look</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            See the alignment.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-glass-200">
            A frame, panel, hinge or latch that has shifted out of alignment
            can affect how a door or window closes. This is illustrative —
            not every sticking door is caused by misalignment.
          </p>
        </div>

        <div className="relative mx-auto mt-14 flex max-w-md flex-col items-center">
          <svg viewBox="0 0 300 240" className="h-64 w-full" aria-hidden="true">
            {/* center alignment guide */}
            <line x1="150" y1="10" x2="150" y2="230" stroke="#5b7d8f" strokeWidth="1" strokeDasharray="3 5" />

            {/* outer frame, fixed */}
            <rect x="70" y="30" width="160" height="180" rx="3" fill="none" stroke="#7fa0b0" strokeWidth="1.6" />

            {/* corner alignment ticks */}
            {[
              [70, 30],
              [230, 30],
              [70, 210],
              [230, 210],
            ].map(([x, y]) => (
              <g key={`${x}-${y}`} stroke="#3d5a6b" strokeWidth="1">
                <line x1={x - 6} y1={y} x2={x + 6} y2={y} />
                <line x1={x} y1={y - 6} x2={x} y2={y + 6} />
              </g>
            ))}

            {/* inner panel, animates */}
            <g
              style={{
                transform: state ? "translate(9px, -6px) rotate(2.4deg)" : "translate(0px, 0px) rotate(0deg)",
                transformOrigin: "150px 120px",
                transition: "transform 900ms cubic-bezier(0.65, 0, 0.35, 1)",
              }}
            >
              <rect x="88" y="48" width="124" height="144" fill="url(#wd-glass)" stroke="#eef3f5" strokeWidth="2" />
              <circle cx="200" cy="120" r="4" fill="#eef3f5" />
              <rect x="200" y="116" width="20" height="8" rx="4" fill="#eef3f5" />
            </g>

            {/* gap indicator lines, only visible when misaligned */}
            <g style={{ opacity: state ? 1 : 0, transition: "opacity 500ms ease-out 300ms" }}>
              <line x1="70" y1="30" x2="79" y2="24" stroke="#d69a5f" strokeWidth="1.4" />
              <line x1="230" y1="210" x2="221" y2="216" stroke="#d69a5f" strokeWidth="1.4" />
            </g>
          </svg>

          <p
            aria-live="polite"
            className={`mt-4 font-mono text-sm font-semibold tracking-[0.14em] transition-colors duration-500 ${
              state ? "text-ember-500" : "text-glass-300"
            }`}
          >
            {state ? "MISALIGNED" : "✓ ALIGNED"}
          </p>
        </div>
      </div>
    </section>
  );
}
