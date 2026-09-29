"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";

interface Defect {
  id: string;
  x: number;
  y: number;
  appearAt: number;
  repairAt: number;
}

const defects: Defect[] = [
  { id: "crack", x: 25, y: 60, appearAt: 0.08, repairAt: 0.62 },
  { id: "chip", x: 62, y: 40, appearAt: 0.18, repairAt: 0.7 },
  { id: "stain", x: 45, y: 72, appearAt: 0.28, repairAt: 0.78 },
  { id: "edge", x: 80, y: 65, appearAt: 0.36, repairAt: 0.86 },
  { id: "worn", x: 15, y: 78, appearAt: 0.44, repairAt: 0.94 },
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
    <section className="border-b border-concrete-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-clay-700">Small, but visible</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Small damage, large visual impact.
        </h2>
        <p className="mt-4 text-ink-600">
          A few small imperfections can change how a whole room reads — and
          addressing them one at a time restores a clean, consistent surface.
        </p>
      </div>
    </section>
  );
}

export default function FlSmallDamageScene() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", setProgress);

  if (shouldReduceMotion) return <StaticFallback />;

  const caption =
    progress < 0.5
      ? "One small imperfection becomes visible. Then another."
      : "One repair at a time, the room returns to a clean visual state.";

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-sand-50">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden border-b border-concrete-900/10">
        <div className="container-edge pt-14">
          <p className="section-label !text-clay-700">Small, but visible</p>
          <h2 className="mt-4 max-w-xl font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
            Small damage, large visual impact.
          </h2>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <div className="relative aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-md border border-concrete-900/10">
            <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
              <rect x="0" y="0" width="320" height="200" fill="url(#fl-ivory)" />
              <rect x="0" y="70" width="320" height="130" fill="url(#fl-tile)" filter="url(#fl-stone-noise)" />
              {Array.from({ length: 7 }).map((_, i) => (
                <line key={i} x1={(i + 1) * 40} y1="70" x2={(i + 1) * 40} y2="200" stroke="#9a968a" strokeWidth="1" opacity="0.5" />
              ))}
            </svg>

            {defects.map((d) => {
              const opacity =
                progress < 0.5
                  ? lerp([d.appearAt, d.appearAt + 0.06], [0, 1], progress)
                  : lerp([d.repairAt, d.repairAt + 0.06], [1, 0], progress);
              return (
                <div
                  key={d.id}
                  className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    left: `${d.x}%`,
                    top: `${d.y}%`,
                    opacity,
                    background: "radial-gradient(circle, rgba(70,67,57,0.55), transparent 70%)",
                  }}
                />
              );
            })}
          </div>
        </div>

        <p className="container-edge pb-10 text-sm text-ink-600" aria-live="polite">
          {caption}
        </p>
      </div>
    </section>
  );
}
