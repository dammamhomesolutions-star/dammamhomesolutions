"use client";

import { useState } from "react";
import { immediateDangerExamples } from "@/lib/emergency-repairs";

type Answer = "danger" | "property" | null;

export default function EhSafetyGate() {
  const [answer, setAnswer] = useState<Answer>(null);

  return (
    <section id="safety-check" className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-ember-700">Before anything else</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          First: is anyone or anything at immediate risk?
        </h2>

        <div role="radiogroup" aria-label="Immediate risk" className="mt-8 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            role="radio"
            aria-checked={answer === "danger"}
            onClick={() => setAnswer("danger")}
            className={`focus-ring rounded-md border px-6 py-5 text-left transition-colors ${
              answer === "danger"
                ? "border-ember-700 bg-ember-100/70"
                : "border-ink-900/15 hover:border-ember-600"
            }`}
          >
            <span className="block text-[15px] font-semibold text-ink-950">
              Yes — immediate danger
            </span>
            <span className="mt-1 block text-sm text-ink-600">
              Fire, a serious hazard, or someone at risk
            </span>
          </button>

          <button
            type="button"
            role="radio"
            aria-checked={answer === "property"}
            onClick={() => setAnswer("property")}
            className={`focus-ring rounded-md border px-6 py-5 text-left transition-colors ${
              answer === "property"
                ? "border-ink-800 bg-sand-50"
                : "border-ink-900/15 hover:border-ink-500"
            }`}
          >
            <span className="block text-[15px] font-semibold text-ink-950">
              No — property problem
            </span>
            <span className="mt-1 block text-sm text-ink-600">
              Nothing dangerous, just something that needs repair
            </span>
          </button>
        </div>

        {answer === "danger" && (
          <div className="mt-6 animate-fadeIn rounded-md border border-ember-700/40 bg-ember-100/50 p-6">
            <p className="font-medium text-ink-950">
              Contact the appropriate emergency service immediately. Do not
              wait for a home-repair company if there is an immediate threat
              to life or safety.
            </p>
            <p className="mt-3 text-sm text-ink-600">
              This can include: {immediateDangerExamples.join(", ").toLowerCase()}.
            </p>
          </div>
        )}

        {answer === "property" && (
          <div className="mt-6 animate-fadeIn rounded-md border border-ink-900/10 bg-sand-50 p-6">
            <p className="text-ink-800">
              Good — you can continue to the repair request below.
            </p>
            <a
              href="#request"
              className="focus-ring mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4 hover:text-ember-700"
            >
              Continue to the repair request
              <span aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
