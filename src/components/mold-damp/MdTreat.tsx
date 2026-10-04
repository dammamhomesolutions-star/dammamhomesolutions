"use client";

import { useState } from "react";
import { mdPaths, mdSituations, mdTreatment } from "@/lib/mold-damp";
import { Spec } from "./MdUi";

// Treatment journey (layered steps) and a treatment-vs-repair chooser.
export default function MdTreat() {
  const [step, setStep] = useState(0);
  const [sits, setSits] = useState<string[]>([]);
  const rec = new Set(mdSituations.filter((s) => sits.includes(s.key)).flatMap((s) => s.paths));

  return (
    <section id="treatment" aria-labelledby="md-treat" className="scroll-mt-20 border-t border-ink-900/10 bg-glass-100/60 py-20 sm:py-28">
      <div className="container-edge">
        <Spec code="S-09">Treatment journey</Spec>
        <h2 id="md-treat" className="mt-4 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Treatment depends on the situation</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-600">
          There&rsquo;s no single product or spray that fixes damp. A proper treatment
          follows the condition from assessment to restored surface.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <ol className="space-y-1.5 lg:col-span-5" aria-label="Treatment steps">
            {mdTreatment.map((t, i) => (
              <li key={t.n} style={{ marginLeft: `${Math.min(i, 6) * 6}px` }}>
                <button type="button" aria-pressed={step === i} aria-controls="md-step-panel" onClick={() => setStep(i)} className={`focus-ring flex w-full items-center gap-4 rounded-lg border px-4 py-3 text-left transition-colors ${step === i ? "border-glass-800 bg-glass-900 text-sand-50" : "border-ink-900/10 bg-sand-50 text-ink-900 hover:border-glass-600"}`}>
                  <span className={`font-mono text-xs ${step === i ? "text-glass-300" : "text-glass-700"}`}>{t.n}</span>
                  <span className="text-sm font-semibold">{t.title}</span>
                </button>
              </li>
            ))}
          </ol>
          <div id="md-step-panel" aria-live="polite" className="lg:col-span-7">
            <div className="relative h-full rounded-2xl border border-glass-700/20 bg-sand-50 p-6 sm:p-10">
              <p className="font-mono text-6xl font-light text-glass-300 sm:text-8xl">{mdTreatment[step].n}</p>
              <h3 className="mt-4 font-serif text-3xl text-ink-950">{mdTreatment[step].title}</h3>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-700">{mdTreatment[step].text}</p>
              <div aria-hidden="true" className="mt-8 flex gap-1">
                {mdTreatment.map((t, i) => <span key={t.n} className={`h-1 flex-1 rounded-full ${i <= step ? "bg-glass-700" : "bg-glass-200"}`} />)}
              </div>
              <ul className="sr-only">{mdTreatment.map((t) => <li key={t.n}>{t.n} {t.title}: {t.text}</li>)}</ul>
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-ink-500">We don&rsquo;t publish treatment recipes or chemical mixes — products are chosen for the material and condition, and applied with appropriate protection.</p>

        <div className="mt-24 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="font-serif text-2xl tracking-tight text-ink-950 sm:text-4xl">Treatment or repair?</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600">Pick what describes your situation. Often the answer is more than one.</p>
            <div className="mt-5 space-y-2" role="group" aria-label="Your situation">
              {mdSituations.map((s) => {
                const on = sits.includes(s.key);
                return (
                  <label key={s.key} className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-600 ${on ? "border-glass-800 bg-glass-900 text-sand-50" : "border-ink-900/10 bg-sand-50 text-ink-800 hover:border-glass-600"}`}>
                    <input type="checkbox" checked={on} onChange={() => setSits((x) => (on ? x.filter((y) => y !== s.key) : [...x, s.key]))} className="sr-only" />
                    <span aria-hidden="true" className={`flex h-4 w-4 flex-none items-center justify-center rounded border ${on ? "border-glass-300 bg-glass-300 text-glass-900" : "border-ink-900/30"}`}>{on && "✓"}</span>
                    {s.label}
                  </label>
                );
              })}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8" aria-live="polite">
            {mdPaths.map((p) => {
              const on = rec.has(p.key);
              const dim = rec.size > 0 && !on;
              return (
                <article key={p.key} className={`rounded-2xl border p-6 transition-all ${on ? "border-glass-700 bg-sand-50 shadow-md" : "border-ink-900/10 bg-sand-50"} ${dim ? "opacity-50" : ""}`}>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-serif text-xl text-ink-950">{p.label}</h4>
                    {on && <span className="rounded-full bg-glass-800 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-sand-50">Likely</span>}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">{p.when}</p>
                </article>
              );
            })}
            <p className="text-xs text-ink-500 sm:col-span-2">A guide to the conversation, not a diagnosis. We confirm the right combination on site.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
