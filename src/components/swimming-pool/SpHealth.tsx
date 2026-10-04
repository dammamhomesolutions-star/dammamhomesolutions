"use client";

import { useState } from "react";
import { spHealthQs } from "@/lib/swimming-pool";

const MAX = 12;
const CIRC = 2 * Math.PI * 52;

// A general maintenance indicator from five quick answers — not an inspection.
export default function SpHealth() {
  const [picked, setPicked] = useState<Record<string, string>>({});
  const done = spHealthQs.every((q) => picked[q.key]);
  const score = spHealthQs.reduce((s, q) => s + (q.options.find((o) => o.label === picked[q.key])?.score ?? 0), 0);
  const pct = Math.min(100, Math.round((score / MAX) * 100));
  const result =
    score === 0
      ? { label: "Looking good", body: "Keep the routine going and check again before heavy use.", color: "#8fc4c4" }
      : score <= 3
        ? { label: "Maintenance check recommended", body: "A few things worth looking at during the next maintenance visit.", color: "#d69a5f" }
        : { label: "Assessment recommended", body: "Several signs point to something more than routine care — worth an on-site look.", color: "#c76a3f" };

  return (
    <section id="pool-health" aria-labelledby="sp-health" className="bg-teal-900 py-20 text-sand-50 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-300">Pool health</p>
          <h2 id="sp-health" className="mt-4 font-serif text-3xl tracking-tight sm:text-5xl">How is your pool performing?</h2>
          <div className="mt-8 space-y-5">
            {spHealthQs.map((q) => (
              <fieldset key={q.key}>
                <legend className="text-sm font-semibold text-teal-100">{q.label}</legend>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {q.options.map((o) => {
                    const sel = picked[q.key] === o.label;
                    return (
                      <label key={o.label} className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-300 ${sel ? "border-teal-300 bg-teal-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"}`}>
                        <input type="radio" name={`sp-h-${q.key}`} checked={sel} onChange={() => setPicked((s) => ({ ...s, [q.key]: o.label }))} className="sr-only" />
                        {o.label}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-[2rem] bg-ink-950/60 p-8 text-center ring-1 ring-sand-100/10 backdrop-blur" aria-live="polite">
            <svg viewBox="0 0 120 120" className="mx-auto h-40 w-40" aria-hidden="true">
              <circle cx="60" cy="60" r="52" fill="none" stroke="#164848" strokeWidth="10" />
              <circle
                cx="60" cy="60" r="52" fill="none" stroke={done ? result.color : "#2f7a7a"} strokeWidth="10" strokeLinecap="round"
                strokeDasharray={CIRC} strokeDashoffset={CIRC * (1 - (done ? Math.max(0.08, pct / 100) : 0.08))}
                transform="rotate(-90 60 60)" style={{ transition: "stroke-dashoffset 600ms ease, stroke 300ms" }}
              />
              <text x="60" y="66" textAnchor="middle" fontSize="16" fill="#e0f0f0" fontFamily="ui-monospace, monospace">{done ? `${pct}%` : "—"}</text>
            </svg>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-400">Attention needed</p>
            {done ? (
              <div key={score} className="animate-fadeIn">
                <p className="mt-3 font-serif text-2xl">Pool condition: {result.label}</p>
                <p className="mt-2 text-sm text-ink-300">{result.body}</p>
              </div>
            ) : (
              <p className="mt-3 text-sm text-ink-300">Answer all five to see a general indicator.</p>
            )}
            <p className="mt-6 border-t border-sand-100/10 pt-4 text-xs text-ink-400">A general maintenance indicator, not a technical inspection.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
