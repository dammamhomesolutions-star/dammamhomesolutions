"use client";

import { useState } from "react";
import { spWaterStates } from "@/lib/swimming-pool";

// Four stylised water swatches; each explains what the appearance can point to.
export default function SpWater() {
  const [key, setKey] = useState("cloudy");
  const s = spWaterStates.find((x) => x.key === key)!;

  return (
    <section id="water-clarity" aria-labelledby="sp-water" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-700">Water clarity</p>
          <h2 id="sp-water" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">What does the water look like?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            We test and balance the water as part of maintenance — and check
            filtration and circulation rather than just adding more chemicals.
            Please don&rsquo;t mix pool chemicals yourself.
          </p>
          <div key={key} className="mt-6 animate-fadeIn rounded-2xl bg-ink-950 p-5 text-sand-50" aria-live="polite">
            <p className="font-serif text-2xl">{s.label}</p>
            <p className="mt-1 text-sm text-ink-300">{s.body}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:col-span-7" role="group" aria-label="Water appearance">
          {spWaterStates.map((w) => (
            <button
              key={w.key}
              type="button"
              aria-pressed={key === w.key}
              onClick={() => setKey(w.key)}
              className={`focus-ring group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] text-left transition-all ${key === w.key ? "ring-4 ring-ink-950" : "ring-1 ring-ink-900/10 hover:-translate-y-0.5"}`}
              style={{ background: `linear-gradient(160deg, ${w.color}, #164848)` }}
            >
              <svg viewBox="0 0 200 150" preserveAspectRatio="none" className="sp-caustic absolute inset-0 h-full w-full" aria-hidden="true">
                <path d="M0 50c25-16 50-16 75 0s50 16 75 0 35-12 50 0M0 100c25-16 50-16 75 0s50 16 75 0 35-12 50 0" stroke="#ffffff" strokeWidth="2" fill="none" opacity={w.key === "clear" ? 0.45 : 0.15} />
              </svg>
              {w.key === "cloudy" && <span aria-hidden="true" className="absolute inset-0 bg-white/35 backdrop-blur-[2px]" />}
              <span className="absolute bottom-3 left-3 rounded-full bg-ink-950/75 px-3 py-1 text-sm font-semibold text-sand-50">{key === w.key ? "✓ " : ""}{w.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
