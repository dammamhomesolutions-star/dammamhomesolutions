"use client";

import { useState } from "react";
import SpIcon from "./SpIcon";

const content = {
  home: {
    icon: "home" as const,
    title: "Villa & home pools",
    points: ["Family use and safety", "A pool that looks inviting", "Reliable pump and filter", "Routine maintenance that fits your schedule", "Seasonal use — summer peaks and quieter months"],
  },
  commercial: {
    icon: "building" as const,
    title: "Compound, hotel & commercial pools",
    points: ["Higher, more constant use", "Visits scheduled around opening hours", "Keeping the pool available", "Visibly clear water for guests", "Regular equipment monitoring"],
  },
};
const local = [
  { t: "Dust and sand", b: "Wind-blown dust settles in outdoor pools, loading filters and clouding water faster." },
  { t: "Heat", b: "Summer heat raises evaporation and makes water balance harder to hold." },
  { t: "Outdoor equipment", b: "Pumps and filters often sit in hot, dusty equipment areas — worth keeping ventilated and clean." },
  { t: "Seasonal use", b: "Many villa pools see heavy summer use and quieter months — plan care for both." },
];

export default function SpSegment() {
  const [seg, setSeg] = useState<"home" | "commercial">("home");
  const c = content[seg];

  return (
    <section aria-label="Home and commercial pools, and local conditions" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex rounded-full bg-teal-100 p-1" role="group" aria-label="Pool type">
              {(["home", "commercial"] as const).map((k) => (
                <button key={k} type="button" aria-pressed={seg === k} onClick={() => setSeg(k)} className={`focus-ring rounded-full px-6 py-2 text-sm font-bold uppercase tracking-[0.12em] transition-colors ${seg === k ? "bg-ink-950 text-sand-50" : "text-teal-900"}`}>
                  {k}
                </button>
              ))}
            </div>
            <h2 key={seg} className="mt-6 animate-fadeIn font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">{c.title}</h2>
          </div>
          <ul key={`${seg}-list`} className="grid animate-fadeIn gap-2 sm:grid-cols-2 lg:col-span-7" aria-live="polite">
            {c.points.map((p) => (
              <li key={p} className="flex items-center gap-3 rounded-2xl bg-teal-100/60 p-4 text-sm text-ink-800">
                <SpIcon name={c.icon} className="h-5 w-5 flex-none text-teal-700" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-ink-950 text-sand-50">
          <div className="grid lg:grid-cols-12">
            <div className="p-6 sm:p-10 lg:col-span-4">
              <SpIcon name="sun" className="h-8 w-8 text-teal-300" />
              <h2 className="mt-3 font-serif text-3xl tracking-tight">Pool maintenance for Dammam properties</h2>
            </div>
            <ul className="grid gap-px bg-sand-100/10 sm:grid-cols-2 lg:col-span-8">
              {local.map((l) => (
                <li key={l.t} className="bg-ink-950 p-6">
                  <h3 className="font-semibold">{l.t}</h3>
                  <p className="mt-1 text-sm text-ink-300">{l.b}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
