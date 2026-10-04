"use client";

import { useState } from "react";
import { cbClearance, cbObstructions } from "@/lib/curtain-blind";
import CbIcon from "./CbIcon";

export default function CbObstruction() {
  const [on, setOn] = useState<string[]>(["Window handle"]);
  const toggle = (l: string) => setOn((s) => (s.includes(l) ? s.filter((x) => x !== l) : [...s, l]));
  const picked = cbObstructions.filter((o) => on.includes(o.label));

  return (
    <section id="clearance" aria-label="Clearance and obstructions" className="border-b border-ink-900/10 bg-clay-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-clay-700">Clearance</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">The finished look depends on more than the curtain</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              There&rsquo;s no single right curtain length — it depends on the
              room, the window and what&rsquo;s around it:
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {cbClearance.map((c) => <li key={c} className="rounded-full bg-sand-50 px-3 py-1 text-sm text-ink-800 ring-1 ring-ink-900/10">{c}</li>)}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-8">
              <h3 className="font-serif text-2xl text-ink-950">What&rsquo;s near your window?</h3>
              <p className="mt-1 text-sm text-ink-600">Tick everything that applies.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cbObstructions.map((o) => {
                  const sel = on.includes(o.label);
                  return (
                    <label
                      key={o.label}
                      className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-clay-600 ${
                        sel ? "border-clay-900 bg-clay-900 text-sand-50" : "border-ink-900/15 text-ink-800 hover:border-clay-600"
                      }`}
                    >
                      <input type="checkbox" checked={sel} onChange={() => toggle(o.label)} className="sr-only" />
                      {sel ? "✓ " : ""}{o.label}
                    </label>
                  );
                })}
              </div>
              <ul className="mt-6 space-y-2" aria-live="polite">
                {picked.length ? (
                  picked.map((o) => (
                    <li key={o.label} className="flex animate-fadeIn gap-3 rounded-xl bg-clay-100/60 p-3.5 text-sm text-ink-800">
                      <CbIcon name="alert" className="mt-0.5 h-4 w-4 flex-none text-clay-700" />
                      <span><span className="font-semibold text-ink-950">{o.label}:</span> {o.note}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-ink-600">Nothing selected — a clear window makes installation simpler.</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
