"use client";

import { useState } from "react";

interface FlowDef {
  id: string;
  tabLabel: string;
  symptom: string;
  steps: string[];
}

const flows: FlowDef[] = [
  {
    id: "warm-air",
    tabLabel: "Warm air",
    symptom: "Warm air",
    steps: [
      "May be related to airflow, filters, controls or the system's general condition",
      "Needs inspection to narrow down which one",
      "Repair or maintenance, depending on what's found",
    ],
  },
  {
    id: "water-leak",
    tabLabel: "Water leak",
    symptom: "Water leak",
    steps: [
      "Can be caused by drainage or condensation handling",
      "Needs inspection — the exact cause depends on the unit",
      "Repair or maintenance, depending on what's found",
    ],
  },
  {
    id: "weak-airflow",
    tabLabel: "Weak airflow",
    symptom: "Weak airflow",
    steps: [
      "Often related to filters, the fan, or a blocked vent",
      "Needs inspection to confirm where the restriction is",
      "Repair or maintenance, depending on what's found",
    ],
  },
  {
    id: "noise",
    tabLabel: "Unusual noise",
    symptom: "Unusual noise",
    steps: [
      "Can be caused by a loose part, an obstruction, or a worn component",
      "Needs inspection — the type of sound usually narrows it down",
      "Repair or maintenance, depending on what's found",
    ],
  },
];

export default function AcInvestigationFlow() {
  const [activeId, setActiveId] = useState(flows[0].id);
  const active = flows.find((f) => f.id === activeId)!;

  return (
    <section className="border-y border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-sky-700">How we think about it</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What you notice isn&rsquo;t always what needs fixing.
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {flows.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveId(f.id)}
              aria-pressed={f.id === activeId}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                f.id === activeId
                  ? "border-ink-950 bg-ink-950 text-sand-50"
                  : "border-ink-900/20 text-ink-700 hover:border-ink-900/40"
              }`}
            >
              {f.tabLabel}
            </button>
          ))}
        </div>

        <div key={active.id} className="mt-10 max-w-2xl animate-fadeUp">
          <ol className="relative border-l border-ink-900/15 pl-8">
            <li className="pb-8">
              <span
                aria-hidden="true"
                className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-sand-50 bg-ink-950"
              />
              <p className="font-serif text-lg text-ink-950">{active.symptom}</p>
              <p className="mt-1 text-sm text-ink-500">What you notice</p>
            </li>
            {active.steps.map((step, i) => (
              <li key={step} className={i < active.steps.length - 1 ? "pb-8" : ""}>
                <span
                  aria-hidden="true"
                  className={`absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-sand-50 ${
                    i === active.steps.length - 1 ? "bg-sky-600" : "bg-ink-400"
                  }`}
                />
                <p className="text-ink-800">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
