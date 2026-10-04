"use client";

import { useState } from "react";
import { aiIndoorBad, aiIndoorGood, aiOutdoorBad, aiOutdoorGood } from "@/lib/ac-installation";
import AiIcon from "./AiIcon";

function IndoorScene({ good }: { good: boolean }) {
  return (
    <svg viewBox="0 0 480 260" className="h-auto w-full" aria-hidden="true">
      <rect width="480" height="260" fill="#f4f0e8" />
      <rect y="220" width="480" height="40" fill="#ded2ba" />
      <rect x="440" y="0" width="40" height="260" fill="#c4c0b4" />
      {/* furniture */}
      <path d="M60 220v-34h150v34M60 186v-20h30v20" fill="#d7e4ea" stroke="#5b7d8f" strokeWidth="1.5" />
      <rect x="320" y="60" width="90" height="160" fill="#d9bfa0" stroke="#7a5a3f" strokeWidth="1.5" />
      <path d="M365 60v160" stroke="#7a5a3f" />
      {good ? (
        <g>
          <rect x="140" y="40" width="130" height="38" rx="10" fill="#faf8f4" stroke="#1f5c5c" strokeWidth="2.5" />
          <g fill="none" stroke="#4a9797" strokeWidth="2.5" strokeLinecap="round">
            <path className="fs-flow" d="M150 84c-20 30-40 60-90 80" />
            <path className="fs-flow" d="M205 84c0 40-10 70-30 100" />
            <path className="fs-flow" d="M260 84c20 30 30 60 40 90" />
          </g>
          <path d="M270 52h170" stroke="#b3652f" strokeWidth="4" />
          <path d="M268 64h172" stroke="#2f7a7a" strokeWidth="2.5" strokeDasharray="6 4" />
          <circle cx="205" cy="30" r="12" fill="#48a08f" />
          <path d="M199 30l4 4 8-8" stroke="#faf8f4" strokeWidth="2" fill="none" />
        </g>
      ) : (
        <g>
          <rect x="300" y="14" width="130" height="38" rx="10" fill="#faf8f4" stroke="#94472a" strokeWidth="2.5" />
          <g fill="none" stroke="#c76a3f" strokeWidth="2.5" strokeLinecap="round">
            <path d="M330 58c0 10 6 12 10 8" />
            <path d="M380 58c0 10 -6 12 -10 8" />
          </g>
          <path d="M300 30h-120v110h-60" fill="none" stroke="#2f7a7a" strokeWidth="2.5" strokeDasharray="6 4" />
          <path d="M430 26h10" stroke="#b3652f" strokeWidth="4" />
          <circle cx="250" cy="30" r="12" fill="#c76a3f" />
          <path d="M245 25l10 10M255 25l-10 10" stroke="#faf8f4" strokeWidth="2" />
          <text x="110" y="160" fontFamily="ui-monospace, monospace" fontSize="9" fill="#94472a">LONG DRAIN ROUTE</text>
          <text x="300" y="80" fontFamily="ui-monospace, monospace" fontSize="9" fill="#94472a">AIR BLOCKED BY WARDROBE</text>
        </g>
      )}
      <text x="448" y="250" fontFamily="ui-monospace, monospace" fontSize="8" fill="#5c584f" transform="rotate(-90 452 250)">OUTSIDE WALL</text>
    </svg>
  );
}

function OutdoorScene({ good }: { good: boolean }) {
  return (
    <svg viewBox="0 0 480 260" className="h-auto w-full" aria-hidden="true">
      <rect width="480" height="260" fill="#e0f0f0" />
      <rect x="0" y="0" width="200" height="260" fill="#ded2ba" />
      <path d="M200 0v260" stroke="#9a968a" strokeWidth="3" />
      <rect y="236" width="480" height="24" fill="#c4c0b4" />
      {good ? (
        <g>
          <rect x="230" y="120" width="120" height="80" rx="6" fill="#faf8f4" stroke="#1f5c5c" strokeWidth="2.5" />
          <circle cx="275" cy="160" r="26" fill="none" stroke="#333a49" strokeWidth="2" />
          <path d="M200 200h150M220 200l-20 -30M340 200l10 -30" stroke="#5c584f" strokeWidth="4" />
          <g fill="none" stroke="#c17f3e" strokeWidth="2.5" strokeLinecap="round">
            <path className="fs-flow" d="M355 140h80" />
            <path className="fs-flow" d="M355 160h100" />
            <path className="fs-flow" d="M355 180h80" />
          </g>
          <circle cx="290" cy="96" r="12" fill="#48a08f" />
          <path d="M284 96l4 4 8-8" stroke="#faf8f4" strokeWidth="2" fill="none" />
        </g>
      ) : (
        <g>
          <path d="M205 100h100v136H205" fill="#c4c0b4" stroke="#78746a" strokeWidth="2" />
          <rect x="215" y="140" width="110" height="80" rx="6" fill="#faf8f4" stroke="#94472a" strokeWidth="2.5" />
          <circle cx="258" cy="180" r="24" fill="none" stroke="#333a49" strokeWidth="2" />
          <g fill="none" stroke="#c76a3f" strokeWidth="2.5" strokeLinecap="round">
            <path className="fs-flow" d="M330 170c20-20 0-50-40-50s-60 20-60 20" />
          </g>
          <circle cx="290" cy="80" r="12" fill="#c76a3f" />
          <path d="M285 75l10 10M295 75l-10 10" stroke="#faf8f4" strokeWidth="2" />
          <text x="330" y="110" fontFamily="ui-monospace, monospace" fontSize="9" fill="#94472a">HOT AIR RECIRCULATES</text>
        </g>
      )}
    </svg>
  );
}

export default function AiPlacement() {
  const [where, setWhere] = useState<"indoor" | "outdoor">("indoor");
  const [good, setGood] = useState(true);
  const list = where === "indoor" ? (good ? aiIndoorGood : aiIndoorBad) : good ? aiOutdoorGood : aiOutdoorBad;

  return (
    <section id="placement" aria-labelledby="ai-place" className="border-b border-ink-900/10 bg-teal-100/40 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">Placement</p>
          <h2 id="ai-place" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Where should the indoor and outdoor units go?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Placement decides airflow, drainage, piping and how easily the
            system can be serviced. These are general principles — the
            selected equipment manufacturer&rsquo;s installation requirements
            always come first.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <div role="tablist" aria-label="Unit" className="inline-flex rounded-full border border-ink-900/15 bg-sand-50 p-1">
            {(["indoor", "outdoor"] as const).map((w) => (
              <button
                key={w}
                type="button"
                role="tab"
                aria-selected={where === w}
                onClick={() => setWhere(w)}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-medium capitalize ${where === w ? "bg-ink-950 text-sand-50" : "text-ink-700"}`}
              >
                {w} unit
              </button>
            ))}
          </div>
          <div role="radiogroup" aria-label="Example" className="inline-flex rounded-full border border-ink-900/15 bg-sand-50 p-1">
            {[
              { v: true, label: "Good placement" },
              { v: false, label: "Problematic" },
            ].map((o) => (
              <button
                key={o.label}
                type="button"
                role="radio"
                aria-checked={good === o.v}
                onClick={() => setGood(o.v)}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-medium ${
                  good === o.v ? (o.v ? "bg-teal-700 text-sand-50" : "bg-rust-700 text-sand-50") : "text-ink-700"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div key={`${where}-${good}`} className="animate-fadeIn overflow-hidden rounded-2xl border border-ink-900/10 lg:col-span-7">
            {where === "indoor" ? <IndoorScene good={good} /> : <OutdoorScene good={good} />}
          </div>
          <div className="lg:col-span-5" aria-live="polite">
            <h3 className="flex items-center gap-2 font-serif text-2xl text-ink-950">
              <AiIcon name={good ? "check" : "alert"} className={`h-6 w-6 ${good ? "text-teal-700" : "text-rust-700"}`} />
              {good ? "What good looks like" : "What to avoid"}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-800">
              {list.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className={`mt-2 h-1 w-3 flex-none ${good ? "bg-teal-600" : "bg-rust-600"}`} aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
            {where === "outdoor" && (
              <p className="mt-5 text-sm text-ink-600">
                Outdoor units are mounted by our team with proper supports.
                Please don&rsquo;t attempt to mount or move them yourself.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
