"use client";

import { useState } from "react";
import { whNeed, whProperty, whSymptoms } from "@/lib/water-heater";
import WhCtas from "./WhCtas";
import WhIcon from "./WhIcon";

function Chips({ name, options, value, onChange }: { name: string; options: { v: string; l: string }[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o.v}
          className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-rust-600 ${
            value === o.v ? "border-rust-700 bg-rust-700 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-rust-600"
          }`}
        >
          <input type="radio" name={name} value={o.v} checked={value === o.v} onChange={() => onChange(o.v)} className="sr-only" />
          {o.l}
        </label>
      ))}
    </div>
  );
}

export default function WhDiagnostic() {
  const [symptom, setSymptom] = useState("");
  const [property, setProperty] = useState("");
  const [need, setNeed] = useState("");
  const s = whSymptoms.find((x) => x.key === symptom);
  const ready = s && property && need;

  const headline = !s
    ? ""
    : s.urgent
      ? "Get it checked soon — and stop using it if there's a safety concern."
      : need === "New installation"
        ? "A site check will confirm the right heater and location."
        : s.key === "old" || need === "Replacement"
          ? "An inspection can show whether replacement is really needed."
          : "A professional inspection may be appropriate.";

  return (
    <section id="diagnose" aria-labelledby="wh-diag" className="border-b border-ink-900/10 bg-ember-100/40 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Quick guide</p>
          <h2 id="wh-diag" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What&rsquo;s wrong with your water heater?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="space-y-7 lg:col-span-7">
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">1. What&rsquo;s happening?</legend>
              <Chips name="wh-symptom" options={whSymptoms.map((x) => ({ v: x.key, l: x.label }))} value={symptom} onChange={setSymptom} />
            </fieldset>
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">2. What type of property?</legend>
              <Chips name="wh-property" options={whProperty.map((x) => ({ v: x, l: x }))} value={property} onChange={setProperty} />
            </fieldset>
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">3. What do you need?</legend>
              <Chips name="wh-need" options={whNeed.map((x) => ({ v: x, l: x }))} value={need} onChange={setNeed} />
            </fieldset>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28" aria-live="polite">
              {ready && s ? (
                <div key={symptom + property + need} className="animate-fadeIn">
                  <WhIcon name={s.urgent ? "alert" : "search"} className={`h-7 w-7 ${s.urgent ? "text-ember-500" : "text-ember-500"}`} />
                  <p className="mt-3 font-serif text-2xl leading-snug">{headline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{s.causes}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">
                    The exact cause needs to be checked before deciding whether repair or replacement is right.
                  </p>
                  <WhCtas tone="dark" className="mt-6" primaryLabel="Get My Heater Checked" />
                </div>
              ) : (
                <p className="text-sm text-ink-300">Answer the three questions to see a suggested next step.</p>
              )}
              <p className="mt-6 border-t border-sand-100/10 pt-4 text-xs text-ink-400">
                This tool provides general guidance and is not a technical diagnosis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
