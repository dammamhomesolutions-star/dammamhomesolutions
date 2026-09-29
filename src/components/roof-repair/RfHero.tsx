"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";

const stages = [
  { at: 0, label: "Look above" },
  { at: 0.28, label: "Trace the path" },
  { at: 0.58, label: "Find the change" },
  { at: 0.82, label: "Restore the surface" },
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
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
        <span className="inline-block h-1.5 w-1.5 bg-teal-600" aria-hidden="true" />
        Roof &amp; rooftop repair
      </p>
      <h1 className="mt-5 max-w-xl font-serif text-4xl leading-[1.12] tracking-tight text-ink-950 sm:text-5xl">
        Most roof problems start where you can&rsquo;t see them.
      </h1>
      <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-600 sm:text-base">
        A stain on a ceiling, water that collects, a surface that looks
        different than usual — the rooftop is often where the story begins.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a
          href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a roof assessment. ")}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
        >
          Request a Roof Assessment
        </a>
        <a
          href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of a rooftop issue. ")}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring text-sm font-semibold text-ink-800 underline underline-offset-4 hover:text-teal-700"
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
        <svg viewBox="0 0 400 280" className="h-auto w-full" aria-hidden="true">
          <rect x="0" y="0" width="400" height="280" fill="url(#rf-sky)" />
          <rect x="60" y="60" width="280" height="180" fill="#ebe4d6" />
          <rect x="60" y="60" width="280" height="18" fill="url(#rf-surface)" />
          <rect x="60" y="40" width="280" height="20" fill="none" stroke="#5c584f" strokeWidth="3" />
          <rect x="310" y="78" width="10" height="150" fill="#4a5468" />
        </svg>
      </div>
    </section>
  );
}

export default function RfHero() {
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

  // "camera" rises from street level (0) toward the rooftop, then pushes in
  const cameraY = lerp([0, 0.26], [58, 0], progress);
  const cameraScale = lerp([0.28, 0.58], [1, 1.55], progress);
  const pathDash = lerp([0.28, 0.55], [260, 0], progress);
  const spotlightOpacity = lerp([0.56, 0.64, 0.76], [0, 1, 1], progress);
  const restoreWipe = lerp([0.78, 0.94], [0, 1], progress);

  if (shouldReduceMotion) return <StaticFallback />;

  return (
    <section ref={containerRef} className="relative h-[340vh] border-b border-ink-900/10 bg-sand-50">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="container-edge grid flex-1 items-center gap-8 pt-24 lg:grid-cols-[0.85fr_1.15fr] lg:pt-16">
          <HeroCopy />

          <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-sm">
            <svg viewBox="0 0 400 300" className="h-auto w-full" aria-hidden="true">
              <title>A building elevation with the camera rising toward the rooftop to trace a water path and find a change</title>
              <rect x="0" y="0" width="400" height="300" fill="url(#rf-sky)" />

              <g style={{ transform: `translateY(${cameraY}px) scale(${cameraScale})`, transformOrigin: "200px 150px", transition: "transform 40ms linear" }}>
                {/* building facade */}
                <rect x="60" y="150" width="280" height="120" fill="#ebe4d6" />
                <rect x="90" y="180" width="40" height="50" fill="url(#rf-sky)" opacity="0.7" />
                <rect x="270" y="180" width="40" height="50" fill="url(#rf-sky)" opacity="0.7" />

                {/* parapet + roof surface */}
                <rect x="60" y="120" width="280" height="30" fill="none" stroke="#5c584f" strokeWidth="3" />
                <rect x="64" y="132" width="272" height="16" fill="url(#rf-surface)" />

                {/* rooftop structure (small utility box) */}
                <rect x="120" y="104" width="34" height="18" fill="#9a968a" />

                {/* downspout on the right */}
                <rect x="316" y="150" width="8" height="90" fill="#4a5468" />

                {/* traced water path: surface -> parapet drain -> downspout */}
                <path
                  d="M150 136 C 210 128, 270 148, 300 148 C 312 148, 316 148, 320 152"
                  fill="none"
                  stroke="url(#rf-water-flow)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="260"
                  strokeDashoffset={pathDash}
                />

                {/* the change: a stain / crack on the surface, spotlighted */}
                <circle cx="150" cy="136" r="26" fill="url(#rf-stain)" style={{ opacity: spotlightOpacity }} />
                <circle cx="150" cy="136" r="30" fill="none" stroke="#2f7a7a" strokeWidth="1.4" style={{ opacity: spotlightOpacity * 0.8 }} />

                {/* restored surface wipe */}
                <rect x="64" y="132" width="272" height="16" fill="url(#rf-surface)" style={{ opacity: restoreWipe }} />
              </g>

              <text x="20" y="285" fontSize="11" fill="#78746a" fontFamily="monospace" letterSpacing="1">
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
                stages[stageIndex].label === stage.label ? "bg-teal-600" : "bg-ink-900/10"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
