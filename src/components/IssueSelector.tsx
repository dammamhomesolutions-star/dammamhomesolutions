"use client";

import { useState } from "react";
import { issueCategories, type IssueId } from "@/lib/issues";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function IssueSelector() {
  const [activeId, setActiveId] = useState<IssueId>(issueCategories[0].id);
  const active = issueCategories.find((c) => c.id === activeId)!;

  return (
    <section id="what-needs-fixing" className="border-y border-ink-900/10 bg-sand-100/60">
      <div className="container-edge py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="section-label">What needs attention?</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Tell us what you&rsquo;re dealing with.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-700">
            We&rsquo;ll help identify the right service. Pick the area closest
            to the problem — you don&rsquo;t need to know the exact trade
            name.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Property issue categories"
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {issueCategories.map((cat) => {
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`issue-panel-${cat.id}`}
                onClick={() => setActiveId(cat.id)}
                className={`focus-ring rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-ink-950 bg-ink-950 text-sand-50"
                    : "border-ink-900/20 bg-transparent text-ink-800 hover:border-ink-900/40"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div
          id={`issue-panel-${active.id}`}
          role="tabpanel"
          key={active.id}
          className="mt-8 animate-fadeUp rounded-2xl border border-ink-900/10 bg-sand-50 p-7 sm:p-9"
        >
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
            <div>
              <h3 className="font-serif text-xl text-ink-950">{active.label}</h3>
              <p className="mt-2 text-ink-600">{active.short}</p>
              <ul className="mt-5 space-y-2">
                {active.examples.map((ex) => (
                  <li key={ex} className="flex gap-3 text-sm text-ink-700">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-rust-600" />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:w-56">
              <a
                href={buildWhatsAppLink(active.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-rust-700 px-5 py-3 text-center text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
              >
                Send this problem on WhatsApp
              </a>
              <a
                href={active.href}
                className="focus-ring inline-flex items-center justify-center rounded-full border border-ink-900/20 px-5 py-3 text-center text-sm font-medium text-ink-800 hover:bg-ink-900/5"
              >
                More about this service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
