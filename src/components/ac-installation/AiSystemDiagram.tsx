"use client";

import { useState } from "react";
import { aiParts, type AiPartKey } from "@/lib/ac-installation";

const HI = "#1f5c5c";

// Section through a room and exterior wall: indoor unit, airflow,
// refrigerant lines, drain and power, and the outdoor unit outside.
export default function AiSystemDiagram() {
  const [part, setPart] = useState<AiPartKey>("indoor");
  const p = aiParts.find((x) => x.key === part)!;
  const on = (k: AiPartKey) => part === k;
  const pick = (k: AiPartKey) => () => setPart(k);
  const dim = (k: AiPartKey) => ({ opacity: on(k) ? 1 : 0.55, transition: "opacity 250ms" });

  return (
    <figure className="rounded-3xl border border-ink-900/10 bg-sand-50 p-4 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.35)] sm:p-6">
      <svg viewBox="0 0 560 340" className="h-auto w-full touch-manipulation select-none" role="img" aria-labelledby="ai-sys-title ai-sys-desc">
        <title id="ai-sys-title">Split AC system: indoor unit, refrigerant lines, drain, electrical connection and outdoor unit</title>
        <desc id="ai-sys-desc">{`Selected: ${p.label}. ${p.body}`}</desc>

        {/* room + exterior */}
        <rect x="0" y="0" width="380" height="340" fill="#f4f0e8" />
        <rect x="400" y="0" width="160" height="340" fill="#e0f0f0" />
        <rect x="380" y="0" width="20" height="340" fill="#c4c0b4" />
        <path d="M0 300h380M400 300h160" stroke="#9a968a" strokeWidth="2" />

        {/* airflow */}
        <g style={dim("airflow")} onClick={pick("airflow")} className="cursor-pointer">
          <path className="fs-flow" d="M250 112c-40 30-90 40-160 40" fill="none" stroke="#4a9797" strokeWidth="2.5" strokeLinecap="round" />
          <path className="fs-flow" d="M250 122c-30 50-80 80-150 90" fill="none" stroke="#8fc4c4" strokeWidth="2.5" strokeLinecap="round" />
          <path className="fs-flow" d="M260 126c-10 60-50 110-110 140" fill="none" stroke="#8fc4c4" strokeWidth="2" strokeLinecap="round" />
          <rect x="70" y="100" width="200" height="180" fill="transparent" />
        </g>

        {/* refrigerant lines through wall to outdoor unit */}
        <g style={dim("refrigerant")} onClick={pick("refrigerant")} className="cursor-pointer">
          <path d="M360 80h40v120h40" fill="none" stroke="transparent" strokeWidth="18" />
          <path d="M356 76h48v128h36" fill="none" stroke="#b3652f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M356 86h38v128h46" fill="none" stroke="#c98246" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path className="fs-flow" d="M356 76h48v128h36" fill="none" stroke="#f5e3d2" strokeWidth="1.5" />
        </g>

        {/* drain line */}
        <g style={dim("drain")} onClick={pick("drain")} className="cursor-pointer">
          <path d="M340 100v20h50v160" fill="none" stroke="transparent" strokeWidth="16" />
          <path d="M340 100v20h48v170" fill="none" stroke="#2f7a7a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path className="fs-flow" d="M340 100v20h48v170" fill="none" stroke="#e0f0f0" strokeWidth="1.2" />
          <path d="M378 296h22" stroke="#2f7a7a" strokeWidth="3" />
        </g>

        {/* electrical */}
        <g style={dim("electrical")} onClick={pick("electrical")} className="cursor-pointer">
          <rect x="40" y="200" width="30" height="40" rx="3" fill="#faf8f4" stroke="#333a49" strokeWidth="1.5" />
          <path d="M57 208l-5 10h7l-5 10" fill="none" stroke="#c17f3e" strokeWidth="2" strokeLinejoin="round" />
          <path d="M55 200V40h290v30" fill="none" stroke="#333a49" strokeWidth="2" strokeDasharray="5 4" />
        </g>

        {/* indoor unit */}
        <g style={dim("indoor")} onClick={pick("indoor")} className="cursor-pointer">
          <rect x="220" y="60" width="150" height="50" rx="12" fill="#faf8f4" stroke={on("indoor") ? HI : "#333a49"} strokeWidth={on("indoor") ? 3 : 2} />
          <path d="M236 98h118" stroke="#9a968a" strokeWidth="2" />
          <circle cx="352" cy="74" r="3" fill="#48a08f" />
        </g>

        {/* outdoor unit */}
        <g style={dim("outdoor")} onClick={pick("outdoor")} className="cursor-pointer">
          <rect x="430" y="180" width="110" height="80" rx="6" fill="#faf8f4" stroke={on("outdoor") ? HI : "#333a49"} strokeWidth={on("outdoor") ? 3 : 2} />
          <circle cx="475" cy="220" r="26" fill="none" stroke="#333a49" strokeWidth="2" />
          <g className="pc-spin">
            <circle cx="475" cy="220" r="20" fill="none" />
            <path d="M475 220l0-20M475 220l17 10M475 220l-17 10" stroke="#333a49" strokeWidth="3" strokeLinecap="round" />
          </g>
          <path d="M515 194v52M525 194v52" stroke="#9a968a" strokeWidth="2" />
          <path d="M440 260v20h90v-20" fill="none" stroke="#5c584f" strokeWidth="3" />
          <path className="fs-flow" d="M545 200c10 0 10 10 0 10s-10 10 0 10" fill="none" stroke="#c17f3e" strokeWidth="2" />
        </g>

        <g fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.3" fill="#4a5468" pointerEvents="none">
          <text x="14" y="24">INSIDE</text>
          <text x="410" y="24">OUTSIDE</text>
          <text x="410" y="316" fontSize="9">DRAIN POINT</text>
        </g>
      </svg>

      <div role="radiogroup" aria-label="System part" className="mt-4 flex flex-wrap gap-2">
        {aiParts.map((x) => (
          <button
            key={x.key}
            type="button"
            role="radio"
            aria-checked={on(x.key)}
            onClick={pick(x.key)}
            onMouseEnter={pick(x.key)}
            className={`focus-ring rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              on(x.key) ? "border-teal-800 bg-teal-800 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-ink-900/40"
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
        Split AC system — illustrative, not to scale
      </figcaption>
    </figure>
  );
}
