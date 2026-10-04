"use client";

import { useState } from "react";
import { faCategories } from "@/lib/furniture-assembly";
import FaCtas from "./FaCtas";
import FaIcon from "./FaIcon";

// Category → item → what assembly of that item involves.
export default function FaSelector() {
  const [cat, setCat] = useState(faCategories[0].key);
  const [opt, setOpt] = useState(faCategories[0].items[0].label);
  const c = faCategories.find((x) => x.key === cat)!;
  const o = c.items.find((x) => x.label === opt);

  return (
    <section id="selector" aria-labelledby="fa-sel" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">Furniture selector</p>
          <h2 id="fa-sel" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What furniture do you need assembled?</h2>
        </div>

        <fieldset className="mt-10">
          <legend className="sr-only">Furniture category</legend>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {faCategories.map((x) => {
              const on = cat === x.key;
              return (
                <label
                  key={x.key}
                  className={`flex cursor-pointer flex-col items-start gap-3 rounded-2xl border p-4 transition-all has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-walnut-600 ${
                    on ? "border-ink-950 bg-ink-950 text-sand-50 shadow-lg" : "border-ink-900/10 bg-walnut-100/50 text-ink-900 hover:-translate-y-0.5 hover:border-walnut-600"
                  }`}
                >
                  <input
                    type="radio"
                    name="fa-cat"
                    checked={on}
                    onChange={() => {
                      setCat(x.key);
                      setOpt(x.items[0].label);
                    }}
                    className="sr-only"
                  />
                  <FaIcon name={x.icon} className={`h-8 w-8 ${on ? "text-walnut-300" : "text-walnut-700"}`} />
                  <span className="text-sm font-semibold">{x.label}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <fieldset key={cat} className="animate-fadeIn lg:col-span-7">
            <legend className="text-base font-semibold text-ink-950">Which one?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {c.items.map((x) => (
                <label
                  key={x.label}
                  className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-walnut-600 ${
                    opt === x.label ? "border-walnut-700 bg-walnut-700 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-walnut-600"
                  }`}
                >
                  <input type="radio" name="fa-opt" checked={opt === x.label} onChange={() => setOpt(x.label)} className="sr-only" />
                  {x.label}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8" aria-live="polite">
              {o && (
                <div key={cat + opt} className="animate-fadeIn">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-walnut-300">{c.label}</p>
                  <p className="mt-1 font-serif text-2xl">{o.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{o.note}</p>
                  <FaCtas tone="dark" className="mt-6" primaryLabel="Request This Assembly" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
