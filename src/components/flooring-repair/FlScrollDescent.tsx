"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { flLayers } from "@/lib/flooring-repair";

const frames = [
  { at: 0, label: "The full room." },
  { at: 0.14, label: "The camera moves toward the floor." },
  { at: 0.28, label: "The floor fills the view." },
  { at: 0.42, label: "The camera moves closer." },
  { at: 0.55, label: "Individual surface texture becomes visible." },
  { at: 0.68, label: "One damaged area becomes the focus." },
  { at: 0.82, label: "The surface opens into a cross-section." },
];

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
    <section className="border-b border-concrete-900/10 bg-concrete-100/40 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-clay-700">From the room to the surface</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          The floor is more than what you&rsquo;re standing on.
        </h2>
        <ol className="mt-8 space-y-4">
          {frames.map((frame, i) => (
            <li key={frame.label} className="flex gap-4">
              <span className="font-mono text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm text-ink-700">{frame.label}</span>
            </li>
          ))}
        </ol>
        <ol className="mt-6 space-y-1.5 border-t border-concrete-900/10 pt-4">
          {flLayers.map((layer) => (
            <li key={layer.id} className="text-sm text-ink-600">
              {layer.label}
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-ink-500">Illustrative surface cross-section.</p>
      </div>
    </section>
  );
}

const fills = ["url(#fl-tile)", "url(#fl-tile-dark)", "#c4c0b4", "#78746a"];

export default function FlScrollDescent() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgress(v);
    let idx = 0;
    for (let i = 0; i < frames.length; i++) if (v >= frames[i].at) idx = i;
    setFrameIndex(idx);
  });

  const roomOpacity = lerp([0, 0.24, 0.32], [1, 1, 0], progress);
  const roomScale = lerp([0, 0.28], [1, 1.9], progress);

  const closeupOpacity = lerp([0.28, 0.36, 0.6, 0.68], [0, 1, 1, 0], progress);
  const closeupScale = lerp([0.36, 0.55], [1, 1.5], progress);
  const damageOpacity = lerp([0.5, 0.58, 0.66], [0, 1, 1], progress);

  const crossSectionOpacity = lerp([0.66, 0.74, 1], [0, 1, 1], progress);
  const layerGap = lerp([0.74, 0.9], [0, 1], progress);
  const layerGaps = flLayers.map((_, i) => lerp([0, 1], [0, i * 26], layerGap));

  if (shouldReduceMotion) return <StaticFallback />;

  return (
    <section ref={containerRef} className="relative h-[320vh] bg-concrete-100/40">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden border-b border-concrete-900/10">
        <div className="container-edge pt-14">
          <p className="section-label !text-clay-700">From the room to the surface</p>
          <h2 className="mt-4 max-w-xl font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
            The floor is more than what you&rsquo;re standing on.
          </h2>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          {/* Scene A: full room, zooming toward floor */}
          <div
            className="absolute h-40 w-64 overflow-hidden rounded-sm border border-concrete-900/10 sm:h-52 sm:w-80"
            style={{ opacity: roomOpacity, transform: `scale(${roomScale})` }}
          >
            <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
              <rect x="0" y="0" width="320" height="60" fill="url(#fl-ivory)" />
              <rect x="0" y="60" width="320" height="140" fill="url(#fl-tile)" filter="url(#fl-stone-noise)" />
              {Array.from({ length: 5 }).map((_, i) => (
                <line key={i} x1={(i + 1) * 53} y1="60" x2={(i + 1) * 53} y2="200" stroke="#9a968a" strokeWidth="1" opacity="0.5" />
              ))}
              <rect x="40" y="20" width="30" height="40" fill="#c4c0b4" opacity="0.6" />
            </svg>
          </div>

          {/* Scene B: close-up texture with damage focus */}
          <div className="absolute" style={{ opacity: closeupOpacity, transform: `scale(${closeupScale})` }}>
            <svg viewBox="0 0 240 160" className="h-56 w-auto sm:h-72" aria-hidden="true">
              <rect x="0" y="0" width="240" height="160" fill="url(#fl-tile)" filter="url(#fl-stone-noise)" />
              <line x1="0" y1="80" x2="240" y2="80" stroke="#9a968a" strokeWidth="1" opacity="0.5" />
              <line x1="120" y1="0" x2="120" y2="160" stroke="#9a968a" strokeWidth="1" opacity="0.5" />
              <path
                d="M70 60 L110 90 L95 105 L140 130"
                fill="none"
                stroke="#464339"
                strokeWidth="1.8"
                strokeLinecap="round"
                style={{ opacity: damageOpacity }}
              />
            </svg>
          </div>

          {/* Scene C: cross-section layers */}
          <div className="absolute flex flex-col items-center" style={{ opacity: crossSectionOpacity }}>
            <svg viewBox="0 0 320 200" className="h-56 w-auto sm:h-72" aria-hidden="true">
              {flLayers.map((layer, i) => (
                <g key={layer.id} style={{ transform: `translateY(${layerGaps[i]}px)` }}>
                  <rect x="20" y={16 + i * 30} width="180" height="22" fill={fills[i]} stroke="#78746a" strokeWidth="0.6" />
                  <text x="210" y={16 + i * 30 + 15} fontSize="9.5" fill="#5c584f">
                    {layer.label}
                  </text>
                </g>
              ))}
            </svg>
            <p className="mt-2 text-xs text-ink-500">Illustrative surface cross-section — not every flooring system.</p>
          </div>
        </div>

        <div className="container-edge flex items-center gap-2.5 pb-10">
          {frames.map((frame, i) => (
            <span
              key={frame.label}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i === frameIndex ? "bg-clay-600" : "bg-ink-900/10"
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
