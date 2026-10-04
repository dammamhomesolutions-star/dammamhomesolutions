"use client";

import { useState } from "react";
import { spJourney } from "@/lib/swimming-pool";
import SpCtas from "./SpCtas";

// Horizontal project journey; each step opens a short detail panel.
export default function SpJourney() {
  const [step, setStep] = useState(0);

  return (
    <section id="journey" aria-labelledby="sp-journey" className="bg-teal-900 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-300">The journey</p>
        <h2 id="sp-journey" className="mt-4 max-w-2xl font-serif text-3xl tracking-tight sm:text-5xl">From &ldquo;something&rsquo;s wrong&rdquo; to ready again</h2>
        <ol className="relative mt-12 grid grid-cols-3 gap-y-6 sm:grid-cols-6" aria-label="Project steps">
          <span aria-hidden="true" className="absolute left-[8%] right-[8%] top-7 hidden h-0.5 bg-sand-100/15 sm:block" />
          <span aria-hidden="true" className="absolute left-[8%] top-7 hidden h-0.5 bg-teal-300 transition-all duration-500 sm:block" style={{ width: `${(step / (spJourney.length - 1)) * 84}%` }} />
          {spJourney.map((s, i) => (
            <li key={s.title} className="relative">
              <button type="button" aria-current={step === i ? "step" : undefined} onClick={() => setStep(i)} className="focus-ring mx-auto flex w-full flex-col items-center gap-3 rounded-xl px-1 py-1 text-center">
                <span className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full font-mono text-sm transition-all ${i <= step ? "bg-teal-300 text-ink-950" : "bg-ink-950 text-teal-100 ring-1 ring-sand-100/20"} ${i === step ? "scale-110 shadow-[0_0_0_6px_rgba(143,196,196,0.25)]" : ""}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`text-sm leading-tight ${i === step ? "font-semibold text-sand-50" : "text-teal-100/80"}`}>{s.title}</span>
              </button>
            </li>
          ))}
        </ol>
        <div key={step} className="mx-auto mt-8 max-w-xl animate-fadeIn rounded-[1.75rem] bg-ink-950/50 p-6 text-center ring-1 ring-sand-100/10" aria-live="polite">
          <p className="font-serif text-2xl">{spJourney[step].title}</p>
          <p className="mt-2 text-[15px] text-teal-100">{spJourney[step].body}</p>
        </div>
        <p className="mt-6 text-center text-sm text-teal-100/80">Our workmanship is covered by a warranty — terms are in your quote.</p>
        <div className="mt-8 flex justify-center"><SpCtas /></div>
      </div>
    </section>
  );
}
