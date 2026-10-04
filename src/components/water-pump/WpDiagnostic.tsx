"use client";

import { useState } from "react";
import { wpProblemsList, wpProperty, wpWhere } from "@/lib/water-pump";
import WpCtas from "./WpCtas";
import WpIcon from "./WpIcon";

function Chips({ name, options, value, onChange }: { name: string; options: { v: string; l: string }[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o.v}
          className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-600 ${
            value === o.v ? "border-glass-800 bg-glass-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-glass-600"
          }`}
        >
          <input type="radio" name={name} value={o.v} checked={value === o.v} onChange={() => onChange(o.v)} className="sr-only" />
          {o.l}
        </label>
      ))}
    </div>
  );
}

export default function WpDiagnostic() {
  const [problem, setProblem] = useState("");
  const [where, setWhere] = useState("");
  const [property, setProperty] = useState("");
  const p = wpProblemsList.find((x) => x.key === problem);
  const ready = p && where && property;

  const localOnly = ["One bathroom", "Kitchen", "Outdoor tap"].includes(where);
  const upstairs = where === "Upper floor";

  const headline = !p
    ? ""
    : p.urgent
      ? "Get it checked soon — stop using it if there's a safety concern."
      : localOnly && (p.key === "weak" || p.key === "noflow")
        ? "If only one area is affected, the pump may not be the cause."
        : "The system may need inspection.";

  const extra: string[] = [];
  if (localOnly && (p?.key === "weak" || p?.key === "noflow")) extra.push("A single fixture or room often points to a valve, filter, aerator or local pipe rather than the pump.");
  if (upstairs) extra.push("Low pressure only upstairs often relates to height, tank position, pipe runs or how the system was designed.");
  if (property === "Apartment") extra.push("In apartments, the building's supply and shared systems can also play a part.");

  return (
    <section id="diagnose" aria-labelledby="wp-diag" className="border-b border-ink-900/10 bg-glass-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Quick guide</p>
          <h2 id="wp-diag" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What&rsquo;s your water pump doing?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="space-y-7 lg:col-span-7">
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">1. What are you noticing?</legend>
              <Chips name="wp-problem" options={wpProblemsList.map((x) => ({ v: x.key, l: x.label }))} value={problem} onChange={setProblem} />
            </fieldset>
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">2. Where is the problem?</legend>
              <Chips name="wp-where" options={wpWhere.map((x) => ({ v: x, l: x }))} value={where} onChange={setWhere} />
            </fieldset>
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">3. What type of property?</legend>
              <Chips name="wp-property" options={wpProperty.map((x) => ({ v: x, l: x }))} value={property} onChange={setProperty} />
            </fieldset>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28" aria-live="polite">
              {ready && p ? (
                <div key={problem + where + property} className="animate-fadeIn">
                  <WpIcon name={p.urgent ? "alert" : "search"} className="h-7 w-7 text-glass-300" />
                  <p className="mt-3 font-serif text-2xl leading-snug">{headline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{p.note}</p>
                  {extra.map((e) => (
                    <p key={e} className="mt-2 text-sm leading-relaxed text-ink-300">{e}</p>
                  ))}
                  <WpCtas tone="dark" className="mt-6" primaryLabel="Help Me Identify the Problem" />
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
