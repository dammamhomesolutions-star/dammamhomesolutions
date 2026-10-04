"use client";

import { useState } from "react";
import { mgLocations } from "@/lib/marble-granite";
import MgIcon from "./MgIcon";

const iconFor = (l: string) => (l.includes("countertop") || l === "Vanity" ? "counter" : l === "Staircase" ? "stairs" : l === "Wall cladding" ? "wall" : l.includes("Commercial") || l.includes("Reception") ? "building" : "floor") as "counter" | "stairs" | "wall" | "building" | "floor";

export default function MgLocation() {
  const [loc, setLoc] = useState(mgLocations[0].label);
  const l = mgLocations.find((x) => x.label === loc)!;

  return (
    <section id="where-is-your-stone" aria-labelledby="mg-loc" className="border-b border-ink-900/10 bg-concrete-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-concrete-700">Floors, countertops, stairs &amp; walls</p>
          <h2 id="mg-loc" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Where is your stone?</h2>
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Stone location">
            {mgLocations.map((x) => (
              <button
                key={x.label}
                type="button"
                aria-pressed={loc === x.label}
                onClick={() => setLoc(x.label)}
                className={`focus-ring inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-colors ${loc === x.label ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-concrete-600"}`}
              >
                <MgIcon name={iconFor(x.label)} className="h-4 w-4" />
                {x.label}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div key={loc} className="animate-fadeIn rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8" aria-live="polite">
            <MgIcon name={iconFor(loc)} className="h-7 w-7 text-concrete-300" />
            <h3 className="mt-3 font-serif text-2xl">{l.label}</h3>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-concrete-300">What we consider</p>
            <ul className="mt-2 space-y-1.5">{l.points.map((p) => <li key={p} className="flex gap-2 text-sm text-ink-300"><MgIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-concrete-300" />{p}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
