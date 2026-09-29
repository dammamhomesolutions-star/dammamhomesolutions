"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";

const frames = [
  { at: 0, label: "Rain reaches the surface" },
  { at: 0.24, label: "It finds a way in" },
  { at: 0.52, label: "It moves between layers" },
  { at: 0.78, label: "It shows up in the room" },
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
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-teal-700">Rain to room</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          A stain rarely starts where it&rsquo;s seen.
        </h2>
        <p className="mt-4 text-ink-600">
          Water can travel between layers before becoming visible inside a
          room — which is why the rooftop is often worth checking first.
        </p>
      </div>
    </section>
  );
}

export default function RfRainToRoom() {
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

  const rainOpacity = lerp([0, 0.1, 0.22], [0, 1, 0.4], progress);
  const seepDepth = lerp([0.22, 0.5], [40, 140], progress);
  const seepOpacity = lerp([0.2, 0.3], [0, 1], progress);
  const travelOpacity = lerp([0.5, 0.58], [0, 1], progress);
  const travelX = lerp([0.5, 0.78], [140, 200], progress);
  const stainRadius = lerp([0.76, 0.96], [0, 26], progress);
  const stainOpacity = lerp([0.76, 0.86], [0, 0.8], progress);

  if (shouldReduceMotion) return <StaticFallback />;

  return (
    <section ref={containerRef} className="relative h-[320vh] bg-sand-50">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden border-b border-ink-900/10">
        <div className="container-edge pt-14">
          <p className="section-label !text-teal-700">Rain to room</p>
          <h2 className="mt-4 max-w-xl font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
            A stain rarely starts where it&rsquo;s seen.
          </h2>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <svg viewBox="0 0 300 320" className="h-[70vh] w-auto max-w-full" aria-hidden="true">
            <title>A vertical cross-section showing rain traveling from the rooftop surface down through layers into a room, appearing as a ceiling stain</title>
            {/* sky */}
            <rect x="0" y="0" width="300" height="40" fill="url(#rf-sky)" />

            {/* rain drops */}
            {Array.from({ length: 6 }).map((_, i) => (
              <line
                key={i}
                x1={80 + i * 8}
                y1="4"
                x2={78 + i * 8}
                y2="26"
                stroke="#2f7a7a"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ opacity: rainOpacity }}
              />
            ))}

            {/* roof surface + layers */}
            <rect x="0" y="40" width="300" height="14" fill="url(#rf-surface)" />
            <rect x="0" y="54" width="300" height="10" fill="#c4c0b4" />
            <rect x="0" y="64" width="300" height="10" fill="url(#rf-water)" />
            <rect x="0" y="74" width="300" height="16" fill="url(#rf-structure)" />

            {/* crack the water finds */}
            <path d="M100 40 L96 90" fill="none" stroke="#164848" strokeWidth="2" />

            {/* seep column between layers */}
            <rect x="94" y="40" width="6" height={seepDepth} fill="url(#rf-water)" style={{ opacity: seepOpacity }} />

            {/* travel toward the room, offset horizontally */}
            <path d={`M97 130 C 97 160, ${travelX} 190, ${travelX} 220`} fill="none" stroke="#2f7a7a" strokeWidth="3" strokeLinecap="round" style={{ opacity: travelOpacity }} />

            {/* void / ceiling void */}
            <rect x="0" y="90" width="300" height="110" fill="#eae7de" />

            {/* room interior */}
            <rect x="20" y="200" width="260" height="110" fill="#faf8f4" stroke="#c4c0b4" strokeWidth="2" />
            <line x1="20" y1="200" x2="280" y2="200" stroke="#9a968a" strokeWidth="2" />

            {/* ceiling stain */}
            <circle cx={travelX} cy="210" r={stainRadius} fill="#7a5a3f" style={{ opacity: stainOpacity }} />
          </svg>
        </div>

        <div className="container-edge flex items-center gap-2.5 pb-10">
          {frames.map((frame, i) => (
            <span
              key={frame.label}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i === frameIndex ? "bg-teal-600" : "bg-ink-900/10"
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
