"use client";

import { useState } from "react";
import { scQuiz } from "@/lib/sofa-carpet-cleaning";
import ScCtas from "./ScCtas";

type Answers = Partial<Record<(typeof scQuiz)[number]["key"], string>>;

export default function ScDecisionTool() {
  const [a, setA] = useState<Answers>({});
  const done = scQuiz.every((q) => a[q.key]);

  const notes: string[] = [];
  if (a.material === "Unknown") notes.push("A photo of the care label (if there is one) helps identify the material.");
  if (a.material === "Leather") notes.push("Leather is cleaned with leather-appropriate products rather than wet extraction.");
  if (a.problem === "Stains") notes.push("Note what the stain is, how old it is, and anything already used on it.");
  if (a.problem === "Odour" || a.problem === "Pet-related dirt") notes.push("Tell us if the odour comes from a specific spot — it helps find the source.");
  if (a.where === "Office" || a.where === "Commercial property") notes.push("We can plan the timing around business hours.");

  return (
    <section aria-labelledby="sc-quiz" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Decision tool</p>
          <h2 id="sc-quiz" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What cleaning do you need?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="space-y-7 lg:col-span-7">
            {scQuiz.map((q, qi) => (
              <fieldset key={q.key}>
                <legend className="flex items-center gap-3 text-base font-semibold text-ink-950">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-glass-800 font-mono text-xs text-sand-50">{qi + 1}</span>
                  {q.label}
                </legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {q.options.map((o) => {
                    const on = a[q.key] === o;
                    return (
                      <label
                        key={o}
                        className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-600 ${
                          on ? "border-glass-800 bg-glass-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-glass-600"
                        }`}
                      >
                        <input type="radio" name={`sc-quiz-${q.key}`} value={o} checked={on} onChange={() => setA((s) => ({ ...s, [q.key]: o }))} className="sr-only" />
                        {o}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28" aria-live="polite">
              {done ? (
                <div className="animate-fadeIn">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-glass-300">Next step</p>
                  <p className="mt-3 font-serif text-xl leading-snug">
                    Based on what you&rsquo;ve described, the next step is to
                    assess the material, condition and cleaning requirements.
                  </p>
                  {notes.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-ink-300">
                      {notes.map((n) => (
                        <li key={n}>{n}</li>
                      ))}
                    </ul>
                  )}
                  <ScCtas tone="dark" className="mt-6" quoteFirst />
                </div>
              ) : (
                <p className="text-sm text-ink-300">Answer the four questions to see the next step.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
