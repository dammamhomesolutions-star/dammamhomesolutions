"use client";

import { useState } from "react";
import { rrCostFactors } from "@/lib/roof-replacement";
import RrCtas from "./RrCtas";

// No prices: this shows how scope drivers stack up, not what a roof costs.
export default function RrCost() {
  const [involved, setInvolved] = useState<Record<string, boolean>>({ removal: true, condition: true });
  const total = rrCostFactors.reduce((s, f) => s + f.weight, 0);
  const score = rrCostFactors.reduce((s, f) => s + (involved[f.key] ? f.weight : 0), 0);
  const pct = Math.round((score / total) * 100);
  const band = pct < 30 ? "More straightforward scope" : pct < 65 ? "Moderate scope" : "More involved scope";

  const preset = (all: boolean) =>
    setInvolved(Object.fromEntries(rrCostFactors.map((f) => [f.key, all])));

  return (
    <section id="cost" aria-labelledby="rr-cost" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-label !text-teal-700">Cost</p>
            <h2 id="rr-cost" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              What affects roof replacement cost in Dammam?
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-600 lg:col-span-5">
            Two roofs of the same size can need very different work. Switch
            each factor to see how the scope builds up. This doesn&rsquo;t
            calculate a price.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => preset(false)} className="focus-ring rounded-full border border-ink-900/15 px-4 py-2 text-sm text-ink-800 hover:border-ink-900/40">
                Small roof, simple access, limited removal
              </button>
              <button type="button" onClick={() => preset(true)} className="focus-ring rounded-full border border-ink-900/15 px-4 py-2 text-sm text-ink-800 hover:border-ink-900/40">
                Large roof, several layers, drainage changes
              </button>
            </div>
            <ul className="mt-6 divide-y divide-ink-900/10 border-y border-ink-900/10">
              {rrCostFactors.map((f) => {
                const on = !!involved[f.key];
                return (
                  <li key={f.key} className="flex items-center justify-between gap-4 py-3.5">
                    <div>
                      <p className="text-sm font-semibold text-ink-950">{f.label}</p>
                      <p className="mt-0.5 text-sm text-ink-600">{on ? f.involved : f.simple}</p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={on}
                      aria-label={`${f.label}: ${on ? "more involved" : "simpler"}`}
                      onClick={() => setInvolved((s) => ({ ...s, [f.key]: !s[f.key] }))}
                      className={`focus-ring relative h-7 w-12 flex-none rounded-full transition-colors ${on ? "bg-ink-950" : "bg-sand-300"}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute top-1 h-5 w-5 rounded-full bg-sand-50 shadow transition-transform ${on ? "translate-x-6" : "translate-x-1"}`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">Scope picture</p>
              {/* stacked roof layers grow with the scope */}
              <svg viewBox="0 0 300 150" className="mt-4 h-auto w-full" aria-hidden="true">
                <path d="M20 140h260" stroke="#4a5468" strokeWidth="2" />
                {rrCostFactors.map((f, i) => {
                  const on = !!involved[f.key];
                  return (
                    <rect
                      key={f.key}
                      x={30 + i * 31}
                      y={on ? 140 - (40 + f.weight * 22) : 140 - 18}
                      width="24"
                      height={on ? 40 + f.weight * 22 : 18}
                      rx="3"
                      fill={on ? "#4a9797" : "#333a49"}
                      style={{ transition: "all 400ms cubic-bezier(0.16,1,0.3,1)" }}
                    />
                  );
                })}
              </svg>
              <p className="mt-4 font-serif text-2xl" aria-live="polite">{band}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                Other drivers include labour, the materials chosen, required
                repairs and finishing.
              </p>
              <p className="mt-5 border-t border-sand-100/10 pt-5 text-sm leading-relaxed text-sand-100">
                An inspection and a defined scope are the best way to
                understand the actual project cost.
              </p>
              <RrCtas tone="dark" className="mt-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
