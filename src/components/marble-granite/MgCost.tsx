"use client";

import { useState } from "react";
import { mgCostFactors, mgEstArea, mgEstCondition, mgEstLocation, mgEstStone } from "@/lib/marble-granite";
import MgCtas from "./MgCtas";
import MgIcon from "./MgIcon";

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {options.map((o) => (
        <label key={o} className={`cursor-pointer rounded-full border px-3 py-1 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-concrete-300 ${value === o ? "border-concrete-300 bg-concrete-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"}`}>
          <input type="radio" name={name} checked={value === o} onChange={() => onChange(o)} className="sr-only" />
          {o}
        </label>
      ))}
    </div>
  );
}

// Organises the job — never produces a price.
export default function MgCost() {
  const [stone, setStone] = useState("");
  const [area, setArea] = useState("");
  const [cond, setCond] = useState("");
  const [loc, setLoc] = useState("");
  const ready = stone && area && cond && loc;

  const treatments = new Set<string>(["Cleaning"]);
  if (cond === "Mostly dull" || cond === "Uneven") treatments.add("Polishing");
  if (cond === "Scratched" || cond === "Uneven" || cond === "Heavy wear") ["Honing", "Polishing"].forEach((t) => treatments.add(t));
  if (cond === "Heavy wear" || cond === "Significant damage") treatments.add("Restoration");
  if (cond === "Stained") ["Stain treatment", "Polishing"].forEach((t) => treatments.add(t));
  if (cond === "Significant damage") treatments.add("Repair");
  if (loc === "Countertop") treatments.add("Sealing (optional)");

  return (
    <section id="cost" aria-label="Cost factors and project scope" className="border-b border-ink-900/10 bg-concrete-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="section-label !text-concrete-700">Cost</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What affects marble &amp; granite polishing cost?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">There&rsquo;s no honest flat price before seeing the stone. The quote depends on:</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {mgCostFactors.map((f) => <li key={f} className="rounded-full bg-sand-50 px-3 py-1 text-sm text-ink-800 ring-1 ring-ink-900/10">{f}</li>)}
          </ul>
          <MgCtas className="mt-8" primaryLabel="Request a Project Estimate" />
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <h3 className="font-serif text-2xl">Project scope estimator</h3>
            <p className="mt-1 text-sm text-ink-400">Organises your project — it doesn&rsquo;t calculate a price.</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <fieldset><legend className="text-sm font-semibold">Stone type</legend><Chips name="mg-e-stone" options={mgEstStone} value={stone} onChange={setStone} /></fieldset>
              <fieldset><legend className="text-sm font-semibold">Area</legend><Chips name="mg-e-area" options={mgEstArea} value={area} onChange={setArea} /></fieldset>
              <fieldset><legend className="text-sm font-semibold">Condition</legend><Chips name="mg-e-cond" options={mgEstCondition} value={cond} onChange={setCond} /></fieldset>
              <fieldset><legend className="text-sm font-semibold">Location</legend><Chips name="mg-e-loc" options={mgEstLocation} value={loc} onChange={setLoc} /></fieldset>
            </div>
            <div className="mt-6 rounded-xl bg-ink-900 p-5" aria-live="polite">
              {ready ? (
                <div key={stone + area + cond + loc} className="animate-fadeIn">
                  <p className="text-sm text-ink-300">{stone} · {area} · {cond} · {loc}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-concrete-300">Likely treatments</p>
                  <ul className="mt-2 flex flex-wrap gap-2">{[...treatments].map((t) => <li key={t} className="inline-flex items-center gap-1.5 rounded-full bg-sand-100/10 px-3 py-1 text-sm"><MgIcon name="check" className="h-3.5 w-3.5 text-concrete-300" />{t}</li>)}</ul>
                  <p className="mt-4 text-sm leading-relaxed text-ink-300">Your project may need cleaning, polishing, honing, restoration or a combination. Send photos and area details for a more accurate assessment.</p>
                </div>
              ) : (
                <p className="text-sm text-ink-300">Choose all four to see the likely scope.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
