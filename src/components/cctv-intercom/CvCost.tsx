"use client";

import { useState } from "react";
import { cvCostFactors } from "@/lib/cctv-intercom";
import CvCtas from "./CvCtas";

// Scope picture only — no prices.
export default function CvCost() {
  const [on, setOn] = useState<Record<string, boolean>>({});
  const total = cvCostFactors.reduce((s, f) => s + f.weight, 0);
  const score = cvCostFactors.reduce((s, f) => s + (on[f.key] ? f.weight : 0), 0);
  const pct = Math.round((score / total) * 100);
  const band = pct === 0 ? "A small, simple setup" : pct < 35 ? "A standard installation" : pct < 65 ? "A larger system" : "A full property system";

  return (
    <section id="cost" aria-labelledby="cv-cost" className="border-b border-ink-900/10 bg-moss-100/50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-moss-700">Cost</p>
          <h2 id="cv-cost" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What affects CCTV &amp; intercom installation cost?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Number and type of cameras, lenses, indoor or outdoor, the recorder
            and storage, cable distances, PoE and network equipment, mounting,
            property size and access, the intercom type, door or gate
            integration, remote viewing and what&rsquo;s already there. Tick what
            applies to see how the job grows.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {cvCostFactors.map((f) => {
              const checked = !!on[f.key];
              return (
                <li key={f.key}>
                  <label
                    className={`flex h-full cursor-pointer items-center gap-3 rounded-2xl border p-4 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-moss-600 ${
                      checked ? "border-moss-700 bg-moss-200/60" : "border-ink-900/10 bg-sand-50 hover:border-ink-900/30"
                    }`}
                  >
                    <input type="checkbox" checked={checked} onChange={() => setOn((s) => ({ ...s, [f.key]: !s[f.key] }))} className="h-4 w-4 accent-moss-700" />
                    <span className="font-medium text-ink-900">{f.label}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-moss-200">Scope picture</p>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-ink-800" aria-hidden="true">
              <div className="h-3 rounded-full bg-moss-200 transition-[width] duration-500" style={{ width: `${Math.max(8, pct)}%` }} />
            </div>
            <p className="mt-4 font-serif text-2xl" aria-live="polite">{band}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              A proper property assessment is usually needed for an accurate
              system specification and quotation. We can supply the equipment to
              suit the plan.
            </p>
            <h3 className="mt-6 text-base font-semibold">Workmanship warranty</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
              Our installation workmanship is covered by a warranty; the terms
              are in your quote. Equipment is covered by its own manufacturer
              terms.
            </p>
            <CvCtas tone="dark" className="mt-6" primaryLabel="Request a Quote" />
          </div>
        </div>
      </div>
    </section>
  );
}
