"use client";

import { useState } from "react";
import { carpentryIssues, type CarpentryIssueId } from "@/lib/carpentry-issues";
import { buildWhatsAppLink } from "@/lib/site-config";
import CarpentryIcon from "./CarpentryIcon";
import AlignmentDiagram from "./AlignmentDiagram";

export default function WhatIsntWorkingExplorer() {
  const [activeId, setActiveId] = useState<CarpentryIssueId>(carpentryIssues[0].id);
  const active = carpentryIssues.find((i) => i.id === activeId)!;

  return (
    <section id="whats-not-working" className="border-y border-ink-900/10 bg-stone-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-amber-800">Start here</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What isn&rsquo;t fitting, closing or working?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Pick what&rsquo;s closest. It helps us understand the problem
            before anyone visits.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div role="tablist" aria-label="Door and carpentry issues" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {carpentryIssues.map((issue) => {
                const isActive = issue.id === activeId;
                return (
                  <button
                    key={issue.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`issue-panel-${issue.id}`}
                    onClick={() => setActiveId(issue.id)}
                    className={`focus-ring flex flex-col items-center gap-2 rounded-2xl border px-3 py-4 text-center transition-all ${
                      isActive
                        ? "border-amber-700 bg-amber-800/10 text-amber-900 shadow-[inset_0_2px_0_rgba(0,0,0,0.08)]"
                        : "border-ink-900/10 bg-sand-50 text-ink-700 hover:border-ink-900/25"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full border ${
                        isActive ? "border-amber-700 bg-amber-700 text-sand-50" : "border-ink-900/15 bg-stone-100 text-ink-600"
                      }`}
                    >
                      <CarpentryIcon id={issue.id} />
                    </span>
                    <span className="text-xs font-medium leading-tight">{issue.label}</span>
                  </button>
                );
              })}
            </div>

            <div
              id={`issue-panel-${active.id}`}
              role="tabpanel"
              key={active.id}
              className="mt-6 animate-fadeUp rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-7"
            >
              <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
              <p className="mt-1 text-sm italic text-ink-500">&ldquo;{active.prompt}&rdquo;</p>
              <p className="mt-3 leading-relaxed text-ink-700">{active.panel}</p>

              {active.id === "wood-damage" && (
                <p className="mt-3 text-sm text-ink-500">
                  If the surrounding wall is also damaged, you may need{" "}
                  <a href="/painting-wall-repair/" className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-amber-700">
                    wall repair and painting
                  </a>{" "}
                  as well.
                </p>
              )}

              <a
                href={buildWhatsAppLink(active.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-5 inline-flex items-center rounded-full bg-rust-700 px-5 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
              >
                WhatsApp This Problem
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-ink-900/10 bg-ink-950 p-7 text-center sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sand-300">
              Alignment — illustrative only
            </p>
            <div className="mt-6">
              <AlignmentDiagram highlight={active.highlight} />
            </div>
            <p className="mt-6 text-xs text-ink-500">
              The exact issue depends on the door and hardware — this just
              shows roughly where this kind of problem tends to sit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
