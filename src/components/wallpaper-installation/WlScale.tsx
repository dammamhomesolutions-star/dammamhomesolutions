"use client";

import { useState } from "react";
import { wlRoomEffects, wlScale } from "@/lib/wallpaper-installation";
import WlIcon from "./WlIcon";

export default function WlScale() {
  const [style, setStyle] = useState("Large pattern");
  const s = wlScale.find((x) => x.label === style)!;

  return (
    <section id="pattern-scale" aria-label="Pattern style and how wallpaper changes a room" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="section-label !text-teal-700">Pattern &amp; scale</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What pattern style are you considering?</h2>
            <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Pattern style">
              {wlScale.map((x) => (
                <button
                  key={x.label}
                  type="button"
                  aria-pressed={style === x.label}
                  onClick={() => setStyle(x.label)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    style === x.label ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/15 text-ink-800 hover:border-teal-600"
                  }`}
                >
                  {x.label}
                </button>
              ))}
            </div>
            <div key={style} className="mt-5 animate-fadeIn rounded-2xl bg-teal-100/60 p-5" aria-live="polite">
              <h3 className="font-semibold text-ink-950">{s.label}</h3>
              <ul className="mt-2 space-y-1.5">
                {s.points.map((p) => <li key={p} className="flex gap-2 text-sm text-ink-800"><WlIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-700" />{p}</li>)}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Can wallpaper change how a room feels?</h2>
            <p className="mt-3 text-sm text-ink-600">These are visual effects — the room doesn&rsquo;t physically change size.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {wlRoomEffects.map((e, i) => (
                <div key={e.t} className="rounded-2xl border border-ink-900/10 p-4">
                  <svg viewBox="0 0 60 30" className="h-8 w-16" aria-hidden="true">
                    {i === 0 && [6, 18, 30, 42, 54].map((x) => <path key={x} d={`M${x} 2v26`} stroke="#2f7a7a" strokeWidth="3" />)}
                    {i === 1 && [6, 15, 24].map((y) => <path key={y} d={`M2 ${y}h56`} stroke="#2f7a7a" strokeWidth="3" />)}
                    {i === 2 && <circle cx="30" cy="15" r="13" fill="#2f7a7a" />}
                    {i === 3 && [8, 20, 32, 44, 56].flatMap((x) => [8, 22].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill="#2f7a7a" />))}
                    {i === 4 && <rect x="2" y="2" width="56" height="26" fill="#e0f0f0" stroke="#8fc4c4" />}
                    {i === 5 && <rect x="2" y="2" width="56" height="26" fill="#0f3a3a" />}
                  </svg>
                  <h3 className="mt-2 text-sm font-semibold text-ink-950">{e.t}</h3>
                  <p className="mt-0.5 text-sm text-ink-600">{e.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
