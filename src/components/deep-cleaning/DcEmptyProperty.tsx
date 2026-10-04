"use client";

import { useState } from "react";
import { dcEmptyStages } from "@/lib/deep-cleaning";

// One room through five stages. Conceptual illustration, not a photo.
function Stage({ s }: { s: number }) {
  const furnished = s === 0;
  const marks = s === 1 || s === 2;
  const highlight = s === 2;
  const cleaning = s === 3;
  const ready = s === 4;
  const dustOpacity = [0.35, 0.55, 0.5, 0.2, 0][s];

  return (
    <svg viewBox="0 0 520 280" className="h-auto w-full" aria-hidden="true">
      <rect x="0" y="0" width="520" height="280" fill={ready ? "#faf8f4" : "#f2ede2"} style={{ transition: "fill 500ms" }} />
      <path d="M60 40h400v170H60z" fill="none" stroke="#9a968a" strokeWidth="1.5" />
      <path d="M0 0l60 40M520 0l-60 40M0 280l60-70M520 280l-60-70" stroke="#9a968a" strokeWidth="1.5" />
      <path d="M60 210h400l60 70H0z" fill={ready ? "#ebe4d6" : "#ddd3be"} style={{ transition: "fill 500ms" }} />
      <path d="M60 204h400" stroke="#78746a" strokeWidth="3" />

      {/* dust layer */}
      <g fill="#8a8170" style={{ opacity: dustOpacity, transition: "opacity 500ms" }}>
        {[[90, 240], [150, 260], [230, 236], [300, 262], [380, 240], [440, 258], [120, 222], [350, 226], [270, 248], [470, 230]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.4" />
        ))}
      </g>

      {/* furniture */}
      <g style={{ opacity: furnished ? 1 : 0, transition: "opacity 450ms" }}>
        <path d="M110 230v-30a8 8 0 0 1 8-8h120a8 8 0 0 1 8 8v30M100 230h156v14H100z" fill="#c4c0b4" stroke="#5c584f" strokeWidth="1.5" />
        <path d="M330 210V90h80v120" fill="#d9bfa0" stroke="#7a5a3f" strokeWidth="1.5" />
        <path d="M370 90v120" stroke="#7a5a3f" strokeWidth="1.2" />
      </g>

      {/* marks where furniture stood */}
      <g style={{ opacity: marks ? 1 : 0, transition: "opacity 450ms" }}>
        <rect x="100" y="230" width="156" height="16" fill="#a99f88" opacity="0.6" />
        <rect x="330" y="204" width="80" height="10" fill="#a99f88" opacity="0.6" />
        <path d="M330 120h80" stroke="#b4ac98" strokeWidth="2" strokeDasharray="4 4" />
      </g>

      {/* accessible surfaces highlighted */}
      <g fill="none" stroke="#48a08f" strokeWidth="3" strokeDasharray="6 5" style={{ opacity: highlight ? 1 : 0, transition: "opacity 450ms" }}>
        <path d="M60 204h400" />
        <path d="M60 40v164M460 40v164" />
        <rect x="96" y="226" width="164" height="24" />
        <rect x="326" y="200" width="88" height="18" />
      </g>

      {/* cleaning in progress */}
      <g style={{ opacity: cleaning ? 1 : 0, transition: "opacity 450ms" }}>
        <path d="M60 210h220l-40 70H0z" fill="#ebe4d6" />
        <path d="M280 212v66" stroke="#48a08f" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* ready */}
      <g stroke="#48a08f" strokeWidth="2" strokeLinecap="round" style={{ opacity: ready ? 1 : 0, transition: "opacity 450ms" }}>
        <path d="M150 230v10M145 235h10M360 120v10M355 125h10M420 250v10M415 255h10" />
      </g>

      <g fontFamily="ui-monospace, monospace" fontSize="11" letterSpacing="1.6">
        <rect x="16" y="12" width="210" height="24" rx="12" fill="#14181f" opacity="0.88" />
        <text x="30" y="28" fill="#f4f0e8">{dcEmptyStages[s].label.toUpperCase()}</text>
      </g>
    </svg>
  );
}

export default function DcEmptyProperty() {
  const [s, setS] = useState(0);
  return (
    <section aria-labelledby="dc-empty" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="section-label !text-mint-700">Empty properties</p>
          <h2 id="dc-empty" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Why empty properties are easier to deep clean
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">When furniture is removed:</p>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-800">
            {[
              "More floor area becomes reachable",
              "Corners and skirting are easier to clean",
              "Cabinets can be checked inside and out",
              "Walls and doors are fully visible",
              "Dust behind furniture can be removed",
              "The property is ready before belongings arrive",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="mt-2 h-1 w-3 flex-none bg-mint-600" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-ink-900/10">
            <Stage s={s} />
          </div>
          <p className="mt-3 min-h-[2.5rem] text-sm text-ink-700" aria-live="polite">{dcEmptyStages[s].caption}</p>
          <label htmlFor="dc-empty-range" className="sr-only">Cleaning stage</label>
          <input
            id="dc-empty-range"
            type="range"
            min={0}
            max={dcEmptyStages.length - 1}
            value={s}
            onChange={(e) => setS(Number(e.target.value))}
            aria-valuetext={dcEmptyStages[s].label}
            className="focus-ring mt-2 w-full cursor-pointer accent-mint-700"
          />
          <ol className="mt-2 grid grid-cols-5 gap-1 text-[10px] uppercase tracking-[0.1em] text-ink-500 sm:text-[11px]">
            {dcEmptyStages.map((st, i) => (
              <li key={st.label}>
                <button type="button" onClick={() => setS(i)} className={`focus-ring rounded-sm text-left ${i === s ? "font-semibold text-mint-800" : ""}`}>
                  {st.label}
                </button>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-ink-400">Conceptual illustration</p>
        </div>
      </div>
    </section>
  );
}
