"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";

const frames = [
  { at: 0, label: "A beautiful cabinet." },
  { at: 0.11, label: "The door opens." },
  { at: 0.24, label: "The hinge becomes visible." },
  { at: 0.37, label: "The drawer slides out." },
  { at: 0.5, label: "Alignment guides appear." },
  { at: 0.63, label: "A component shows damage." },
  { at: 0.75, label: "The repair area highlights." },
  { at: 0.87, label: "The cabinet returns to aligned condition." },
  { at: 0.95, label: "The kitchen returns to normal." },
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
    <section className="border-b border-walnut-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-walnut-700">The full story</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          From beautiful, to broken, to restored.
        </h2>
        <ol className="mt-8 space-y-4">
          {frames.map((frame, i) => (
            <li key={frame.label} className="flex gap-4">
              <span className="font-mono text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm text-ink-700">{frame.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function KcScrollTransformation() {
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

  const doorAngle = lerp([0, 0.11, 0.87, 0.95], [0, -62, -62, 0], progress);
  const hingeOpacity = lerp([0.18, 0.26, 0.85], [0.35, 1, 0.35], progress);
  const drawerZ = lerp([0.3, 0.4, 0.85], [0, 34, 0], progress);
  const guideOpacity = lerp([0.44, 0.52, 0.6, 0.85], [0, 1, 1, 0], progress);
  const damageOpacity = lerp([0.57, 0.65, 0.72], [0, 1, 1], progress);
  const repairOpacity = lerp([0.68, 0.76, 0.83], [0, 1, 0], progress);
  const damageFade = lerp([0.8, 0.87], [1, 0], progress);

  if (shouldReduceMotion) return <StaticFallback />;

  return (
    <section ref={containerRef} className="relative h-[320vh] bg-sand-100/50">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden border-b border-walnut-900/10">
        <div className="container-edge pt-14">
          <p className="section-label !text-walnut-700">The full story</p>
          <h2 className="mt-4 max-w-xl font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
            From beautiful, to broken, to restored.
          </h2>
        </div>

        <div className="relative flex flex-1 items-center justify-center" style={{ perspective: "1400px" }}>
          <svg
            viewBox="0 0 160 224"
            className="pointer-events-none absolute h-56 w-40 sm:h-72 sm:w-52"
            style={{ opacity: guideOpacity }}
            aria-hidden="true"
          >
            <line x1="0" y1="112" x2="160" y2="112" stroke="#8a6248" strokeWidth="1" strokeDasharray="3 4" />
            <line x1="80" y1="0" x2="80" y2="224" stroke="#8a6248" strokeWidth="1" strokeDasharray="3 4" />
          </svg>

          <div className="relative flex h-56 w-40 gap-2 sm:h-72 sm:w-52" style={{ transformStyle: "preserve-3d" }}>
            {/* door + hinge */}
            <div className="relative h-full flex-[1.3]">
              <div className="absolute inset-0 rounded-sm bg-ink-950/85" />
              <div
                className="absolute inset-0 rounded-sm border border-walnut-900/30 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #a67c5b, #6b4a35)",
                  transformOrigin: "left center",
                  transform: `rotateY(${doorAngle}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <span
                  className="absolute -left-1 top-1/4 h-6 w-3 rounded-sm border border-steel-900/40"
                  style={{ background: "#838d96", opacity: hingeOpacity }}
                />
                <span
                  className="absolute -left-1 bottom-1/4 h-6 w-3 rounded-sm border border-steel-900/40"
                  style={{ background: "#838d96", opacity: hingeOpacity }}
                />
                <span className="absolute right-2 top-1/2 h-10 w-1.5 -translate-y-1/2 rounded-full bg-steel-100" />

                {/* damage mark */}
                <span
                  className="absolute left-3 top-3 h-5 w-5 rounded-sm"
                  style={{
                    opacity: damageOpacity * damageFade,
                    background: "repeating-linear-gradient(135deg, #94472a, #94472a 2px, transparent 2px, transparent 5px)",
                  }}
                />
                {/* repair highlight ring */}
                <span
                  className="absolute left-2 top-2 h-7 w-7 rounded-full border-2 border-glass-500"
                  style={{ opacity: repairOpacity }}
                />
              </div>
            </div>

            {/* drawer */}
            <div className="relative h-full flex-1">
              <div className="absolute inset-0 rounded-sm bg-ink-950/85" />
              <div
                className="absolute inset-0 rounded-sm border border-walnut-900/25 shadow-md"
                style={{
                  background: "linear-gradient(135deg, #a67c5b, #6b4a35)",
                  transform: `translateZ(${drawerZ}px)`,
                }}
              >
                <span className="absolute left-1/2 top-1/2 h-1.5 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-steel-100" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-edge flex items-center gap-2 pb-10">
          {frames.map((frame, i) => (
            <span
              key={frame.label}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i === frameIndex ? "bg-walnut-600" : "bg-ink-900/10"
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
