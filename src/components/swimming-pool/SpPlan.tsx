"use client";

import { useState } from "react";
import { spPlanCond, spPlanNeed, spPlanType, spPlanUsage } from "@/lib/swimming-pool";
import SpCtas from "./SpCtas";
import SpIcon from "./SpIcon";

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {options.map((o) => (
        <label key={o} className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-300 ${value === o ? "border-teal-300 bg-teal-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"}`}>
          <input type="radio" name={name} checked={value === o} onChange={() => onChange(o)} className="sr-only" />
          {o}
        </label>
      ))}
    </div>
  );
}

// Suggests a maintenance focus — not a package or a price.
export default function SpPlan() {
  const [type, setType] = useState("");
  const [usage, setUsage] = useState("");
  const [need, setNeed] = useState("");
  const [cond, setCond] = useState("");
  const ready = type && usage && need && cond;

  const focus: string[] = [];
  if (need === "Cleaning" || need === "Complete maintenance") focus.push("Regular cleaning — skimming, brushing, vacuuming");
  if (need === "Water care" || need === "Complete maintenance") focus.push("Water testing and balancing");
  if (need === "Equipment checks" || need === "Complete maintenance") focus.push("Pump, filter and equipment checks");
  if (need === "Surface maintenance" || need === "Complete maintenance") focus.push("Tile, grout and coping checks");
  if (usage === "Heavy" || type === "Commercial" || type === "Apartment / compound") focus.push("More frequent visits for higher use");
  if (usage === "Seasonal") focus.push("A start-of-season and end-of-season check");
  if (cond === "Needs attention" || cond === "Several issues") focus.unshift("An assessment and repairs before the routine starts");
  if (cond === "Unknown") focus.unshift("A first visit to assess the pool");

  return (
    <section id="maintenance-plan" aria-labelledby="sp-plan" className="bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-300">Plan builder</p>
          <h2 id="sp-plan" className="mt-4 font-serif text-3xl tracking-tight sm:text-5xl">Build your pool maintenance plan</h2>
          <div className="mt-8 space-y-5">
            <fieldset><legend className="text-sm font-semibold text-teal-100">Pool type</legend><Chips name="sp-p-type" options={spPlanType} value={type} onChange={setType} /></fieldset>
            <fieldset><legend className="text-sm font-semibold text-teal-100">Usage</legend><Chips name="sp-p-use" options={spPlanUsage} value={usage} onChange={setUsage} /></fieldset>
            <fieldset><legend className="text-sm font-semibold text-teal-100">Main need</legend><Chips name="sp-p-need" options={spPlanNeed} value={need} onChange={setNeed} /></fieldset>
            <fieldset><legend className="text-sm font-semibold text-teal-100">Current condition</legend><Chips name="sp-p-cond" options={spPlanCond} value={cond} onChange={setCond} /></fieldset>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="h-full rounded-[2rem] bg-gradient-to-br from-teal-800 to-teal-900 p-6 sm:p-8" aria-live="polite">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-300">Recommended maintenance focus</p>
            {ready ? (
              <div key={type + usage + need + cond} className="animate-fadeIn">
                <p className="mt-2 font-serif text-2xl">{type} pool · {usage.toLowerCase()} use</p>
                <ol className="mt-5 space-y-2">
                  {focus.map((f, i) => (
                    <li key={f} className="flex items-center gap-3 rounded-2xl bg-ink-950/40 p-3 text-sm">
                      <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-teal-300 font-mono text-xs text-ink-950">{i + 1}</span>
                      {f}
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-sm text-teal-100">We&rsquo;ll turn this into a maintenance contract with visit frequency agreed with you.</p>
                <SpCtas className="mt-6" primaryLabel="Discuss a Maintenance Plan" />
              </div>
            ) : (
              <p className="mt-4 flex gap-2 text-sm text-teal-100"><SpIcon name="calendar" className="h-5 w-5 flex-none" />Choose all four to see where your plan should focus.</p>
            )}
            <p className="mt-6 border-t border-sand-100/15 pt-4 text-xs text-teal-100/80">Not a price or a fixed package — the plan is agreed after we see the pool.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
