"use client";

import { useState } from "react";
import { apDiagnostics, type ApApplianceKey } from "@/lib/appliance-repair";
import ApCtas from "./ApCtas";
import ApIcon from "./ApIcon";

// Appliance → symptom → guidance. General guidance only, not a diagnosis.
export default function ApDiagnostic() {
  const [appliance, setAppliance] = useState<ApApplianceKey | "">("");
  const [symptom, setSymptom] = useState("");
  const a = apDiagnostics.find((x) => x.key === appliance);
  const urgent = !!a?.urgentSymptoms?.includes(symptom);
  const gasOven = appliance === "oven" && symptom === "Strange smell";

  return (
    <section id="diagnose" aria-labelledby="ap-diag" className="border-b border-ink-900/10 bg-steel-100/70 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-copper-700">Troubleshooter</p>
          <h2 id="ap-diag" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Which appliance is giving you trouble?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Pick the appliance, then what it&rsquo;s doing.</p>
        </div>

        <fieldset className="mt-10">
          <legend className="text-base font-semibold text-ink-950">1. Choose the appliance</legend>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {apDiagnostics.map((x) => {
              const on = appliance === x.key;
              return (
                <label
                  key={x.key}
                  className={`group flex cursor-pointer flex-col items-start gap-3 rounded-2xl border p-4 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-copper-600 sm:p-5 ${
                    on ? "border-copper-800 bg-ink-950 text-sand-50" : "border-ink-900/10 bg-sand-50 text-ink-900 hover:border-copper-600"
                  }`}
                >
                  <input
                    type="radio"
                    name="ap-appliance"
                    value={x.key}
                    checked={on}
                    onChange={() => {
                      setAppliance(x.key);
                      setSymptom("");
                    }}
                    className="sr-only"
                  />
                  <ApIcon name={x.icon} className={`h-8 w-8 ${on ? "text-copper-300" : "text-copper-700"}`} />
                  <span className="text-sm font-semibold">{x.label}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        {a && (
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <fieldset key={a.key} className="animate-fadeIn lg:col-span-7">
              <legend className="text-base font-semibold text-ink-950">2. What is it doing?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {a.symptoms.map((s) => (
                  <label
                    key={s}
                    className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-copper-600 ${
                      symptom === s ? "border-copper-800 bg-copper-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-copper-600"
                    }`}
                  >
                    <input type="radio" name="ap-symptom" value={s} checked={symptom === s} onChange={() => setSymptom(s)} className="sr-only" />
                    {s}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28" aria-live="polite">
                {symptom ? (
                  <div key={a.key + symptom} className="animate-fadeIn">
                    <ApIcon name={urgent ? "alert" : "search"} className="h-7 w-7 text-copper-300" />
                    <p className="mt-3 font-serif text-2xl leading-snug">
                      {urgent ? "Stop using it and get it checked soon." : "A professional inspection may be worthwhile."}
                    </p>
                    {gasOven && (
                      <p className="mt-3 rounded-lg bg-rust-700/30 p-3 text-sm leading-relaxed text-sand-50">
                        If it&rsquo;s a gas cooker and you smell gas: don&rsquo;t use switches or
                        flames, open windows, leave the area and contact your gas
                        supplier or emergency services.
                      </p>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-ink-300">{a.guidance}</p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-copper-300">Areas often checked</p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {a.areas.map((x) => (
                        <li key={x} className="rounded-full bg-sand-100/10 px-2.5 py-1 text-xs text-sand-100">{x}</li>
                      ))}
                    </ul>
                    <ApCtas tone="dark" className="mt-6" primaryLabel="Get This Checked" />
                  </div>
                ) : (
                  <p className="text-sm text-ink-300">Choose a symptom to see what may be involved.</p>
                )}
                <p className="mt-6 border-t border-sand-100/10 pt-4 text-xs text-ink-400">
                  General guidance only — not a technical diagnosis.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
