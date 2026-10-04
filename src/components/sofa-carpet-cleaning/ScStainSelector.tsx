"use client";

import { useState } from "react";
import { scStains } from "@/lib/sofa-carpet-cleaning";
import ScCtas from "./ScCtas";

// Each stain gets a small colour swatch; labels carry the meaning, not colour.
const swatch: Record<string, string> = {
  coffee: "#6b4a35",
  tea: "#a67c5b",
  food: "#c17f3e",
  grease: "#9c7752",
  mud: "#78746a",
  juice: "#b3562f",
  ink: "#26333f",
  pet: "#b8916c",
  unknown: "#9a968a",
  discolour: "#d9bfa0",
};

export default function ScStainSelector() {
  const [key, setKey] = useState("coffee");
  const s = scStains.find((x) => x.key === key)!;

  return (
    <section id="stains" aria-labelledby="sc-stains" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-label !text-glass-300">Stain problem solver</p>
            <h2 id="sc-stains" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">What kind of stain are you dealing with?</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-300 lg:col-span-5">
            Results depend on the material, stain type, age and previous
            cleaning. This explains what&rsquo;s usually involved — not a
            promise that it will come out.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div role="radiogroup" aria-label="Stain type" className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:col-span-5 lg:grid-cols-2">
            {scStains.map((x) => {
              const on = x.key === key;
              return (
                <button
                  key={x.key}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setKey(x.key)}
                  className={`focus-ring flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition-colors ${
                    on ? "border-glass-300 bg-glass-300 text-ink-950" : "border-sand-100/15 bg-ink-900 text-sand-100 hover:border-glass-300/60"
                  }`}
                >
                  <svg viewBox="0 0 20 20" className="h-5 w-5 flex-none" aria-hidden="true">
                    <path d="M6 5c2-3 7-3 9 0s2 6-1 9-8 3-9 0 0-6 1-9z" fill={swatch[x.key]} stroke={on ? "#14181f" : "#f4f0e8"} strokeWidth="0.8" />
                  </svg>
                  {x.label}
                </button>
              );
            })}
          </div>

          <div key={s.key} className="animate-fadeIn rounded-2xl bg-sand-50 p-6 text-ink-900 sm:p-8 lg:col-span-7" aria-live="polite">
            <h3 className="font-serif text-2xl">{s.label}</h3>
            <dl className="mt-5 grid gap-5 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-glass-700">What it may require</dt>
                <dd className="mt-1 leading-relaxed text-ink-700">{s.requires}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-glass-700">What can make it harder</dt>
                <dd className="mt-1 leading-relaxed text-ink-700">{s.harder}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-glass-700">What the technician inspects</dt>
                <dd className="mt-1 leading-relaxed text-ink-700">{s.inspect}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-glass-700">Why sooner helps</dt>
                <dd className="mt-1 leading-relaxed text-ink-700">{s.why}</dd>
              </div>
            </dl>
            <ScCtas className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
