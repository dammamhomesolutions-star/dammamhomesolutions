"use client";

import { useState } from "react";
import { spSpots, type SpSpot } from "@/lib/swimming-pool";
import SpCtas from "./SpCtas";

// Top-down pool with an equipment pad on the right. Every hotspot is a button,
// and the same parts are listed as buttons below for keyboard and screen readers.
function TopDownPool() {
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="sp-ex-water" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4a9797" />
          <stop offset="1" stopColor="#1f5c5c" />
        </linearGradient>
        <pattern id="sp-ex-caustic" width="60" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20c10-9 20-9 30 0s20 9 30 0" stroke="#e0f0f0" strokeWidth="1.2" fill="none" opacity="0.35" />
        </pattern>
      </defs>
      <rect width="400" height="260" fill="#ebe4d6" />
      {/* coping */}
      <rect x="14" y="18" width="300" height="200" rx="18" fill="#faf8f4" />
      <rect x="26" y="30" width="276" height="176" rx="12" fill="url(#sp-ex-water)" />
      <g className="sp-caustic"><rect x="26" y="30" width="276" height="176" rx="12" fill="url(#sp-ex-caustic)" /></g>
      {/* tile band */}
      <rect x="26" y="30" width="276" height="176" rx="12" fill="none" stroke="#2f7a7a" strokeWidth="6" strokeDasharray="6 3" />
      {/* skimmer, drain, light */}
      <rect x="56" y="36" width="20" height="10" rx="2" fill="#faf8f4" />
      <rect x="190" y="150" width="20" height="12" rx="3" fill="#164848" stroke="#e0f0f0" />
      <circle cx="200" cy="200" r="5" fill="#f6dfb4" />
      {/* equipment pad */}
      <rect x="338" y="40" width="54" height="150" rx="6" fill="#d9d2c2" />
      <circle cx="366" cy="78" r="14" fill="#69748a" />
      <rect x="352" y="140" width="28" height="36" rx="8" fill="#4a5468" />
      {/* pipes */}
      <path d="M314 200h24v-40M314 110h24" stroke="#69748a" strokeWidth="5" fill="none" />
      {/* paving */}
      <path d="M0 236h400" stroke="#d9d2c2" strokeWidth="2" />
    </svg>
  );
}

export default function SpExplorer() {
  const [key, setKey] = useState<SpSpot>("pump");
  const s = spSpots.find((x) => x.key === key)!;

  return (
    <section id="explore" aria-labelledby="sp-explore" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-700">Explore your pool</p>
          <h2 id="sp-explore" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">What&rsquo;s going wrong?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Tap any part of the pool to see what you may notice, why, and what to do next.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative aspect-[400/260] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(15,58,58,0.6)]">
              <TopDownPool />
              {spSpots.map((p) => (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setKey(p.key)}
                  aria-pressed={key === p.key}
                  aria-label={p.label}
                  className="focus-ring absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  {key === p.key && <span aria-hidden="true" className="sp-ping absolute inset-0 rounded-full bg-teal-300" />}
                  <span className={`relative block h-5 w-5 rounded-full border-2 border-sand-50 shadow-md transition-transform ${key === p.key ? "scale-125 bg-ink-950" : "bg-teal-500 hover:scale-110"}`} />
                </button>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5" role="group" aria-label="Pool parts">
              {spSpots.map((p) => (
                <button key={p.key} type="button" aria-pressed={key === p.key} onClick={() => setKey(p.key)} className={`focus-ring rounded-full px-3 py-1 text-sm transition-colors ${key === p.key ? "bg-ink-950 text-sand-50" : "bg-teal-100 text-teal-900 hover:bg-teal-300/50"}`}>
                  {p.label}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div key={key} className="animate-fadeIn overflow-hidden rounded-[2rem] bg-ink-950 text-sand-50" aria-live="polite">
              <div className="bg-gradient-to-r from-teal-800 to-teal-900 px-6 py-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-300">Selected</p>
                <p className="mt-1 font-serif text-3xl">{s.label}</p>
              </div>
              <dl className="grid gap-px bg-sand-100/10 sm:grid-cols-2">
                {[["What you may notice", s.notice], ["Possible causes", s.causes], ["What should be checked", s.check], ["Recommended next step", s.next]].map(([t, b]) => (
                  <div key={t} className="bg-ink-950 p-5">
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-300">{t}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-ink-300">{b}</dd>
                  </div>
                ))}
              </dl>
              <div className="p-5"><SpCtas /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
