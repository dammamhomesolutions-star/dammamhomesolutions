"use client";

import { useState } from "react";
import { scBeforeAfter, scLimits } from "@/lib/sofa-carpet-cleaning";
import ScIcon from "./ScIcon";

// Conceptual close-up of carpet pile through four stages of cleaning.
function Pile({ stage }: { stage: number }) {
  const soil = [0.85, 0.55, 0.2, 0.08][stage];
  const fibre = stage === 3 ? "#5b7d8f" : stage === 2 ? "#6f8c9b" : "#8a8a80";
  return (
    <svg viewBox="0 0 520 220" className="h-auto w-full" aria-hidden="true">
      <rect x="0" y="0" width="520" height="220" fill="#f4f0e8" />
      <rect x="0" y="180" width="520" height="40" fill="#9a968a" />
      <g stroke={fibre} strokeWidth="5" strokeLinecap="round" fill="none" style={{ transition: "stroke 500ms" }}>
        {Array.from({ length: 30 }).map((_, i) => {
          const x = 12 + i * 17;
          const h = stage === 3 ? 120 : 108 + (i % 3) * 4;
          return <path key={x} d={`M${x} 180c-3-30 3-60 ${i % 2 ? 2 : -2}-${h}`} />;
        })}
      </g>
      <g fill="#6b5a44" style={{ opacity: soil, transition: "opacity 500ms" }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <circle key={i} cx={10 + ((i * 53) % 500)} cy={80 + ((i * 37) % 95)} r={2.5 + (i % 3)} />
        ))}
      </g>
      {stage === 1 && (
        <g fill="#b8ccd4" opacity="0.7">
          {Array.from({ length: 18 }).map((_, i) => (
            <circle key={i} cx={20 + ((i * 61) % 480)} cy={70 + ((i * 29) % 90)} r="6" />
          ))}
        </g>
      )}
      {stage === 2 && <path className="fs-flow" d="M20 40h480" stroke="#5b7d8f" strokeWidth="3" />}
      <g fontFamily="ui-monospace, monospace" fontSize="11" letterSpacing="1.6">
        <rect x="14" y="12" width="190" height="24" rx="12" fill="#14181f" opacity="0.88" />
        <text x="28" y="28" fill="#f4f0e8">{scBeforeAfter[stage].label.toUpperCase()}</text>
      </g>
    </svg>
  );
}

export default function ScBeforeAfter() {
  const [stage, setStage] = useState(0);
  return (
    <section aria-label="What cleaning changes, and what it can't" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-glass-700">The difference</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">See the difference professional cleaning can make</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-ink-900/10">
            <Pile stage={stage} />
          </div>
          <p className="mt-3 min-h-[2.5rem] text-sm text-ink-700" aria-live="polite">{scBeforeAfter[stage].caption}</p>
          <label htmlFor="sc-ba-range" className="sr-only">Cleaning stage</label>
          <input
            id="sc-ba-range"
            type="range"
            min={0}
            max={scBeforeAfter.length - 1}
            value={stage}
            onChange={(e) => setStage(Number(e.target.value))}
            aria-valuetext={scBeforeAfter[stage].label}
            className="focus-ring mt-2 w-full cursor-pointer accent-glass-700"
          />
          <div className="mt-1 flex justify-between text-[10px] uppercase tracking-[0.1em] text-ink-500 sm:text-[11px]" aria-hidden="true">
            {scBeforeAfter.map((s) => (
              <span key={s.label}>{s.label}</span>
            ))}
          </div>
          <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-ink-400">Illustrative cleaning process</p>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <ScIcon name="alert" className="h-7 w-7 text-ember-500" />
            <h2 className="mt-4 font-serif text-3xl tracking-tight">Not every stain can be fully removed</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              We&rsquo;d rather tell you before we start. Results can depend on:
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {scLimits.map((l) => (
                <li key={l} className="flex gap-2">
                  <span className="mt-2 h-1 w-3 flex-none bg-ember-500" aria-hidden="true" />
                  {l}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-ink-300">
              Sun fading, bleach spots and worn fibres are changes to the
              material itself, not dirt, so cleaning can&rsquo;t reverse them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
