"use client";

import { useState } from "react";

const checks = ["Drain locations", "How water flows across the roof", "Blockages", "Low spots", "Ponding", "Penetrations near drains"];

export default function RrDrainage() {
  const [blocked, setBlocked] = useState(false);

  return (
    <section aria-labelledby="rr-drain" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="section-label !text-teal-700">Drainage</p>
          <h2 id="rr-drain" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Don&rsquo;t replace the roof and ignore drainage
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Even a well-installed roof can have problems if water can&rsquo;t
            leave it efficiently. Water that sits on a roof finds every weak
            point and speeds up wear on the surface and waterproofing.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-ink-700">
            {checks.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="mt-2 h-1 w-3 flex-none bg-teal-600" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-ink-600">
            Required falls depend on the roof system and building, so they
            are set during the inspection rather than assumed.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div role="radiogroup" aria-label="Drainage state" className="inline-flex rounded-full border border-ink-900/15 bg-sand-50 p-1">
            {[
              { v: false, label: "Flowing" },
              { v: true, label: "Blocked drain" },
            ].map((o) => (
              <button
                key={o.label}
                type="button"
                role="radio"
                aria-checked={blocked === o.v}
                onClick={() => setBlocked(o.v)}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  blocked === o.v ? "bg-ink-950 text-sand-50" : "text-ink-700"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

          <figure className="mt-5 rounded-2xl border border-ink-900/10 bg-sand-50 p-4">
            <svg viewBox="0 0 520 200" className="h-auto w-full" role="img" aria-labelledby="rr-drain-title">
              <title id="rr-drain-title">
                {blocked
                  ? "Roof section with a blocked drain: water ponds around the outlet and in a low spot"
                  : "Roof section with water running down the slope into a clear drain"}
              </title>
              {/* sloped roof surface toward drain at right */}
              <path d="M20 90L440 120v20H20z" fill="#c4c0b4" />
              <path d="M20 90L440 120" stroke="#78746a" strokeWidth="2" />
              <path d="M440 120h40v20h-40z" fill="#9a968a" />
              <path d="M480 60v80" stroke="#5c584f" strokeWidth="8" />
              {/* drain */}
              <rect x="440" y="116" width="26" height="10" fill={blocked ? "#78746a" : "#14181f"} />
              <path d="M453 126v60" stroke="#5c584f" strokeWidth="10" />
              {blocked && <path d="M444 118l18 6M446 124l16-6" stroke="#4a3626" strokeWidth="2" />}
              {/* low spot */}
              <path d="M200 105c20 5 40 5 60 0" fill="none" stroke="#78746a" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* water */}
              {!blocked ? (
                <g>
                  <path className="fs-flow" d="M40 86L436 114" stroke="#2f7a7a" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path className="fs-flow" d="M453 130v50" stroke="#2f7a7a" strokeWidth="3" fill="none" />
                  <text x="30" y="70" fontFamily="ui-monospace, monospace" fontSize="10" fill="#1f5c5c">SLOPE → DRAIN → OUT</text>
                </g>
              ) : (
                <g>
                  <path d="M330 112c40 6 80 8 110 6v-6c-30 2-70 0-110-4z" fill="#4a9797" opacity="0.65" />
                  <ellipse cx="230" cy="106" rx="34" ry="5" fill="#4a9797" opacity="0.6" />
                  <path d="M236 110v16M250 110v10" stroke="#4a9797" strokeWidth="2" strokeLinecap="round" className="fs-flow" />
                  <text x="30" y="70" fontFamily="ui-monospace, monospace" fontSize="10" fill="#94472a">PONDING · WATER WORKS INTO WEAK POINTS</text>
                </g>
              )}
              <g fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1" fill="#69748a">
                <text x="196" y="160">LOW SPOT</text>
                <text x="420" y="196">DRAIN</text>
              </g>
            </svg>
            <figcaption className="mt-2 text-[11px] uppercase tracking-[0.14em] text-ink-500">
              Explanatory diagram, not to scale
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
