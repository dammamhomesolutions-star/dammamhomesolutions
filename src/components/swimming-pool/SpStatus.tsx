"use client";

import { useState } from "react";
import { spStateLabel, spStatusRows, type SpState } from "@/lib/swimming-pool";

const order: SpState[] = ["good", "check", "attention"];
const dot: Record<SpState, string> = { good: "bg-teal-300", check: "bg-ember-500", attention: "bg-rust-500" };
const glyph: Record<SpState, string> = { good: "✓", check: "!", attention: "!!" };

// Educational "pool status" card — tap a row to cycle its state. Not live data.
export default function SpStatus() {
  const [states, setStates] = useState<SpState[]>(spStatusRows.map((r) => r.start));
  const [active, setActive] = useState(0);
  const cycle = (i: number) => {
    setActive(i);
    setStates((s) => s.map((x, n) => (n === i ? order[(order.indexOf(x) + 1) % 3] : x)));
  };

  return (
    <div className="rounded-3xl border border-sand-100/15 bg-ink-950/70 p-5 shadow-2xl backdrop-blur-md sm:p-6">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-300">Pool status</p>
        <span className="rounded-full bg-sand-100/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-ink-300">Example</span>
      </div>
      <ul className="mt-4 divide-y divide-sand-100/10">
        {spStatusRows.map((r, i) => (
          <li key={r.label}>
            <button
              type="button"
              onClick={() => cycle(i)}
              className="focus-ring flex w-full items-center justify-between gap-3 rounded-lg px-1 py-2.5 text-left text-sm transition-colors hover:bg-sand-100/5"
              aria-label={`${r.label}: ${spStateLabel[states[i]]}. Tap to change.`}
            >
              <span className="text-sand-50">{r.label}</span>
              <span className="flex items-center gap-2 text-ink-300">
                <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold text-ink-950 ${dot[states[i]]}`} aria-hidden="true">{glyph[states[i]]}</span>
                {spStateLabel[states[i]]}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <p key={`${active}-${states[active]}`} className="mt-3 min-h-[2.5rem] animate-fadeIn text-xs leading-relaxed text-ink-300" aria-live="polite">
        <span className="font-semibold text-sand-50">{spStatusRows[active].label}: </span>
        {spStatusRows[active].tip[states[active]]}
      </p>
      <p className="mt-2 border-t border-sand-100/10 pt-3 text-[11px] text-ink-400">An interactive example — tap a row to see what each state means. Not live pool monitoring.</p>
    </div>
  );
}
