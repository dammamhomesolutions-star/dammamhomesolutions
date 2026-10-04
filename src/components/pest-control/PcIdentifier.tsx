"use client";

import { useState } from "react";
import { pcPests, type PcPestKey } from "@/lib/pest-control";
import PcIcon from "./PcIcon";
import PcCtas from "./PcCtas";

export default function PcIdentifier() {
  const [key, setKey] = useState<PcPestKey>("cockroach");
  const pest = pcPests.find((p) => p.key === key)!;

  return (
    <section id="identify" aria-labelledby="pc-identify" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-label !text-moss-700">Identify the problem</p>
            <h2 id="pc-identify" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              What pest are you dealing with?
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-600 lg:col-span-5">
            Choose what you think you&rsquo;re seeing. This describes possible
            signs — an inspection confirms the pest and its source. If
            you&rsquo;re unsure, send us a photo.
          </p>
        </div>

        {/* Horizontal swipe on mobile, grid on larger screens */}
        <div
          role="tablist"
          aria-label="Pest type"
          className="-mx-6 mt-10 flex snap-x gap-3 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0 lg:grid-cols-8"
        >
          {pcPests.map((p) => {
            const on = p.key === key;
            return (
              <button
                key={p.key}
                type="button"
                role="tab"
                id={`pc-tab-${p.key}`}
                aria-selected={on}
                aria-controls="pc-pest-panel"
                onClick={() => setKey(p.key)}
                className={`focus-ring group flex min-w-[7.5rem] snap-start flex-col items-center gap-2 rounded-2xl border px-3 py-4 text-sm font-medium transition-colors ${
                  on ? "border-moss-800 bg-moss-800 text-sand-50" : "border-ink-900/10 bg-sand-50 text-ink-800 hover:border-moss-600"
                }`}
              >
                <PcIcon name={p.icon} className="h-8 w-8" />
                {p.label}
              </button>
            );
          })}
        </div>

        <div
          id="pc-pest-panel"
          role="tabpanel"
          aria-labelledby={`pc-tab-${pest.key}`}
          key={pest.key}
          className="mt-6 grid animate-fadeIn gap-6 rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-moss-100 text-moss-800">
                <PcIcon name={pest.icon} className="h-7 w-7" />
              </span>
              <h3 className="font-serif text-2xl text-ink-950">{pest.label}</h3>
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Possible signs include</p>
            <ul className="mt-2 space-y-1.5 text-sm text-ink-800">
              {pest.signs.map((s) => (
                <li key={s} className="flex gap-2">
                  <PcIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-moss-700" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <dl className="grid gap-5 text-sm sm:grid-cols-2 lg:col-span-8">
            {[
              ["Where they're usually found", pest.where],
              ["Why they can be hard to control", pest.difficult],
              ["What should be inspected", pest.inspect],
              ["Typical treatment approach", pest.approach],
              ["Prevention", pest.prevention],
            ].map(([t, d]) => (
              <div key={t}>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">{t}</dt>
                <dd className="mt-1 leading-relaxed text-ink-700">{d}</dd>
              </div>
            ))}
            <div className="rounded-xl bg-moss-100 p-4 text-moss-900">
              <dt className="sr-only">Next step</dt>
              <dd className="leading-relaxed">An inspection can confirm the pest and where it&rsquo;s coming from.</dd>
            </div>
          </dl>
        </div>

        <PcCtas className="mt-8" />
      </div>
    </section>
  );
}
