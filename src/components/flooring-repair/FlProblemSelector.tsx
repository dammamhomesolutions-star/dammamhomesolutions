"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { flProblems, type FlProblemId } from "@/lib/flooring-repair";

function ProblemVisual({ id }: { id: FlProblemId }) {
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full" aria-hidden="true">
      <rect x="10" y="10" width="200" height="200" fill="url(#fl-tile)" filter="url(#fl-stone-noise)" />
      {Array.from({ length: 4 }).map((_, i) => (
        <line key={`v${i}`} x1={10 + (i + 1) * 40} y1="10" x2={10 + (i + 1) * 40} y2="210" stroke="#9a968a" strokeWidth="1" opacity="0.5" />
      ))}
      {Array.from({ length: 4 }).map((_, i) => (
        <line key={`h${i}`} x1="10" y1={10 + (i + 1) * 40} x2="210" y2={10 + (i + 1) * 40} stroke="#9a968a" strokeWidth="1" opacity="0.5" />
      ))}

      {id === "cracked" && (
        <path d="M50 60 L100 100 L85 120 L130 150 L150 175" fill="none" stroke="#464339" strokeWidth="2" strokeLinecap="round" />
      )}

      {id === "chipped" && <path d="M170 30 L200 30 L195 55 L170 60 Z" fill="#78746a" />}

      {id === "uneven" && (
        <rect x="50" y="90" width="80" height="40" fill="#5c584f" opacity="0.35" style={{ transform: "skewY(-3deg)" }} />
      )}

      {id === "loose" && (
        <rect x="90" y="90" width="40" height="40" fill="none" stroke="#b8916c" strokeWidth="2.4" strokeDasharray="4 3" />
      )}

      {id === "worn" && <ellipse cx="110" cy="150" rx="55" ry="28" fill="#78746a" filter="url(#fl-worn-noise)" opacity="0.7" />}

      {id === "stained" && <ellipse cx="150" cy="90" rx="34" ry="24" fill="#9c7752" opacity="0.45" />}

      {id === "edge" && <rect x="10" y="10" width="200" height="10" fill="#b8916c" opacity="0.7" />}

      {id === "not-sure" && (
        <text x="110" y="128" textAnchor="middle" fontSize="48" fill="#c4c0b4" fontFamily="serif">
          ?
        </text>
      )}
    </svg>
  );
}

export default function FlProblemSelector() {
  const [activeId, setActiveId] = useState<FlProblemId>(flProblems[0].id);
  const active = flProblems.find((p) => p.id === activeId)!;

  return (
    <section id="underfoot" className="border-b border-concrete-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Start with what you notice</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What are you noticing underfoot?
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-sm border border-concrete-900/10 bg-concrete-100">
            <ProblemVisual id={activeId} />
          </div>

          <div>
            <div role="group" aria-label="Floor conditions" className="flex flex-wrap gap-2.5">
              {flProblems.map((problem) => {
                const isActive = problem.id === activeId;
                return (
                  <button
                    key={problem.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(problem.id)}
                    className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "border-clay-700 bg-clay-700 text-sand-50" : "border-concrete-900/15 text-ink-700 hover:border-clay-600"
                    }`}
                  >
                    {problem.label}
                  </button>
                );
              })}
            </div>

            <div key={active.id} className="mt-7 max-w-lg animate-fadeIn rounded-md border border-concrete-900/10 bg-concrete-100/60 p-6">
              <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{active.note}</p>
              <a
                href={buildWhatsAppLink(`Hello Dammam Home Solutions, I'm noticing this on my floor: ${active.label}. `)}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-clay-600 decoration-2 underline-offset-4 hover:text-clay-700"
              >
                Send us a photo
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
