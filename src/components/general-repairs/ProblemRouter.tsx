"use client";

import { useState } from "react";
import { whatsWrongOptions } from "@/lib/repair-router";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function ProblemRouter() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [secondStep, setSecondStep] = useState<string | null>(null);

  const active = whatsWrongOptions.find((o) => o.id === activeId) ?? null;
  const hasSecondStep = Boolean(active?.secondStepOptions?.length);

  const selectFirst = (id: string) => {
    setActiveId(id);
    setSecondStep(null);
  };

  const message = active
    ? `Hello Dammam Home Solutions, here's what I'm noticing: ${active.label}${
        secondStep ? ` — ${secondStep}` : ""
      }. `
    : "";

  return (
    <section id="whats-wrong" className="border-y border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">
            Start here
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            What&rsquo;s wrong at home?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            You don&rsquo;t have to name the trade. Just choose what
            you&rsquo;re noticing.
          </p>
        </div>

        <div role="tablist" aria-label="What's wrong" className="mt-10 flex flex-wrap gap-2.5">
          {whatsWrongOptions.map((option) => {
            const isActive = option.id === activeId;
            return (
              <button
                key={option.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => selectFirst(option.id)}
                className={`focus-ring rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-indigo-400 bg-indigo-400/10 text-indigo-200"
                    : "border-sand-100/15 text-ink-300 hover:border-sand-100/35"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {active && (
          <div key={active.id} className="mt-8 animate-fadeUp rounded-2xl border border-sand-100/15 bg-ink-900 p-7 sm:p-9">
            {hasSecondStep && !secondStep ? (
              <div>
                <p className="text-sm font-semibold text-sand-50">{active.secondStepQuestion}</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {active.secondStepOptions!.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSecondStep(opt)}
                      className="focus-ring rounded-full border border-sand-100/15 px-4 py-2 text-sm text-ink-300 transition-colors hover:border-indigo-400 hover:text-indigo-200"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="text-sm text-ink-400">
                    {active.label}
                    {secondStep ? ` → ${secondStep}` : ""}
                  </p>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink-200">{active.guidance}</p>

                  {active.links.length > 0 && (
                    <p className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-sm text-ink-400">
                      This may relate to:
                      {active.links.map((link, i) => (
                        <span key={link.href}>
                          <a
                            href={link.href}
                            className="text-indigo-300 underline underline-offset-4 hover:text-indigo-200"
                          >
                            {link.label}
                          </a>
                          {i < active.links.length - 1 ? "," : ""}
                        </span>
                      ))}
                    </p>
                  )}
                </div>

                <a
                  href={buildWhatsAppLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center justify-center rounded-full bg-rust-600 px-5 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
                >
                  Send Details on WhatsApp
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
