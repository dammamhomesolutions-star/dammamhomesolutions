"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FlowState = "clear" | "slow";

const copy: Record<FlowState, { label: string; note: string; duration: number; pool: number }> = {
  clear: {
    label: "Flowing as expected",
    note: "Water moves steadily along the channel and exits at the drainage point without collecting.",
    duration: 2.2,
    pool: 0,
  },
  slow: {
    label: "Slower than expected",
    note: "Debris or a shallow slope can slow the flow, causing water to collect before it reaches the drain — worth checking if it happens repeatedly.",
    duration: 5.5,
    pool: 22,
  },
};

export default function RfDrainageAnimation() {
  const [state, setState] = useState<FlowState>("clear");
  const shouldReduceMotion = useReducedMotion();
  const active = copy[state];

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">Drainage</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Drainage is what keeps water moving.
          </h2>
        </div>

        <div role="group" aria-label="Drainage condition" className="mt-8 flex flex-wrap gap-2">
          {(Object.keys(copy) as FlowState[]).map((id) => (
            <button
              key={id}
              type="button"
              aria-pressed={state === id}
              onClick={() => setState(id)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                state === id ? "border-teal-700 bg-teal-700 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-teal-600"
              }`}
            >
              {copy[id].label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 w-full max-w-lg overflow-hidden rounded-md border border-ink-900/10 bg-sand-50 p-6">
          <svg viewBox="0 0 320 120" className="h-auto w-full" aria-hidden="true">
            <rect x="0" y="0" width="320" height="120" fill="url(#rf-sky)" />
            {/* channel */}
            <path d="M10 40 C 120 40, 200 80, 300 90" fill="none" stroke="#c4c0b4" strokeWidth="18" strokeLinecap="round" />
            {/* pooling near the drain when slow */}
            <ellipse cx="270" cy="90" rx={18 + active.pool} ry={8 + active.pool * 0.3} fill="url(#rf-water)" style={{ transition: "rx 500ms, ry 500ms" }} />
            {/* drain */}
            <circle cx="300" cy="90" r="10" fill="none" stroke="#1f5c5c" strokeWidth="2.4" />

            {!shouldReduceMotion && (
              <motion.circle
                key={state}
                r="5"
                fill="#4a9797"
                style={{ offsetPath: "path('M10 40 C 120 40, 200 80, 300 90')" }}
                animate={{ offsetDistance: ["0%", "100%"] }}
                transition={{ duration: active.duration, repeat: Infinity, ease: state === "slow" ? "easeIn" : "linear" }}
              />
            )}
          </svg>
        </div>

        <p key={state} className="mx-auto mt-6 max-w-lg animate-fadeIn text-center text-sm leading-relaxed text-ink-600">
          {active.note}
        </p>
      </div>
    </section>
  );
}
