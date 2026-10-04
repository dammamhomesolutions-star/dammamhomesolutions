"use client";

import { useState } from "react";
import { hmProperties } from "@/lib/handyman";
import HmIcon from "./HmIcon";

const local = ["Villas", "Apartments", "Rental units", "Offices", "Small commercial premises", "Move-in and move-out"];

export default function HmProperty() {
  const [key, setKey] = useState("home");
  const p = hmProperties.find((x) => x.key === key)!;

  return (
    <section aria-labelledby="hm-property" className="bg-sand-100 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-700">Property type</p>
          <h2 id="hm-property" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Handyman help for Dammam properties</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">{local.join(" · ")}</p>
          <div className="mt-8 inline-flex flex-wrap gap-1 rounded-full bg-sand-50 p-1 ring-1 ring-ink-900/10" role="group" aria-label="Property type">
            {hmProperties.map((x) => (
              <button key={x.key} type="button" aria-pressed={key === x.key} onClick={() => setKey(x.key)} className={`focus-ring rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${key === x.key ? "bg-ink-950 text-sand-50" : "text-ink-700 hover:bg-sand-100"}`}>
                {x.label}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <div key={key} className="animate-fadeIn rounded-[2rem] bg-sand-50 p-6 shadow-sm ring-1 ring-ink-900/10 sm:p-8" aria-live="polite">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-950 text-ember-500"><HmIcon name={p.icon} className="h-6 w-6" /></span>
            <h3 className="mt-4 font-serif text-2xl text-ink-950">{p.label}</h3>
            <p className="mt-1 text-sm text-ink-600">{p.body}</p>
            <ul className="mt-4 grid grid-cols-2 gap-2">{p.examples.map((e) => <li key={e} className="rounded-xl bg-sand-100 px-3 py-2 text-sm text-ink-800">{e}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
