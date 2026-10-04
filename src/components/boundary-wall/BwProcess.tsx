"use client";

import { useState } from "react";
import { bwAssessment, bwFlow } from "@/lib/boundary-wall";
import BwCtas from "./BwCtas";

export default function BwProcess() {
  const [step, setStep] = useState(0);

  return (
    <section id="process" aria-label="Assessment and repair process" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-300">How it works</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">What happens during a wall assessment?</h2>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bwAssessment.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-sand-100/10 bg-ink-900 p-5">
              <span className="font-mono text-xs text-clay-300">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-[15px] font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-300">{s.body}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-16 font-serif text-3xl tracking-tight">The repair, step by step</h2>
        <ol className="relative mt-8 grid grid-cols-3 gap-2 sm:grid-cols-6" aria-label="Repair steps">
          <span aria-hidden="true" className="absolute left-0 right-0 top-5 hidden h-px bg-sand-100/15 sm:block" />
          <span aria-hidden="true" className="absolute left-0 top-5 hidden h-px bg-clay-300 transition-all duration-500 sm:block" style={{ width: `${(step / (bwFlow.length - 1)) * 100}%` }} />
          {bwFlow.map((f, i) => (
            <li key={f.label} className="relative">
              <button
                type="button"
                aria-current={step === i ? "step" : undefined}
                onClick={() => setStep(i)}
                className="focus-ring flex w-full flex-col items-center gap-2 rounded-lg py-1 text-sm"
              >
                <span className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full font-mono text-xs transition-colors ${i <= step ? "bg-clay-300 text-ink-950" : "bg-ink-900 text-ink-300 ring-1 ring-sand-100/20"}`}>{i + 1}</span>
                <span className={i === step ? "font-semibold text-sand-50" : "text-ink-300"}>{f.label}</span>
              </button>
            </li>
          ))}
        </ol>
        <p key={step} className="mx-auto mt-6 max-w-xl animate-fadeIn rounded-xl bg-ink-900 p-5 text-center text-[15px] leading-relaxed text-ink-300" aria-live="polite">
          <span className="font-semibold text-sand-50">{bwFlow[step].label}: </span>{bwFlow[step].body}
        </p>
        <p className="mt-6 text-center text-sm text-ink-400">Our workmanship is covered by a warranty — terms are in your quote.</p>
        <div className="mt-8 flex justify-center">
          <BwCtas tone="dark" primaryLabel="Discuss Your Repair" />
        </div>
      </div>
    </section>
  );
}
