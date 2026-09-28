"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { ceilingLayers } from "@/lib/ceiling-repair";

const frames = [
  { at: 0, label: "A normal ceiling." },
  { at: 0.14, label: "The camera moves closer." },
  { at: 0.28, label: "Surface texture becomes visible." },
  { at: 0.4, label: "A crack becomes visible." },
  { at: 0.5, label: "The damaged section is highlighted." },
  { at: 0.62, label: "The surface separates into layers." },
  { at: 0.82, label: "The layers return together." },
  { at: 0.9, label: "The area transitions into a repaired finish." },
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
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-rust-700">Look closer</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          From ceiling to structure, one layer at a time.
        </h2>
        <ol className="mt-8 space-y-4">
          {frames.map((frame, i) => (
            <li key={frame.label} className="flex gap-4">
              <span className="font-mono text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm text-ink-700">{frame.label}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-xs text-ink-500">Illustrative ceiling cross-section.</p>
      </div>
    </section>
  );
}

export default function CrScrollJourney() {
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

  const wideOpacity = lerp([0, 0.22, 0.3], [1, 1, 0], progress);
  const wideScale = lerp([0, 0.28], [1, 1.6], progress);

  const crackOpacity = lerp([0.22, 0.3, 0.56, 0.64], [0, 1, 1, 0], progress);
  const crackDash = lerp([0.32, 0.45], [1, 0], progress);
  const highlightOpacity = lerp([0.45, 0.52, 0.58], [0, 1, 0], progress);

  const explodedOpacity = lerp([0.56, 0.64, 0.85, 0.9], [0, 1, 1, 0], progress);
  const layerGap = lerp([0.64, 0.73, 0.84], [0, 1, 0], progress);
  const layerGaps = [24, 24, 24, 24].map((step, i) => lerp([0, 1], [0, i * step], layerGap));

  const finishedOpacity = lerp([0.87, 0.95], [0, 1], progress);

  if (shouldReduceMotion) return <StaticFallback />;

  return (
    <section ref={containerRef} className="relative h-[280vh] bg-sand-100/50">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden border-b border-ink-900/10">
        <div className="container-edge pt-14">
          <p className="section-label !text-rust-700">Look closer</p>
          <h2 className="mt-4 max-w-xl font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
            From ceiling to structure, one layer at a time.
          </h2>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          {/* Scene A: wide ceiling, zooming in */}
          <div
            style={{ opacity: wideOpacity, transform: `scale(${wideScale})` }}
            className="absolute h-40 w-64 overflow-hidden rounded-sm border border-ink-900/10 sm:h-52 sm:w-80"
          >
            <svg viewBox="0 0 320 208" className="h-full w-full" aria-hidden="true">
              <rect x="0" y="0" width="320" height="208" fill="url(#ceiling-plaster)" filter="url(#ceiling-noise)" />
              <line x1="0" y1="70" x2="320" y2="70" stroke="#ded2ba" strokeWidth="1.2" />
              <line x1="0" y1="140" x2="320" y2="140" stroke="#ded2ba" strokeWidth="1.2" />
              <line x1="106" y1="0" x2="106" y2="208" stroke="#ded2ba" strokeWidth="1.2" />
              <line x1="213" y1="0" x2="213" y2="208" stroke="#ded2ba" strokeWidth="1.2" />
              <circle cx="240" cy="60" r="10" fill="#e4dcc7" stroke="#b4bac6" strokeWidth="1" />
            </svg>
          </div>

          {/* Scene B: close-up with crack drawing in + damage highlight */}
          <div style={{ opacity: crackOpacity }} className="absolute">
            <svg viewBox="0 0 240 160" className="h-56 w-auto sm:h-72" aria-hidden="true">
              <rect x="0" y="0" width="240" height="160" fill="url(#ceiling-plaster)" filter="url(#ceiling-noise)" />
              <rect
                x="70"
                y="40"
                width="100"
                height="80"
                fill="none"
                stroke="#c76a3f"
                strokeWidth="2"
                rx="6"
                style={{ opacity: highlightOpacity }}
              />
              <path
                d="M60 30 L92 58 L80 74 L112 96 L128 122"
                fill="none"
                stroke="#333a49"
                strokeWidth="1.8"
                strokeLinecap="round"
                pathLength={1}
                style={{ strokeDasharray: 1, strokeDashoffset: crackDash }}
              />
            </svg>
          </div>

          {/* Scene C: exploded cross-section, layers separate then return */}
          <div style={{ opacity: explodedOpacity }} className="absolute flex flex-col items-center">
            <svg viewBox="0 0 320 200" className="h-56 w-auto sm:h-72" aria-hidden="true">
              {ceilingLayers.map((layer, i) => (
                <g key={layer.id} style={{ transform: `translateY(${layerGaps[i]}px)` }}>
                  <rect
                    x="20"
                    y={16 + i * 30}
                    width="180"
                    height="22"
                    fill={i % 2 === 0 ? "url(#ceiling-plaster)" : "#ded2ba"}
                    stroke="#8e97a8"
                    strokeWidth="0.6"
                  />
                  <text x="210" y={16 + i * 30 + 15} fontSize="9.5" fill="#4a5468">
                    {layer.label}
                  </text>
                </g>
              ))}
            </svg>
            <p className="mt-2 text-xs text-ink-500">Illustrative ceiling cross-section — not every construction method.</p>
          </div>

          {/* Scene D: finished */}
          <div style={{ opacity: finishedOpacity }} className="absolute">
            <svg viewBox="0 0 240 160" className="h-56 w-auto sm:h-72" aria-hidden="true">
              <rect x="0" y="0" width="240" height="160" fill="url(#ceiling-plaster)" filter="url(#ceiling-noise)" />
            </svg>
            <p className="mt-4 text-center text-xs font-medium text-ink-700">Repaired finish.</p>
          </div>
        </div>

        <div className="container-edge flex items-center gap-2.5 pb-10">
          {frames.map((frame, i) => (
            <span
              key={frame.label}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i === frameIndex ? "bg-rust-600" : "bg-ink-900/10"
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
