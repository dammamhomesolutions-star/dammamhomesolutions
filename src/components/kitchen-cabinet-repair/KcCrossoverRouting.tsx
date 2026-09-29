"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { kcCrossovers } from "@/lib/kitchen-cabinet-repair";

const icons: Record<string, ReactNode> = {
  water: (
    <path d="M20 6 C20 6 12 18 12 25 a8 8 0 0 0 16 0 C28 18 20 6 20 6 Z" fill="none" stroke="currentColor" strokeWidth="2" />
  ),
  wall: <path d="M6 8 L18 20 L14 24 L26 34 M18 20 L28 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  electrical: <path d="M22 4 L10 22 L18 22 L14 36 L30 16 L20 16 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />,
  bathroom: <path d="M6 20 h28 a2 2 0 0 1 -2 6 H8 a2 2 0 0 1 -2 -6 Z M12 20 v-6 a4 4 0 0 1 8 0" fill="none" stroke="currentColor" strokeWidth="2" />,
  general: <path d="M6 20 L20 8 L34 20 M10 18 V32 H30 V18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />,
};

export default function KcCrossoverRouting() {
  const [activeId, setActiveId] = useState(kcCrossovers[0].id);
  const active = kcCrossovers.find((c) => c.id === activeId)!;

  return (
    <section className="border-b border-walnut-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">Beyond the cabinet</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Sometimes the cabinet is only part of the problem.
          </h2>
        </div>

        <div role="group" aria-label="Combined issue" className="mt-8 flex flex-wrap gap-2.5">
          {kcCrossovers.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={activeId === c.id}
              onClick={() => setActiveId(c.id)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeId === c.id ? "border-walnut-700 bg-walnut-700 text-sand-50" : "border-walnut-900/15 text-ink-700 hover:border-walnut-600"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div key={active.id} className="mt-8 flex max-w-xl animate-fadeIn items-center gap-5 rounded-md border border-walnut-900/10 bg-sand-50 p-6">
          <svg width="40" height="40" viewBox="0 0 40 40" className="shrink-0 text-walnut-600" aria-hidden="true">
            {icons[active.id]}
          </svg>
          <div>
            <p className="text-sm text-ink-600">{active.label}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-ink-400">Potentially</p>
            <Link
              href={active.href}
              className="focus-ring mt-1 inline-flex items-center gap-1.5 font-serif text-lg text-ink-950 underline decoration-walnut-600 decoration-2 underline-offset-4 hover:text-walnut-700"
            >
              {active.routesTo}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <p className="mt-5 max-w-xl text-xs text-ink-500">
          These are common overlaps, not a diagnosis — the actual cause is
          only confirmed once the area is assessed.
        </p>
      </div>
    </section>
  );
}
