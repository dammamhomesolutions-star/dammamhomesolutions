"use client";

import { useState } from "react";
import { rnPriorityMatrix } from "@/lib/renovation";
import { Eyebrow } from "./RnUi";

// Priority → renovation focus. All rows stay visible; the chosen one expands.
export default function RnPriority() {
  const [open, setOpen] = useState(rnPriorityMatrix[0].key);

  return (
    <section aria-labelledby="rn-priority" className="bg-walnut-900 py-20 text-sand-50 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow n="07" dark>Priority matrix</Eyebrow>
          <h2 id="rn-priority" className="mt-5 font-serif text-4xl font-light tracking-tight sm:text-5xl">What matters most decides where the work goes.</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-walnut-100/80">
            Two people can renovate the same room in different ways. Your priority
            shapes which elements get attention first.
          </p>
        </div>

        <div className="border-t border-sand-50/15 lg:col-span-8">
          <div className="hidden grid-cols-[12rem_1fr] gap-6 border-b border-sand-50/15 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-clay-300 sm:grid">
            <span>Priority</span>
            <span>Renovation focus</span>
          </div>
          {rnPriorityMatrix.map((p) => {
            const on = open === p.key;
            return (
              <div key={p.key} className="border-b border-sand-50/15">
                <h3>
                  <button
                    type="button"
                    aria-expanded={on}
                    aria-controls={`rn-pri-${p.key.replace(/\s/g, "-")}`}
                    onClick={() => setOpen(p.key)}
                    className="focus-ring grid w-full gap-1 py-5 text-left sm:grid-cols-[12rem_1fr] sm:gap-6"
                  >
                    <span className={`font-serif text-2xl ${on ? "text-ember-500" : "text-sand-50"}`}>{p.key}</span>
                    <span className="self-center text-sm text-walnut-100/80">{p.focus}</span>
                  </button>
                </h3>
                <div id={`rn-pri-${p.key.replace(/\s/g, "-")}`} hidden={!on} className="pb-6 sm:pl-[13.5rem]">
                  <p className="max-w-xl text-sm leading-relaxed text-sand-100">{p.detail}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.items.map((it) => <li key={it} className="border border-clay-300/40 px-3 py-1 text-xs text-clay-100">{it}</li>)}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
