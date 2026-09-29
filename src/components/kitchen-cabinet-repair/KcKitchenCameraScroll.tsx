"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";

const frames = [
  { at: 0, label: "A normal kitchen." },
  { at: 0.14, label: "A cabinet problem becomes visible." },
  { at: 0.3, label: "The camera moves closer." },
  { at: 0.44, label: "The cabinet opens." },
  { at: 0.56, label: "The components become visible." },
  { at: 0.68, label: "The affected component highlights." },
  { at: 0.82, label: "The cabinet visually restores." },
  { at: 0.94, label: "The camera returns to the full kitchen." },
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
    <section className="border-b border-walnut-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-steel-300">One continuous story</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
          From the whole kitchen to one component.
        </h2>
        <ol className="mt-8 space-y-4">
          {frames.map((frame, i) => (
            <li key={frame.label} className="flex gap-4">
              <span className="font-mono text-xs text-steel-500">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm text-steel-300">{frame.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function KcKitchenCameraScroll() {
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

  const wideScale = lerp([0, 0.3, 0.82, 0.94], [1, 2.4, 2.4, 1], progress);
  const wideOpacity = lerp([0, 0.3, 0.38, 0.86, 0.94], [1, 1, 0, 0, 1], progress);
  const problemDotOpacity = lerp([0.1, 0.18, 0.28], [0, 1, 1], progress);

  const closeupOpacity = lerp([0.3, 0.4, 0.84, 0.92], [0, 1, 1, 0], progress);
  const doorAngle = lerp([0.4, 0.48, 0.78, 0.86], [0, -58, -58, 0], progress);
  const componentsOpacity = lerp([0.5, 0.58, 0.78], [0, 1, 0], progress);
  const highlightOpacity = lerp([0.62, 0.7, 0.78], [0, 1, 0], progress);

  if (shouldReduceMotion) return <StaticFallback />;

  return (
    <section ref={containerRef} className="relative h-[340vh] bg-ink-950">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden border-b border-walnut-900/10 text-sand-50">
        <div className="container-edge pt-14">
          <p className="section-label !text-steel-300">One continuous story</p>
          <h2 className="mt-4 max-w-xl font-serif text-2xl tracking-tight text-sand-50 sm:text-3xl">
            From the whole kitchen to one component.
          </h2>
        </div>

        <div className="relative flex flex-1 items-center justify-center overflow-hidden">
          {/* wide kitchen scene */}
          <div
            className="absolute h-40 w-64 overflow-hidden rounded-sm border border-steel-500/20 sm:h-52 sm:w-80"
            style={{ opacity: wideOpacity, transform: `scale(${wideScale})` }}
          >
            <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
              <rect x="0" y="0" width="320" height="200" fill="url(#kc-ivory)" />
              <line x1="0" y1="120" x2="320" y2="120" stroke="#b7bfc6" strokeWidth="2" />
              <rect x="20" y="20" width="80" height="56" fill="url(#kc-walnut)" filter="url(#kc-wood-grain)" />
              <rect x="120" y="20" width="80" height="56" fill="url(#kc-walnut)" filter="url(#kc-wood-grain)" />
              <rect x="220" y="20" width="80" height="56" fill="url(#kc-walnut)" filter="url(#kc-wood-grain)" />
              <rect x="20" y="128" width="90" height="60" fill="url(#kc-walnut-dark)" />
              <rect x="120" y="128" width="80" height="60" fill="url(#kc-walnut)" filter="url(#kc-wood-grain)" />
              <rect x="210" y="128" width="90" height="60" fill="url(#kc-walnut-dark)" />
              <circle cx="160" cy="158" r="6" fill="#94472a" style={{ opacity: problemDotOpacity }} />
            </svg>
          </div>

          {/* close-up cabinet, opens */}
          <div className="absolute flex flex-col items-center" style={{ opacity: closeupOpacity }}>
            <div className="relative h-48 w-64" style={{ perspective: "900px" }}>
              <div className="absolute inset-y-0 left-0 w-36 rounded-sm bg-ink-900" />
              <div
                className="absolute inset-y-0 left-0 w-36 rounded-sm border border-walnut-900/30 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #a67c5b, #6b4a35)",
                  transformOrigin: "left center",
                  transform: `rotateY(${doorAngle}deg)`,
                }}
              >
                <span className="absolute right-2 top-1/2 h-10 w-1.5 -translate-y-1/2 rounded-full bg-steel-100" />
              </div>

              {/* interior components, revealed as door opens */}
              <div className="absolute inset-y-2 left-2 flex w-32 flex-col gap-1.5" style={{ opacity: componentsOpacity }}>
                <div className="flex-1 rounded-sm border border-dashed border-steel-300/50" />
                <div className="flex-1 rounded-sm border border-dashed border-steel-300/50" />
              </div>

              {/* problem highlight ring */}
              <span
                className="absolute left-6 top-6 h-10 w-10 rounded-full border-2 border-glass-500"
                style={{ opacity: highlightOpacity }}
              />

              {/* adjacent drawer */}
              <div className="absolute inset-y-4 right-2 w-20 rounded-sm border border-walnut-900/25" style={{ background: "linear-gradient(135deg, #8a6248, #513825)" }}>
                <span className="absolute left-1/2 top-1/2 h-1.5 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-steel-100" />
              </div>
            </div>
            <p className="mt-3 text-xs text-steel-400">Illustrative cabinet cross-section.</p>
          </div>
        </div>

        <div className="container-edge flex items-center gap-2 pb-10">
          {frames.map((frame, i) => (
            <span
              key={frame.label}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i === frameIndex ? "bg-walnut-500" : "bg-sand-50/10"
              }`}
            />
          ))}
        </div>
        <p className="container-edge pb-6 text-sm text-steel-300" aria-live="polite">
          {frames[frameIndex].label}
        </p>
      </div>
    </section>
  );
}
