"use client";

import { useState } from "react";
import { bwCostFactors, bwEstSize, bwEstCondition, bwEstProblem, bwEstType } from "@/lib/boundary-wall";
import BwCtas from "./BwCtas";
import BwIcon from "./BwIcon";

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {options.map((o) => (
        <label key={o} className={`cursor-pointer rounded-full border px-3 py-1 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-clay-300 ${value === o ? "border-clay-300 bg-clay-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"}`}>
          <input type="radio" name={name} checked={value === o} onChange={() => onChange(o)} className="sr-only" />
          {o}
        </label>
      ))}
    </div>
  );
}

// Organises the job — never produces a price.
export default function BwCost() {
  const [wallType, setWallType] = useState("");
  const [area, setArea] = useState("");
  const [cond, setCond] = useState("");
  const [problem, setProblem] = useState("");
  const ready = wallType && area && cond && problem;

  const treatments = new Set<string>();
  if (problem === "Cracks") ["Crack repair", "Surface finishing"].forEach((t) => treatments.add(t));
  if (problem === "Plaster") ["Plaster / render repair", "Surface finishing"].forEach((t) => treatments.add(t));
  if (problem === "Paint") ["Coating preparation", "Repainting"].forEach((t) => treatments.add(t));
  if (problem === "Moisture") ["Moisture source check", "Plaster repair", "Waterproof coating"].forEach((t) => treatments.add(t));
  if (problem === "Coping") ["Coping repair", "Surface finishing"].forEach((t) => treatments.add(t));
  if (problem === "Multiple issues" || problem === "Not sure") ["Surface repair", "Plaster / render repair", "Coating"].forEach((t) => treatments.add(t));
  if (cond === "Significant") treatments.add("Possible partial rebuilding");
  if (cond === "Significant" || cond === "Unknown") treatments.add("Detailed assessment");

  return (
    <section id="cost" aria-label="Cost factors and project scope" className="border-b border-ink-900/10 bg-clay-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="section-label !text-clay-700">Cost</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What affects outdoor &amp; boundary wall repair cost?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">There&rsquo;s no honest flat price before seeing the wall. The quote depends on:</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {bwCostFactors.map((f) => <li key={f} className="rounded-full bg-sand-50 px-3 py-1 text-sm text-ink-800 ring-1 ring-ink-900/10">{f}</li>)}
          </ul>
          <BwCtas className="mt-8" primaryLabel="Request a Project Assessment" />
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <h3 className="font-serif text-2xl">Project scope estimator</h3>
            <p className="mt-1 text-sm text-ink-400">Organises your project — it doesn&rsquo;t calculate a price.</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <fieldset><legend className="text-sm font-semibold">Wall type</legend><Chips name="bw-e-wallType" options={bwEstType} value={wallType} onChange={setWallType} /></fieldset>
              <fieldset><legend className="text-sm font-semibold">Approximate size</legend><Chips name="bw-e-area" options={bwEstSize} value={area} onChange={setArea} /></fieldset>
              <fieldset><legend className="text-sm font-semibold">Condition</legend><Chips name="bw-e-cond" options={bwEstCondition} value={cond} onChange={setCond} /></fieldset>
              <fieldset><legend className="text-sm font-semibold">Main problem</legend><Chips name="bw-e-problem" options={bwEstProblem} value={problem} onChange={setProblem} /></fieldset>
            </div>
            <div className="mt-6 rounded-xl bg-ink-900 p-5" aria-live="polite">
              {ready ? (
                <div key={wallType + area + cond + problem} className="animate-fadeIn">
                  <p className="text-sm text-ink-300">{wallType} · {area} · {cond} · {problem}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-clay-300">Likely scope</p>
                  <ul className="mt-2 flex flex-wrap gap-2">{[...treatments].map((t) => <li key={t} className="inline-flex items-center gap-1.5 rounded-full bg-sand-100/10 px-3 py-1 text-sm"><BwIcon name="check" className="h-3.5 w-3.5 text-clay-300" />{t}</li>)}</ul>
                  <p className="mt-4 text-sm leading-relaxed text-ink-300">Your project may need surface repair, plaster / render repair, coating preparation, coping work or a more detailed assessment. Send photos for a more accurate scope.</p>
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
