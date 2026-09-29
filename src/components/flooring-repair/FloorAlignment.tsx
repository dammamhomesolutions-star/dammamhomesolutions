"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function FloorAlignment() {
  const shouldReduceMotion = useReducedMotion();
  const [shifted, setShifted] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => setShifted((v) => !v), 2600);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  const state = shouldReduceMotion ? false : shifted;

  return (
    <section className="border-b border-concrete-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-300">A closer look</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            A finished floor should feel visually continuous.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-steel-300">
            This is a conceptual visualization, not installation instructions.
          </p>
        </div>

        <div className="relative mx-auto mt-14 flex max-w-md flex-col items-center">
          <svg viewBox="0 0 300 180" className="h-52 w-full" aria-hidden="true">
            {/* alignment guide */}
            <line x1="0" y1="90" x2="300" y2="90" stroke="#666f78" strokeWidth="1" strokeDasharray="3 5" />

            {/* left section, fixed */}
            <rect x="20" y="60" width="120" height="60" fill="url(#fl-tile)" stroke="#78746a" strokeWidth="1" />
            {Array.from({ length: 2 }).map((_, i) => (
              <line key={i} x1={20 + (i + 1) * 40} y1="60" x2={20 + (i + 1) * 40} y2="120" stroke="#9a968a" strokeWidth="0.6" opacity="0.6" />
            ))}

            {/* right section, animates */}
            <g style={{ transform: state ? "translateY(8px) rotate(1.4deg)" : "translateY(0px) rotate(0deg)", transformOrigin: "220px 90px", transition: "transform 900ms cubic-bezier(0.65,0,0.35,1)" }}>
              <rect x="160" y="60" width="120" height="60" fill="url(#fl-tile-dark)" stroke="#78746a" strokeWidth="1" />
              {Array.from({ length: 2 }).map((_, i) => (
                <line key={i} x1={160 + (i + 1) * 40} y1="60" x2={160 + (i + 1) * 40} y2="120" stroke="#b7bfc6" strokeWidth="0.6" opacity="0.6" />
              ))}
            </g>

            {/* joint line */}
            <line x1="140" y1="55" x2="140" y2="125" stroke="#b8916c" strokeWidth="1.4" style={{ opacity: state ? 1 : 0.5 }} />

            {/* gap indicator */}
            <g style={{ opacity: state ? 1 : 0, transition: "opacity 500ms ease-out 300ms" }}>
              <line x1="140" y1="60" x2="150" y2="52" stroke="#d69a5f" strokeWidth="1.4" />
              <text x="150" y="46" fontSize="8" fill="#d69a5f">joint</text>
            </g>

            <text x="80" y="140" textAnchor="middle" fontSize="9" fill="#838d96">surface</text>
            <text x="220" y="140" textAnchor="middle" fontSize="9" fill="#838d96">adjacent area</text>
            <text x="140" y="150" textAnchor="middle" fontSize="9" fill="#838d96">edge</text>
          </svg>

          <p
            aria-live="polite"
            className={`mt-2 font-mono text-sm font-semibold tracking-[0.14em] transition-colors duration-500 ${
              state ? "text-ember-500" : "text-clay-300"
            }`}
          >
            {state ? "SHIFTED" : "✓ ALIGNED"}
          </p>
        </div>
      </div>
    </section>
  );
}
