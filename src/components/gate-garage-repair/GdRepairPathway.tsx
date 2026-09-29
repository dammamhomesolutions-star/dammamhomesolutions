"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { gdRepairStages } from "@/lib/gate-garage-repair";

const frames = [
  { at: 0, label: "Observe" },
  { at: 0.2, label: "Inspect" },
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
        <p className="section-label !text-rust-700">One continuous process</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Observe, inspect, repair, test, restore.
        </h2>
        <ol className="mt-8 space-y-4">
          {gdRepairStages.map((stage, i) => (
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

export default function GdRepairPathway() {
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

  const highlightOpacity = lerp([0, 0.12, 0.2], [0, 1, 0], progress);
  const explodeGap = lerp([0.2, 0.4], [0, 1], progress);
  const gaps = [0, 1, 2].map((i) => lerp([0, 1], [0, i * 18], explodeGap));
  const repairGlow = lerp([0.44, 0.56, 0.66], [0, 1, 0], progress);
  const testCycle = lerp([0.68, 0.86], [0, 1], progress);
  const doorTravel = (Math.sin(testCycle * Math.PI * 3) + 1) / 2;
  const restoreOpacity = lerp([0.86, 0.95], [0, 1], progress);
  const sceneScale = lerp([0.86, 1], [1.3, 1], progress);

  if (shouldReduceMotion) return <StaticFallback />;

  return (
    <section ref={containerRef} className="relative h-[320vh] bg-sand-100/50">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden border-b border-ink-900/10">
        <div className="container-edge pt-14">
          <p className="section-label !text-rust-700">One continuous process</p>
          <h2 className="mt-4 max-w-xl font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
            Observe, inspect, repair, test, restore.
          </h2>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <div style={{ transform: `scale(${sceneScale})`, transition: "transform 60ms linear" }}>
            <svg viewBox="0 0 240 200" className="h-56 w-auto sm:h-72" aria-hidden="true">
              <rect x="30" y="20" width="180" height="150" fill="none" stroke="#8e97a8" strokeWidth="3" />

              {/* three components, separate during inspect, glow during repair */}
              {[0, 1, 2].map((i) => (
                <rect
                  key={i}
                  x="46"
                  y={36 + i * 40 - gaps[i]}
                  width="148"
                  height="32"
                  fill="url(#gd-panel)"
                  filter="url(#gd-noise)"
                  stroke={repairGlow > 0.1 && i === 1 ? "#94472a" : "#ded2ba"}
                  strokeWidth={repairGlow > 0.1 && i === 1 ? 2.4 : 1}
                />
              ))}

              {/* observe highlight ring */}
              <circle cx="120" cy="76" r="20" fill="none" stroke="#c76a3f" strokeWidth="2" style={{ opacity: highlightOpacity }} />

              {/* test cycle door travel indicator */}
              <line x1="46" y1={170 - doorTravel * 130} x2="194" y2={170 - doorTravel * 130} stroke="#4a5468" strokeWidth="1.4" strokeDasharray="4 4" style={{ opacity: testCycle > 0 && testCycle < 1 ? 0.7 : 0 }} />

              {/* restore: clean overlay fading in */}
              <rect x="30" y="20" width="180" height="150" fill="#faf8f4" style={{ opacity: restoreOpacity }} />
              <rect x="46" y="36" width="148" height="118" fill="url(#gd-panel)" style={{ opacity: restoreOpacity }} />
            </svg>
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
          {frames[frameIndex].label} — {gdRepairStages[frameIndex]?.description}
        </p>
      </div>
    </section>
  );
}
