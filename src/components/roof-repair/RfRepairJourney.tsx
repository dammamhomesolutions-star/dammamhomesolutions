"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { rfRepairStages } from "@/lib/roof-repair";

const frames = [
  { at: 0, label: "Observe" },
  { at: 0.2, label: "Assess" },
  { at: 0.44, label: "Repair" },
  { at: 0.68, label: "Test" },
  { at: 0.88, label: "Restore" },
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
        <p className="section-label !text-teal-700">One continuous process</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Observe, assess, repair, test, restore.
        </h2>
        <ol className="mt-8 space-y-4">
          {rfRepairStages.map((stage, i) => (
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

export default function RfRepairJourney() {
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

  const observeOpacity = lerp([0, 0.12, 0.2], [0, 1, 0], progress);
  const assessScan = lerp([0.2, 0.42], [0, 260], progress);
  const repairGlow = lerp([0.44, 0.56, 0.66], [0, 1, 0], progress);
  const testCycle = lerp([0.68, 0.86], [0, 1], progress);
  const waterTravel = (Math.sin(testCycle * Math.PI * 3) + 1) / 2;
  const restoreOpacity = lerp([0.86, 0.95], [0, 1], progress);

  if (shouldReduceMotion) return <StaticFallback />;

  return (
    <section ref={containerRef} className="relative h-[320vh] bg-sand-100/50">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden border-b border-ink-900/10">
        <div className="container-edge pt-14">
          <p className="section-label !text-teal-700">One continuous process</p>
          <h2 className="mt-4 max-w-xl font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
            Observe, assess, repair, test, restore.
          </h2>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <svg viewBox="0 0 300 180" className="h-56 w-auto sm:h-72" aria-hidden="true">
            <rect x="10" y="10" width="280" height="160" fill="url(#rf-surface)" />

            {/* observe: highlight ring on the affected area */}
            <circle cx="150" cy="90" r="24" fill="none" stroke="#1f5c5c" strokeWidth="2" style={{ opacity: observeOpacity }} />

            {/* assess: a scanning line moving across the surface */}
            <line x1={10 + assessScan} y1="10" x2={10 + assessScan} y2="170" stroke="#2f7a7a" strokeWidth="1.6" strokeDasharray="4 4" style={{ opacity: assessScan > 0 && assessScan < 260 ? 0.8 : 0 }} />

            {/* repair: glowing patch */}
            <rect x="126" y="66" width="48" height="48" fill="#8fc4c4" stroke="#1f5c5c" strokeWidth={repairGlow > 0.1 ? 2 : 0} style={{ opacity: repairGlow }} />

            {/* test: water flow cycling across, testing drainage */}
            <line x1="20" y1={30 + waterTravel * 120} x2="280" y2={30 + waterTravel * 120} stroke="#4a9797" strokeWidth="1.6" strokeDasharray="5 4" style={{ opacity: testCycle > 0 && testCycle < 1 ? 0.75 : 0 }} />

            {/* restore: clean surface overlay fading in */}
            <rect x="10" y="10" width="280" height="160" fill="url(#rf-surface)" style={{ opacity: restoreOpacity }} />
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
          {frames[frameIndex].label} — {rfRepairStages[frameIndex]?.description}
        </p>
      </div>
    </section>
  );
}
