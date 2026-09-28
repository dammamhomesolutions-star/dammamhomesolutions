"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ceilingLayers } from "@/lib/ceiling-repair";

const COLLAPSED_GAP = 5;
const EXPLODED_GAP = 34;

const fills = ["url(#ceiling-plaster)", "#ded2ba", "#c9bfa8", "#a9a08a"];

export default function CrExplodedCeiling() {
  const [exploded, setExploded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">The ceiling is a system</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What looks like one surface can involve several layers.
          </h2>
          <p className="mt-4 text-ink-600">
            Hover or tap to see what typically sits above the finish.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            aria-pressed={exploded}
            onMouseEnter={() => setExploded(true)}
            onMouseLeave={() => setExploded(false)}
            onClick={() => setExploded(true)}
            className="focus-ring relative h-72 w-full max-w-md sm:h-80"
            aria-label="Tap to reveal what sits above the ceiling finish"
          >
            {ceilingLayers.map((layer, i) => (
              <motion.div
                key={layer.id}
                className="absolute left-1/2 flex h-14 w-64 -translate-x-1/2 items-center justify-center rounded-sm border border-ink-900/10 text-sm font-medium text-ink-800 shadow-sm sm:w-72"
                style={{ background: fills[i], filter: i === 0 ? "url(#ceiling-noise)" : undefined }}
                animate={{
                  top: shouldReduceMotion
                    ? i * (COLLAPSED_GAP + 4)
                    : i * (exploded ? EXPLODED_GAP : COLLAPSED_GAP),
                  zIndex: ceilingLayers.length - i,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
              >
                {i === 0 ? layer.label : ""}
              </motion.div>
            ))}

            {(exploded || shouldReduceMotion) &&
              ceilingLayers.slice(1).map((layer, i) => {
                const gap = shouldReduceMotion ? COLLAPSED_GAP + 4 : EXPLODED_GAP;
                const boxCenter = (i + 1) * gap + 28;
                return (
                  <motion.span
                    key={layer.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute left-[calc(50%+150px)] whitespace-nowrap text-xs font-medium text-ink-600 sm:left-[calc(50%+170px)]"
                    style={{ top: boxCenter - 8 }}
                  >
                    {layer.label}
                  </motion.span>
                );
              })}
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-ink-500">
          An educational illustration — not construction instructions.
        </p>
      </div>
    </section>
  );
}
