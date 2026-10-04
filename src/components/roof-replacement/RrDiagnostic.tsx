"use client";

import { useState } from "react";
import { rrDiagnoses } from "@/lib/roof-replacement";
import RrIcon from "./RrIcon";
import RrCtas from "./RrCtas";

export default function RrDiagnostic() {
  const [key, setKey] = useState(rrDiagnoses[0].key);
  const d = rrDiagnoses.find((x) => x.key === key)!;

  return (
    <section aria-labelledby="rr-diag" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">What could be wrong?</p>
          <h2 id="rr-diag" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Start with what you&rsquo;ve noticed
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            This isn&rsquo;t a diagnosis — only an inspection can confirm the
            cause. It shows what a symptom may indicate and what should be
            checked.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <fieldset className="lg:col-span-4">
            <legend className="text-sm font-semibold text-ink-900">I have…</legend>
            <div className="mt-3 grid gap-2">
              {rrDiagnoses.map((x) => (
                <label
                  key={x.key}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-600 ${
                    key === x.key ? "border-teal-700 bg-teal-100 text-ink-950" : "border-ink-900/10 bg-sand-100/50 text-ink-700 hover:border-ink-900/30"
                  }`}
                >
                  <input type="radio" name="rr-diagnostic" value={x.key} checked={key === x.key} onChange={() => setKey(x.key)} className="h-4 w-4 accent-teal-700" />
                  {x.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div key={d.key} className="animate-fadeIn rounded-2xl bg-ink-950 p-6 text-sand-100 sm:p-8 lg:col-span-8" aria-live="polite">
            <h3 className="font-serif text-2xl text-sand-50">{d.label}</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">Possible causes</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {d.causes.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-300" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">What should be checked</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {d.check.map((c) => (
                    <li key={c} className="flex gap-2">
                      <RrIcon name="search" className="mt-0.5 h-4 w-4 flex-none text-teal-300" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 rounded-xl bg-sand-50/5 p-4 text-sm leading-relaxed">
              <span className="font-semibold text-sand-50">Possible next step: </span>
              {d.next}
            </p>
            <RrCtas tone="dark" className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
