"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { wtCleaningStages } from "@/lib/water-tank-cleaning";

const frames = [
  { at: 0, label: "Inspect" },
  { at: 0.22, label: "Drain" },
  { at: 0.46, label: "Scrub" },
  { at: 0.7, label: "Disinfect" },
  { at: 0.88, label: "Rinse & refill" },
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
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-mint-700">One continuous process</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Inspect, drain, scrub, disinfect, rinse &amp; refill.
        </h2>
        <ol className="mt-8 space-y-4">
          {wtCleaningStages.map((stage, i) => (
            <li key={stage.id} className="flex gap-4">
              <span className="font-mono text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="text-sm font-semibold text-ink-900">{stage.label}</p>
                <p className="text-sm text-ink-600">{stage.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function WtCleaningJourney() {
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

  const inspectOpacity = lerp([0, 0.1, 0.2], [0, 1, 0], progress);
  const drainLevel = lerp([0.22, 0.42], [192, 30], progress);
  const scrubOpacity = lerp([0.46, 0.56, 0.66], [0, 1, 0.4], progress);
  const disinfectOpacity = lerp([0.7, 0.82], [0, 1], progress);
  const refillLevel = lerp([0.86, 0.98], [30, 192], progress);

  const waterLevel = progress < 0.42 ? 192 : progress > 0.86 ? refillLevel : drainLevel;

  if (shouldReduceMotion) return <StaticFallback />;

  return (
    <section ref={containerRef} className="relative h-[320vh] bg-sand-100/50">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden border-b border-ink-900/10">
        <div className="container-edge pt-14">
          <p className="section-label !text-mint-700">One continuous process</p>
          <h2 className="mt-4 max-w-xl font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
            Inspect, drain, scrub, disinfect, rinse &amp; refill.
          </h2>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <svg viewBox="0 0 200 240" className="h-56 w-auto sm:h-72" aria-hidden="true">
            <rect x="30" y="20" width="140" height="200" rx="10" fill="none" stroke="#78746a" strokeWidth="3" />
            <rect x="34" y={216 - waterLevel} width="132" height={waterLevel} fill="url(#wt-clean-water)" />

            <circle cx="100" cy="120" r="28" fill="none" stroke="#1f5b53" strokeWidth="2" style={{ opacity: inspectOpacity }} />

            <rect x="34" y="180" width="132" height="36" fill="url(#wt-sediment)" style={{ opacity: scrubOpacity }} />

            <rect x="34" y="24" width="132" height="192" fill="#48a08f" style={{ opacity: disinfectOpacity * 0.25 }} />
          </svg>
        </div>

        <div className="container-edge flex items-center gap-2.5 pb-10">
          {frames.map((frame, i) => (
            <span
              key={frame.label}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i === frameIndex ? "bg-mint-600" : "bg-ink-900/10"
              }`}
            />
          ))}
        </div>
        <p className="container-edge pb-6 text-sm text-ink-600" aria-live="polite">
          {frames[frameIndex].label} — {wtCleaningStages[frameIndex]?.description}
        </p>
      </div>
    </section>
  );
}
