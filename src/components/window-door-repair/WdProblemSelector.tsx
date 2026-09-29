"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { wdProblems, type WdProblemId } from "@/lib/window-door-repair";

function ProblemVisual({ id }: { id: WdProblemId }) {
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full" aria-hidden="true">
      <rect x="10" y="10" width="200" height="200" fill="url(#wd-sand)" />
      <rect x="30" y="30" width="160" height="160" rx="4" fill="url(#wd-frame-dark)" />
      <rect x="46" y="46" width="128" height="128" fill="url(#wd-glass)" />

      {id === "sticking" && (
        <>
          <g style={{ transform: "translateX(-26px)" }}>
            <rect x="46" y="46" width="60" height="128" fill="url(#wd-glass)" stroke="#1c2733" strokeWidth="2" />
          </g>
          <line x1="94" y1="40" x2="94" y2="182" stroke="#c17f3e" strokeWidth="2" strokeDasharray="4 4" />
          <text x="94" y="30" textAnchor="middle" fontSize="9" fill="#94472a">stopped</text>
        </>
      )}

      {id === "handle" && (
        <g style={{ transform: "rotate(24deg)", transformOrigin: "150px 110px" }}>
          <circle cx="150" cy="110" r="6" fill="#26333f" />
          <rect x="150" y="105" width="30" height="10" rx="5" fill="#c17f3e" />
        </g>
      )}

      {id === "hinge" && (
        <>
          <rect x="30" y="30" width="160" height="160" rx="4" fill="none" stroke="#1c2733" strokeWidth="2" />
          <g style={{ transform: "translate(6px, -4px) rotate(2deg)" }}>
            <rect x="46" y="46" width="128" height="128" fill="url(#wd-glass)" stroke="#c17f3e" strokeWidth="2" />
          </g>
          {[70, 110, 150].map((y) => (
            <rect key={y} x="24" y={y} width="10" height="20" rx="2" fill="#c17f3e" />
          ))}
        </>
      )}

      {id === "glass" && (
        <path
          d="M75 60 L110 95 L95 115 L130 140 L150 165"
          fill="none"
          stroke="#4a5468"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}

      {id === "seal" && (
        <rect x="46" y="46" width="128" height="128" fill="none" stroke="#c17f3e" strokeWidth="3" strokeDasharray="3 9" />
      )}

      {id === "track" && (
        <>
          <rect x="30" y="176" width="160" height="10" rx="2" fill="#8e97a8" />
          <g style={{ transform: "translateX(-14px)" }}>
            <rect x="46" y="120" width="80" height="54" fill="url(#wd-glass)" stroke="#c17f3e" strokeWidth="2" />
          </g>
          <path d="M108 176 l6 -10 l6 10" fill="none" stroke="#c17f3e" strokeWidth="2" strokeLinecap="round" />
        </>
      )}

      {id === "hardware" && (
        <>
          <rect x="140" y="95" width="26" height="34" rx="4" fill="none" stroke="#c17f3e" strokeWidth="2.4" strokeDasharray="3 3" />
          <circle cx="153" cy="112" r="4" fill="#c17f3e" />
        </>
      )}

      {id === "not-sure" && (
        <text x="110" y="128" textAnchor="middle" fontSize="48" fill="#b8ccd4" fontFamily="serif">
          ?
        </text>
      )}
    </svg>
  );
}

export default function WdProblemSelector() {
  const [activeId, setActiveId] = useState<WdProblemId>(wdProblems[0].id);
  const active = wdProblems.find((p) => p.id === activeId)!;

  return (
    <section id="what-stopped" className="border-b border-glass-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Start with what you see</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What stopped working properly?
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-sm border border-glass-900/10 bg-glass-100">
            <ProblemVisual id={activeId} />
          </div>

          <div>
            <div role="group" aria-label="Door and window problems" className="flex flex-wrap gap-2.5">
              {wdProblems.map((problem) => {
                const isActive = problem.id === activeId;
                return (
                  <button
                    key={problem.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(problem.id)}
                    className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-glass-700 bg-glass-700 text-sand-50"
                        : "border-glass-900/15 text-ink-700 hover:border-glass-700"
                    }`}
                  >
                    {problem.label}
                  </button>
                );
              })}
            </div>

            <div key={active.id} className="mt-7 max-w-lg animate-fadeIn rounded-md border border-glass-900/10 bg-glass-100/60 p-6">
              <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{active.note}</p>
              <a
                href={buildWhatsAppLink(`Hello Dammam Home Solutions, I'm noticing this issue: ${active.label}. `)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-glass-600 decoration-2 underline-offset-4 hover:text-glass-700"
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
