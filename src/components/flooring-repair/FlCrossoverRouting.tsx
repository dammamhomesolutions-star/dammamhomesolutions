"use client";

import { useState } from "react";
import Link from "next/link";
import { flCrossoverExamples } from "@/lib/flooring-repair";

const linkMap: Record<string, string> = {
  Water: "/plumbing-repair/",
  Plumbing: "/plumbing-repair/",
  Moisture: "/waterproofing/",
  Waterproofing: "/waterproofing/",
  Tile: "/tile-repair-grout/",
  Grout: "/tile-repair-grout/",
};

export default function FlCrossoverRouting() {
  const [activeId, setActiveId] = useState(flCrossoverExamples[0].id);
  const active = flCrossoverExamples.find((c) => c.id === activeId)!;

  return (
    <section className="border-b border-concrete-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Beyond the surface</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Sometimes the surface is only showing the symptom.
          </h2>
        </div>

        <div role="group" aria-label="Floor scenario" className="mt-8 flex flex-wrap gap-2.5">
          {flCrossoverExamples.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={activeId === c.id}
              onClick={() => setActiveId(c.id)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeId === c.id ? "border-clay-700 bg-clay-700 text-sand-50" : "border-concrete-900/15 text-ink-700 hover:border-clay-600"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div key={active.id} className="mt-8 max-w-xl animate-fadeIn rounded-md border border-concrete-900/10 bg-concrete-100/60 p-6">
          <p className="text-sm text-ink-600">{active.label}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-ink-400">Could be related to</p>
          <div className="mt-2 flex flex-wrap gap-x-2 gap-y-2">
            {active.possibilities.map((p) => {
              const href = linkMap[p];
              return href ? (
                <Link
                  key={p}
                  href={href}
                  className="focus-ring rounded-full border border-clay-600/40 px-3 py-1 text-sm font-medium text-ink-950 hover:border-clay-700 hover:text-clay-700"
                >
                  {p}
                </Link>
              ) : (
                <span key={p} className="rounded-full border border-concrete-900/15 px-3 py-1 text-sm text-ink-700">
                  {p}
                </span>
              );
            })}
          </div>
        </div>

        <p className="mt-5 max-w-xl text-xs text-ink-500">
          These are common overlaps, not a diagnosis — a stain or nearby
          damage may involve one of these, but it needs assessment either way.
        </p>
      </div>
    </section>
  );
}
