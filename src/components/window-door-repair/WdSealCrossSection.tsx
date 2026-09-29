"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function WdSealCrossSection() {
  const shouldReduceMotion = useReducedMotion();
  const [gapVisible, setGapVisible] = useState(!!shouldReduceMotion);
  const triggeredRef = useRef(false);

  const handleEnter = () => {
    if (triggeredRef.current || shouldReduceMotion) return;
    triggeredRef.current = true;
    window.setTimeout(() => setGapVisible(true), 1400);
  };

  return (
    <section className="border-b border-glass-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="max-w-lg">
          <p className="section-label !text-glass-700">Easy to overlook</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The part you barely see can still matter.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-600">
            Worn or damaged seals can affect how a window or door performs,
            but the actual condition should be assessed rather than assumed
            from a visible gap alone.
          </p>
          <p
            aria-live="polite"
            className={`mt-6 font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-500 ${
              gapVisible ? "text-ember-600" : "text-glass-500"
            }`}
          >
            {gapVisible ? "Inspection required" : "Seal appears continuous"}
          </p>
        </div>

        <motion.div
          onViewportEnter={handleEnter}
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto w-full max-w-sm"
        >
          <svg viewBox="0 0 320 200" className="h-auto w-full" aria-hidden="true">
            {/* outside / inside labels */}
            <text x="30" y="20" fontSize="10" fill="#5b7d8f" letterSpacing="1">OUTSIDE</text>
            <text x="230" y="20" fontSize="10" fill="#5b7d8f" letterSpacing="1">INSIDE</text>

            {/* wall sections */}
            <rect x="10" y="30" width="60" height="150" fill="#ebe4d6" filter="url(#wd-noise)" />
            <rect x="250" y="30" width="60" height="150" fill="#ebe4d6" filter="url(#wd-noise)" />

            {/* frame */}
            <rect x="70" y="30" width="30" height="150" fill="url(#wd-frame-dark)" />
            <rect x="220" y="30" width="30" height="150" fill="url(#wd-frame-dark)" />

            {/* glass */}
            <rect x="100" y="44" width="120" height="122" fill="url(#wd-glass)" />

            {/* seal — continuous, fades as gap grows */}
            <g style={{ opacity: gapVisible ? 0.15 : 1, transition: "opacity 700ms ease-out" }}>
              <rect x="94" y="42" width="6" height="126" fill="#7fa0b0" />
              <rect x="220" y="42" width="6" height="126" fill="#7fa0b0" />
            </g>

            {/* gap — appears where seal thinned/broken */}
            <g style={{ opacity: gapVisible ? 1 : 0, transition: "opacity 700ms ease-out 200ms" }}>
              <rect x="94" y="42" width="6" height="46" fill="#7fa0b0" />
              <rect x="94" y="122" width="6" height="46" fill="#7fa0b0" />
              <rect x="94" y="88" width="6" height="34" fill="none" stroke="#c17f3e" strokeWidth="1.2" strokeDasharray="2 2" />
              <text x="46" y="108" fontSize="9" fill="#94472a">gap</text>
              <line x1="60" y1="105" x2="92" y2="105" stroke="#94472a" strokeWidth="1" />
            </g>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
