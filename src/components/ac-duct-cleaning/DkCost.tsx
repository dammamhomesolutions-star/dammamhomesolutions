"use client";

import { useState } from "react";
import { dkCostFactors } from "@/lib/ac-duct-cleaning";
import DkCtas from "./DkCtas";

// Scope builder — no prices.
export default function DkCost() {
  const [on, setOn] = useState<Record<string, boolean>>({});
  const total = dkCostFactors.reduce((s, f) => s + f.weight, 0);
  const score = dkCostFactors.reduce((s, f) => s + (on[f.key] ? f.weight : 0), 0);
  const pct = Math.round((score / total) * 100);
  const band = pct === 0 ? "A small, simple system" : pct < 35 ? "A typical residential job" : pct < 65 ? "A larger job" : "An extensive scope";

  return (
    <section id="cost" aria-labelledby="dk-cost" className="border-b border-ink-900/10 bg-steel-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-copper-700">Cost &amp; time</p>
          <h2 id="dk-cost" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What affects AC duct cleaning cost?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            We don&rsquo;t publish fixed prices — two properties of the same size
            can have very different duct systems. Tick what applies to yours.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {dkCostFactors.map((f) => {
              const checked = !!on[f.key];
              return (
                <li key={f.key}>
                  <label
                    className={`flex h-full cursor-pointer items-center gap-3 rounded-2xl border p-4 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-copper-500 ${
                      checked ? "border-copper-700 bg-copper-100" : "border-ink-900/10 bg-sand-50 hover:border-ink-900/30"
                    }`}
                  >
                    <input type="checkbox" checked={checked} onChange={() => setOn((s) => ({ ...s, [f.key]: !s[f.key] }))} className="h-4 w-4 accent-copper-700" />
                    <span className="font-medium text-ink-900">{f.label}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper-300">Scope picture</p>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-ink-800" aria-hidden="true">
              <div className="h-3 rounded-full bg-copper-300 transition-[width] duration-500" style={{ width: `${Math.max(8, pct)}%` }} />
            </div>
            <p className="mt-4 font-serif text-2xl" aria-live="polite">{band}</p>
            <h3 className="mt-6 text-base font-semibold">How long does duct cleaning take?</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
              It depends on the same things — system size, number of ducts,
              layout, access, how dirty it is, and the number of technicians.
              We&rsquo;ll estimate it with the quote rather than promise a
              number here.
            </p>
            <p className="mt-5 border-t border-sand-100/10 pt-5 text-sm text-sand-100">
              Send us your property details for a more accurate quotation.
            </p>
            <DkCtas tone="dark" className="mt-5" primaryLabel="Get a Duct Cleaning Quote" />
          </div>
        </div>
      </div>
    </section>
  );
}
