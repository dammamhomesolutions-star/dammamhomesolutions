"use client";

import { useState } from "react";
import { dkConcern, dkNoticing, dkProperty } from "@/lib/ac-duct-cleaning";
import DkCtas from "./DkCtas";
import DkIcon from "./DkIcon";

type Result = { headline: string; why: string[]; tone: "inspect" | "other" | "careful" };

function evaluate(noticing: string[], property: string, concern: string): Result {
  const has = (s: string) => noticing.includes(s);
  if (has("Water or moisture around ductwork")) {
    return {
      tone: "careful",
      headline: "Moisture needs looking at first",
      why: [
        "Water around ducts usually points to condensation, insulation or drain problems.",
        "The cause should be found before any cleaning — cleaning alone won't fix it.",
      ],
    };
  }
  const ductSigns = ["Visible dust around vents", "Visible debris inside vents", "Recent renovation or construction", "Ducts not inspected for years"].filter(has);
  const otherSigns = ["Uneven airflow", "Musty or unusual odour", "Dust returning quickly after cleaning"].filter(has);
  if (ductSigns.length > 0 || concern === "Property renovation") {
    return {
      tone: "inspect",
      headline: "An inspection may be worthwhile",
      why: [
        ...ductSigns.map((s) => `${s} is a common reason to look inside the ducts.`),
        ...(otherSigns.length ? ["Some of what you've noticed can also come from filters or the AC unit, so those are checked too."] : []),
        ...(property === "Apartment" ? ["First check your AC is actually ducted — many apartments use split units with no ducts."] : []),
      ],
    };
  }
  if (otherSigns.length > 0 || concern === "Airflow" || concern === "Odour") {
    return {
      tone: "other",
      headline: "Duct cleaning may not be the first step",
      why: [
        "Airflow, odour and returning dust often come from filters, coils, the fan, drains or leaks.",
        "A check of the whole system can show whether the ducts are actually involved.",
      ],
    };
  }
  return {
    tone: "inspect",
    headline: "A quick inspection can settle it",
    why: ["Without a specific symptom, an inspection shows whether there's enough buildup to justify cleaning."],
  };
}

function Chips({ name, options, multi, value, onChange }: { name: string; options: string[]; multi?: boolean; value: string[]; onChange: (v: string[]) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => {
        const on = value.includes(o);
        return (
          <label
            key={o}
            className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-copper-500 ${
              on ? "border-copper-700 bg-copper-700 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-copper-500"
            }`}
          >
            <input
              type={multi ? "checkbox" : "radio"}
              name={name}
              value={o}
              checked={on}
              onChange={() => onChange(multi ? (on ? value.filter((x) => x !== o) : [...value, o]) : [o])}
              className="sr-only"
            />
            {o}
          </label>
        );
      })}
    </div>
  );
}

export default function DkDiagnostic() {
  const [noticing, setNoticing] = useState<string[]>([]);
  const [property, setProperty] = useState<string[]>([]);
  const [concern, setConcern] = useState<string[]>([]);
  const ready = noticing.length > 0 && property.length > 0 && concern.length > 0;
  const r = ready ? evaluate(noticing, property[0], concern[0]) : null;

  return (
    <section id="do-i-need-it" aria-labelledby="dk-diag" className="border-b border-ink-900/10 bg-steel-100/70 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-copper-700">Quick guide</p>
          <h2 id="dk-diag" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Do I need duct cleaning?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="space-y-7 lg:col-span-7">
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">1. What are you noticing? <span className="font-normal text-ink-500">(choose any)</span></legend>
              <Chips name="dk-noticing" options={dkNoticing} multi value={noticing} onChange={setNoticing} />
            </fieldset>
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">2. What type of property is this?</legend>
              <Chips name="dk-property" options={dkProperty} value={property} onChange={setProperty} />
            </fieldset>
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">3. What&rsquo;s your main concern?</legend>
              <Chips name="dk-concern" options={dkConcern} value={concern} onChange={setConcern} />
            </fieldset>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28" aria-live="polite">
              {r ? (
                <div key={r.headline + r.why.join()} className="animate-fadeIn">
                  <DkIcon name={r.tone === "careful" ? "drop" : r.tone === "other" ? "fan" : "search"} className="h-7 w-7 text-copper-300" />
                  <p className="mt-3 font-serif text-2xl">{r.headline}</p>
                  <ul className="mt-4 space-y-2 text-sm text-ink-300">
                    {r.why.map((w) => (
                      <li key={w}>{w}</li>
                    ))}
                  </ul>
                  <DkCtas tone="dark" className="mt-6" primaryLabel="Request a Quote" />
                </div>
              ) : (
                <p className="text-sm text-ink-300">Answer the three questions to see a suggested direction.</p>
              )}
              <p className="mt-6 border-t border-sand-100/10 pt-4 text-xs leading-relaxed text-ink-400">
                This quick guide isn&rsquo;t a technical diagnosis. A technician
                should inspect the system before recommending cleaning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
