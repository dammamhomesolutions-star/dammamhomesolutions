"use client";

import { useState } from "react";
import { bwPaintFails } from "@/lib/boundary-wall";
import BwIcon from "./BwIcon";

const plaster = ["Cracking", "Hollow or loose areas", "Flaking", "Impact damage", "Weather deterioration", "Exposed substrate", "Failed previous repairs"];
const steps = ["Assessment", "Preparation", "Compatible repair", "Surface finishing", "Final coating"];
const peelCauses = ["Weather exposure", "Surface preparation", "Moisture", "Incompatible coating", "Substrate deterioration", "Age", "Repeated patch repairs"];

export default function BwSurface() {
  const [fail, setFail] = useState(bwPaintFails[0].label);
  const f = bwPaintFails.find((x) => x.label === fail)!;

  return (
    <section id="plaster-and-paint" aria-label="Plaster, render and exterior paint" className="border-b border-ink-900/10 bg-clay-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-clay-700">Plaster &amp; render</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Damaged plaster or render</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Loose plaster is cut back to sound material and replaced with a
              mix that suits the wall, so the repair moves with it rather than
              cracking away again.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">{plaster.map((p) => <li key={p} className="rounded-full bg-sand-50 px-3 py-1 text-sm text-ink-800 ring-1 ring-ink-900/10">{p}</li>)}</ul>
          </div>
          <div className="lg:col-span-7">
            <ol className="flex flex-wrap items-center gap-2" aria-label="Plaster repair steps">
              {steps.map((s, i) => (
                <li key={s} className="flex items-center gap-2">
                  <span className={`rounded-full px-4 py-2 text-sm font-semibold ${i === steps.length - 1 ? "bg-clay-900 text-sand-50" : "bg-sand-50 text-ink-900 ring-1 ring-ink-900/10"}`}>{s}</span>
                  {i < steps.length - 1 && <BwIcon name="arrow" className="h-4 w-4 text-clay-600" />}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-16 grid gap-8 rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BwIcon name="paint" className="h-8 w-8 text-clay-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Why does exterior paint peel?</h2>
            <ul className="mt-4 flex flex-wrap gap-1.5">{peelCauses.map((c) => <li key={c} className="rounded-full bg-clay-100 px-2.5 py-1 text-xs text-ink-800">{c}</li>)}</ul>
            <p className="mt-4 rounded-xl bg-clay-100/60 p-3 text-sm font-medium text-ink-900">Repainting over a failing surface doesn&rsquo;t necessarily solve the underlying problem.</p>
          </div>
          <div className="lg:col-span-7">
            <h3 className="font-semibold text-ink-950" id="bw-paint-q">What is the paint doing?</h3>
            <div className="mt-3 flex flex-wrap gap-2" role="group" aria-labelledby="bw-paint-q">
              {bwPaintFails.map((x) => (
                <button
                  key={x.label}
                  type="button"
                  aria-pressed={fail === x.label}
                  onClick={() => setFail(x.label)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${fail === x.label ? "border-clay-900 bg-clay-900 text-sand-50" : "border-ink-900/15 text-ink-800 hover:border-clay-600"}`}
                >
                  {x.label}
                </button>
              ))}
            </div>
            <div key={fail} className="mt-4 animate-fadeIn rounded-xl bg-ink-950 p-5 text-sand-50" aria-live="polite">
              <p className="font-semibold">{f.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-300">{f.note}</p>
              <p className="mt-3 text-xs text-ink-400">Likely considerations, not a diagnosis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
