"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";

const stages = [
  { at: 0, label: "Open" },
  { at: 0.3, label: "Move" },
  { at: 0.6, label: "Align" },
  { at: 0.85, label: "Close" },
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

function HeroCopy() {
  return (
    <div className="relative z-10">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-rust-700">
        <span className="inline-block h-1.5 w-1.5 bg-rust-600" aria-hidden="true" />
        Gate &amp; garage door repair
      </p>
      <h1 className="mt-5 max-w-xl font-serif text-4xl leading-[1.12] tracking-tight text-ink-950 sm:text-5xl">
        Movement should feel smooth.
      </h1>
      <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-600 sm:text-base">
        Problems with opening, closing, alignment, hinges, rollers, tracks,
        panels or hardware may need a closer look.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a
          href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a gate or garage door repair assessment. ")}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
        >
          Request a Repair Assessment
        </a>
        <a
          href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of a gate or garage door issue. ")}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring text-sm font-semibold text-ink-800 underline underline-offset-4 hover:text-rust-700"
        >
          Send Photos
        </a>
      </div>
    </div>
  );
}

function StaticFallback() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-16 sm:py-20">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <HeroCopy />
        <svg viewBox="0 0 400 260" className="h-auto w-full" aria-hidden="true">
          <rect x="0" y="0" width="400" height="260" fill="url(#gd-sky)" />
          <rect x="0" y="170" width="400" height="90" fill="#ebe4d6" />
          <rect x="30" y="60" width="180" height="130" fill="url(#gd-panel-dark)" />
          <rect x="30" y="60" width="180" height="30" fill="url(#gd-panel)" opacity="0.4" />
          <rect x="240" y="40" width="14" height="150" fill="#8e97a8" />
          <rect x="330" y="40" width="14" height="150" fill="#8e97a8" />
          <rect x="254" y="150" width="76" height="4" fill="#8e97a8" />
        </svg>
      </div>
    </section>
  );
}

export default function GdHero() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [stageIndex, setStageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgress(v);
    let idx = 0;
    for (let i = 0; i < stages.length; i++) if (v >= stages[i].at) idx = i;
    setStageIndex(idx);
  });

  // door height shrinks as it opens (0 -> 0.3), holds mid-travel with a subtle
  // alignment wobble (0.3 -> 0.6), then closes again (0.6 -> 1)
  const doorOpen = lerp([0, 0.28, 0.6, 0.9], [0, 1, 1, 0], progress);
  const doorHeight = 130 - doorOpen * 90;
  const alignWobble = lerp([0.32, 0.45, 0.58], [0, 3, 0], progress);
  const gateAngle = lerp([0.62, 0.85], [0, -42], progress);

  if (shouldReduceMotion) return <StaticFallback />;

  return (
    <section ref={containerRef} className="relative h-[320vh] border-b border-ink-900/10 bg-sand-50">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="container-edge grid flex-1 items-center gap-8 pt-24 lg:grid-cols-[0.85fr_1.15fr] lg:pt-16">
          <HeroCopy />

          <div className="relative mx-auto w-full max-w-xl" style={{ perspective: "1200px" }}>
            <svg viewBox="0 0 400 280" className="h-auto w-full" aria-hidden="true">
              <title>A driveway scene with a garage door and pedestrian gate, demonstrating opening and closing movement</title>
              <rect x="0" y="0" width="400" height="280" fill="url(#gd-sky)" />
              {/* driveway */}
              <rect x="0" y="190" width="400" height="90" fill="#ebe4d6" />
              <line x1="0" y1="192" x2="400" y2="192" stroke="#ded2ba" strokeWidth="1.5" />

              {/* garage opening + frame */}
              <rect x="20" y="40" width="200" height="150" fill="#232833" />
              <rect x="20" y="40" width="200" height="150" fill="none" stroke="#8e97a8" strokeWidth="4" />

              {/* garage door panel, sliding up to open */}
              <g style={{ transform: `translateY(${-doorOpen * 92}px) skewX(${alignWobble}deg)`, transformOrigin: "120px 190px" }}>
                <rect x="24" y={190 - doorHeight} width="192" height={doorHeight} fill="url(#gd-panel)" filter="url(#gd-noise)" />
                {Array.from({ length: 4 }).map((_, i) => (
                  <line
                    key={i}
                    x1="24"
                    y1={190 - doorHeight + (i + 1) * (doorHeight / 5)}
                    x2="216"
                    y2={190 - doorHeight + (i + 1) * (doorHeight / 5)}
                    stroke="#b4bac6"
                    strokeWidth="1.4"
                  />
                ))}
                <rect x="24" y={190 - doorHeight} width="192" height={doorHeight} fill="url(#gd-sheen)" opacity="0.35" style={{ mixBlendMode: "screen" }} />
              </g>

              {/* pedestrian gate, swinging on hinge */}
              <rect x="270" y="120" width="10" height="80" fill="#69748a" />
              <g style={{ transform: `rotate(${gateAngle}deg)`, transformOrigin: "275px 160px" }}>
                <rect x="275" y="130" width="80" height="60" fill="none" stroke="#4a5468" strokeWidth="4" />
                <line x1="275" y1="130" x2="355" y2="190" stroke="#4a5468" strokeWidth="2.5" />
                <line x1="355" y1="130" x2="275" y2="190" stroke="#4a5468" strokeWidth="2.5" />
              </g>

              {/* stage label */}
              <text x="20" y="270" fontSize="11" fill="#69748a" fontFamily="monospace" letterSpacing="1">
                {stages[stageIndex].label.toUpperCase()}
              </text>
            </svg>
          </div>
        </div>

        <div className="container-edge flex items-center gap-2.5 pb-8">
          {stages.map((stage) => (
            <span
              key={stage.label}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                stages[stageIndex].label === stage.label ? "bg-rust-600" : "bg-ink-900/10"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
