"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { rfDamageStates, type RfDamageId } from "@/lib/roof-repair";

function DamageVisual({ id }: { id: RfDamageId }) {
  if (id === "not-sure") {
    return (
      <svg viewBox="0 0 220 220" className="h-full w-full" aria-hidden="true">
        <rect x="10" y="10" width="200" height="200" fill="url(#rf-sky)" />
        <text x="110" y="128" textAnchor="middle" fontSize="48" fill="#8fc4c4" fontFamily="serif">
          ?
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 220" className="h-full w-full" aria-hidden="true">
      <rect x="10" y="10" width="200" height="200" fill="url(#rf-surface)" />
      <rect x="10" y="10" width="200" height="200" fill="none" stroke="#78746a" strokeWidth="2" />

      {id === "surface-change" && (
        <ellipse cx="110" cy="110" rx="46" ry="30" fill="#e0e0d6" opacity="0.7" />
      )}

      {id === "crack" && (
        <path d="M50 60 L90 100 L80 130 L120 160 L110 190" fill="none" stroke="#164848" strokeWidth="3" />
      )}

      {id === "water" && (
        <ellipse cx="110" cy="140" rx="55" ry="22" fill="url(#rf-water)" />
      )}

      {id === "drainage" && (
        <>
          <ellipse cx="80" cy="150" rx="40" ry="16" fill="url(#rf-water)" opacity="0.85" />
          <circle cx="170" cy="160" r="10" fill="none" stroke="#2f7a7a" strokeWidth="2.4" />
          <path d="M110 150 Q140 156 160 160" fill="none" stroke="#2f7a7a" strokeWidth="2" strokeDasharray="4 4" />
        </>
      )}

      {id === "moisture" && (
        <circle cx="110" cy="120" r="34" fill="url(#rf-stain)" />
      )}
    </svg>
  );
}

export default function RfDamageSimulator() {
  const [activeId, setActiveId] = useState<RfDamageId>(rfDamageStates[0].id);
  const active = rfDamageStates.find((c) => c.id === activeId)!;

  return (
    <section id="whats-happening" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">Recognition, not diagnosis</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What are you noticing on or from the roof?
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-sm border border-ink-900/10 bg-sand-100">
            <DamageVisual id={activeId} />
          </div>

          <div>
            <div role="group" aria-label="Roof condition" className="flex flex-wrap gap-2.5">
              {rfDamageStates.map((c) => {
                const isActive = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(c.id)}
                    className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "border-teal-700 bg-teal-700 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-teal-600"
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>

            <div key={active.id} className="mt-7 max-w-lg animate-fadeIn rounded-md border border-ink-900/10 bg-sand-100/60 p-6">
              <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{active.note}</p>
              <a
                href={buildWhatsAppLink(`Hello Dammam Home Solutions, I'm noticing this on my roof: ${active.label}. `)}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700"
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
