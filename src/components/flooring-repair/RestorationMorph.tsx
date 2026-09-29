"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";

const frames = [
  { at: 0, label: "Surface crack visible." },
  { at: 0.14, label: "The damage area highlights." },
  { at: 0.3, label: "The camera moves closer." },
  { at: 0.46, label: "The damaged area transitions." },
  { at: 0.62, label: "The surface becomes visually consistent." },
  { at: 0.78, label: "The camera pulls back." },
  { at: 0.92, label: "The full room returns." },
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
    <section className="border-b border-concrete-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-clay-700">Restoration</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Damaged floor, restored.
        </h2>
        <ol className="mt-8 space-y-4">
          {frames.map((frame, i) => (
            <li key={frame.label} className="flex gap-4">
              <span className="font-mono text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm text-ink-700">{frame.label}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-ink-500">
          Representative illustration — not a photo of a completed Dammam Home Solutions project.
        </p>
      </div>
    </section>
  );
}

export default function RestorationMorph() {
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

  const roomScale = lerp([0, 0.3, 0.78, 0.92], [1, 2.4, 2.4, 1], progress);
  const roomOpacity = lerp([0, 0.3, 0.36, 0.8, 0.92], [1, 1, 0, 0, 1], progress);

  const closeupOpacity = lerp([0.3, 0.38, 0.82, 0.9], [0, 1, 1, 0], progress);
  const highlightOpacity = lerp([0.1, 0.2, 0.42], [0, 1, 0], progress);
  const crackOpacity = lerp([0.46, 0.56, 0.6], [1, 0, 0], progress);
  const cleanOpacity = lerp([0.5, 0.6], [0, 1], progress);

  if (shouldReduceMotion) return <StaticFallback />;

  return (
    <section ref={containerRef} className="relative h-[320vh] bg-sand-100/50">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden border-b border-concrete-900/10">
        <div className="container-edge pt-14">
          <p className="section-label !text-clay-700">Restoration</p>
          <h2 className="mt-4 max-w-xl font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
            Damaged floor, restored.
          </h2>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          {/* Scene A: full room, zooming toward the crack */}
          <div
            className="absolute h-40 w-64 overflow-hidden rounded-sm border border-concrete-900/10 sm:h-52 sm:w-80"
            style={{ opacity: roomOpacity, transform: `scale(${roomScale})` }}
          >
            <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
              <rect x="0" y="0" width="320" height="55" fill="url(#fl-ivory)" />
              <rect x="0" y="55" width="320" height="145" fill="url(#fl-tile)" filter="url(#fl-stone-noise)" />
              {Array.from({ length: 6 }).map((_, i) => (
                <line key={i} x1={(i + 1) * 45} y1="55" x2={(i + 1) * 45} y2="200" stroke="#9a968a" strokeWidth="1" opacity="0.5" />
              ))}
              <path d="M150 100 L180 130 L170 145" fill="none" stroke="#464339" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
              <rect
                x="140"
                y="90"
                width="60"
                height="70"
                fill="none"
                stroke="#b3562f"
                strokeWidth="2"
                style={{ opacity: highlightOpacity }}
              />
            </svg>
          </div>

          {/* Scene B: close-up crack morphing into clean surface */}
          <div className="absolute" style={{ opacity: closeupOpacity }}>
            <svg viewBox="0 0 240 160" className="h-56 w-auto sm:h-72" aria-hidden="true">
              <rect x="0" y="0" width="240" height="160" fill="url(#fl-tile)" filter="url(#fl-stone-noise)" style={{ opacity: 1 - cleanOpacity }} />
              <rect x="0" y="0" width="240" height="160" fill="url(#fl-tile)" style={{ opacity: cleanOpacity }} />
              <line x1="0" y1="80" x2="240" y2="80" stroke="#9a968a" strokeWidth="1" opacity="0.5" />
              <line x1="120" y1="0" x2="120" y2="160" stroke="#9a968a" strokeWidth="1" opacity="0.5" />
              <path
                d="M60 50 L100 85 L88 100 L130 130"
                fill="none"
                stroke="#464339"
                strokeWidth="1.8"
                strokeLinecap="round"
                style={{ opacity: crackOpacity }}
              />
            </svg>
            <p className="mt-3 text-center text-xs text-ink-500">Illustrative restoration sequence.</p>
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
