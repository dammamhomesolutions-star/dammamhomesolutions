"use client";

import { useState } from "react";
import { wpPressureStages } from "@/lib/water-pump";
import WpIcon from "./WpIcon";
import WpCtas from "./WpCtas";

const continuous = ["Ongoing water demand", "A hidden leak", "Can't reach target pressure", "Pressure-control issue", "Not enough supply", "Pump or system fault"];
const cycling = ["Pressure-control behaviour", "A leak letting pressure drop", "Pressure tank losing its charge", "Demand changes", "System set-up"];
const upstairs = ["Building height", "Tank location", "Pump configuration", "Pipe length", "System design", "Demand on other floors"];

export default function WpPressure() {
  const [stage, setStage] = useState(wpPressureStages[0].key);
  const s = wpPressureStages.find((x) => x.key === stage)!;
  const idx = wpPressureStages.findIndex((x) => x.key === stage);

  return (
    <section id="low-pressure" aria-label="Low pressure, continuous running and cycling" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-300">Low pressure</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">Low water pressure? Don&rsquo;t automatically blame the pump.</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            Pressure can be lost at any stage between the tank and your tap.
            Choose a stage to see what&rsquo;s checked there.
          </p>
        </div>

        {/* Stage selector drawn as a pipeline */}
        <div role="radiogroup" aria-label="Stage of the water system" className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-5">
          {wpPressureStages.map((x, i) => {
            const on = x.key === stage;
            return (
              <button
                key={x.key}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => setStage(x.key)}
                className={`focus-ring relative rounded-xl border px-3 py-4 text-left text-sm font-semibold transition-colors ${
                  on ? "border-glass-300 bg-glass-300 text-ink-950" : i < idx ? "border-glass-300/40 bg-glass-900" : "border-sand-100/15 bg-ink-900 hover:border-glass-300/60"
                }`}
              >
                <span className="block font-mono text-[11px] font-normal opacity-70">{String(i + 1).padStart(2, "0")}</span>
                {x.label}
              </button>
            );
          })}
        </div>
        <div key={s.key} className="mt-4 animate-fadeIn rounded-2xl bg-sand-50 p-6 text-ink-900" aria-live="polite">
          <h3 className="font-serif text-2xl">{s.label}: what&rsquo;s checked</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
            {s.checks.map((c) => (
              <li key={c} className="flex gap-2 text-sm">
                <WpIcon name="search" className="mt-0.5 h-4 w-4 flex-none text-glass-700" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-ink-900 p-6">
            <h2 className="font-serif text-2xl tracking-tight">Why does my water pump keep running?</h2>
            <ul className="mt-4 space-y-1.5 text-sm text-ink-300">
              {continuous.map((c) => <li key={c}>{c}</li>)}
            </ul>
            <p className="mt-4 text-sm font-medium text-glass-300">Don&rsquo;t assume the pump itself needs replacing.</p>
          </div>
          <div className="rounded-2xl bg-ink-900 p-6">
            <h2 className="font-serif text-2xl tracking-tight">Why does the pump keep turning on and off?</h2>
            <ul className="mt-4 space-y-1.5 text-sm text-ink-300">
              {cycling.map((c) => <li key={c}>{c}</li>)}
            </ul>
            <p className="mt-4 text-sm text-ink-300">Frequent short cycling wears the motor and switch — it&rsquo;s worth having checked.</p>
          </div>
          <div className="rounded-2xl bg-ink-900 p-6">
            <h2 className="font-serif text-2xl tracking-tight">Weak water pressure upstairs?</h2>
            <ul className="mt-4 space-y-1.5 text-sm text-ink-300">
              {upstairs.map((c) => <li key={c}>{c}</li>)}
            </ul>
            <p className="mt-4 text-sm text-ink-300">We can&rsquo;t promise a specific improvement before assessing the system.</p>
          </div>
        </div>
        <WpCtas tone="dark" className="mt-10" primaryLabel="Request a Water Pressure Assessment" />
      </div>
    </section>
  );
}
