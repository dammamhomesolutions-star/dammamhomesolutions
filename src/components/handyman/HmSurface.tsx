"use client";

import { useState } from "react";
import { hmSurfaces } from "@/lib/handyman";
import HmIcon from "./HmIcon";

const bought = ["Furniture", "Curtains & rods", "Blinds", "Shelves", "Mirrors", "Light fittings", "Taps & accessories"];
const depends = ["Item compatibility", "Wall or ceiling type", "Supplied hardware", "Access", "Condition of the item"];

export default function HmSurface() {
  const [pick, setPick] = useState(hmSurfaces[0].label);
  const s = hmSurfaces.find((x) => x.label === pick)!;

  return (
    <section aria-label="Customer-supplied items and wall types" className="bg-sand-100 py-20 sm:py-24">
      <div className="container-edge grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-700">Your items</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Already bought the item?</h2>
          <p className="mt-3 text-sm text-ink-600">We install and assemble items you&rsquo;ve bought yourself:</p>
          <ul className="mt-4 flex flex-wrap gap-1.5">{bought.map((b) => <li key={b} className="rounded-full bg-ember-100 px-3 py-1 text-sm text-ink-800">{b}</li>)}</ul>
          <p className="mt-5 text-sm text-ink-600">Whether it can go up as planned depends on:</p>
          <ul className="mt-2 space-y-1">{depends.map((d) => <li key={d} className="flex gap-2 text-sm text-ink-800"><HmIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-ember-700" />{d}</li>)}</ul>
        </div>
        <div className="rounded-[2rem] bg-ink-950 p-6 text-sand-50 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-500">Surface check</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight">Where will it be installed?</h2>
          <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Surface type">
            {hmSurfaces.map((x) => (
              <button key={x.label} type="button" aria-pressed={pick === x.label} onClick={() => setPick(x.label)} className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${pick === x.label ? "border-ember-500 bg-ember-500 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"}`}>
                {x.label}
              </button>
            ))}
          </div>
          <p key={pick} className="mt-5 animate-fadeIn rounded-2xl bg-ink-900 p-4 text-sm leading-relaxed text-ink-300" aria-live="polite"><span className="font-semibold text-sand-50">{s.label}: </span>{s.note}</p>
          <p className="mt-4 text-xs text-ink-400">The right fixing depends on the actual wall and the item — we choose it on the visit.</p>
        </div>
      </div>
    </section>
  );
}
