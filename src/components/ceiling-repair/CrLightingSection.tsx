"use client";

import { useState } from "react";
import Link from "next/link";
import { fixtureAreas } from "@/lib/ceiling-repair";

const positions: Record<string, { cx: number; cy: number; r: number }> = {
  recessed: { cx: 90, cy: 70, r: 18 },
  pendant: { cx: 200, cy: 70, r: 22 },
  access: { cx: 300, cy: 90, r: 26 },
};

export default function CrLightingSection() {
  const [activeId, setActiveId] = useState(fixtureAreas[0].id);
  const active = fixtureAreas.find((f) => f.id === activeId)!;
  const pos = positions[activeId];

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Lighting &amp; ceiling</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The ceiling is also where the room&rsquo;s light lives.
          </h2>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
          <div className="w-full overflow-hidden rounded-sm border border-ink-900/10">
            <svg viewBox="0 0 360 160" className="h-auto w-full" aria-hidden="true">
              <rect x="0" y="0" width="360" height="160" fill="url(#ceiling-plaster)" filter="url(#ceiling-noise)" />

              {/* recessed light */}
              <circle cx="90" cy="70" r="16" fill="#e4dcc7" stroke="#b4bac6" strokeWidth="1.2" />
              <circle cx="90" cy="70" r="9" fill="#faf8f4" stroke="#8e97a8" strokeWidth="0.8" />

              {/* pendant */}
              <line x1="200" y1="0" x2="200" y2="55" stroke="#8e97a8" strokeWidth="1.2" />
              <path d="M186 55 L214 55 L206 78 L194 78 Z" fill="#e4dcc7" stroke="#b4bac6" strokeWidth="1" />

              {/* access panel */}
              <rect x="276" y="72" width="48" height="36" fill="#ded2ba" stroke="#8e97a8" strokeWidth="1.2" strokeDasharray="3 3" />

              <circle
                cx={pos.cx}
                cy={pos.cy}
                r={pos.r}
                fill="none"
                stroke="#c76a3f"
                strokeWidth="2"
                className="transition-all duration-300"
              />
            </svg>
          </div>

          <div>
            <div role="group" aria-label="Fixture area" className="flex flex-col gap-2">
              {fixtureAreas.map((fixture) => {
                const isActive = fixture.id === activeId;
                return (
                  <button
                    key={fixture.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(fixture.id)}
                    className={`focus-ring rounded-md border px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                      isActive ? "border-rust-700 bg-rust-100/60 text-rust-900" : "border-ink-900/15 text-ink-700 hover:border-rust-600"
                    }`}
                  >
                    {fixture.label}
                  </button>
                );
              })}
            </div>
            <p key={active.id} className="mt-4 animate-fadeIn text-sm leading-relaxed text-ink-700">
              {active.note}
            </p>
            <p className="mt-3 text-xs text-ink-500">
              If electrical work is involved, that&rsquo;s handled separately.
            </p>
            <Link
              href="/electrical-repair/"
              className="focus-ring mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700"
            >
              Electrical Repair
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
