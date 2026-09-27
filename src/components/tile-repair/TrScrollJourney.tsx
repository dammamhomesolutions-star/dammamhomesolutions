"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { tileLayers } from "@/lib/tile-repair";

const stages = [
  { at: 0, label: "Full tiled surface." },
  { at: 0.18, label: "The camera moves closer." },
  { at: 0.36, label: "Grout lines become more detailed." },
  { at: 0.52, label: "A damaged area becomes visible." },
  { at: 0.7, label: "The surface separates into layers." },
  { at: 0.88, label: "Repaired, cleaned, finished." },
];

function StaticFallback() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-rust-700">Surface to structure</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          A closer look at what makes up a tiled surface.
        </h2>
        <ol className="mt-8 space-y-4">
          {stages.map((stage, i) => (
            <li key={stage.label} className="flex gap-4">
              <span className="font-mono text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm text-ink-700">{stage.label}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-xs text-ink-500">Illustrative surface cross-section.</p>
      </div>
    </section>
  );
}

export default function TrScrollJourney() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [stageIndex, setStageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    let idx = 0;
    for (let i = 0; i < stages.length; i++) {
      if (v >= stages[i].at) idx = i;
    }
    setStageIndex(idx);
  });

  const gridOpacity = useTransform(scrollYProgress, [0, 0.32, 0.4], [1, 1, 0]);
  const gridScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.7]);

  const detailOpacity = useTransform(scrollYProgress, [0.32, 0.4, 0.58, 0.66], [0, 1, 1, 0]);
  const crackDash = useTransform(scrollYProgress, [0.42, 0.56], [1, 0]);

  const explodedOpacity = useTransform(scrollYProgress, [0.6, 0.68, 0.84, 0.9], [0, 1, 1, 0]);
  const layerGap = useTransform(scrollYProgress, [0.68, 0.85], [0, 1]);
  const layerY0 = useTransform(layerGap, [0, 1], [0, 0]);
  const layerY1 = useTransform(layerGap, [0, 1], [0, 26]);
  const layerY2 = useTransform(layerGap, [0, 1], [0, 52]);
  const layerY3 = useTransform(layerGap, [0, 1], [0, 78]);
  const layerYs = [layerY0, layerY1, layerY2, layerY3];

  const finishedOpacity = useTransform(scrollYProgress, [0.85, 0.93], [0, 1]);

  if (shouldReduceMotion) return <StaticFallback />;

  return (
    <section ref={containerRef} className="relative h-[260vh] bg-sand-100/50">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden border-b border-ink-900/10">
        <div className="container-edge pt-14">
          <p className="section-label !text-rust-700">Surface to structure</p>
          <h2 className="mt-4 max-w-xl font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
            A closer look at what makes up a tiled surface.
          </h2>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          {/* Scene A: full grid, zooming in */}
          <motion.div
            style={{ opacity: gridOpacity, scale: gridScale }}
            className="absolute grid grid-cols-6 gap-[3px] rounded-sm bg-ink-300 p-[3px]"
          >
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="h-9 w-9 sm:h-12 sm:w-12"
                style={{ background: "linear-gradient(135deg, #f2ede2, #e4dcc7)", filter: "url(#tile-noise)" }}
              />
            ))}
          </motion.div>

          {/* Scene B: close-up detail with a crack drawing in */}
          <motion.div style={{ opacity: detailOpacity }} className="absolute">
            <svg viewBox="0 0 240 160" className="h-56 w-auto sm:h-72" aria-hidden="true">
              <rect x="0" y="0" width="118" height="78" fill="url(#tile-stone)" filter="url(#tile-noise)" />
              <rect x="122" y="0" width="118" height="78" fill="url(#tile-stone)" filter="url(#tile-noise)" />
              <rect x="0" y="82" width="118" height="78" fill="url(#tile-stone)" filter="url(#tile-noise)" />
              <rect x="122" y="82" width="118" height="78" fill="url(#tile-stone)" filter="url(#tile-noise)" />
              <motion.path
                d="M40 20 L70 45 L60 60 L90 75"
                fill="none"
                stroke="#333a49"
                strokeWidth="1.6"
                strokeLinecap="round"
                pathLength={1}
                style={{ strokeDasharray: 1, strokeDashoffset: crackDash }}
              />
            </svg>
            <p className="mt-4 text-center text-xs text-ink-500">A damaged area becomes visible.</p>
          </motion.div>

          {/* Scene C: exploded cross-section */}
          <motion.div style={{ opacity: explodedOpacity }} className="absolute flex flex-col items-center">
            <svg viewBox="0 0 340 220" className="h-64 w-auto sm:h-80" aria-hidden="true">
              {tileLayers.map((layer, i) => (
                <motion.g key={layer.id} style={{ y: layerYs[i] }}>
                  <rect
                    x="20"
                    y={20 + i * 34}
                    width="180"
                    height="26"
                    fill={i % 2 === 0 ? "url(#tile-stone)" : "#ded2ba"}
                    stroke="#8e97a8"
                    strokeWidth="0.6"
                  />
                  <text x="210" y={20 + i * 34 + 17} fontSize="10" fill="#4a5468">
                    {layer.label}
                  </text>
                </motion.g>
              ))}
            </svg>
            <p className="mt-2 text-xs text-ink-500">Illustrative surface cross-section — not every installation.</p>
          </motion.div>

          {/* Scene D: finished */}
          <motion.div style={{ opacity: finishedOpacity }} className="absolute">
            <svg viewBox="0 0 240 160" className="h-56 w-auto sm:h-72" aria-hidden="true">
              <rect x="0" y="0" width="118" height="78" fill="url(#tile-stone)" filter="url(#tile-noise)" />
              <rect x="122" y="0" width="118" height="78" fill="url(#tile-stone)" filter="url(#tile-noise)" />
              <rect x="0" y="82" width="118" height="78" fill="url(#tile-stone)" filter="url(#tile-noise)" />
              <rect x="122" y="82" width="118" height="78" fill="url(#tile-stone)" filter="url(#tile-noise)" />
            </svg>
            <p className="mt-4 text-center text-xs font-medium text-ink-700">Repaired, cleaned, finished.</p>
          </motion.div>
        </div>

        <div className="container-edge flex items-center gap-3 pb-10">
          {stages.map((stage, i) => (
            <span
              key={stage.label}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i === stageIndex ? "bg-rust-600" : "bg-ink-900/10"
              }`}
            />
          ))}
        </div>
        <p className="container-edge pb-6 text-sm text-ink-600" aria-live="polite">
          {stages[stageIndex].label}
        </p>
      </div>
    </section>
  );
}
