"use client";

import { useState } from "react";
import { spConcernLoss, spNormalLoss, spTopUp, spWhere } from "@/lib/swimming-pool";
import SpCtas from "./SpCtas";
import SpIcon from "./SpIcon";

// Pool cross-section where the water level drops further with more frequent top-ups.
const drop: Record<string, number> = { Rarely: 4, Weekly: 10, "Several times a week": 20, Daily: 30, Unsure: 12 };

export default function SpWaterLoss() {
  const [freq, setFreq] = useState("");
  const [where, setWhere] = useState("");
  const ready = freq && where;
  const concern = (freq === "Daily" || freq === "Several times a week") || where === "Around the pool" || where === "Equipment area";
  const level = 40 + (drop[freq] ?? 8);

  return (
    <section id="water-loss" aria-labelledby="sp-loss" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-700">Water loss</p>
          <h2 id="sp-loss" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Is your pool losing water?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Water-level changes can have several causes. Persistent, unexplained loss should be professionally assessed — we carry out leak detection and repair.</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-[2rem] bg-teal-100/60 p-6">
            <h3 className="font-serif text-2xl text-ink-950">Often normal</h3>
            <ul className="mt-4 space-y-2">{spNormalLoss.map((n) => <li key={n} className="flex gap-2 text-sm text-ink-800"><SpIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-700" />{n}</li>)}</ul>
          </div>
          <div className="rounded-[2rem] bg-ink-950 p-6 text-sand-50">
            <h3 className="font-serif text-2xl">Possible concern</h3>
            <ul className="mt-4 space-y-2">{spConcernLoss.map((n) => <li key={n} className="flex gap-2 text-sm text-ink-300"><SpIcon name="alert" className="mt-0.5 h-4 w-4 flex-none text-ember-500" />{n}</li>)}</ul>
          </div>
        </div>

        <div className="mt-12 grid gap-8 rounded-[2rem] border border-ink-900/10 p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div className="space-y-6 lg:col-span-6">
            <h3 className="font-serif text-2xl text-ink-950">Water-level observation</h3>
            <fieldset>
              <legend className="text-sm font-semibold text-ink-950">How often are you adding water?</legend>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {spTopUp.map((o) => (
                  <label key={o} className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-600 ${freq === o ? "border-teal-800 bg-teal-800 text-sand-50" : "border-ink-900/15 text-ink-800 hover:border-teal-600"}`}>
                    <input type="radio" name="sp-freq" checked={freq === o} onChange={() => setFreq(o)} className="sr-only" />{o}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold text-ink-950">Where are you noticing water?</legend>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {spWhere.map((o) => (
                  <label key={o} className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-600 ${where === o ? "border-teal-800 bg-teal-800 text-sand-50" : "border-ink-900/15 text-ink-800 hover:border-teal-600"}`}>
                    <input type="radio" name="sp-where" checked={where === o} onChange={() => setWhere(o)} className="sr-only" />{o}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          <div className="lg:col-span-6">
            <svg viewBox="0 0 300 160" className="h-auto w-full" role="img" aria-labelledby="sp-loss-title">
              <title id="sp-loss-title">{`Pool cross-section showing the water level ${freq ? `when topping up ${freq.toLowerCase()}` : "at its normal mark"}`}</title>
              <path d="M20 30h260v100l-30 20H50l-30-20z" fill="#e0f0f0" stroke="#2f7a7a" strokeWidth="3" />
              <path d={`M23 ${level}h254v88l-28 18H51l-28-18z`} fill="#4a9797" opacity="0.85" style={{ transition: "d 600ms ease" }} />
              <path d="M20 40h-12M292 40h-12" stroke="#1f5c5c" strokeWidth="2" />
              <text x="230" y="24" fontFamily="ui-monospace, monospace" fontSize="10" fill="#1f5c5c">NORMAL LEVEL</text>
              <path d="M20 40h260" stroke="#1f5c5c" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
            <div className="mt-4 rounded-2xl bg-ink-950 p-5 text-sand-50" aria-live="polite">
              {ready ? (
                <div key={freq + where} className="animate-fadeIn">
                  <p className="font-serif text-xl">{concern ? "An assessment may be worthwhile." : "This sounds within the normal range — keep watching."}</p>
                  <p className="mt-2 text-sm text-ink-300">This information can help decide whether a pool assessment is worthwhile. It does not confirm a leak.</p>
                  {concern && <SpCtas className="mt-4" primaryLabel="Request a Leak Assessment" />}
                </div>
              ) : (
                <p className="text-sm text-ink-300">Answer both questions to see a suggestion.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
