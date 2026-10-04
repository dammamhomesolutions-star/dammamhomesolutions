"use client";

import { useState } from "react";
import { wlCostFactors } from "@/lib/wallpaper-installation";
import WlCtas from "./WlCtas";

// Scope picture only — no prices.
export default function WlCost() {
  const [on, setOn] = useState<Record<string, boolean>>({});
  const total = wlCostFactors.reduce((s, f) => s + f.weight, 0);
  const score = wlCostFactors.reduce((s, f) => s + (on[f.key] ? f.weight : 0), 0);
  const pct = Math.round((score / total) * 100);
  const band = pct === 0 ? "A single simple wall" : pct < 35 ? "A standard installation" : pct < 65 ? "A larger job" : "A multi-room or complex project";

  return (
    <section id="cost" aria-labelledby="wl-cost" className="border-b border-ink-900/10 bg-teal-100/50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-teal-700">Cost</p>
          <h2 id="wl-cost" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What affects wallpaper installation cost?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Wall area, the number of walls and rooms, wallpaper type and pattern
            complexity, mural panels, surface preparation and repairs, removing
            old wallpaper, corners, doors and windows, ceiling height, access,
            commercial quantities and finishing. Tick what applies to see how
            the job grows.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {wlCostFactors.map((f) => {
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
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">Scope picture</p>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-ink-800" aria-hidden="true">
              <div className="h-3 rounded-full bg-teal-300 transition-[width] duration-500" style={{ width: `${Math.max(8, pct)}%` }} />
            </div>
            <p className="mt-4 font-serif text-2xl" aria-live="polite">{band}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              Wall photos help us quote, but preparation needs and quantities are
              confirmed after an assessment — especially if we&rsquo;re supplying
              the wallpaper.
            </p>
            <h3 className="mt-6 text-base font-semibold">Workmanship warranty</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
              Our installation workmanship is covered by a warranty; the terms
              are in your quote. Products are covered by their manufacturer&rsquo;s
              terms.
            </p>
            <WlCtas tone="dark" className="mt-6" primaryLabel="Request a Quote" />
          </div>
        </div>
      </div>
    </section>
  );
}
