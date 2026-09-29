"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const INTENDED_PATH = "M80 20 L80 220";
const ALIGNED_PATH = "M80 20 L80 220";
const DIVERGED_PATH = "M80 20 Q92 90 84 140 T96 220";

export default function GdAlignmentVisualizer() {
  const shouldReduceMotion = useReducedMotion();
  const [misaligned, setMisaligned] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => setMisaligned((v) => !v), 2800);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  const state = shouldReduceMotion ? false : misaligned;
  const actualPath = state ? DIVERGED_PATH : ALIGNED_PATH;

  return (
    <section className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ink-300">A closer look</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Something can look fine while the movement is not.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            An illustrative visualization — not a measurement of an actual door or gate.
          </p>
        </div>

        <div className="relative mx-auto mt-14 flex max-w-sm flex-col items-center">
          <svg viewBox="0 0 160 240" className="h-64 w-full" aria-hidden="true">
            {/* technical grid */}
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={i} x1={(i + 1) * 26} y1="10" x2={(i + 1) * 26} y2="230" stroke="#333a49" strokeWidth="0.5" />
            ))}

            {/* intended path */}
            <path d={INTENDED_PATH} fill="none" stroke="#69748a" strokeWidth="1.4" strokeDasharray="4 5" />

            {/* actual path */}
            <path d={actualPath} fill="none" stroke={state ? "#c76a3f" : "#b4bac6"} strokeWidth="2" style={{ transition: "stroke 400ms" }} />

            {/* traveling marker along the actual path */}
            {!shouldReduceMotion && (
              <motion.circle
                r="5"
                fill={state ? "#c76a3f" : "#eef3f5"}
                style={{ offsetPath: `path('${actualPath}')` }}
                animate={{ offsetDistance: ["0%", "100%"] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </svg>

          <p
            aria-live="polite"
            className={`mt-2 font-mono text-sm font-semibold tracking-[0.14em] transition-colors duration-500 ${
              state ? "text-rust-500" : "text-ink-300"
            }`}
          >
            {state ? "MOVEMENT DIVERGES" : "✓ ON PATH"}
          </p>
        </div>
      </div>
    </section>
  );
}
