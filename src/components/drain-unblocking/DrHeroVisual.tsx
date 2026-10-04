"use client";

import { useState } from "react";

// Two-storey section: upstairs bathroom and downstairs kitchen drain into a
// stack, then a main drain under the floor out to the sewer. "Blocked" shows
// a restriction in the main drain with water backing up at the floor drain.
export default function DrHeroVisual() {
  const [cleared, setCleared] = useState(false);

  return (
    <figure className="rounded-3xl border border-ink-900/10 bg-sand-50 p-4 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.35)] sm:p-6">
      <svg viewBox="0 0 520 340" className="h-auto w-full" role="img" aria-labelledby="dr-hero-title">
        <title id="dr-hero-title">
          {cleared
            ? "Drainage restored: waste from the bathroom and kitchen flows through the main drain to the sewer"
            : "Blocked main drain: waste backs up and appears at the ground-floor floor drain"}
        </title>
        {/* building */}
        <rect width="520" height="340" fill="#f4f0e8" />
        <path d="M20 40h360v210H20z" fill="#faf8f4" stroke="#5c584f" strokeWidth="2" />
        <path d="M20 140h360" stroke="#5c584f" strokeWidth="3" />
        <rect y="250" width="520" height="90" fill="#c4c0b4" />
        <rect y="250" width="520" height="6" fill="#9a968a" />
        <g fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1.2" fill="#4a5468">
          <text x="30" y="58">BATHROOM</text>
          <text x="30" y="158">KITCHEN</text>
          <text x="420" y="272">SEWER</text>
        </g>

        {/* fixtures */}
        <g fill="none" stroke="#333a49" strokeWidth="2">
          <path d="M60 120h40v-14H60zM70 106V90" />
          <path d="M150 120c0-20 40-20 40 0zM158 100h24v-16h-24z" />
          <path d="M60 220h70v-20H60zM95 200v-14" />
          <circle cx="200" cy="246" r="6" />
        </g>

        {/* pipes */}
        <g fill="none" stroke="#9a968a" strokeWidth="8" strokeLinejoin="round">
          <path d="M80 120v12h200" />
          <path d="M170 120v12" />
          <path d="M280 132v148" />
          <path d="M95 220v10h185" />
          <path d="M200 252v28h80" />
          <path d="M280 290h220" />
        </g>
        {/* manhole / sewer */}
        <rect x="440" y="276" width="40" height="40" rx="4" fill="#9a968a" stroke="#5c584f" strokeWidth="2" />
        {/* cleanout */}
        <rect x="300" y="244" width="16" height="12" fill="#faf8f4" stroke="#333a49" strokeWidth="1.5" />
        <path d="M308 256v34" stroke="#9a968a" strokeWidth="5" />
        <circle cx="308" cy="250" r="14" fill="none" stroke="#2f7a7a" strokeWidth="2" className="pc-hover" opacity="0.7" />

        {/* flow */}
        <g fill="none" stroke="#4a9797" strokeWidth="2.5" strokeLinecap="round">
          <path className="fs-flow" d="M80 124v8h196v150" />
          <path className="fs-flow" d="M95 224v6h181" />
          {cleared ? (
            <path className="fs-flow" d="M280 290h200" />
          ) : (
            <path className="fs-flow" d="M280 290h66" />
          )}
        </g>

        {/* blockage + backup */}
        <g style={{ opacity: cleared ? 0 : 1, transition: "opacity 500ms" }}>
          <rect x="348" y="282" width="22" height="16" rx="4" fill="#6b4a35" />
          <circle cx="359" cy="290" r="18" fill="none" stroke="#c76a3f" strokeWidth="2" className="pc-hover" />
          <ellipse cx="200" cy="246" rx="24" ry="5" fill="#4a9797" opacity="0.7" />
          <path d="M200 240v-12" stroke="#4a9797" strokeWidth="2.5" strokeLinecap="round" className="fs-flow" />
          <text x="330" y="322" fontFamily="ui-monospace, monospace" fontSize="9" fill="#94472a">BLOCKAGE</text>
          <text x="120" y="244" fontFamily="ui-monospace, monospace" fontSize="9" fill="#2f7a7a">BACKUP</text>
        </g>
        {cleared && <text x="330" y="322" fontFamily="ui-monospace, monospace" fontSize="9" fill="#1f5c5c">FLOW RESTORED</text>}
      </svg>

      <div role="radiogroup" aria-label="Drain condition" className="mt-4 inline-flex rounded-full border border-ink-900/15 bg-sand-100 p-1">
        {[
          { v: false, label: "Blocked main drain" },
          { v: true, label: "After clearing" },
        ].map((o) => (
          <button
            key={o.label}
            type="button"
            role="radio"
            aria-checked={cleared === o.v}
            onClick={() => setCleared(o.v)}
            className={`focus-ring rounded-full px-4 py-1.5 text-sm font-medium ${cleared === o.v ? "bg-ink-950 text-sand-50" : "text-ink-700"}`}
          >
            {o.label}
          </button>
        ))}
      </div>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-500">
        Illustrative drainage section — not to scale
      </figcaption>
    </figure>
  );
}
