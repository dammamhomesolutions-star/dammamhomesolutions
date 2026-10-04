"use client";

import { useState } from "react";
import { aiCostFactors, aiCostParts } from "@/lib/ac-installation";
import AiCtas from "./AiCtas";

type Pick = Partial<Record<(typeof aiCostParts)[number]["key"], string>>;

// AC TYPE + UNITS + COMPLEXITY + MATERIALS + ACCESS = PROJECT QUOTE.
// No prices — it summarises what the quote will be based on.
export default function AiCost() {
  const [p, setP] = useState<Pick>({});
  const complete = aiCostParts.every((x) => p[x.key]);

  return (
    <section id="cost" aria-labelledby="ai-cost" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-label !text-teal-700">Cost &amp; time</p>
            <h2 id="ai-cost" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What affects AC installation cost in Dammam?</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-600 lg:col-span-5">
            We don&rsquo;t publish fixed prices — the same unit can be a quick
            swap in one home and a full new route in another. Build your
            project below.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-3 xl:grid-cols-[repeat(5,minmax(0,1fr)_auto)_minmax(0,1.2fr)]">
          {aiCostParts.map((part, i) => (
            <div key={part.key} className="contents">
              <fieldset className="rounded-2xl border border-ink-900/10 bg-sand-100/50 p-4">
                <legend className="px-1 font-mono text-[11px] tracking-[0.16em] text-teal-700">{part.label.toUpperCase()}</legend>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {part.options.map((o) => {
                    const on = p[part.key] === o;
                    return (
                      <label
                        key={o}
                        className={`cursor-pointer rounded-full border px-2.5 py-1 text-xs transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-600 ${
                          on ? "border-teal-800 bg-teal-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-teal-600"
                        }`}
                      >
                        <input type="radio" name={`ai-cost-${part.key}`} value={o} checked={on} onChange={() => setP((s) => ({ ...s, [part.key]: o }))} className="sr-only" />
                        {o}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
              <span className="self-center text-center font-serif text-2xl text-teal-700" aria-hidden="true">
                {i < aiCostParts.length - 1 ? "+" : "="}
              </span>
            </div>
          ))}
          <div className="rounded-2xl bg-ink-950 p-4 text-sand-50" aria-live="polite">
            <p className="font-mono text-[11px] tracking-[0.16em] text-teal-300">PROJECT QUOTE</p>
            {complete ? (
              <p className="mt-2 text-sm leading-relaxed">
                {p.units} × {p.type} — {p.complexity!.toLowerCase()}, {p.materials!.toLowerCase()}, {p.access!.toLowerCase()} access. Send photos and we&rsquo;ll quote.
              </p>
            ) : (
              <p className="mt-2 text-sm text-ink-300">Choose one option in each box.</p>
            )}
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Everything that can affect the quote</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {aiCostFactors.map((f) => (
                <li key={f} className="rounded-full bg-teal-100 px-3 py-1 text-xs text-teal-900">{f}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-sand-100/50 p-6 lg:col-span-5">
            <h2 className="font-serif text-2xl tracking-tight text-ink-950">How long does AC installation take?</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              It depends on the number of units, the AC type, existing
              infrastructure, piping, electrical work, drainage, access, wall
              preparation and overall complexity. We give a time estimate with
              the quote rather than a fixed promise here.
            </p>
          </div>
        </div>
        <AiCtas className="mt-10" />
      </div>
    </section>
  );
}
