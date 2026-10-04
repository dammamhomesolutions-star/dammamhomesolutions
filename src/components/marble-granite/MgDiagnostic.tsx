"use client";

import { useState } from "react";
import { mgSymptoms, mgTreatOrder, mgTreatResult } from "@/lib/marble-granite";
import MgCtas from "./MgCtas";
import MgIcon from "./MgIcon";

// Picks the most involved treatment among the chosen symptoms. Guidance only.
export default function MgDiagnostic() {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (l: string) => setPicked((s) => (s.includes(l) ? s.filter((x) => x !== l) : [...s, l]));
  const treats = mgSymptoms.filter((s) => picked.includes(s.label)).map((s) => s.treat);
  const top = mgTreatOrder.find((t) => treats.includes(t));
  const others = mgTreatOrder.filter((t) => t !== top && treats.includes(t));

  return (
    <section id="diagnose" aria-labelledby="mg-diag" className="border-b border-ink-900/10 bg-concrete-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-concrete-700">Stone check</p>
          <h2 id="mg-diag" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What does your stone need?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Tick everything you&rsquo;re seeing.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="flex flex-wrap content-start gap-2 lg:col-span-7">
            {mgSymptoms.map((s) => {
              const on = picked.includes(s.label);
              return (
                <label key={s.label} className={`cursor-pointer rounded-full border px-3.5 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-concrete-600 ${on ? "border-concrete-900 bg-concrete-900 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-concrete-600"}`}>
                  <input type="checkbox" checked={on} onChange={() => toggle(s.label)} className="sr-only" />
                  {on ? "✓ " : ""}{s.label}
                </label>
              );
            })}
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28" aria-live="polite">
              {top ? (
                <div key={picked.join()} className="animate-fadeIn">
                  <MgIcon name={top === "repair" ? "crack" : top === "stain" ? "drop" : "search"} className="h-7 w-7 text-concrete-300" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-concrete-300">Possible next step</p>
                  <p className="mt-1 font-serif text-2xl">{mgTreatResult[top].title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{mgTreatResult[top].body}</p>
                  {others.length > 0 && (
                    <p className="mt-3 text-sm text-ink-300">Also worth checking: {others.map((o) => mgTreatResult[o].title.toLowerCase()).join("; ")}.</p>
                  )}
                  <MgCtas tone="dark" className="mt-6" primaryLabel="Send Photos for Assessment" />
                </div>
              ) : (
                <p className="text-sm text-ink-300">Select what you see to get a suggested next step.</p>
              )}
              <p className="mt-6 border-t border-sand-100/10 pt-4 text-xs text-ink-400">
                Final treatment depends on the stone type, surface condition,
                previous treatments and an on-site assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
