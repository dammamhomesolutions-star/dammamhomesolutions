"use client";

import { useState } from "react";
import { rnRoadmap, rnSequence } from "@/lib/renovation";
import { Eyebrow } from "./RnUi";

// Project roadmap (interactive) followed by a short editorial on sequence.
export default function RnRoadmap() {
  const [i, setI] = useState(0);
  const s = rnRoadmap[i];

  return (
    <section id="roadmap" aria-labelledby="rn-roadmap" className="scroll-mt-20 overflow-hidden bg-ink-950 py-20 text-sand-50 sm:py-28">
      <div className="container-edge">
        <Eyebrow n="10" dark>Renovation planning map</Eyebrow>
        <h2 id="rn-roadmap" className="mt-5 max-w-3xl font-serif text-4xl font-light tracking-tight sm:text-5xl">From an idea to a finished room</h2>

        <div className="relative mt-14">
          <span aria-hidden="true" className="absolute left-0 right-0 top-[11px] hidden h-px bg-sand-50/20 lg:block" />
          <span aria-hidden="true" className="absolute left-0 top-[11px] hidden h-px bg-ember-500 transition-all duration-500 motion-reduce:transition-none lg:block" style={{ width: `${(i / (rnRoadmap.length - 1)) * 100}%` }} />
          <ol className="relative grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8 lg:gap-0">
            {rnRoadmap.map((r, n) => (
              <li key={r.stage}>
                <button
                  type="button"
                  aria-pressed={i === n}
                  aria-controls="rn-stage"
                  onClick={() => setI(n)}
                  className={`focus-ring flex w-full items-center gap-3 border px-3 py-3 text-left transition-colors lg:flex-col lg:items-start lg:border-0 lg:px-0 lg:py-0 ${i === n ? "border-ember-500 bg-sand-50/5" : "border-sand-50/15 hover:border-sand-50/40"}`}
                >
                  <span aria-hidden="true" className={`flex h-[23px] w-[23px] flex-none items-center justify-center border font-mono text-[10px] ${n <= i ? "border-ember-500 bg-ember-500 text-ink-950" : "border-sand-50/40 bg-ink-950 text-sand-300"}`}>{n + 1}</span>
                  <span className={`text-sm leading-tight lg:mt-4 lg:pr-3 ${i === n ? "font-semibold text-sand-50" : "text-sand-300"}`}>{r.stage}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div id="rn-stage" aria-live="polite" className="mt-10 grid gap-6 border-t border-sand-50/15 pt-8 lg:grid-cols-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember-500 lg:col-span-3">Stage {String(i + 1).padStart(2, "0")} — {s.stage}</p>
          <p className="font-serif text-2xl leading-snug lg:col-span-7">{s.text}</p>
        </div>
        <ul className="sr-only">
          {rnRoadmap.map((r) => <li key={r.stage}>{r.stage}: {r.text}</li>)}
        </ul>
        <p className="mt-6 text-sm text-sand-300 lg:ml-[25%]">
          Our work carries a workmanship warranty; its terms are set out in your quote.
        </p>

        {/* Editorial: renovation is a sequence */}
        <div className="mt-20 grid gap-10 border-t border-sand-50/15 pt-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="font-serif text-3xl font-light sm:text-4xl">Renovation is a sequence, not a list of jobs.</h3>
            <p className="mt-5 text-[15px] leading-relaxed text-sand-200">
              Painting before the ceiling lights are moved means painting twice. Laying
              a new floor before removing old cabinets risks damaging it. The order of
              work matters as much as the work itself.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-sand-200">
              There&rsquo;s no single correct sequence for every project — it depends on
              the actual scope. But most renovations follow a similar shape.
            </p>
          </div>
          <ol className="lg:col-span-7">
            {rnSequence.map((step, n) => (
              <li key={step} className="flex items-baseline gap-5 border-b border-sand-50/10 py-3">
                <span className="w-8 font-mono text-xs text-ember-500">{String(n + 1).padStart(2, "0")}</span>
                <span className="font-serif text-xl">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
