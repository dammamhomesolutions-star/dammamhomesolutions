"use client";

import { useState } from "react";
import Image from "next/image";
import { fsJourney } from "@/lib/fire-smoke-restoration";

// Conceptual illustration of one wall moving through restoration. If real,
// permissioned project photos are added to fsJourney they replace the drawing.
function WallIllustration({ stage }: { stage: number }) {
  const sootOpacity = [0.85, 0.15, 0, 0][stage];
  const damaged = stage === 0 || stage === 1;
  const wet = stage === 0;
  const primed = stage === 2;
  const painted = stage === 3;

  return (
    <svg viewBox="0 0 480 300" className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id="fs-j-soot" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#232833" stopOpacity="0.95" />
          <stop offset="0.55" stopColor="#4a5468" stopOpacity="0.35" />
          <stop offset="1" stopColor="#4a5468" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fs-j-wet" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#5b7d8f" stopOpacity="0.55" />
          <stop offset="1" stopColor="#5b7d8f" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* wall + ceiling + floor */}
      <rect x="0" y="0" width="480" height="300" fill={painted ? "#f4f0e8" : primed ? "#ebe4d6" : "#ded2ba"} style={{ transition: "fill 500ms" }} />
      <rect x="0" y="0" width="480" height="28" fill={painted ? "#faf8f4" : "#c4c0b4"} style={{ transition: "fill 500ms" }} />
      <rect x="0" y="262" width="480" height="38" fill="#9a968a" />
      <path d="M0 262h480" stroke="#78746a" strokeWidth="2" />

      {/* soot plume */}
      <rect x="0" y="0" width="480" height="190" fill="url(#fs-j-soot)" style={{ opacity: sootOpacity, transition: "opacity 600ms" }} />

      {/* damaged gypsum section → replaced board with joints */}
      <g style={{ transition: "opacity 500ms" }}>
        <path
          d="M150 90h120v110H150z"
          fill={damaged ? "#4a2f18" : primed ? "#f4f0e8" : "transparent"}
          opacity={damaged ? 0.55 : 1}
          style={{ transition: "fill 500ms, opacity 500ms" }}
        />
        {damaged && <path d="M160 110l30 25-12 20 40 30M230 100l-20 40 30 20" fill="none" stroke="#14181f" strokeWidth="2" />}
        {primed && <path d="M150 90h120v110H150z" fill="none" stroke="#b4bac6" strokeWidth="2" strokeDasharray="6 4" />}
        {stage === 1 && <path d="M150 90h120v110H150z" fill="none" stroke="#c17f3e" strokeWidth="2" strokeDasharray="6 4" />}
      </g>

      {/* damp at floor level */}
      <rect x="0" y="200" width="480" height="62" fill="url(#fs-j-wet)" style={{ opacity: wet ? 1 : 0, transition: "opacity 600ms" }} />

      {/* socket + skirting */}
      <rect x="360" y="214" width="26" height="26" rx="3" fill="#faf8f4" stroke="#78746a" strokeWidth="1.5" />
      <path d="M0 252h480" stroke={painted ? "#c4c0b4" : "#78746a"} strokeWidth="6" />

      {/* status tag */}
      <g fontFamily="ui-monospace, monospace" fontSize="11" letterSpacing="1.6">
        <rect x="16" y="40" width="150" height="24" rx="12" fill="#14181f" opacity="0.85" />
        <text x="30" y="56" fill="#f4f0e8">
          {["AFFECTED", "CLEANED + DRIED", "REPAIRED", "RESTORED"][stage]}
        </text>
      </g>
    </svg>
  );
}

export default function FsJourney() {
  const [stage, setStage] = useState(0);
  const current = fsJourney[stage];

  return (
    <section aria-labelledby="fs-journey" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="section-label !text-ember-700">Restoration journey</p>
          <h2 id="fs-journey" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            From fire-damaged to restored
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Drag through the stages to see how one smoke-affected wall is
            typically brought back. This is an illustration of the sequence,
            not a photo of a completed project.
          </p>

          <ol className="mt-8 space-y-3">
            {fsJourney.map((s, i) => (
              <li key={s.label}>
                <button
                  type="button"
                  onClick={() => setStage(i)}
                  aria-current={i === stage ? "step" : undefined}
                  className={`focus-ring flex w-full items-start gap-4 rounded-xl px-4 py-3 text-left transition-colors ${
                    i === stage ? "bg-ink-950 text-sand-50" : "text-ink-700 hover:bg-sand-100"
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

        <div>
          <div className="overflow-hidden rounded-2xl border border-ink-900/10">
            {current.image ? (
              <Image
                src={current.image.src}
                alt={current.image.alt}
                width={current.image.width}
                height={current.image.height}
                sizes="(min-width: 1024px) 640px, 100vw"
                className="h-auto w-full"
              />
            ) : (
              <WallIllustration stage={stage} />
            )}
          </div>

          <label htmlFor="fs-journey-range" className="mt-5 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            Restoration stage: <span className="text-ink-900">{current.label}</span>
          </label>
          <input
            id="fs-journey-range"
            type="range"
            min={0}
            max={fsJourney.length - 1}
            step={1}
            value={stage}
            onChange={(e) => setStage(Number(e.target.value))}
            aria-valuetext={current.label}
            className="focus-ring mt-3 w-full cursor-pointer accent-ember-700"
          />
          <div className="mt-1 flex justify-between text-[11px] uppercase tracking-[0.12em] text-ink-400" aria-hidden="true">
            {fsJourney.map((s) => (
              <span key={s.label}>{s.label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
