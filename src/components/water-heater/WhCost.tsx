"use client";

import { useState } from "react";
import { whCostFactors } from "@/lib/water-heater";
import WhCtas from "./WhCtas";

// Scope picture only — no prices.
export default function WhCost() {
  const [on, setOn] = useState<Record<string, boolean>>({});
  const total = whCostFactors.reduce((s, f) => s + f.weight, 0);
  const score = whCostFactors.reduce((s, f) => s + (on[f.key] ? f.weight : 0), 0);
  const pct = Math.round((score / total) * 100);
  const band = pct === 0 ? "A simple repair or like-for-like swap" : pct < 35 ? "A standard job" : pct < 65 ? "A larger job" : "An extensive installation";

  return (
    <section id="cost" aria-labelledby="wh-cost" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-rust-700">Cost</p>
          <h2 id="wh-cost" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What affects water heater repair &amp; installation cost?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            A technician may need to see the heater before giving an accurate
            repair or installation quote. Tick what applies to see how the job
            grows.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {whCostFactors.map((f) => {
              const checked = !!on[f.key];
              return (
                <li key={f.key}>
                  <label
                    className={`flex h-full cursor-pointer items-center gap-3 rounded-2xl border p-4 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-rust-600 ${
                      checked ? "border-rust-700 bg-ember-100" : "border-ink-900/10 bg-sand-50 hover:border-ink-900/30"
                    }`}
                  >
                    <input type="checkbox" checked={checked} onChange={() => setOn((s) => ({ ...s, [f.key]: !s[f.key] }))} className="h-4 w-4 accent-rust-700" />
                    <span className="font-medium text-ink-900">{f.label}</span>
                  </label>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-sm text-ink-600">Also: the specific repair part, heater capacity, number of units and property type.</p>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember-500">Scope picture</p>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-ink-800" aria-hidden="true">
              <div className="h-3 rounded-full bg-gradient-to-r from-glass-500 to-rust-600 transition-[width] duration-500" style={{ width: `${Math.max(8, pct)}%` }} />
            </div>
            <p className="mt-4 font-serif text-2xl" aria-live="polite">{band}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              Workmanship is covered by our warranty — the terms are set out in
              your quote. Heaters we supply may also carry the manufacturer&rsquo;s
              warranty.
            </p>
            <WhCtas tone="dark" className="mt-6" primaryLabel="Get a Quote" secondaryLabel="WhatsApp Photos" />
          </div>
        </div>
      </div>
    </section>
  );
}
