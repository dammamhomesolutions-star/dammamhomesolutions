"use client";

import { useState } from "react";
import { drCostFactors } from "@/lib/drain-unblocking";
import DrCtas from "./DrCtas";

// Scope picture only — no prices.
export default function DrCost() {
  const [on, setOn] = useState<Record<string, boolean>>({});
  const total = drCostFactors.reduce((s, f) => s + f.weight, 0);
  const score = drCostFactors.reduce((s, f) => s + (on[f.key] ? f.weight : 0), 0);
  const pct = Math.round((score / total) * 100);
  const band = pct === 0 ? "A simple local blockage" : pct < 35 ? "A standard callout" : pct < 65 ? "A larger drainage job" : "An extensive job";

  return (
    <section id="cost" aria-labelledby="dr-cost" className="border-b border-ink-900/10 bg-concrete-100/50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-teal-700">Cost &amp; time</p>
          <h2 id="dr-cost" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What affects drain unblocking &amp; sewer cleaning cost?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            An accurate quote may need us to understand the actual problem
            first. Tick what applies to see how the job grows.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {drCostFactors.map((f) => {
              const checked = !!on[f.key];
              return (
                <li key={f.key}>
                  <label
                    className={`flex h-full cursor-pointer items-center gap-3 rounded-2xl border p-4 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-600 ${
                      checked ? "border-teal-700 bg-teal-100" : "border-ink-900/10 bg-sand-50 hover:border-ink-900/30"
                    }`}
                  >
                    <input type="checkbox" checked={checked} onChange={() => setOn((s) => ({ ...s, [f.key]: !s[f.key] }))} className="h-4 w-4 accent-teal-700" />
                    <span className="font-medium text-ink-900">{f.label}</span>
                  </label>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-sm text-ink-600">Also: pipe size and layout, and whether the blockage keeps returning.</p>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">Scope picture</p>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-ink-800" aria-hidden="true">
              <div className="h-3 rounded-full bg-teal-300 transition-[width] duration-500" style={{ width: `${Math.max(8, pct)}%` }} />
            </div>
            <p className="mt-4 font-serif text-2xl" aria-live="polite">{band}</p>
            <h3 className="mt-6 text-base font-semibold">How long does drain unblocking take?</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
              It depends on the blockage severity and location, access, pipe
              layout, the method, and whether inspection or repair is needed.
              We won&rsquo;t promise a time before we know what we&rsquo;re
              dealing with.
            </p>
            <DrCtas tone="dark" className="mt-6" primaryLabel="Get a Drain Service Quote" />
          </div>
        </div>
      </div>
    </section>
  );
}
