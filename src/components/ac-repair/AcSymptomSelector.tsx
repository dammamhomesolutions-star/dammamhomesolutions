"use client";

import { useState } from "react";
import { acSymptoms, type SymptomId } from "@/lib/ac-symptoms";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function AcSymptomSelector() {
  const [activeId, setActiveId] = useState<SymptomId>(acSymptoms[0].id);
  const active = acSymptoms.find((s) => s.id === activeId)!;

  return (
    <section id="what-is-it-doing" className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
            Start here
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            What is your AC doing?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Pick the option closest to what you&rsquo;re noticing. It helps
            us understand the problem before we respond.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="AC symptoms"
          className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-4"
        >
          {acSymptoms.map((s) => {
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`symptom-panel-${s.id}`}
                onClick={() => setActiveId(s.id)}
                className={`focus-ring rounded-xl border px-4 py-3.5 text-left transition-colors ${
                  isActive
                    ? "border-sky-500 bg-sky-500/10"
                    : "border-sand-100/15 hover:border-sand-100/35"
                }`}
              >
                <span
                  className={`block text-sm font-semibold ${
                    isActive ? "text-sky-400" : "text-sand-50"
                  }`}
                >
                  {s.label}
                </span>
                <span className="mt-1 block text-xs leading-snug text-ink-400">
                  {s.prompt}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id={`symptom-panel-${active.id}`}
          role="tabpanel"
          key={active.id}
          className="mt-8 animate-fadeUp rounded-2xl border border-sand-100/15 bg-ink-900 p-7 sm:p-9"
        >
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
            <div>
              <h3 className="font-serif text-xl text-sand-50">{active.label}</h3>
              <p className="mt-1 text-sm italic text-ink-400">
                &ldquo;{active.prompt}&rdquo;
              </p>
              <p className="mt-4 leading-relaxed text-ink-300">{active.panel}</p>

              {active.id === "water-leaking" && (
                <p className="mt-4 text-sm text-ink-400">
                  Not every water problem comes from the AC. If you&rsquo;re
                  dealing with a wider property leak, see our{" "}
                  <a
                    href="/water-leak-repair/"
                    className="focus-ring rounded-sm text-sky-400 underline underline-offset-4 hover:text-sky-300"
                  >
                    water leak repair service
                  </a>
                  .
                </p>
              )}

              {active.id === "keeps-stopping" && (
                <p className="mt-4 text-sm text-ink-400">
                  If other appliances are affected too, it may be worth
                  checking the property&rsquo;s{" "}
                  <a
                    href="/electrical-repair/"
                    className="focus-ring rounded-sm text-sky-400 underline underline-offset-4 hover:text-sky-300"
                  >
                    electrical supply
                  </a>{" "}
                  alongside the AC itself.
                </p>
              )}
            </div>

            <div className="sm:w-56">
              <a
                href={buildWhatsAppLink(active.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-center text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
              >
                Send this problem on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
