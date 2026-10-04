"use client";

import { useState } from "react";
import Link from "next/link";
import { fcAssess, fcConditions } from "@/lib/false-ceiling";
import FcCtas from "./FcCtas";
import FcIcon from "./FcIcon";

const urgent = ["Water-damaged", "Sagging"];

export default function FcRepairTool() {
  const [pick, setPick] = useState("");
  const c = fcConditions.find((x) => x.label === pick);

  return (
    <section id="repair-or-replace" aria-labelledby="fc-repair" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Existing ceilings</p>
          <h2 id="fc-repair" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Does your ceiling need repair, modification or replacement?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <fieldset className="lg:col-span-7">
            <legend className="text-base font-semibold text-ink-950">What describes your ceiling?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {fcConditions.map((x) => (
                <label key={x.label} className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-600 ${pick === x.label ? "border-glass-900 bg-glass-900 text-sand-50" : "border-ink-900/15 text-ink-800 hover:border-glass-600"}`}>
                  <input type="radio" name="fc-cond" checked={pick === x.label} onChange={() => setPick(x.label)} className="sr-only" />
                  {x.label}
                </label>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-glass-100 p-5">
              <h3 className="font-semibold text-ink-950">What we check before installing</h3>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
                {fcAssess.map((a) => <li key={a} className="flex gap-2 text-sm text-ink-800"><FcIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-glass-700" />{a}</li>)}
              </ul>
            </div>
          </fieldset>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28" aria-live="polite">
              {c ? (
                <div key={c.label} className="animate-fadeIn">
                  <FcIcon name={urgent.includes(c.label) ? "alert" : "search"} className="h-7 w-7 text-glass-300" />
                  <p className="mt-3 font-serif text-2xl">{c.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{c.note}</p>
                  {(c.label === "Cracked / damaged" || c.label === "Water-damaged") && (
                    <p className="mt-3 text-sm text-ink-300">
                      Smaller repairs:{" "}
                      <Link href="/ceiling-gypsum-board-repair/" className="focus-ring rounded-sm font-semibold text-glass-300 underline underline-offset-4">ceiling &amp; gypsum board repair</Link>.
                    </p>
                  )}
                  <FcCtas tone="dark" className="mt-6" />
                </div>
              ) : (
                <p className="text-sm text-ink-300">Pick what describes your ceiling to see the likely approach.</p>
              )}
              <p className="mt-6 border-t border-sand-100/10 pt-4 text-xs text-ink-400">General guidance only — structural problems can&rsquo;t be diagnosed online.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
