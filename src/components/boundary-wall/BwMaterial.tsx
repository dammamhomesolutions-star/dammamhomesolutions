"use client";

import { useState } from "react";
import { bwMaterials } from "@/lib/boundary-wall";
import BwIcon from "./BwIcon";

const depends = ["Material", "Existing finish", "The damage", "Moisture", "Previous repairs", "Wall construction", "Surroundings"];

export default function BwMaterial() {
  const [pick, setPick] = useState(bwMaterials[0].label);
  const m = bwMaterials.find((x) => x.label === pick)!;

  return (
    <section aria-labelledby="bw-material" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-clay-700">Materials</p>
          <h2 id="bw-material" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What is your wall made from?</h2>
          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4" role="group" aria-label="Wall material">
            {bwMaterials.map((x) => (
              <button
                key={x.label}
                type="button"
                aria-pressed={pick === x.label}
                onClick={() => setPick(x.label)}
                className={`focus-ring flex flex-col items-start gap-2 rounded-xl border p-3 text-left text-sm font-semibold transition-colors ${pick === x.label ? "border-clay-900 bg-clay-900 text-sand-50" : "border-ink-900/10 bg-clay-100/50 text-ink-900 hover:border-clay-600"}`}
              >
                <BwIcon name={x.icon} className={`h-6 w-6 ${pick === x.label ? "text-clay-300" : "text-clay-700"}`} />
                {x.label}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div key={pick} className="animate-fadeIn rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8" aria-live="polite">
            <BwIcon name={m.icon} className="h-7 w-7 text-clay-300" />
            <h3 className="mt-3 font-serif text-2xl">{m.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">{m.note}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-clay-300">The repair approach depends on</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">{depends.map((d) => <li key={d} className="rounded-full bg-sand-100/10 px-2.5 py-1 text-xs">{d}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
