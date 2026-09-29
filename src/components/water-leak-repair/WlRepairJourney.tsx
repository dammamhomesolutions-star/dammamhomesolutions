"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { wlRepairStages } from "@/lib/water-leak-repair";

const frames = [
  { at: 0, label: "Locate" },
  { at: 0.2, label: "Isolate" },
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
        <p className="section-label !text-copper-700">One continuous process</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Locate, isolate, repair, test, restore.
        </h2>
        <ol className="mt-8 space-y-4">
          {wlRepairStages.map((stage, i) => (
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

export default function WlRepairJourney() {
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

  const locateOpacity = lerp([0, 0.12, 0.2], [0, 1, 0], progress);
  const isolateDash = lerp([0.2, 0.42], [200, 0], progress);
  const repairGlow = lerp([0.44, 0.56, 0.66], [0, 1, 0], progress);
  const testCycle = lerp([0.68, 0.86], [0, 1], progress);
  const pressurePulse = (Math.sin(testCycle * Math.PI * 3) + 1) / 2;
  const restoreOpacity = lerp([0.86, 0.95], [0, 1], progress);

  if (shouldReduceMotion) return <StaticFallback />;

  return (
    <section ref={containerRef} className="relative h-[320vh] bg-sand-100/50">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden border-b border-ink-900/10">
        <div className="container-edge pt-14">
          <p className="section-label !text-copper-700">One continuous process</p>
          <h2 className="mt-4 max-w-xl font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
            Locate, isolate, repair, test, restore.
          </h2>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <svg viewBox="0 0 300 180" className="h-56 w-auto sm:h-72" aria-hidden="true">
            <rect x="10" y="10" width="280" height="160" fill="url(#wl-wall)" stroke="#c4c0b4" strokeWidth="1.5" />

            {/* locate: highlight ring on the noticed area */}
            <circle cx="90" cy="120" r="22" fill="none" stroke="#8f4f2f" strokeWidth="2" style={{ opacity: locateOpacity }} />

            {/* isolate: pipe route drawing in from source to the area */}
            <path
              d="M230 40 C 190 50, 150 90, 90 120"
              fill="none"
              stroke="url(#wl-pipe)"
              strokeWidth="4"
              strokeDasharray="200"
              strokeDashoffset={isolateDash}
            />

            {/* repair: glowing patch at the source */}
            <circle cx="230" cy="40" r="14" fill="#e0b28a" stroke="#8f4f2f" strokeWidth={repairGlow > 0.1 ? 2 : 0} style={{ opacity: repairGlow }} />

            {/* test: pressure pulse traveling along the pipe */}
            <circle
              cx={230 - pressurePulse * 140}
              cy={40 + pressurePulse * 80}
              r="4"
              fill="#4a9797"
              style={{ opacity: testCycle > 0 && testCycle < 1 ? 0.9 : 0 }}
            />

            {/* restore: clean wall overlay fading in */}
            <rect x="10" y="10" width="280" height="160" fill="url(#wl-wall)" style={{ opacity: restoreOpacity }} />
          </svg>
        </div>

        <div className="container-edge flex items-center gap-2.5 pb-10">
          {frames.map((frame, i) => (
            <span
              key={frame.label}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i === frameIndex ? "bg-copper-600" : "bg-ink-900/10"
              }`}
            />
          ))}
        </div>
        <p className="container-edge pb-6 text-sm text-ink-600" aria-live="polite">
          {frames[frameIndex].label} — {wlRepairStages[frameIndex]?.description}
        </p>
      </div>
    </section>
  );
}
