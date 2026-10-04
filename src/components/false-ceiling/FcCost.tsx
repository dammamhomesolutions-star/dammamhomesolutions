"use client";

import { useState } from "react";
import { fcCostFactors } from "@/lib/false-ceiling";
import FcCtas from "./FcCtas";

// Scope picture only — no prices.
export default function FcCost() {
  const [on, setOn] = useState<Record<string, boolean>>({});
  const total = fcCostFactors.reduce((s, f) => s + f.weight, 0);
  const score = fcCostFactors.reduce((s, f) => s + (on[f.key] ? f.weight : 0), 0);
  const pct = Math.round((score / total) * 100);
  const band = pct === 0 ? "A simple single-room ceiling" : pct < 35 ? "A standard installation" : pct < 65 ? "A larger job" : "A multi-room or complex project";

  return (
    <section id="cost" aria-labelledby="fc-cost" className="border-b border-ink-900/10 bg-glass-100/50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-glass-700">Cost</p>
          <h2 id="fc-cost" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What affects false ceiling installation cost?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Room size, ceiling type, design complexity and levels, material,
            framing, ceiling height, lighting and AC integration, access panels,
            the existing ceiling, removal, preparation, finishing and painting,
            access and commercial scale. Tick what applies to see how the job
            grows.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {fcCostFactors.map((f) => {
              const checked = !!on[f.key];
              return (
                <li key={f.key}>
                  <label
                    className={`flex h-full cursor-pointer items-center gap-3 rounded-2xl border p-4 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-600 ${
                      checked ? "border-glass-700 bg-glass-100" : "border-ink-900/10 bg-sand-50 hover:border-ink-900/30"
                    }`}
                  >
                    <input type="checkbox" checked={checked} onChange={() => setOn((s) => ({ ...s, [f.key]: !s[f.key] }))} className="h-4 w-4 accent-glass-700" />
                    <span className="font-medium text-ink-900">{f.label}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-glass-300">Scope picture</p>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-ink-800" aria-hidden="true">
              <div className="h-3 rounded-full bg-glass-300 transition-[width] duration-500" style={{ width: `${Math.max(8, pct)}%` }} />
            </div>
            <p className="mt-4 font-serif text-2xl" aria-live="polite">{band}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              Ceiling photos help us understand the job, but heights, services
              and the final design are confirmed at an on-site assessment.
            </p>
            <h3 className="mt-6 text-base font-semibold">Workmanship warranty</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
              Our installation workmanship is covered by a warranty; the terms
              are in your quote. Light fittings and
              materials carry their manufacturers&rsquo; terms.
            </p>
            <FcCtas tone="dark" className="mt-6" primaryLabel="Request a Quote" />
          </div>
        </div>
      </div>
    </section>
  );
}
