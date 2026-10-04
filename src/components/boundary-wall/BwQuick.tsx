"use client";

import { useState } from "react";
import { bwIssues } from "@/lib/boundary-wall";
import BwCtas from "./BwCtas";
import BwIcon from "./BwIcon";

export default function BwQuick() {
  const [pick, setPick] = useState(bwIssues[0].label);
  const i = bwIssues.find((x) => x.label === pick)!;

  return (
    <section id="whats-wrong" aria-labelledby="bw-quick" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Quick check</p>
          <h2 id="bw-quick" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What&rsquo;s wrong with your wall?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <fieldset className="lg:col-span-7">
            <legend className="sr-only">Wall problem</legend>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {bwIssues.map((x) => {
                const on = pick === x.label;
                return (
                  <label key={x.label} className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-3.5 transition-all has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-clay-600 ${on ? "border-clay-900 bg-clay-900 text-sand-50 shadow-lg" : "border-ink-900/10 bg-clay-100/50 text-ink-900 hover:-translate-y-0.5 hover:border-clay-600"}`}>
                    <input type="radio" name="bw-issue" checked={on} onChange={() => setPick(x.label)} className="sr-only" />
                    <BwIcon name={x.icon} className={`h-6 w-6 flex-none ${on ? "text-clay-300" : "text-clay-700"}`} />
                    <span className="text-sm font-semibold">{x.label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <div className="lg:col-span-5">
            <div key={pick} className="animate-fadeIn rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8" aria-live="polite">
              <BwIcon name={i.serious ? "alert" : i.icon} className="h-7 w-7 text-clay-300" />
              <p className="mt-3 font-serif text-2xl">{i.label}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-clay-300">May indicate</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">{i.may.map((m) => <li key={m} className="rounded-full bg-sand-100/10 px-2.5 py-1 text-xs text-sand-100">{m}</li>)}</ul>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-clay-300">Next step</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-300">{i.next}</p>
              <BwCtas tone="dark" className="mt-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
