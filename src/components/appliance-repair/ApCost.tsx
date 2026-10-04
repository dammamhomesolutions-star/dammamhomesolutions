"use client";

import { useState } from "react";
import { apCostByAppliance, apCostFactors, type ApApplianceKey } from "@/lib/appliance-repair";
import ApCtas from "./ApCtas";
import ApIcon from "./ApIcon";

// What shapes the quote, per appliance. No prices are shown.
export default function ApCost() {
  const [tab, setTab] = useState<ApApplianceKey>("washer");
  const active = apCostByAppliance.find((x) => x.key === tab)!;

  return (
    <section id="cost" aria-labelledby="ap-cost" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-copper-700">Cost &amp; time</p>
          <h2 id="ap-cost" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">How much does appliance repair cost in Dammam?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            There&rsquo;s no honest flat price before the fault is known. A
            diagnosis comes first; you get a quote before any repair.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {apCostFactors.map((f) => (
              <li key={f} className="rounded-full bg-steel-100 px-3 py-1 text-xs text-ink-800">{f}</li>
            ))}
          </ul>

          <div className="mt-10">
            <p className="text-sm font-semibold text-ink-950" id="ap-cost-tabs">Parts that often shape the quote</p>
            <div className="mt-3 flex flex-wrap gap-2" role="group" aria-labelledby="ap-cost-tabs">
              {apCostByAppliance.map((x) => (
                <button
                  key={x.key}
                  type="button"
                  aria-pressed={tab === x.key}
                  onClick={() => setTab(x.key)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    tab === x.key ? "border-copper-800 bg-copper-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-copper-600"
                  }`}
                >
                  {x.title}
                </button>
              ))}
            </div>
            <ul key={tab} className="mt-5 grid animate-fadeIn gap-2 sm:grid-cols-2" aria-live="polite">
              {active.items.map((i) => (
                <li key={i} className="flex items-center gap-2.5 rounded-xl border border-ink-900/10 p-3 text-sm text-ink-800">
                  <ApIcon name="repair" className="h-4 w-4 flex-none text-copper-700" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28">
            <ApIcon name="quote" className="h-7 w-7 text-copper-300" />
            <h3 className="mt-3 text-base font-semibold">How long does appliance repair take?</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
              Some faults are fixed on the first visit. Others need a part
              ordered for that specific model, which depends on availability.
              We&rsquo;ll tell you after the diagnosis.
            </p>
            <h3 className="mt-6 text-base font-semibold">Workmanship warranty</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
              Our repair workmanship is covered by a warranty. The terms are set
              out in your quote.
            </p>
            <ApCtas tone="dark" className="mt-6" primaryLabel="Get a Repair Quote" />
          </div>
        </div>
      </div>
    </section>
  );
}
