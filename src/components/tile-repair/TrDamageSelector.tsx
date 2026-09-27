"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { damageConditions, type DamageConditionId } from "@/lib/tile-repair";

function TileVisual({ id }: { id: DamageConditionId }) {
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full" aria-hidden="true">
      <rect x="10" y="10" width="200" height="200" fill="#ded2ba" />
      <g
        style={{
          transform: id === "uneven" ? "rotate(2.5deg)" : id === "loose" ? "translate(-4px, -3px)" : undefined,
          transformOrigin: "110px 110px",
          transition: "transform 400ms ease-out",
        }}
      >
        <rect
          x="18"
          y="18"
          width="184"
          height="184"
          fill="url(#tile-stone)"
          filter="url(#tile-noise)"
          stroke={id.includes("grout") ? "#c76a3f" : "#c9bfa8"}
          strokeWidth={id === "damaged-grout" ? 5 : id === "missing-grout" ? 3 : id === "stained-grout" ? 5 : 2}
          strokeDasharray={id === "missing-grout" ? "10 6" : undefined}
        />

        {id === "cracked" && (
          <path
            d="M40 50 L90 95 L75 120 L130 150 L150 185"
            fill="none"
            stroke="#333a49"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        )}

        {id === "chipped" && (
          <path d="M186 18 L202 18 L202 34 Q186 34 186 18 Z" fill="#b4bac6" opacity="0.9" />
        )}

        {id === "hollow" && (
          <ellipse cx="110" cy="150" rx="55" ry="10" fill="none" stroke="#8e97a8" strokeWidth="1.4" strokeDasharray="4 4" />
        )}

        {id === "stained-grout" && (
          <>
            <ellipse cx="60" cy="18" rx="14" ry="4" fill="#69748a" opacity="0.5" />
            <ellipse cx="150" cy="202" rx="18" ry="4" fill="#69748a" opacity="0.4" />
          </>
        )}

        {id === "water" && (
          <>
            <circle cx="80" cy="70" r="4" fill="#8e97a8" opacity="0.5" />
            <circle cx="130" cy="110" r="6" fill="#8e97a8" opacity="0.4" />
            <path d="M110 140 q6 10 0 18 q-6 -8 0 -18 Z" fill="#8e97a8" opacity="0.5" />
          </>
        )}

        {id === "not-sure" && (
          <text x="110" y="128" textAnchor="middle" fontSize="48" fill="#b4bac6" fontFamily="serif">
            ?
          </text>
        )}
      </g>
    </svg>
  );
}

export default function TrDamageSelector() {
  const [activeId, setActiveId] = useState<DamageConditionId>(damageConditions[0].id);
  const active = damageConditions.find((c) => c.id === activeId)!;

  return (
    <section id="what-are-you-seeing" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Start with what you see</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What are you seeing on the surface?
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-sm border border-ink-900/10 bg-sand-100">
            <TileVisual id={activeId} />
          </div>

          <div>
            <div role="group" aria-label="Surface conditions" className="flex flex-wrap gap-2.5">
              {damageConditions.map((cond) => {
                const isActive = cond.id === activeId;
                return (
                  <button
                    key={cond.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(cond.id)}
                    className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-rust-700 bg-rust-700 text-sand-50"
                        : "border-ink-900/15 text-ink-700 hover:border-rust-600"
                    }`}
                  >
                    {cond.label}
                  </button>
                );
              })}
            </div>

            <div key={active.id} className="mt-7 max-w-lg animate-fadeIn rounded-md border border-ink-900/10 bg-sand-100/60 p-6">
              <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{active.note}</p>
              <a
                href={buildWhatsAppLink(`Hello Dammam Home Solutions, I'm noticing this on a tiled surface: ${active.label}. `)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700"
              >
                Show Us the Tile
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
