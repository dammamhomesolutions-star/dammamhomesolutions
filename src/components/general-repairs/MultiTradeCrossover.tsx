"use client";

import { useState } from "react";

interface Branch {
  id: string;
  symptom: string;
  destinations: { label: string; href?: string }[];
}

const branches: Branch[] = [
  {
    id: "wall-stain",
    symptom: "Wall stain",
    destinations: [
      { label: "Plumbing", href: "/plumbing-repair/" },
      { label: "Waterproofing", href: "/waterproofing/" },
      { label: "Painting", href: "/painting-wall-repair/" },
    ],
  },
  {
    id: "damaged-cabinet",
    symptom: "Damaged cabinet",
    destinations: [
      { label: "Carpentry", href: "/carpentry-doors-locks/" },
      { label: "Hardware" },
      { label: "General repair", href: "/general-home-repairs/" },
    ],
  },
  {
    id: "bathroom-issue",
    symptom: "Bathroom issue",
    destinations: [
      { label: "Plumbing", href: "/plumbing-repair/" },
      { label: "Waterproofing", href: "/waterproofing/" },
      { label: "Tile / surface repair", href: "/bathroom-kitchen-repair/" },
    ],
  },
  {
    id: "door-problem",
    symptom: "Door problem",
    destinations: [
      { label: "Carpentry", href: "/carpentry-doors-locks/" },
      { label: "Hardware" },
      { label: "Lock / handle repair", href: "/carpentry-doors-locks/" },
    ],
  },
];

export default function MultiTradeCrossover() {
  const [activeId, setActiveId] = useState(branches[0].id);
  const active = branches.find((b) => b.id === activeId)!;

  return (
    <section className="border-y border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">
            Why one visible problem isn&rsquo;t one trade
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            One problem can cross more than one trade.
          </h2>
        </div>

        <div role="tablist" aria-label="Symptom" className="mt-10 flex flex-wrap gap-2.5">
          {branches.map((b) => (
            <button
              key={b.id}
              role="tab"
              aria-selected={b.id === activeId}
              onClick={() => setActiveId(b.id)}
              className={`focus-ring rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                b.id === activeId
                  ? "border-indigo-400 bg-indigo-400/10 text-indigo-200"
                  : "border-sand-100/15 text-ink-300 hover:border-sand-100/35"
              }`}
            >
              {b.symptom}
            </button>
          ))}
        </div>

        <div key={active.id} className="mt-10 animate-fadeUp">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span className="rounded-full bg-sand-50 px-5 py-2.5 font-serif text-base text-ink-950">
              {active.symptom}
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <span aria-hidden="true" className="hidden text-indigo-400 sm:inline">
                →
              </span>
              {active.destinations.map((d) =>
                d.href ? (
                  <a
                    key={d.label}
                    href={d.href}
                    className="focus-ring rounded-full border border-indigo-400/40 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-200 underline-offset-4 hover:underline"
                  >
                    {d.label}
                  </a>
                ) : (
                  <span key={d.label} className="rounded-full border border-sand-100/15 px-4 py-2 text-sm text-ink-300">
                    {d.label}
                  </span>
                )
              )}
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm text-ink-400">
            This isn&rsquo;t a remote diagnosis — it&rsquo;s to show why
            describing the symptom is more useful than guessing the trade.
          </p>
        </div>
      </div>
    </section>
  );
}
