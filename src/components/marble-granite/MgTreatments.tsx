"use client";

import { useState } from "react";
import { mgTreatments } from "@/lib/marble-granite";
import MgIcon from "./MgIcon";

const path = [
  { problem: "Dirt & residue", treat: "Cleaning" },
  { problem: "Scratches & wear", treat: "Honing" },
  { problem: "Dull but smooth", treat: "Polishing" },
  { problem: "Deep damage & lippage", treat: "Restoration" },
  { problem: "Porous & spill-prone", treat: "Sealing" },
];

export default function MgTreatments() {
  const [pick, setPick] = useState("polish");
  const t = mgTreatments.find((x) => x.key === pick)!;

  return (
    <section id="treatments" aria-labelledby="mg-treat" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-concrete-300">Treatments</p>
          <h2 id="mg-treat" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">What does your stone actually need?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            Cleaning → Honing → Polishing → Restoration → Sealing. They&rsquo;re
            different treatments for different problems — and many jobs need
            more than one.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-5" role="group" aria-label="Treatment">
          {mgTreatments.map((x, i) => (
            <button
              key={x.key}
              type="button"
              aria-pressed={pick === x.key}
              onClick={() => setPick(x.key)}
              className={`focus-ring flex flex-col items-start gap-3 rounded-2xl border p-4 text-left transition-colors ${
                pick === x.key ? "border-concrete-300 bg-concrete-300 text-ink-950" : "border-sand-100/15 text-sand-100 hover:border-sand-100/40"
              } ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <MgIcon name={x.icon} className="h-7 w-7" />
              <span className="font-mono text-xs opacity-70">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-semibold">{x.label}</span>
            </button>
          ))}
        </div>
        <div key={pick} className="mt-6 grid animate-fadeIn gap-6 rounded-2xl bg-ink-900 p-6 sm:p-8 lg:grid-cols-2" aria-live="polite">
          <div>
            <h3 className="font-serif text-2xl">{t.label}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-300">{t.body}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-concrete-300">Used for</p>
            <ul className="mt-2 space-y-1.5">
              {t.for.map((f) => <li key={f} className="flex gap-2 text-sm text-sand-100"><MgIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-concrete-300" />{f}</li>)}
            </ul>
          </div>
        </div>

        <h3 className="mt-12 font-serif text-2xl">Problem → treatment</h3>
        <ol className="mt-5 grid gap-2 sm:grid-cols-5">
          {path.map((p) => (
            <li key={p.problem} className="rounded-xl border border-sand-100/10 p-4 text-sm">
              <p className="text-ink-300">{p.problem}</p>
              <p className="mt-2 flex items-center gap-1.5 font-semibold text-sand-50"><MgIcon name="arrow" className="h-4 w-4 text-concrete-300" />{p.treat}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
