"use client";

import { useState } from "react";
import { dcChecklist } from "@/lib/deep-cleaning";
import DcCtas from "./DcCtas";

// A personal tick-list for the visitor's own handover. Nothing is saved.
export default function DcChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const total = dcChecklist.reduce((s, g) => s + g.items.length, 0);
  const count = Object.values(done).filter(Boolean).length;
  const pct = Math.round((count / total) * 100);

  return (
    <section id="checklist" aria-labelledby="dc-check" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="section-label !text-mint-700">Checklist</p>
          <h2 id="dc-check" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Move-out cleaning checklist</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Use it to check a property before handover. Typical checklist —
            the final scope should be confirmed before booking.
          </p>
          <div className="mt-8 rounded-2xl bg-mint-900 p-5 text-sand-50 lg:sticky lg:top-28">
            <div className="flex items-baseline justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint-300">Progress</p>
              <p className="font-serif text-2xl" aria-live="polite">
                {count}/{total}
              </p>
            </div>
            <div
              className="mt-3 h-2 overflow-hidden rounded-full bg-mint-800"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={count}
              aria-label="Checklist progress"
            >
              <div className="h-2 rounded-full bg-mint-300 transition-[width] duration-500" style={{ width: `${pct}%` }} />
            </div>
            <button
              type="button"
              onClick={() => setDone({})}
              className="focus-ring mt-4 rounded-sm text-xs font-semibold text-mint-300 underline underline-offset-4"
            >
              Clear ticks
            </button>
          </div>
        </div>

        <div className="space-y-3 lg:col-span-8">
          {dcChecklist.map((g, gi) => {
            const groupDone = g.items.filter((i) => done[`${g.group}:${i}`]).length;
            return (
              <details key={g.group} className="group rounded-2xl border border-ink-900/10 bg-sand-100/50" open={gi < 2}>
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-semibold text-ink-950">{g.group}</h3>
                  <span className="flex items-center gap-3 text-xs text-ink-500">
                    {groupDone}/{g.items.length}
                    <span aria-hidden="true" className="transition-transform group-open:rotate-90">›</span>
                  </span>
                </summary>
                <ul className="grid gap-2 px-5 pb-5 sm:grid-cols-2">
                  {g.items.map((item) => {
                    const id = `${g.group}:${item}`;
                    const checked = !!done[id];
                    return (
                      <li key={id}>
                        <label className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors ${checked ? "bg-mint-100 text-mint-900" : "bg-sand-50 text-ink-800"}`}>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => setDone((d) => ({ ...d, [id]: !d[id] }))}
                            className="h-4 w-4 accent-mint-700"
                          />
                          <span className={checked ? "line-through decoration-mint-600/60" : ""}>{item}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </details>
            );
          })}
          <DcCtas className="pt-4" />
        </div>
      </div>
    </section>
  );
}
