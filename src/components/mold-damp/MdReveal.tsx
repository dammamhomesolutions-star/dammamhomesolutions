"use client";

import { useState } from "react";

const callouts = [
  { x: 392, y: 70, tx: 470, ty: 54, label: "Possible moisture path" },
  { x: 300, y: 190, tx: 470, ty: 150, label: "Damp zone" },
  { x: 250, y: 300, tx: 470, ty: 250, label: "Staining / tide-mark" },
  { x: 150, y: 352, tx: 470, ty: 330, label: "Affected plaster" },
];

// Educational wall illustration with a Surface / Moisture toggle. It shows
// how moisture can sit behind a normal-looking wall — not what is inside
// any particular customer's wall.
export default function MdReveal() {
  const [wet, setWet] = useState(false);

  return (
    <figure>
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-ink-900/15 bg-sand-50 p-1" role="group" aria-label="Wall view">
          {[
            { k: false, label: "Surface view" },
            { k: true, label: "Moisture view" },
          ].map((o) => (
            <button key={o.label} type="button" aria-pressed={wet === o.k} onClick={() => setWet(o.k)} className={`focus-ring rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${wet === o.k ? "bg-glass-900 text-sand-50" : "text-ink-700 hover:text-ink-950"}`}>
              {o.label}
            </button>
          ))}
        </div>
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 sm:inline">Fig. A — Wall section</span>
      </div>

      <div className="relative mt-4 overflow-hidden rounded-xl border border-ink-900/10 bg-sand-100">
        <svg viewBox="0 0 560 420" className="h-auto w-full" role="img" aria-label={wet ? "Moisture view: a damp zone spreads down the wall from a pipe and the ceiling edge, with a tide-mark stain, spotted growth in the lower corner and crumbling plaster near the floor." : "Surface view: a painted interior wall that looks mostly normal, with only a faint mark low down."}>
          <defs>
            <radialGradient id="md-damp" cx="0.5" cy="0.35" r="0.65">
              <stop offset="0" stopColor="#5b7d8f" stopOpacity="0.55" />
              <stop offset="0.7" stopColor="#7fa0b0" stopOpacity="0.25" />
              <stop offset="1" stopColor="#7fa0b0" stopOpacity="0" />
            </radialGradient>
            <pattern id="md-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0H0V20" fill="none" stroke="#3d5a6b" strokeOpacity="0.12" strokeWidth="1" />
            </pattern>
          </defs>

          {/* room shell */}
          <rect width="560" height="420" fill="#eceef0" />
          <rect x="0" y="0" width="560" height="26" fill="#d7e4ea" />
          <rect x="30" y="26" width="400" height="360" fill="#f4f0e8" />
          <rect x="30" y="386" width="400" height="34" fill="#c4c0b4" />
          <rect x="30" y="372" width="400" height="14" fill="#ebe4d6" />

          {/* faint surface hint */}
          <ellipse cx="160" cy="340" rx="40" ry="18" fill="#d9bfa0" opacity={wet ? 0 : 0.35} className="transition-opacity duration-500" />

          {/* moisture layer */}
          <g className="transition-opacity duration-700 motion-reduce:transition-none" opacity={wet ? 1 : 0}>
            <rect x="30" y="26" width="400" height="360" fill="url(#md-grid)" />
            <path d="M380 26c-10 60-60 80-80 140s-20 100-70 140-110 50-200 76V26z" fill="url(#md-damp)" />
            <path d="M330 120c-30 40-90 70-110 120s-40 70-120 100" fill="none" stroke="#cdab8f" strokeWidth="3" strokeDasharray="2 5" />
            <path d="M300 250c-40 30-80 50-140 60" fill="none" stroke="#b8916c" strokeWidth="2" opacity="0.8" />
            {/* growth spots */}
            {[[70, 330, 4], [88, 342, 3], [60, 352, 5], [100, 356, 2.5], [78, 362, 3.5], [52, 336, 2]].map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} fill="#2b2f33" opacity="0.7" />)}
            {/* crumbling plaster */}
            <path d="M120 372l10-18 14 6 12-14 16 10 10-6 8 22z" fill="#d9bfa0" stroke="#9c7752" strokeWidth="1" />
            {/* pipe in wall + flow */}
            <path d="M392 26v80" stroke="#3d5a6b" strokeWidth="10" strokeLinecap="round" />
            <path className="md-flow" d="M392 100c-20 30-50 50-80 80s-60 90-110 120" fill="none" stroke="#3d5a6b" strokeWidth="2.5" strokeDasharray="6 8" />
            {callouts.map((c) => (
              <g key={c.label}>
                <circle cx={c.x} cy={c.y} r="4" fill="#1c2733" />
                <path d={`M${c.x} ${c.y}L${c.tx - 8} ${c.ty}H${c.tx}`} stroke="#1c2733" strokeWidth="1" fill="none" />
              </g>
            ))}
          </g>

          {/* side annotation column */}
          <rect x="440" y="26" width="120" height="394" fill="#eceef0" />
          {wet && callouts.map((c) => (
            <text key={c.label} x={c.tx + 4} y={c.ty + 4} fontSize="12" className="fill-glass-900 font-sans">
              {c.label.split(" ").reduce<string[][]>((a, w) => { const last = a[a.length - 1]; if (last && (last.join(" ") + " " + w).length <= 13) last.push(w); else a.push([w]); return a; }, []).map((ln, i) => (
                <tspan key={i} x={c.tx + 4} dy={i ? 15 : 0}>{ln.join(" ")}</tspan>
              ))}
            </text>
          ))}
          {!wet && (
            <text x="450" y="58" fontSize="12" className="fill-ink-500 font-sans">
              <tspan x="450">Looks</tspan><tspan x="450" dy="15">mostly</tspan><tspan x="450" dy="15">normal…</tspan>
            </text>
          )}
        </svg>
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-ink-500">
        Educational illustration — it shows how moisture can sit behind a surface,
        not what is inside your wall. {wet ? "Revealed: damp zone, staining, affected plaster and a possible moisture path." : "Switch to moisture view to see what can be hidden."}
      </figcaption>
    </figure>
  );
}
