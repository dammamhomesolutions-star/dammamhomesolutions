"use client";

import { useState } from "react";
import Image from "next/image";
import { rrJourney } from "@/lib/roof-replacement";

// Conceptual drawing of one roof through replacement. Real, permissioned
// project photos added to rrJourney replace the drawing for that stage.
function RoofStage({ stage }: { stage: number }) {
  const showOld = stage === 0;
  const stripped = stage >= 1;
  const prepared = stage >= 2;
  const newSystem = stage >= 3;
  const finished = stage === 4;

  return (
    <svg viewBox="0 0 520 220" className="h-auto w-full" aria-hidden="true">
      <rect x="0" y="0" width="520" height="220" fill="#f4f0e8" />
      {/* wall + slab */}
      <rect x="30" y="40" width="24" height="150" fill="#9a968a" />
      <rect x="54" y="150" width="440" height="40" fill="#78746a" />

      {/* base condition */}
      {stripped && !prepared && (
        <g>
          <path d="M120 150l10-8 8 6 12-10 8 12" fill="none" stroke="#35332e" strokeWidth="3" />
          <rect x="300" y="146" width="60" height="4" fill="#4a9797" opacity="0.6" />
        </g>
      )}
      {prepared && <rect x="54" y="144" width="440" height="6" fill="#c4c0b4" />}

      {/* old roof */}
      {showOld && (
        <g>
          <rect x="54" y="120" width="440" height="30" fill="#b4ac98" />
          <rect x="120" y="116" width="50" height="6" fill="#9c7752" />
          <rect x="260" y="116" width="40" height="6" fill="#a67c5b" />
          <path d="M190 120l8 14M330 120l-6 18M400 122l10 10" stroke="#5c584f" strokeWidth="2" />
          <ellipse cx="450" cy="120" rx="34" ry="5" fill="#4a9797" opacity="0.65" />
        </g>
      )}

      {/* new system */}
      {newSystem && (
        <g>
          <rect x="54" y="128" width="440" height="16" fill="#e0c9a8" />
          <path d="M60 136c12-6 24 6 36 0s24 6 36 0 24 6 36 0 24 6 36 0 24 6 36 0 24 6 36 0 24 6 36 0 24 6 36 0 24 6 36 0 24 6 36 0 24 6 36 0 24 6 36 0" fill="none" stroke="#b8916c" strokeWidth="1.5" />
          <rect x="54" y="122" width="440" height="6" fill="#232833" />
          <path d="M54 128V96" stroke="#232833" strokeWidth="6" />
        </g>
      )}
      {finished && (
        <g>
          <rect x="54" y="114" width="440" height="8" fill="#faf8f4" stroke="#c4c0b4" />
          <path className="fs-flow" d="M80 110L470 116" stroke="#2f7a7a" strokeWidth="2.5" fill="none" />
        </g>
      )}

      {/* drain */}
      <rect x="476" y={finished ? 114 : 120} width="18" height="10" fill="#14181f" />
      <path d="M485 150v60" stroke="#5c584f" strokeWidth="8" />

      <g fontFamily="ui-monospace, monospace" fontSize="11" letterSpacing="1.6">
        <rect x="20" y="12" width="190" height="24" rx="12" fill="#14181f" />
        <text x="34" y="28" fill="#f4f0e8">{rrJourney[stage].label.toUpperCase()}</text>
      </g>
    </svg>
  );
}

export default function RrJourney() {
  const [stage, setStage] = useState(0);
  const current = rrJourney[stage];

  return (
    <section aria-labelledby="rr-journey" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="section-label !text-teal-700">Replacement journey</p>
          <h2 id="rr-journey" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A typical roof replacement, stage by stage
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            A conceptual illustration of the sequence — not a photograph of a
            completed project.
          </p>
          <ol className="mt-8 space-y-2">
            {rrJourney.map((s, i) => (
              <li key={s.label}>
                <button
                  type="button"
                  onClick={() => setStage(i)}
                  aria-current={i === stage ? "step" : undefined}
                  className={`focus-ring flex w-full items-start gap-4 rounded-xl px-4 py-3 text-left transition-colors ${
                    i === stage ? "bg-ink-950 text-sand-50" : "text-ink-700 hover:bg-sand-50"
                  }`}
                >
                  <span className="mt-0.5 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-sm font-semibold">{s.label}</span>
                    {i === stage && <span className="mt-1 block text-sm leading-relaxed text-ink-300">{s.caption}</span>}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-ink-900/10">
            {current.image ? (
              <Image
                src={current.image.src}
                alt={current.image.alt}
                width={current.image.width}
                height={current.image.height}
                sizes="(min-width: 1024px) 700px, 100vw"
                className="h-auto w-full"
              />
            ) : (
              <RoofStage stage={stage} />
            )}
          </div>
          <label htmlFor="rr-journey-range" className="mt-5 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            Stage: <span className="text-ink-900">{current.label}</span>
          </label>
          <input
            id="rr-journey-range"
            type="range"
            min={0}
            max={rrJourney.length - 1}
            value={stage}
            onChange={(e) => setStage(Number(e.target.value))}
            aria-valuetext={current.label}
            className="focus-ring mt-3 w-full cursor-pointer accent-teal-700"
          />
        </div>
      </div>
    </section>
  );
}
