"use client";

import { useState } from "react";
import { aiQuiz } from "@/lib/ac-installation";
import AiCtas from "./AiCtas";

type Answers = Partial<Record<(typeof aiQuiz)[number]["key"], string>>;

// Step-by-step: one question at a time, with a back button.
export default function AiDecisionTool() {
  const [a, setA] = useState<Answers>({});
  const [step, setStep] = useState(0);
  const done = step >= aiQuiz.length;
  const q = aiQuiz[Math.min(step, aiQuiz.length - 1)];

  const notes: string[] = [];
  if (a.type === "Central / ducted") notes.push("Ducted systems always need a site visit to plan ducts, return air and equipment access.");
  if (a.install === "Replacing existing AC") notes.push("We'll check whether existing piping, drainage, power and mounting can be reused.");
  if (a.property === "Apartment") notes.push("Check any building or landlord rules for outdoor units.");
  if (a.rooms === "4–6" || a.rooms === "7+" || a.install === "Multiple units") notes.push("Multiple units are planned together — outdoor positions and pipe routes first.");

  return (
    <section aria-labelledby="ai-quiz" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="section-label !text-teal-700">Decision tool</p>
          <h2 id="ai-quiz" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What AC installation do I need?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Five quick questions.</p>
          <ol className="mt-8 flex gap-2" aria-label="Progress">
            {aiQuiz.map((x, i) => (
              <li key={x.key} className={`h-1.5 flex-1 rounded-full ${i < step ? "bg-teal-700" : i === step ? "bg-teal-400" : "bg-sand-300"}`}>
                <span className="sr-only">{`${x.label}: ${a[x.key] ?? "not answered"}`}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-8" aria-live="polite">
            {!done ? (
              <fieldset key={q.key} className="animate-fadeIn">
                <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
                  Question {step + 1} of {aiQuiz.length}
                </legend>
                <p className="mt-2 font-serif text-2xl text-ink-950">{q.label}</p>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {q.options.map((o) => (
                    <button
                      key={o}
                      type="button"
                      onClick={() => {
                        setA((s) => ({ ...s, [q.key]: o }));
                        setStep((s) => s + 1);
                      }}
                      className={`focus-ring rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                        a[q.key] === o ? "border-teal-700 bg-teal-100" : "border-ink-900/15 hover:border-teal-600"
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <button type="button" onClick={() => setStep((s) => s - 1)} className="focus-ring mt-5 rounded-sm text-sm font-semibold text-ink-600 underline underline-offset-4">
                    Back
                  </button>
                )}
              </fieldset>
            ) : (
              <div className="animate-fadeIn">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Your answers</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {aiQuiz.map((x) => (
                    <li key={x.key} className="rounded-full bg-teal-100 px-3 py-1 text-xs text-teal-900">{a[x.key]}</li>
                  ))}
                </ul>
                <p className="mt-5 font-serif text-xl leading-snug text-ink-950">
                  Your installation requirements depend on the equipment,
                  property and existing infrastructure. A site assessment can
                  confirm the right installation scope.
                </p>
                {notes.length > 0 && (
                  <ul className="mt-4 space-y-1.5 text-sm text-ink-600">
                    {notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                )}
                <AiCtas className="mt-6" primaryLabel="Request Installation Assessment" />
                <button type="button" onClick={() => { setA({}); setStep(0); }} className="focus-ring mt-4 rounded-sm text-sm font-semibold text-ink-600 underline underline-offset-4">
                  Start again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
