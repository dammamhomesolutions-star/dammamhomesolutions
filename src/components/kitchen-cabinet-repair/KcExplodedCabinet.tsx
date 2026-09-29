"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { kcLayers } from "@/lib/kitchen-cabinet-repair";

const COLLAPSED_GAP = 4;
const EXPLODED_GAP = 26;

const fills = [
  "linear-gradient(135deg, #a67c5b, #6b4a35)",
  "#838d96",
  "linear-gradient(135deg, #8a6248, #513825)",
  "#cdab8f",
  "linear-gradient(135deg, #a67c5b, #6b4a35)",
  "#b7bfc6",
  "#eceef0",
  "linear-gradient(135deg, #513825, #3d2b1f)",
];
const textColors = ["text-ink-900", "text-ink-900", "text-sand-50", "text-ink-900", "text-ink-900", "text-ink-900", "text-ink-900", "text-sand-50"];

export default function KcExplodedCabinet() {
  const [exploded, setExploded] = useState(false);
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const collapse = () => {
    setExploded(false);
    setHighlighted(null);
  };

  return (
    <section className="border-b border-walnut-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">A system of moving parts</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A cabinet is a system of moving parts.
          </h2>
          <p className="mt-4 text-ink-600">
            Hover or tap the cabinet to separate the layers, then click any
            component to highlight it.
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
            className="focus-ring relative h-96 w-full max-w-md cursor-pointer sm:h-[26rem]"
            aria-label="Tap to reveal the layers of a kitchen cabinet"
          >
            {kcLayers.map((layer, i) => (
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
                  highlighted === layer.id ? "border-glass-500 ring-2 ring-glass-500" : "border-walnut-900/15"
                }`}
                style={{ background: fills[i] }}
                animate={{
                  top: shouldReduceMotion
                    ? i * (COLLAPSED_GAP + 4)
                    : i * (exploded ? EXPLODED_GAP : COLLAPSED_GAP),
                  x: "-50%",
                  zIndex: highlighted === layer.id ? 50 : kcLayers.length - i,
                  scale: highlighted === layer.id ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
              >
                {i === 0 ? layer.label : ""}
              </motion.div>
            ))}

            {(exploded || shouldReduceMotion) &&
              kcLayers.slice(1).map((layer, i) => {
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
            {kcLayers.find((l) => l.id === highlighted)?.description}
          </p>
        )}

        <p className="mt-6 text-center text-xs text-ink-500">
          Illustrative component view — not construction instructions.
        </p>
      </div>
    </section>
  );
}
