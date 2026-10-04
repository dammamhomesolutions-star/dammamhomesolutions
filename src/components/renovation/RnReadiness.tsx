"use client";

import { useState } from "react";
import { rnReadiness } from "@/lib/renovation";

// Readiness: three questions → a planning stage (no numeric score).
function stage(c: string | null, s: string | null, p: string | null) {
  if (!c || !s || !p) return null;
  if (c === "Significant work needed" || c === "Several damaged areas" || c === "Not sure")
    return { label: "Assessment recommended", text: "The condition of the home will shape the scope. An assessment comes before choosing finishes." };
  if (s === "Whole home" || (s === "Several rooms" && p !== "Already have a clear plan"))
    return { label: "Start with a room-by-room review", text: "Walk through each room, decide what changes and what stays, then set the order of work." };
  if (p === "Need help defining scope")
    return { label: "Start with a room-by-room review", text: "Send photos and tell us what bothers you about the space — we'll help turn it into a scope." };
  return { label: "Ready to scope", text: "You know what you want to change. Send photos and your list — we can move to defining the work." };
}

const groups = [
  { key: "condition", label: "Property condition", options: rnReadiness.condition },
  { key: "scope", label: "Scope", options: rnReadiness.scope },
  { key: "planning", label: "Planning", options: rnReadiness.planning },
] as const;

export default function RnReadiness() {
  const [ans, setAns] = useState<Record<string, string | null>>({ condition: null, scope: null, planning: null });
  const out = stage(ans.condition, ans.scope, ans.planning);

  return (
    <div className="border border-ink-950/15 bg-sand-50">
      <div className="border-b border-ink-950/10 p-5 sm:p-6">
        <h3 className="font-serif text-2xl text-ink-950">Renovation readiness</h3>
        <p className="mt-1 text-sm text-ink-500">Three questions. No score — just where to start.</p>
      </div>
      <div className="space-y-6 p-5 sm:p-6">
        {groups.map((g) => (
          <fieldset key={g.key}>
            <legend className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">{g.label}</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {g.options.map((o) => {
                const on = ans[g.key] === o;
                return (
                  <label key={o} className={`cursor-pointer border px-3 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-walnut-600 has-[:focus-visible]:ring-offset-2 ${on ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-950/15 text-ink-800 hover:border-ink-950/50"}`}>
                    <input type="radio" name={`rn-ready-${g.key}`} checked={on} onChange={() => setAns((a) => ({ ...a, [g.key]: o }))} className="sr-only" />
                    {o}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>
      <div className="border-t border-ink-950/10 bg-ink-950 p-5 text-sand-50 sm:p-6" aria-live="polite">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-clay-300">Renovation planning stage</p>
        <p className="mt-1 font-serif text-2xl text-ember-500">{out ? out.label : "Answer all three"}</p>
        {out && <p className="mt-2 text-sm leading-relaxed text-sand-200">{out.text}</p>}
      </div>
    </div>
  );
}
