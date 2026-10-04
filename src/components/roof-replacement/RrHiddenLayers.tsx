"use client";

import { useState } from "react";
import { rrHiddenFindings } from "@/lib/roof-replacement";

// Where each finding sits in the drawing (x along the roof, 0–600).
const markerX = [110, 210, 300, 40, 400, 520];

export default function RrHiddenLayers() {
  const [reveal, setReveal] = useState(35);
  const edge = 20 + (reveal / 100) * 560;

  return (
    <section aria-labelledby="rr-hidden" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-label !text-teal-300">Under the surface</p>
            <h2 id="rr-hidden" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
              What&rsquo;s under the roof surface matters
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-300 lg:col-span-5">
            Some things can only be seen once old layers come off. That&rsquo;s
            why a replacement scope may change after work begins — and why
            it should say how changes will be handled.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-sand-100/10 bg-ink-900 p-4 sm:p-6">
          <svg viewBox="0 0 600 200" className="h-auto w-full" role="img" aria-labelledby="rr-hidden-title">
            <title id="rr-hidden-title">
              {`Roof section with the surface removed up to ${reveal}% of its width, revealing hidden problems underneath`}
            </title>
            <defs>
              <clipPath id="rr-peel">
                <rect x="0" y="0" width={edge} height="200" />
              </clipPath>
              <pattern id="rr-wet" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.4" fill="#4a9797" />
              </pattern>
            </defs>

            {/* structure and wall */}
            <rect x="20" y="40" width="20" height="120" fill="#4a5468" />
            <rect x="20" y="130" width="560" height="40" fill="#5c584f" />

            {/* what's revealed underneath */}
            <g clipPath="url(#rr-peel)">
              <rect x="40" y="96" width="540" height="34" fill="#78746a" />
              <rect x="80" y="100" width="70" height="26" fill="url(#rr-wet)" />
              <rect x="80" y="100" width="70" height="26" fill="#4a9797" opacity="0.25" />
              <path d="M180 126l14-10 10 8 12-12 10 14" fill="none" stroke="#35332e" strokeWidth="3" />
              <rect x="190" y="118" width="40" height="12" fill="#35332e" opacity="0.6" />
              <rect x="270" y="98" width="60" height="6" fill="#d9bfa0" />
              <rect x="276" y="104" width="50" height="5" fill="#9c7752" />
              <rect x="282" y="109" width="40" height="5" fill="#c4c0b4" />
              <path d="M40 96v-30" stroke="#c76a3f" strokeWidth="3" strokeDasharray="4 4" />
              <path d="M360 100h80" stroke="#14181f" strokeWidth="5" />
              <path d="M400 98l6 8-6 2" stroke="#c76a3f" strokeWidth="2" fill="none" />
              <path d="M460 104L570 116" stroke="#e0b28a" strokeWidth="2" strokeDasharray="5 4" />
              <path d="M566 112l6 4-6 4" stroke="#e0b28a" strokeWidth="2" fill="none" />
            </g>

            {/* existing surface still in place to the right of the peel edge */}
            <g>
              <rect x={edge} y="84" width={Math.max(0, 580 - edge)} height="46" fill="#c4c0b4" />
              <path d={`M${edge} 84h${Math.max(0, 580 - edge)}`} stroke="#9a968a" strokeWidth="2" />
            </g>
            <path d={`M${edge} 70V140`} stroke="#8fc4c4" strokeWidth="2" />
            <circle cx={edge} cy="66" r="5" fill="#8fc4c4" />

            {rrHiddenFindings.map((f, i) => {
              const x = markerX[i];
              const visible = x < edge;
              return (
                <g key={f.label} style={{ opacity: visible ? 1 : 0, transition: "opacity 250ms" }}>
                  <circle cx={x} cy="34" r="11" fill="#14181f" stroke="#e0b28a" strokeWidth="1.5" />
                  <text x={x} y="38" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fill="#e0b28a">
                    {i + 1}
                  </text>
                  <path d={`M${x} 45V92`} stroke="#e0b28a" strokeWidth="1" strokeDasharray="2 3" />
                </g>
              );
            })}
          </svg>

          <label htmlFor="rr-peel-range" className="mt-5 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-300">
            Remove the old surface
          </label>
          <input
            id="rr-peel-range"
            type="range"
            min={0}
            max={100}
            value={reveal}
            onChange={(e) => setReveal(Number(e.target.value))}
            aria-valuetext={`${reveal}% of surface removed`}
            className="focus-ring mt-2 w-full cursor-pointer accent-teal-300"
          />
        </div>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rrHiddenFindings.map((f, i) => {
            const visible = markerX[i] < edge;
            return (
              <li
                key={f.label}
                className={`flex gap-3 rounded-xl border p-4 transition-colors ${visible ? "border-ember-500/40 bg-ink-900" : "border-sand-100/10"}`}
              >
                <span className={`font-mono text-sm ${visible ? "text-ember-500" : "text-ink-500"}`}>{i + 1}</span>
                <div>
                  <h3 className="text-sm font-semibold text-sand-50">{f.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-300">{f.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
