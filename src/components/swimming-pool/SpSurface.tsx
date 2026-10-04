"use client";

import { useState } from "react";
import { spSurfaceLevels, spSurfaceSpots } from "@/lib/swimming-pool";

// Underwater-style wall view with tile band and coping; numbered hotspots.
export default function SpSurface() {
  const [key, setKey] = useState(spSurfaceSpots[0].key);
  const s = spSurfaceSpots.find((x) => x.key === key)!;

  return (
    <section id="surface" aria-labelledby="sp-surface" className="relative overflow-hidden bg-teal-800 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-300">Surface &amp; tiles</p>
          <h2 id="sp-surface" className="mt-4 font-serif text-3xl tracking-tight sm:text-5xl">The pool surface tells a story</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-teal-100">We repair tiles, grout and coping, and resurface or re-plaster pools when the finish has failed. Not every surface problem can be judged without an inspection.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] ring-1 ring-sand-100/15">
              <svg viewBox="0 0 320 200" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                  <pattern id="sp-sf-tile" width="16" height="16" patternUnits="userSpaceOnUse">
                    <rect width="16" height="16" fill="#2f7a7a" />
                    <path d="M0 0h16v16" fill="none" stroke="#e0f0f0" strokeWidth="1" opacity="0.6" />
                  </pattern>
                </defs>
                <rect width="320" height="200" fill="#4a9797" />
                <rect width="320" height="20" fill="#faf8f4" />
                <rect y="20" width="320" height="32" fill="url(#sp-sf-tile)" />
                <g className="sp-caustic" opacity="0.35">
                  <path d="M-20 90c30-14 60-14 90 0s60 14 90 0 60-14 90 0 60 14 90 0M-20 140c30-14 60-14 90 0s60 14 90 0 60-14 90 0 60 14 90 0" stroke="#e0f0f0" strokeWidth="2" fill="none" />
                </g>
                <path d="M64 50l6 8-4 6" stroke="#14181f" strokeWidth="1.5" fill="none" />
                <rect x="140" y="36" width="16" height="16" fill="#164848" />
                <path d="M282 8l6 10" stroke="#94472a" strokeWidth="2" />
                <ellipse cx="96" cy="134" rx="30" ry="12" fill="#c9b48a" opacity="0.45" />
                <path d="M170 132c10-6 30-6 40 4s-10 14-30 10-16-8-10-14z" fill="#e0f0f0" opacity="0.5" />
                <path d="M254 112h20M250 118h28M256 124h16" stroke="#e0f0f0" strokeWidth="1" opacity="0.5" />
              </svg>
              {spSurfaceSpots.map((p, n) => (
                <button
                  key={p.key}
                  type="button"
                  aria-pressed={key === p.key}
                  aria-label={p.label}
                  onClick={() => setKey(p.key)}
                  className={`focus-ring absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xs font-bold shadow-md transition-transform hover:scale-110 ${key === p.key ? "scale-110 bg-ink-950 text-sand-50 ring-4 ring-sand-50/80" : "bg-sand-50 text-ink-950"}`}
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  {n + 1}
                </button>
              ))}
            </div>
            <ol className="mt-4 grid grid-cols-2 gap-1.5 text-sm sm:grid-cols-3">
              {spSurfaceSpots.map((p, n) => (
                <li key={p.key}>
                  <button type="button" onClick={() => setKey(p.key)} className={`focus-ring w-full rounded-lg px-2.5 py-1.5 text-left transition-colors ${key === p.key ? "bg-sand-50 font-semibold text-ink-950" : "text-teal-100 hover:bg-sand-100/10"}`}>
                    {n + 1}. {p.label}
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-5">
            <div key={key} className="animate-fadeIn rounded-[2rem] bg-ink-950 p-6" aria-live="polite">
              <p className="font-serif text-2xl">{s.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{s.body}</p>
              <ol className="mt-5 grid grid-cols-3 gap-1.5" aria-label="Severity">
                {spSurfaceLevels.map((l, i) => (
                  <li key={l} className={`rounded-xl px-2 py-2 text-center text-xs ${i === s.level ? "bg-teal-300 font-semibold text-ink-950" : "bg-sand-100/10 text-ink-300"}`}>
                    {i === s.level ? "▶ " : ""}{l}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
