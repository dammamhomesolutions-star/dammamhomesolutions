"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { ceilingIssues, type CeilingIssueId } from "@/lib/ceiling-repair";

function CeilingVisual({ id }: { id: CeilingIssueId }) {
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full" aria-hidden="true">
      <rect x="10" y="10" width="200" height="200" fill="url(#ceiling-plaster)" filter="url(#ceiling-noise)" />
      <circle cx="170" cy="45" r="14" fill="#e4dcc7" stroke="#b4bac6" strokeWidth="1.2" />
      <circle cx="170" cy="45" r="8" fill="#faf8f4" stroke="#8e97a8" strokeWidth="0.8" />

      {id === "crack" && (
        <path d="M40 60 L80 100 L65 122 L110 150 L125 180" fill="none" stroke="#333a49" strokeWidth="2.2" strokeLinecap="round" />
      )}

      {id === "stain" && <ellipse cx="110" cy="120" rx="55" ry="38" fill="url(#ceiling-stain)" />}

      {id === "hole" && (
        <>
          <rect x="70" y="80" width="70" height="55" fill="#8e97a8" opacity="0.35" />
          <rect x="70" y="80" width="70" height="55" fill="none" stroke="#4a5468" strokeWidth="1.4" strokeDasharray="5 4" />
        </>
      )}

      {id === "sagging" && (
        <path d="M60 70 Q110 140 160 70 L160 90 Q110 155 60 90 Z" fill="#ded2ba" opacity="0.7" />
      )}

      {id === "peeling" && (
        <>
          <path d="M60 70 Q90 60 120 75 L110 100 Q80 90 60 100 Z" fill="#f6f2e9" stroke="#c9bfa8" strokeWidth="1.2" />
        </>
      )}

      {id === "opening" && (
        <rect x="80" y="70" width="60" height="60" fill="#e4dcc7" stroke="#69748a" strokeWidth="1.4" strokeDasharray="3 3" />
      )}

      {id === "fixture" && (
        <circle cx="170" cy="45" r="26" fill="none" stroke="#c76a3f" strokeWidth="2" strokeDasharray="4 4" />
      )}

      {id === "not-sure" && (
        <text x="110" y="128" textAnchor="middle" fontSize="48" fill="#b4bac6" fontFamily="serif">
          ?
        </text>
      )}
    </svg>
  );
}

export default function CrDamageSelector() {
  const [activeId, setActiveId] = useState<CeilingIssueId>(ceilingIssues[0].id);
  const active = ceilingIssues.find((c) => c.id === activeId)!;

  return (
    <section id="what-changed" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Start with what you see</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What are you noticing overhead?
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-sm border border-ink-900/10 bg-sand-100">
            <CeilingVisual id={activeId} />
          </div>

          <div>
            <div role="group" aria-label="Ceiling conditions" className="flex flex-wrap gap-2.5">
              {ceilingIssues.map((issue) => {
                const isActive = issue.id === activeId;
                return (
                  <button
                    key={issue.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(issue.id)}
                    className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-rust-700 bg-rust-700 text-sand-50"
                        : "border-ink-900/15 text-ink-700 hover:border-rust-600"
                    }`}
                  >
                    {issue.label}
                  </button>
                );
              })}
            </div>

            <div key={active.id} className="mt-7 max-w-lg animate-fadeIn rounded-md border border-ink-900/10 bg-sand-100/60 p-6">
              <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{active.note}</p>
              <a
                href={buildWhatsAppLink(`Hello Dammam Home Solutions, I'm noticing this on my ceiling: ${active.label}. `)}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700"
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
