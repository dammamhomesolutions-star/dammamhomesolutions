"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { flLayers } from "@/lib/flooring-repair";

const COLLAPSED_GAP = 4;
const EXPLODED_GAP = 30;

const fills = ["url(#fl-tile)", "url(#fl-tile-dark)", "#c4c0b4", "#78746a"];
const textColors = ["text-ink-900", "text-sand-50", "text-ink-900", "text-sand-50"];

export default function FloorCrossSection() {
  const [exploded, setExploded] = useState(false);
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const collapse = () => {
    setExploded(false);
    setHighlighted(null);
  };

  return (
    <section className="border-b border-concrete-900/10 bg-concrete-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Beneath the surface</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What you see is only the surface.
          </h2>
          <p className="mt-4 text-ink-600">
            Hover or tap the floor to separate the layers, then click any
            layer to highlight it.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div
            role="button"
            tabIndex={0}
            aria-pressed={exploded}
            onMouseEnter={() => setExploded(true)}
            onMouseLeave={collapse}
            onClick={() => setExploded(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setExploded(true);
              }
            }}
            className="focus-ring relative h-64 w-full max-w-md cursor-pointer sm:h-72"
            aria-label="Tap to reveal the layers of a floor surface"
          >
            {flLayers.map((layer, i) => (
              <motion.div
                key={layer.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setHighlighted(layer.id);
                }}
                role="button"
                tabIndex={0}
                aria-pressed={highlighted === layer.id}
                aria-label={layer.label}
                className={`absolute left-1/2 flex h-11 w-64 items-center justify-center rounded-sm border text-sm font-medium shadow-sm sm:w-72 ${textColors[i]} ${
                  highlighted === layer.id ? "border-glass-500 ring-2 ring-glass-500" : "border-concrete-900/15"
                }`}
                style={{ background: fills[i] }}
                animate={{
                  top: shouldReduceMotion
                    ? i * (COLLAPSED_GAP + 4)
                    : i * (exploded ? EXPLODED_GAP : COLLAPSED_GAP),
                  x: "-50%",
                  zIndex: highlighted === layer.id ? 50 : flLayers.length - i,
                  scale: highlighted === layer.id ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
              >
                {i === 0 ? layer.label : ""}
              </motion.div>
            ))}

            {(exploded || shouldReduceMotion) &&
              flLayers.slice(1).map((layer, i) => {
                const gap = shouldReduceMotion ? COLLAPSED_GAP + 4 : EXPLODED_GAP;
                const boxCenter = (i + 1) * gap + 22;
                return (
                  <motion.span
                    key={layer.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="pointer-events-none absolute left-[calc(50%+150px)] whitespace-nowrap text-xs font-medium text-ink-600 sm:left-[calc(50%+170px)]"
                    style={{ top: boxCenter - 8 }}
                  >
                    {layer.label}
                  </motion.span>
                );
              })}
          </div>
        </div>

        {highlighted && (
          <p className="mx-auto mt-6 max-w-md text-center text-sm text-ink-600">
            {flLayers.find((l) => l.id === highlighted)?.description}
          </p>
        )}

        <p className="mt-6 text-center text-xs text-ink-500">
          Illustrative surface cross-section — not every flooring system has these exact layers.
        </p>
      </div>
    </section>
  );
}
