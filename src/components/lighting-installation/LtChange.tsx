"use client";

import { useState } from "react";
import { ltChanges } from "@/lib/lighting-installation";
import LtCtas from "./LtCtas";
import LtIcon from "./LtIcon";

const replace = ["Existing electrical point", "Mounting method", "Fixture compatibility", "Fixture size and weight", "Switch / control arrangement", "Ceiling or wall condition"];
const fresh = ["Possible cable routes", "Access in the ceiling or wall", "Ceiling / wall construction", "Switch position", "Control requirements", "Finishing afterwards"];

export default function LtChange() {
  const [pick, setPick] = useState("");
  const c = ltChanges.find((x) => x.label === pick);

  return (
    <section id="replace-or-new" aria-labelledby="lt-change" className="border-b border-ink-900/10 bg-ember-100/40 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-700">Replace or add</p>
          <h2 id="lt-change" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Replacing a fixture or adding a new lighting point?</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10">
            <LtIcon name="install" className="h-7 w-7 text-ember-700" />
            <h3 className="mt-3 font-serif text-2xl text-ink-950">Existing fixture replacement</h3>
            <p className="mt-1 text-sm text-ink-600">Same location, new fixture. We check:</p>
            <ul className="mt-3 grid gap-1.5 text-sm text-ink-800 sm:grid-cols-2">{replace.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50">
            <LtIcon name="mount" className="h-7 w-7 text-ember-500" />
            <h3 className="mt-3 font-serif text-2xl">New lighting point</h3>
            <p className="mt-1 text-sm text-ink-300">A new position needs more planning:</p>
            <ul className="mt-3 grid gap-1.5 text-sm text-sand-100 sm:grid-cols-2">{fresh.map((x) => <li key={x}>{x}</li>)}</ul>
            <p className="mt-4 text-xs text-ink-400">We make good gypsum and finishing where it&rsquo;s part of the agreed job.</p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <fieldset className="lg:col-span-7">
            <legend className="text-base font-semibold text-ink-950">What are you changing?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {ltChanges.map((x) => (
                <label
                  key={x.label}
                  className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ember-600 ${
                    pick === x.label ? "border-ember-700 bg-ember-700 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-ember-600"
                  }`}
                >
                  <input type="radio" name="lt-change" checked={pick === x.label} onChange={() => setPick(x.label)} className="sr-only" />
                  {x.label}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10" aria-live="polite">
              {c ? (
                <div key={c.label} className="animate-fadeIn">
                  <p className="font-serif text-xl text-ink-950">{c.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{c.note}</p>
                  <p className="mt-3 text-xs text-ink-500">The actual work depends on site conditions and the fixture.</p>
                  <LtCtas className="mt-5" primaryLabel="Request an Assessment" />
                </div>
              ) : (
                <p className="text-sm text-ink-600">Pick an option to see what&rsquo;s usually involved.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
