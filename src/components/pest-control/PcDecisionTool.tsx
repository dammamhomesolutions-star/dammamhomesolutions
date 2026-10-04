"use client";

import { useState } from "react";
import { pcQuizHow, pcQuizWhat, pcQuizWhere } from "@/lib/pest-control";
import PcCtas from "./PcCtas";

const questions = [
  { key: "what", label: "What are you seeing?", options: pcQuizWhat },
  { key: "where", label: "Where?", options: pcQuizWhere },
  { key: "how", label: "How often?", options: pcQuizHow },
] as const;

type Answers = { what?: string; where?: string; how?: string };

function adviceFor(a: Required<Answers>) {
  const lines: string[] = [];
  const heavy = a.how === "Daily / repeatedly" || a.how === "Large infestation" || a.where === "Multiple areas";

  if (a.what === "Termites / wood damage") {
    lines.push("Avoid disturbing the affected wood, and photograph it from where it is.");
  } else if (a.what === "Rodents") {
    lines.push("Don't touch droppings, nests or rodents, and keep children and pets away from the area.");
  } else if (a.what === "Bed bugs") {
    lines.push("Look for physical evidence — spotting, shed skins or live bugs — rather than relying on bites alone.");
  } else if (a.what === "Not sure") {
    lines.push("A clear photo is the most useful thing you can send.");
  } else {
    lines.push("Avoid spraying multiple products, which can scatter activity further.");
  }

  if (a.where === "Commercial area") {
    lines.push("For a business, ask about scheduled visits as well as the immediate treatment.");
  }

  const headline = heavy
    ? "Based on what you've described, an inspection is a sensible next step."
    : a.how === "Once"
      ? "A single sighting may not mean an infestation. Watch for repeat activity — and if it continues, an inspection may be appropriate."
      : "Based on what you've described, an inspection may be appropriate.";

  return { headline, lines };
}

export default function PcDecisionTool() {
  const [answers, setAnswers] = useState<Answers>({});
  const done = answers.what && answers.where && answers.how;
  const result = done ? adviceFor(answers as Required<Answers>) : null;

  return (
    <section aria-labelledby="pc-quiz" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">Decision tool</p>
          <h2 id="pc-quiz" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What should I do next?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Three quick questions. This is guidance, not a diagnosis.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            {questions.map((q, qi) => (
              <fieldset key={q.key}>
                <legend className="flex items-center gap-3 text-base font-semibold text-ink-950">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-moss-800 font-mono text-xs text-sand-50">{qi + 1}</span>
                  {q.label}
                </legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {q.options.map((o) => {
                    const on = answers[q.key] === o;
                    return (
                      <label
                        key={o}
                        className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-moss-600 ${
                          on ? "border-moss-800 bg-moss-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-moss-600"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`pc-quiz-${q.key}`}
                          value={o}
                          checked={on}
                          onChange={() => setAnswers((a) => ({ ...a, [q.key]: o }))}
                          className="sr-only"
                        />
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
              {result ? (
                <div className="animate-fadeIn">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-moss-200">Suggested next step</p>
                  <p className="mt-3 font-serif text-xl leading-snug">{result.headline}</p>
                  <ul className="mt-4 space-y-2 text-sm text-ink-300">
                    {result.lines.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                  <PcCtas tone="dark" className="mt-6" />
                </div>
              ) : (
                <p className="text-sm leading-relaxed text-ink-300">
                  Answer the three questions to see a suggested next step.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
