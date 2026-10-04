"use client";

import { useState } from "react";

// Ceiling void above two rooms: air handler, supply trunk and branches,
// return duct. Toggle between a dusty system and a cleaned one.
const dust = [
  [140, 74], [180, 78], [230, 72], [270, 79], [320, 74], [360, 77], [410, 73], [450, 78],
  [170, 186], [230, 182], [300, 188], [360, 184], [420, 187],
  [120, 118], [380, 120],
];

export default function DkHeroVisual() {
  const [clean, setClean] = useState(false);

  return (
    <figure className="rounded-3xl border border-ink-900/10 bg-sand-50 p-4 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.35)] sm:p-6">
      <svg viewBox="0 0 520 300" className="h-auto w-full" role="img" aria-labelledby="dk-hero-title">
        <title id="dk-hero-title">
          {clean
            ? "Ducted AC system after cleaning: clear supply and return ducts with air flowing to the rooms"
            : "Ducted AC system with dust and debris settled inside the supply and return ducts"}
        </title>
        {/* ceiling void */}
        <rect width="520" height="220" fill="#eceef0" />
        <path d="M0 220h520" stroke="#4d545c" strokeWidth="4" />
        <rect y="224" width="520" height="76" fill="#f4f0e8" />
        <path d="M260 224v76" stroke="#b7bfc6" strokeWidth="2" />

        {/* air handler */}
        <rect x="20" y="50" width="80" height="60" rx="6" fill="#faf8f4" stroke="#2b2f33" strokeWidth="2" />
        <circle cx="60" cy="80" r="16" fill="none" stroke="#2b2f33" strokeWidth="2" />
        <g className="pc-spin">
          <circle cx="60" cy="80" r="12" fill="none" />
          <path d="M60 80v-12M60 80l10 6M60 80l-10 6" stroke="#2b2f33" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* supply trunk + branches */}
        <path d="M100 66h390v28H100z" fill="#d7dce0" stroke="#666f78" strokeWidth="2" />
        <path d="M180 94v120M400 94v120" stroke="#666f78" strokeWidth="18" />
        <path d="M180 94v120M400 94v120" stroke="#d7dce0" strokeWidth="14" />
        <path d="M160 214h40M380 214h40" stroke="#2b2f33" strokeWidth="4" />

        {/* return duct */}
        <path d="M100 106h30v70h340v24" fill="none" stroke="#666f78" strokeWidth="24" strokeLinejoin="round" />
        <path d="M100 106h30v70h340v24" fill="none" stroke="#e0d4bd" strokeWidth="20" strokeLinejoin="round" />
        <path d="M450 214h40" stroke="#2b2f33" strokeWidth="4" strokeDasharray="4 3" />

        {/* buildup */}
        <g fill="#78746a" style={{ opacity: clean ? 0 : 0.85, transition: "opacity 700ms" }}>
          {dust.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y + 10} r="3" />
          ))}
          <path d="M104 88h380" stroke="#9a968a" strokeWidth="5" opacity="0.7" />
          <path d="M136 186h330" stroke="#9a968a" strokeWidth="5" opacity="0.7" />
        </g>

        {/* airflow */}
        <g fill="none" strokeLinecap="round" style={{ opacity: clean ? 1 : 0.45, transition: "opacity 700ms" }}>
          <path className="fs-flow" d="M110 80h370" stroke="#5b7d8f" strokeWidth="2" />
          <path className="fs-flow" d="M180 100v130" stroke="#5b7d8f" strokeWidth="2" />
          <path className="fs-flow" d="M400 100v130" stroke="#5b7d8f" strokeWidth="2" />
          <path className="fs-flow" d="M470 230v-46h-330v-70h-30" stroke="#c98246" strokeWidth="2" />
          <path className="fs-flow" d="M180 230c-10 20-30 30-50 40M400 230c10 20 30 30 50 40" stroke="#7fa0b0" strokeWidth="2" />
        </g>

        <g fontFamily="ui-monospace, monospace" fontSize="9.5" letterSpacing="1.2" fill="#4d545c">
          <text x="24" y="128">AIR HANDLER</text>
          <text x="240" y="60">SUPPLY</text>
          <text x="240" y="170">RETURN</text>
          <text x="150" y="246">SUPPLY VENT</text>
          <text x="440" y="246">RETURN</text>
        </g>
      </svg>

      <div role="radiogroup" aria-label="Duct condition" className="mt-4 inline-flex rounded-full border border-ink-900/15 bg-sand-100 p-1">
        {[
          { v: false, label: "Dusty ducts" },
          { v: true, label: "After cleaning" },
        ].map((o) => (
          <button
            key={o.label}
            type="button"
            role="radio"
            aria-checked={clean === o.v}
            onClick={() => setClean(o.v)}
            className={`focus-ring rounded-full px-4 py-1.5 text-sm font-medium ${clean === o.v ? "bg-ink-950 text-sand-50" : "text-ink-700"}`}
          >
            {o.label}
          </button>
        ))}
      </div>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-500">
        Illustrative ducted system — not a photo of a completed job
      </figcaption>
    </figure>
  );
}
