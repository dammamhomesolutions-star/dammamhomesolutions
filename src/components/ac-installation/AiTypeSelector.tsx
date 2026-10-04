"use client";

import { useState } from "react";
import { aiTypes } from "@/lib/ac-installation";
import AiIcon from "./AiIcon";
import AiCtas from "./AiCtas";

export default function AiTypeSelector() {
  const [key, setKey] = useState("split");
  const t = aiTypes.find((x) => x.key === key)!;

  return (
    <section id="ac-types" aria-labelledby="ai-types" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-300">AC type</p>
          <h2 id="ai-types" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">Which AC installation do you need?</h2>
        </div>

        <div role="tablist" aria-label="AC type" className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-5">
          {aiTypes.map((x) => {
            const on = x.key === key;
            return (
              <button
                key={x.key}
                type="button"
                role="tab"
                id={`ai-tab-${x.key}`}
                aria-selected={on}
                aria-controls="ai-type-panel"
                onClick={() => setKey(x.key)}
                className={`focus-ring group flex flex-col items-center gap-2 rounded-2xl border px-3 py-4 text-center text-sm font-medium transition-colors ${
                  on ? "border-teal-300 bg-teal-300 text-ink-950" : "border-sand-100/15 bg-ink-900 text-sand-100 hover:border-teal-300/60"
                }`}
              >
                <AiIcon name={x.icon} className="h-7 w-7" />
                {x.label}
              </button>
            );
          })}
        </div>

        <div
          id="ai-type-panel"
          role="tabpanel"
          aria-labelledby={`ai-tab-${t.key}`}
          key={t.key}
          className="mt-6 grid animate-fadeIn gap-6 rounded-2xl bg-sand-50 p-6 text-ink-900 sm:p-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-4">
            <h3 className="font-serif text-2xl">{t.label}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">{t.application}</p>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">Installation considerations</p>
            <ul className="mt-3 space-y-1.5 text-sm text-ink-800">
              {t.considerations.map((c) => (
                <li key={c} className="flex gap-2">
                  <AiIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-700" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">Questions to ask</p>
            <ul className="mt-3 space-y-1.5 text-sm text-ink-700">
              {t.ask.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
        <AiCtas tone="dark" className="mt-8" />
      </div>
    </section>
  );
}
