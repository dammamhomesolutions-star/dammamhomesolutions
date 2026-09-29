"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { wdLayers } from "@/lib/window-door-repair";

const COLLAPSED_GAP = 5;
const EXPLODED_GAP = 30;

const fills = ["url(#wd-glass)", "#d7e4ea", "#b8ccd4", "#7fa0b0", "#5b7d8f", "#3d5a6b"];
const textColors = ["text-ink-900", "text-ink-900", "text-ink-900", "text-sand-50", "text-sand-50", "text-sand-50"];

export default function WdExplodedAssembly() {
  const [exploded, setExploded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-b border-glass-900/10 bg-glass-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">The assembly, taken apart</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A window or door is more than one surface.
          </h2>
          <p className="mt-4 text-ink-600">
            Hover or tap to separate the layers that make up the assembly.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            aria-pressed={exploded}
            onMouseEnter={() => setExploded(true)}
            onMouseLeave={() => setExploded(false)}
            onClick={() => setExploded(true)}
            className="focus-ring relative h-80 w-full max-w-md sm:h-96"
            aria-label="Tap to reveal the layers of a window or door assembly"
          >
            {wdLayers.map((layer, i) => (
              <motion.div
                key={layer.id}
                className={`absolute left-1/2 flex h-12 w-64 -translate-x-1/2 items-center justify-center rounded-sm border border-glass-900/10 text-sm font-medium shadow-sm sm:w-72 ${textColors[i]}`}
                style={{ background: fills[i] }}
                animate={{
                  top: shouldReduceMotion
                    ? i * (COLLAPSED_GAP + 4)
                    : i * (exploded ? EXPLODED_GAP : COLLAPSED_GAP),
                  zIndex: wdLayers.length - i,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
              >
                {i === 0 ? layer.label : ""}
              </motion.div>
            ))}

            {(exploded || shouldReduceMotion) &&
              wdLayers.slice(1).map((layer, i) => {
                const gap = shouldReduceMotion ? COLLAPSED_GAP + 4 : EXPLODED_GAP;
                const boxCenter = (i + 1) * gap + 24;
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
          Illustrative component view — not every construction method.
        </p>
      </div>
    </section>
  );
}
