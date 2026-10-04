"use client";

import { useState } from "react";
import { hmMoveIn, hmMoveOut, hmSetup } from "@/lib/handyman";
import HmIcon from "./HmIcon";
import { useJobs } from "./HmJobList";

// New home setup: counters per category, then push the lot into the job list.
export default function HmSetup() {
  const { add } = useJobs();
  const [n, setN] = useState<Record<string, number>>({});
  const [sent, setSent] = useState(false);
  const total = Object.values(n).reduce((s, x) => s + x, 0);
  const change = (id: string, d: number) => { setSent(false); setN((s) => ({ ...s, [id]: Math.max(0, Math.min(20, (s[id] ?? 0) + d)) })); };
  const push = () => { hmSetup.forEach((x) => (n[x.id] ? add(x.id, n[x.id]) : null)); setSent(true); };

  return (
    <section id="new-home" aria-label="New home setup and moving" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-700">New home setup</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Moving into a new home?</h2>
            <p className="mt-4 text-[15px] text-ink-600">Count what needs doing and add it to your list in one go.</p>
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {hmSetup.map((x) => (
                <li key={x.id} className="flex items-center justify-between gap-3 rounded-2xl border border-ink-900/10 p-4">
                  <span className="text-sm font-semibold text-ink-950" id={`hm-s-${x.id}`}>{x.label}</span>
                  <span className="flex items-center gap-2" role="group" aria-labelledby={`hm-s-${x.id}`}>
                    <button type="button" aria-label={`Fewer: ${x.label}`} disabled={!n[x.id]} onClick={() => change(x.id, -1)} className="focus-ring flex h-8 w-8 items-center justify-center rounded-full border border-ink-900/20 disabled:opacity-30"><HmIcon name="minus" className="h-4 w-4" /></button>
                    <output className="w-6 text-center font-mono text-sm">{n[x.id] ?? 0}</output>
                    <button type="button" aria-label={`More: ${x.label}`} onClick={() => change(x.id, 1)} className="focus-ring flex h-8 w-8 items-center justify-center rounded-full bg-ink-950 text-sand-50"><HmIcon name="plus" className="h-4 w-4" /></button>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] bg-ink-950 p-6 text-sand-50 sm:p-8" aria-live="polite">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember-500">New home setup</p>
              {total ? (
                <ul className="mt-4 space-y-1.5">
                  {hmSetup.filter((x) => n[x.id]).map((x) => (
                    <li key={x.id} className="flex gap-2 text-sm"><HmIcon name="check" className="mt-0.5 h-4 w-4 text-ember-500" />{n[x.id]} {x.label.toLowerCase()}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-ink-400">Use + to count items.</p>
              )}
              <button type="button" onClick={push} disabled={!total} className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember-500 px-5 py-3 text-sm font-semibold text-ink-950 disabled:opacity-40">
                {sent ? "✓ Added to my job list" : "Add to my job list"}
              </button>
              {sent && <a href="#job-request" className="focus-ring mt-3 block rounded-sm text-center text-sm font-semibold text-ember-500 underline underline-offset-4">Review and request assessment</a>}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {[{ t: "Before move-in", items: hmMoveIn }, { t: "Before move-out", items: hmMoveOut }].map((b, i) => (
            <div key={b.t} className={`rounded-[2rem] p-6 ${i ? "bg-sand-100" : "bg-ember-100/60"}`}>
              <h3 className="font-serif text-2xl text-ink-950">{b.t}</h3>
              <ul className="mt-4 space-y-2">{b.items.map((x) => <li key={x} className="flex gap-2 text-sm text-ink-800"><HmIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-ember-700" />{x}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-ink-500">We can&rsquo;t promise outcomes on rental deposits — those depend on your landlord and agreement.</p>
      </div>
    </section>
  );
}
