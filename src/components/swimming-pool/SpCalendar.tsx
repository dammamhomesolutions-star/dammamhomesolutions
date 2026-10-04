"use client";

import { useState } from "react";
import { spCalendar } from "@/lib/swimming-pool";
import SpIcon from "./SpIcon";

// Tabbed pool-care calendar. All panels are rendered (inactive ones hidden) so
// the full guide is in the HTML.
export default function SpCalendar() {
  const [tab, setTab] = useState(spCalendar[0].key);

  return (
    <section id="care-calendar" aria-labelledby="sp-cal" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-700">Pool care calendar</p>
          <h2 id="sp-cal" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">What a pool needs, and when</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">A typical rhythm — your maintenance contract sets the actual visits to suit your pool and how it&rsquo;s used.</p>
        </div>
        <div className="mt-10 rounded-[2rem] bg-teal-100/60 p-3 sm:p-4">
          <div role="tablist" aria-label="Care schedule" className="flex gap-1 overflow-x-auto rounded-[1.5rem] bg-sand-50 p-1.5">
            {spCalendar.map((c) => (
              <button
                key={c.key}
                id={`sp-tab-${c.key}`}
                role="tab"
                type="button"
                aria-selected={tab === c.key}
                aria-controls={`sp-panel-${c.key}`}
                onClick={() => setTab(c.key)}
                className={`focus-ring flex-none rounded-[1.1rem] px-4 py-2.5 text-sm font-semibold transition-colors ${tab === c.key ? "bg-ink-950 text-sand-50" : "text-ink-700 hover:bg-teal-100"}`}
              >
                {c.label}
              </button>
            ))}
          </div>
          {spCalendar.map((c) => (
            <div key={c.key} id={`sp-panel-${c.key}`} role="tabpanel" aria-labelledby={`sp-tab-${c.key}`} hidden={tab !== c.key} className="animate-fadeIn p-4 sm:p-6">
              <h3 className="sr-only">{c.label}</h3>
              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {c.items.map((i) => (
                  <li key={i} className="flex items-center gap-3 rounded-2xl bg-sand-50 p-4 text-sm text-ink-800 ring-1 ring-ink-900/5">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-teal-800 text-sand-50"><SpIcon name="calendar" className="h-4 w-4" /></span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
