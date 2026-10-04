"use client";

import { useState } from "react";
import { faComplexity, faComplexityFactors, type FaLevel } from "@/lib/furniture-assembly";
import FaIcon from "./FaIcon";

export default function FaComplexity() {
  const [level, setLevel] = useState<FaLevel>("Moderate");
  const active = faComplexity.find((x) => x.level === level)!;
  const idx = faComplexity.findIndex((x) => x.level === level);

  return (
    <section aria-labelledby="fa-complex" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">Complexity</p>
          <h2 id="fa-complex" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">How complex is your furniture?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 gap-2" role="group" aria-label="Complexity level">
              {faComplexity.map((c, i) => (
                <button
                  key={c.level}
                  type="button"
                  aria-pressed={level === c.level}
                  onClick={() => setLevel(c.level)}
                  className={`focus-ring flex flex-col items-center gap-2 rounded-2xl border px-2 py-4 text-sm font-semibold transition-colors ${
                    level === c.level ? "border-walnut-800 bg-walnut-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-walnut-600"
                  }`}
                >
                  <span className="flex items-end gap-1" aria-hidden="true">
                    {[0, 1, 2].map((n) => (
                      <span key={n} className={`w-2.5 rounded-sm ${n <= i ? (level === c.level ? "bg-walnut-300" : "bg-walnut-600") : "bg-ink-900/10"}`} style={{ height: `${10 + n * 7}px` }} />
                    ))}
                  </span>
                  {c.level}
                </button>
              ))}
            </div>
            <div key={level} className="mt-5 animate-fadeIn rounded-2xl border border-ink-900/10 bg-walnut-100/50 p-6" aria-live="polite">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-walnut-700">Examples</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {active.examples.map((e) => (
                  <li key={e} className="rounded-full bg-sand-50 px-3 py-1 text-sm text-ink-800 ring-1 ring-ink-900/10">{e}</li>
                ))}
              </ul>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">{active.body}</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-sand-50" aria-hidden="true">
                <div className="h-2 rounded-full bg-walnut-600 transition-[width] duration-500" style={{ width: `${(idx + 1) * 33.3}%` }} />
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
              <FaIcon name="tools" className="h-7 w-7 text-walnut-300" />
              <h3 className="mt-3 font-serif text-2xl">What really decides complexity</h3>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {faComplexityFactors.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-sand-100"><FaIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-walnut-300" />{f}</li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-ink-400">We don&rsquo;t promise a fixed time from the category alone.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
