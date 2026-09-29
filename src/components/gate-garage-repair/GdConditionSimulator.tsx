"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { gdConditions, type GdConditionId } from "@/lib/gate-garage-repair";

function ConditionVisual({ id }: { id: GdConditionId }) {
  if (id === "gate-alignment") {
    return (
      <svg viewBox="0 0 220 220" className="h-full w-full" aria-hidden="true">
        <rect x="10" y="10" width="200" height="200" fill="url(#gd-sky)" />
        <rect x="30" y="180" width="160" height="10" fill="#ded2ba" />
        <rect x="34" y="80" width="8" height="100" fill="#69748a" />
        <g style={{ transform: "rotate(-8deg)", transformOrigin: "38px 130px" }}>
          <rect x="38" y="100" width="90" height="60" fill="none" stroke="#4a5468" strokeWidth="3" />
        </g>
      </svg>
    );
  }

  if (id === "not-sure") {
    return (
      <svg viewBox="0 0 220 220" className="h-full w-full" aria-hidden="true">
        <rect x="10" y="10" width="200" height="200" fill="url(#gd-sky)" />
        <text x="110" y="128" textAnchor="middle" fontSize="48" fill="#ded2ba" fontFamily="serif">
          ?
        </text>
      </svg>
    );
  }

  const doorTop = id === "sticking" ? 70 : id === "wont-close" ? 40 : 30;
  const skew = id === "uneven" ? 3 : 0;

  return (
    <svg viewBox="0 0 220 220" className="h-full w-full" aria-hidden="true">
      <rect x="10" y="10" width="200" height="200" fill="#ebe4d6" />
      <rect x="40" y="20" width="140" height="180" fill="none" stroke="#8e97a8" strokeWidth="3" />
      <line x1="46" y1="26" x2="46" y2="194" stroke={id === "track" ? "#94472a" : "#b4bac6"} strokeWidth={id === "track" ? 4 : 2} strokeDasharray={id === "track" ? "5 4" : undefined} />
      <line x1="174" y1="26" x2="174" y2="194" stroke={id === "track" ? "#94472a" : "#b4bac6"} strokeWidth={id === "track" ? 4 : 2} strokeDasharray={id === "track" ? "5 4" : undefined} />

      <g style={{ transform: `translateY(${doorTop - 30}px) skewX(${skew}deg)`, transformOrigin: "110px 190px" }}>
        <rect x="46" y="30" width="128" height="160" fill="url(#gd-panel)" filter="url(#gd-noise)" />
        {[1, 2, 3].map((i) => (
          <line key={i} x1="46" y1={30 + i * 40} x2="174" y2={30 + i * 40} stroke="#ded2ba" strokeWidth="1.5" />
        ))}

        {id === "damaged-panel" && (
          <path d="M70 60 L100 60 L92 84 L112 108 L70 108 Z" fill="#94472a" opacity="0.75" />
        )}

        {id === "hinge" && (
          <>
            <rect x="40" y="65" width="14" height="10" rx="2" fill="#94472a" />
            <rect x="40" y="145" width="14" height="10" rx="2" fill="#94472a" />
          </>
        )}

        {id === "roller" && (
          <>
            <circle cx="46" cy="70" r="7" fill="#94472a" />
            <circle cx="174" cy="70" r="7" fill="#94472a" />
          </>
        )}

        {id === "hardware" && (
          <rect x="150" y="100" width="18" height="18" rx="3" fill="none" stroke="#94472a" strokeWidth="2.4" />
        )}
      </g>

      {id === "sticking" && (
        <line x1="40" y1={doorTop} x2="180" y2={doorTop} stroke="#c76a3f" strokeWidth="1.6" strokeDasharray="3 3" />
      )}
      {id === "wont-close" && (
        <rect x="40" y="190" width="140" height="10" fill="none" stroke="#c76a3f" strokeWidth="1.6" strokeDasharray="3 3" />
      )}
    </svg>
  );
}

export default function GdConditionSimulator() {
  const [activeId, setActiveId] = useState<GdConditionId>(gdConditions[0].id);
  const active = gdConditions.find((c) => c.id === activeId)!;

  return (
    <section id="whats-happening" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Problem recognition, not diagnosis</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What&rsquo;s happening with the door or gate?
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-sm border border-ink-900/10 bg-sand-100">
            <ConditionVisual id={activeId} />
          </div>

          <div>
            <div role="group" aria-label="Condition" className="flex flex-wrap gap-2.5">
              {gdConditions.map((c) => {
                const isActive = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(c.id)}
                    className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "border-rust-700 bg-rust-700 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-rust-600"
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
                href={buildWhatsAppLink(`Hello Dammam Home Solutions, I'm noticing this issue: ${active.label}. `)}
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
