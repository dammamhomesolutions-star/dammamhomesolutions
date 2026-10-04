"use client";

import { useState } from "react";
import { dcIntents } from "@/lib/deep-cleaning";
import DcIcon from "./DcIcon";
import DcCtas from "./DcCtas";

export default function DcDecisionTool() {
  const [key, setKey] = useState<string | null>(null);
  const pick = dcIntents.find((i) => i.key === key) ?? null;

  return (
    <section id="which-cleaning" aria-labelledby="dc-which" className="border-b border-ink-900/10 bg-mint-900 py-20 text-sand-50 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <p className="section-label !text-mint-300">Start here</p>
          <h2 id="dc-which" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">What cleaning do I need?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-mint-100/90">
            Pick the situation that sounds most like yours.
          </p>
        </div>

        <div className="lg:col-span-7">
          <fieldset>
            <legend className="sr-only">Your situation</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {dcIntents.map((i) => {
                const on = key === i.key;
                return (
                  <label
                    key={i.key}
                    className={`group flex cursor-pointer items-center gap-3 rounded-2xl border p-4 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-mint-300 ${
                      on ? "border-mint-300 bg-mint-300 text-ink-950" : "border-sand-100/15 bg-mint-800/60 hover:border-mint-300/60"
                    }`}
                  >
                    <input type="radio" name="dc-intent" value={i.key} checked={on} onChange={() => setKey(i.key)} className="sr-only" />
                    <DcIcon name={i.icon} className="h-6 w-6 flex-none" />
                    {i.label}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6 min-h-[9rem] rounded-2xl bg-sand-50 p-6 text-ink-900" aria-live="polite">
            {pick ? (
              <div key={pick.key} className="animate-fadeIn">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint-700">Recommended</p>
                <p className="mt-2 font-serif text-2xl">{pick.service}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{pick.why}</p>
                <DcCtas className="mt-5" />
              </div>
            ) : (
              <p className="text-sm text-ink-600">Your recommendation will appear here.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
