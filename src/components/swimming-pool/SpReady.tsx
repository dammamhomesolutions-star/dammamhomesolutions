"use client";

import { useState } from "react";
import { spReady, spWhenToCall } from "@/lib/swimming-pool";
import SpCtas from "./SpCtas";
import SpIcon from "./SpIcon";

export default function SpReady() {
  const [ok, setOk] = useState<string[]>([]);
  const toggle = (l: string) => setOk((s) => (s.includes(l) ? s.filter((x) => x !== l) : [...s, l]));
  const missing = spReady.length - ok.length;

  return (
    <section id="ready" aria-label="Is your pool ready, and when to call" className="bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-300">Readiness check</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-5xl">Is your pool ready?</h2>
          <p className="mt-4 text-[15px] text-ink-300">Tick what&rsquo;s true right now.</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {spReady.map((r) => {
              const on = ok.includes(r);
              return (
                <li key={r}>
                  <label className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-300 ${on ? "border-teal-300 bg-teal-300/15" : "border-sand-100/10 hover:border-sand-100/30"}`}>
                    <input type="checkbox" checked={on} onChange={() => toggle(r)} className="sr-only" />
                    <span className={`flex h-6 w-6 flex-none items-center justify-center rounded-full transition-colors ${on ? "bg-teal-300 text-ink-950" : "ring-1 ring-sand-100/30"}`} aria-hidden="true">{on && <SpIcon name="check" className="h-4 w-4" />}</span>
                    {r}
                  </label>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-ink-900 p-5" aria-live="polite">
            <p className="text-sm">
              <span className="font-mono text-2xl text-teal-300">{ok.length}/{spReady.length}</span>{" "}
              <span className="text-ink-300">{missing === 0 ? "— looks ready to enjoy." : `— ${missing} thing${missing > 1 ? "s" : ""} to look at.`}</span>
            </p>
            {missing > 0 && ok.length > 0 && <SpCtas primaryLabel="Something Not Right? Request an Assessment" secondaryLabel="Send Photos" />}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="h-full rounded-[2rem] bg-gradient-to-b from-teal-800 to-teal-900 p-6 sm:p-8">
            <h2 className="font-serif text-3xl tracking-tight">Don&rsquo;t wait for a small pool problem to become a bigger one</h2>
            <p className="mt-3 text-sm text-teal-100">Worth booking a look when you notice:</p>
            <ul className="mt-5 space-y-2">
              {spWhenToCall.map((w) => <li key={w} className="flex gap-2 text-sm text-sand-50"><SpIcon name="arrow" className="mt-0.5 h-4 w-4 flex-none text-teal-300" />{w}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
