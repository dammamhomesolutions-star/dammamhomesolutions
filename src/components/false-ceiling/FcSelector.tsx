"use client";

import { useState } from "react";
import Link from "next/link";
import { fcProjects } from "@/lib/false-ceiling";
import FcCtas from "./FcCtas";
import FcIcon from "./FcIcon";

export default function FcSelector() {
  const [pick, setPick] = useState(fcProjects[0].label);
  const p = fcProjects.find((x) => x.label === pick)!;

  return (
    <section id="project-type" aria-labelledby="fc-sel" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Project type</p>
          <h2 id="fc-sel" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What are you planning?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <fieldset className="lg:col-span-7">
            <legend className="sr-only">Project type</legend>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {fcProjects.map((x) => {
                const on = pick === x.label;
                return (
                  <label
                    key={x.label}
                    className={`flex cursor-pointer flex-col items-start gap-3 rounded-2xl border p-4 transition-all has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-600 ${
                      on ? "border-glass-900 bg-glass-900 text-sand-50 shadow-lg" : "border-ink-900/10 bg-glass-100/60 text-ink-900 hover:-translate-y-0.5 hover:border-glass-600"
                    }`}
                  >
                    <input type="radio" name="fc-project" checked={on} onChange={() => setPick(x.label)} className="sr-only" />
                    <FcIcon name={x.icon} className={`h-7 w-7 ${on ? "text-glass-300" : "text-glass-700"}`} />
                    <span className="text-sm font-semibold">{x.label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <div className="lg:col-span-5">
            <div key={pick} className="animate-fadeIn rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8" aria-live="polite">
              <FcIcon name={p.icon} className="h-7 w-7 text-glass-300" />
              <p className="mt-3 font-serif text-2xl">{p.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">{p.note}</p>
              {p.label === "Repair / damage" && (
                <Link href="/ceiling-gypsum-board-repair/" className="focus-ring mt-3 inline-block rounded-sm text-sm font-semibold text-glass-300 underline underline-offset-4">
                  Ceiling &amp; gypsum board repair
                </Link>
              )}
              <FcCtas tone="dark" className="mt-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
