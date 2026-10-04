"use client";

import { useState } from "react";
import { dcCostFactors } from "@/lib/deep-cleaning";
import DcCtas from "./DcCtas";
import DcIcon from "./DcIcon";

// No prices: shows which details shape a quote and how the job grows.
export default function DcCost() {
  const [on, setOn] = useState<Record<string, boolean>>({});
  const total = dcCostFactors.reduce((s, f) => s + f.weight, 0);
  const score = dcCostFactors.reduce((s, f) => s + (on[f.key] ? f.weight : 0), 0);
  const pct = Math.round((score / total) * 100);
  const band = pct === 0 ? "Standard scope" : pct < 40 ? "A little more work" : pct < 70 ? "A larger job" : "An extensive job";

  return (
    <section id="cost" aria-labelledby="dc-cost" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-mint-700">Cost &amp; time</p>
          <h2 id="dc-cost" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What affects deep cleaning cost in Dammam?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            We don&rsquo;t publish fixed prices, because two properties of the
            same size can need very different amounts of work. Tick what
            applies to yours to see how the job grows.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {dcCostFactors.map((f) => {
              const checked = !!on[f.key];
              return (
                <li key={f.key}>
                  <label
                    className={`flex h-full cursor-pointer items-start gap-3 rounded-2xl border p-4 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-mint-600 ${
                      checked ? "border-mint-700 bg-mint-100" : "border-ink-900/10 bg-sand-50 hover:border-ink-900/30"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => setOn((s) => ({ ...s, [f.key]: !s[f.key] }))}
                      className="mt-0.5 h-4 w-4 accent-mint-700"
                    />
                    <span>
                      <span className="block font-semibold text-ink-950">{f.label}</span>
                      <span className="mt-0.5 block text-ink-600">{f.detail}</span>
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint-300">Your job, roughly</p>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-ink-800" aria-hidden="true">
              <div className="h-3 rounded-full bg-mint-300 transition-[width] duration-500" style={{ width: `${Math.max(8, pct)}%` }} />
            </div>
            <p className="mt-4 font-serif text-2xl" aria-live="polite">{band}</p>
            <h3 className="mt-6 text-base font-semibold text-sand-50">How long does a deep clean take?</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
              It depends on the same details — size, number of rooms,
              condition and buildup, furnished or empty, and the add-ons
              chosen. We&rsquo;ll give you a duration estimate with the quote
              rather than a fixed promise here.
            </p>
            <p className="mt-5 flex gap-2 border-t border-sand-100/10 pt-5 text-sm leading-relaxed text-sand-100">
              <DcIcon name="checklist" className="mt-0.5 h-4 w-4 flex-none text-mint-300" />
              Send us the property details and cleaning scope for a more accurate quote.
            </p>
            <DcCtas tone="dark" className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
