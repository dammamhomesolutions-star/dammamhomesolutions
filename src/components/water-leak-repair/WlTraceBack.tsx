"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { wlSymptoms, getCandidatesFor, type WlSymptomId } from "@/lib/water-leak-repair";

const markerPositions: Record<WlSymptomId, { x: number; y: number }> = {
  "wall-patch": { x: 90, y: 160 },
  "ceiling-stain": { x: 200, y: 50 },
  "wet-floor": { x: 150, y: 250 },
  "high-bill": { x: 260, y: 150 },
  "running-sound": { x: 60, y: 60 },
  "not-sure": { x: 200, y: 150 },
};

export default function WlTraceBack() {
  const [activeId, setActiveId] = useState<WlSymptomId>(wlSymptoms[0].id);
  const active = wlSymptoms.find((s) => s.id === activeId)!;
  const candidates = getCandidatesFor(activeId);
  const pos = markerPositions[activeId];

  return (
    <section id="trace-it-back" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-copper-700">Trace it back</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What have you noticed? Let&rsquo;s work backward from there.
          </h2>
        </div>

        <div role="group" aria-label="What have you noticed" className="mt-8 flex flex-wrap gap-2">
          {wlSymptoms.map((s) => (
            <button
              key={s.id}
              type="button"
              aria-pressed={activeId === s.id}
              onClick={() => setActiveId(s.id)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeId === s.id ? "border-copper-700 bg-copper-700 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-copper-600"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-sm border border-ink-900/10 bg-sand-100">
            <svg viewBox="0 0 320 320" className="h-full w-full" aria-hidden="true">
              <title>A generic property cutaway with the noticed symptom marked, used to illustrate possible hidden sources</title>
              <rect x="10" y="10" width="300" height="300" fill="url(#wl-wall)" />
              <line x1="10" y1="210" x2="310" y2="210" stroke="#c4c0b4" strokeWidth="2" />
              <rect x="10" y="210" width="300" height="100" fill="#eae7de" />

              <circle cx={pos.x} cy={pos.y} r="22" fill="url(#wl-damp)" />
              <circle cx={pos.x} cy={pos.y} r="26" fill="none" stroke="#8f4f2f" strokeWidth="1.4" strokeDasharray="3 4" />
            </svg>
          </div>

          <div>
            <div key={active.id} className="max-w-lg animate-fadeIn">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-copper-700">Possible source areas — {active.label}</p>
              <ul className="mt-4 space-y-4">
                {candidates.map((c) => (
                  <li key={c.id} className="rounded-md border border-ink-900/10 bg-sand-100/60 p-4">
                    <p className="text-sm font-semibold text-ink-900">{c.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-700">{c.note}</p>
                  </li>
                ))}
              </ul>
              <a
                href={buildWhatsAppLink(`Hello Dammam Home Solutions, I've noticed this: ${active.label}. `)}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-copper-600 decoration-2 underline-offset-4 hover:text-copper-700"
              >
                Tell us what you noticed
                <span aria-hidden="true">→</span>
              </a>
              <p className="mt-4 text-xs text-ink-500">
                These are common possibilities, not a diagnosis — an in-person look is needed to confirm the actual source.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
