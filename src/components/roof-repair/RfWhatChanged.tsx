"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { rfSymptoms, type RfSymptomId } from "@/lib/roof-repair";

const destinations = [
  { id: "inspection", label: "Roof inspection", y: 40 },
  { id: "crossover", label: "May involve another service", y: 90 },
  { id: "photo", label: "Send a photo first", y: 140 },
];

const routes: Record<RfSymptomId, string[]> = {
  water: ["inspection"],
  stain: ["inspection", "crossover"],
  crack: ["inspection"],
  collects: ["inspection"],
  damaged: ["inspection"],
  "not-sure": ["photo"],
};

export default function RfWhatChanged() {
  const [activeId, setActiveId] = useState<RfSymptomId>(rfSymptoms[0].id);
  const active = rfSymptoms.find((s) => s.id === activeId)!;
  const activeRoutes = routes[activeId];

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">What changed?</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What you noticed helps point to what&rsquo;s next.
          </h2>
        </div>

        <div role="group" aria-label="What did you notice" className="mt-8 flex flex-wrap gap-2">
          {rfSymptoms.map((s) => (
            <button
              key={s.id}
              type="button"
              aria-pressed={activeId === s.id}
              onClick={() => setActiveId(s.id)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeId === s.id ? "border-teal-700 bg-teal-700 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-teal-600"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-md border border-ink-900/10 bg-sand-50 p-6">
          <svg viewBox="0 0 320 180" className="h-auto w-full" aria-hidden="true">
            <rect x="10" y="70" width="90" height="40" rx="4" fill="#232833" />
            <text x="55" y="94" textAnchor="middle" fontSize="10" fill="#faf8f4" fontFamily="monospace">
              {active.label.length > 16 ? "You noticed…" : active.label}
            </text>

            {destinations.map((d) => {
              const isActive = activeRoutes.includes(d.id);
              return (
                <g key={d.id}>
                  <path
                    d={`M100 90 C 170 90, 170 ${d.y + 10}, 230 ${d.y + 10}`}
                    fill="none"
                    stroke={isActive ? "#2f7a7a" : "#c4c0b4"}
                    strokeWidth={isActive ? 2.6 : 1.4}
                    strokeDasharray={isActive ? undefined : "3 4"}
                    style={{ transition: "stroke 250ms, stroke-width 250ms" }}
                  />
                  <rect
                    x="230"
                    y={d.y}
                    width="90"
                    height="30"
                    rx="4"
                    fill={isActive ? "#164848" : "#eae7de"}
                    stroke={isActive ? "#2f7a7a" : "#c4c0b4"}
                    strokeWidth="1.4"
                    style={{ transition: "fill 250ms, stroke 250ms" }}
                  />
                  <text
                    x="275"
                    y={d.y + 19}
                    textAnchor="middle"
                    fontSize="8.5"
                    fill={isActive ? "#e0f0f0" : "#78746a"}
                    fontFamily="monospace"
                  >
                    {d.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div key={active.id} className="mx-auto mt-6 max-w-lg animate-fadeIn text-center">
          <p className="text-sm leading-relaxed text-ink-600">{active.description}</p>
          <a
            href={buildWhatsAppLink(`Hello Dammam Home Solutions, here's what I noticed: ${active.label}. `)}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700"
          >
            Tell us what you noticed
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
