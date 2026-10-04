"use client";

import { useState } from "react";
import { whParts, type WhPartKey } from "@/lib/water-heater";

const HI = "#94472a";

// Electric storage heater, front view. Cold water enters top-left, hot water
// leaves top-right; the tank shows a cold-to-hot gradient.
export default function WhHeaterDiagram() {
  const [part, setPart] = useState<WhPartKey>("tank");
  const p = whParts.find((x) => x.key === part)!;
  const on = (k: WhPartKey) => part === k;
  const pick = (k: WhPartKey) => () => setPart(k);
  const ring = (k: WhPartKey) => (on(k) ? { stroke: HI, strokeWidth: 3 } : { stroke: "#333a49", strokeWidth: 2 });

  return (
    <figure className="rounded-3xl border border-ink-900/10 bg-sand-50 p-4 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.35)] sm:p-6">
      <svg viewBox="0 0 520 340" className="h-auto w-full touch-manipulation select-none" role="img" aria-labelledby="wh-dia-title wh-dia-desc">
        <title id="wh-dia-title">Electric storage water heater with inlet, outlet, thermostat, element, safety valve, drain and power connection</title>
        <desc id="wh-dia-desc">{`Selected: ${p.label}. ${p.body}`}</desc>
        <defs>
          <linearGradient id="wh-temp" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#7fa0b0" />
            <stop offset="0.55" stopColor="#d69a5f" />
            <stop offset="1" stopColor="#c76a3f" />
          </linearGradient>
        </defs>
        <rect width="520" height="340" fill="#f4f0e8" />
        <path d="M0 330h520" stroke="#c4c0b4" strokeWidth="2" />

        {/* cold inlet */}
        <g onClick={pick("inlet")} className="cursor-pointer">
          <path d="M20 40h200v24" fill="none" stroke="transparent" strokeWidth="20" />
          <path d="M20 40h200v24" fill="none" stroke="#5b7d8f" strokeWidth={on("inlet") ? 9 : 7} strokeLinejoin="round" />
          <path className="fs-flow" d="M24 40h196v22" fill="none" stroke="#d7e4ea" strokeWidth="2" />
          <rect x="120" y="30" width="18" height="20" rx="3" fill="#faf8f4" {...ring("inlet")} />
        </g>
        {/* hot outlet */}
        <g onClick={pick("outlet")} className="cursor-pointer">
          <path d="M300 64V40h200" fill="none" stroke="transparent" strokeWidth="20" />
          <path d="M300 64V40h200" fill="none" stroke="#c76a3f" strokeWidth={on("outlet") ? 9 : 7} strokeLinejoin="round" />
          <path className="fs-flow" d="M300 62V40h196" fill="none" stroke="#f3e1d3" strokeWidth="2" />
        </g>

        {/* tank */}
        <g onClick={pick("tank")} className="cursor-pointer">
          <rect x="180" y="64" width="160" height="230" rx="40" fill="url(#wh-temp)" {...ring("tank")} />
          <rect x="196" y="80" width="128" height="198" rx="30" fill="none" stroke="#faf8f4" strokeOpacity="0.35" />
          <path className="fs-flow" d="M210 270c0-60 20-120 50-190" fill="none" stroke="#faf8f4" strokeOpacity="0.6" strokeWidth="1.5" />
        </g>

        {/* heating element */}
        <g onClick={pick("element")} className="cursor-pointer">
          <rect x="206" y="236" width="108" height="34" fill="transparent" />
          <path d="M214 252h10l6-10 8 20 8-20 8 20 8-20 8 20 8-20 8 20 6-10h10" fill="none" stroke={on("element") ? HI : "#4a2f18"} strokeWidth="3" strokeLinejoin="round" />
          <path className="wh-glow" d="M214 252h10l6-10 8 20 8-20 8 20 8-20 8 20 8-20 8 20 6-10h10" fill="none" stroke="#f3e1d3" strokeWidth="1.5" />
        </g>

        {/* thermostat */}
        <g onClick={pick("thermostat")} className="cursor-pointer">
          <rect x="230" y="170" width="60" height="44" rx="8" fill="#faf8f4" {...ring("thermostat")} />
          <circle cx="248" cy="192" r="9" fill="none" stroke="#333a49" strokeWidth="2" />
          <path d="M248 192l5-5" stroke="#c76a3f" strokeWidth="2" strokeLinecap="round" />
          <text x="270" y="196" fontFamily="ui-monospace, monospace" fontSize="10" fill="#333a49">60°</text>
        </g>

        {/* safety valve + discharge */}
        <g onClick={pick("safety")} className="cursor-pointer">
          <path d="M340 110h36" stroke="#78746a" strokeWidth="6" />
          <rect x="370" y="98" width="24" height="24" rx="4" fill="#faf8f4" {...ring("safety")} />
          <path d="M382 122v170" stroke="#9a968a" strokeWidth="4" strokeDasharray="6 4" fill="none" />
        </g>

        {/* drain */}
        <g onClick={pick("drain")} className="cursor-pointer">
          <path d="M260 294v20" stroke="#78746a" strokeWidth="6" />
          <rect x="250" y="312" width="20" height="14" rx="3" fill="#faf8f4" {...ring("drain")} />
        </g>

        {/* electrical */}
        <g onClick={pick("electrical")} className="cursor-pointer">
          <path d="M60 300V200h170" fill="none" stroke="transparent" strokeWidth="18" />
          <path d="M60 300V192h170" fill="none" stroke={on("electrical") ? HI : "#333a49"} strokeWidth="3" strokeDasharray={on("electrical") ? undefined : "6 4"} />
          <rect x="44" y="290" width="32" height="34" rx="4" fill="#faf8f4" {...ring("electrical")} />
          <path d="M62 297l-6 11h8l-6 11" fill="none" stroke="#c17f3e" strokeWidth="2" strokeLinejoin="round" />
        </g>

        <g fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.2" pointerEvents="none">
          <text x="20" y="28" fill="#3d5a6b">COLD IN</text>
          <text x="440" y="28" fill="#94472a">HOT OUT</text>
          <text x="400" y="114" fill="#4a5468">SAFETY VALVE</text>
          <text x="280" y="324" fill="#4a5468">DRAIN</text>
          <text x="84" y="314" fill="#4a5468">POWER</text>
        </g>
      </svg>

      <div role="radiogroup" aria-label="Heater part" className="mt-4 flex flex-wrap gap-2">
        {whParts.map((x) => (
          <button
            key={x.key}
            type="button"
            role="radio"
            aria-checked={on(x.key)}
            onClick={pick(x.key)}
            onMouseEnter={pick(x.key)}
            className={`focus-ring rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              on(x.key) ? "border-rust-700 bg-rust-700 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-ink-900/40"
            }`}
          >
            {x.label}
          </button>
        ))}
      </div>
      <p key={p.key} className="mt-3 min-h-[3rem] animate-fadeIn text-sm leading-relaxed text-ink-700" aria-live="polite">
        <span className="font-semibold text-ink-950">{p.label}: </span>
        {p.body}
      </p>
      <figcaption className="mt-2 border-t border-ink-900/10 pt-2 text-[11px] uppercase tracking-[0.14em] text-ink-500">
        Electric storage heater — illustrative; other types differ
      </figcaption>
    </figure>
  );
}
