"use client";

import { useMemo, useState } from "react";
import {
  conditionAnswerOptions,
  conditionQuestions,
  type ConditionAnswer,
  type PropertyAreaId,
} from "@/lib/property-maintenance";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function PmConditionCheck() {
  const [answers, setAnswers] = useState<Partial<Record<PropertyAreaId, ConditionAnswer>>>({});

  const mentioned = useMemo(
    () =>
      conditionQuestions.filter((q) => {
        const answer = answers[q.id];
        return answer === "Yes" || answer === "Not sure";
      }),
    [answers]
  );

  const answeredCount = Object.keys(answers).length;

  const message = useMemo(() => {
    const lines = mentioned.map((q) => `- ${q.category}`);
    return `Hello Dammam Home Solutions, I'd like to send some property details.\nAreas I've noticed something with:\n${
      lines.length > 0 ? lines.join("\n") : "- (none selected)"
    }`;
  }, [mentioned]);

  return (
    <section id="condition-check" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">Property condition check</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What have you noticed lately?
          </h2>
          <p className="mt-4 text-ink-600">
            A few quick questions about the property — not to diagnose
            anything, just to put together useful details before you get in
            touch.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
          <div className="divide-y divide-ink-900/10 border-y border-ink-900/10">
            {conditionQuestions.map((q) => {
              const currentAnswer = answers[q.id];
              return (
                <div key={q.id} className="py-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
                  <div className="max-w-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-400">
                      {q.category}
                    </p>
                    <p className="mt-1.5 text-[15px] text-ink-900">{q.question}</p>
                  </div>
                  <div
                    role="radiogroup"
                    aria-label={q.question}
                    className="mt-4 flex gap-2 sm:mt-0 sm:flex-none"
                  >
                    {conditionAnswerOptions.map((option) => {
                      const isSelected = currentAnswer === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: option }))}
                          className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                            isSelected
                              ? "border-moss-700 bg-moss-700 text-sand-50"
                              : "border-ink-900/15 text-ink-700 hover:border-moss-600"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-md border border-ink-900/10 bg-sand-100/70 p-6 sm:p-7 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
              Your maintenance request
            </p>

            {answeredCount === 0 ? (
              <p className="mt-4 text-sm text-ink-500">
                Answer the questions to build a short summary of what to
                mention when you get in touch.
              </p>
            ) : mentioned.length === 0 ? (
              <p className="mt-4 text-sm text-ink-500">
                Nothing flagged so far. If that changes, the areas to mention
                will appear here.
              </p>
            ) : (
              <>
                <p className="mt-4 text-sm text-ink-600">Areas you mentioned:</p>
                <ul className="mt-3 space-y-2">
                  {mentioned.map((q) => (
                    <li key={q.id} className="flex items-center gap-2.5 text-sm font-medium text-ink-900">
                      <span className="h-1 w-1 rounded-full bg-moss-600" aria-hidden="true" />
                      {q.category}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-ink-500">
                  These are useful details to include when contacting us —
                  not a diagnosis.
                </p>
              </>
            )}

            <a
              href={buildWhatsAppLink(message)}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className={`focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                mentioned.length > 0
                  ? "bg-ink-950 text-sand-50 hover:bg-ink-900"
                  : "bg-ink-900/10 text-ink-500"
              }`}
            >
              Send Property Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
