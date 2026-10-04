"use client";

import { useState } from "react";
import BwIcon from "./BwIcon";

const signs = [
  { label: "Paint is faded but intact", repair: false },
  { label: "Surface feels solid when tapped", repair: false },
  { label: "No cracks or only hairlines", repair: false },
  { label: "Plaster is cracked or hollow", repair: true },
  { label: "Cracks keep coming back", repair: true },
  { label: "Damp or water staining", repair: true },
  { label: "Loose or flaking surface", repair: true },
  { label: "Masonry showing through", repair: true },
];

export default function BwRepaint() {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (l: string) => setPicked((s) => (s.includes(l) ? s.filter((x) => x !== l) : [...s, l]));
  const any = picked.length > 0;
  const repair = signs.some((s) => s.repair && picked.includes(s.label));

  return (
    <section aria-labelledby="bw-repaint" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Repair or repaint?</p>
          <h2 id="bw-repaint" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Repair first, or just repaint?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <fieldset className="lg:col-span-6">
            <legend className="text-base font-semibold text-ink-950">Tick what&rsquo;s true of your wall</legend>
            <div className="mt-3 grid gap-2">
              {signs.map((s) => {
                const on = picked.includes(s.label);
                return (
                  <label key={s.label} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-clay-600 ${on ? "border-clay-700 bg-clay-100/60" : "border-ink-900/10 hover:border-clay-600"}`}>
                    <input type="checkbox" checked={on} onChange={() => toggle(s.label)} className="h-4 w-4 accent-clay-700" />
                    <span className="text-ink-900">{s.label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6" aria-live="polite">
            <div className={`rounded-2xl p-6 transition-all ${any && !repair ? "bg-clay-900 text-sand-50 shadow-lg" : "bg-clay-100/60 text-ink-900"} ${any && repair ? "opacity-50" : ""}`}>
              <BwIcon name="paint" className={`h-7 w-7 ${any && !repair ? "text-clay-300" : "text-clay-700"}`} />
              <h3 className="mt-3 font-serif text-2xl">Cosmetic refresh</h3>
              <p className={`mt-2 text-sm ${any && !repair ? "text-clay-100" : "text-ink-600"}`}>Suitable when the surface is sound, the coating is just aged or faded, and there&rsquo;s no significant deterioration.</p>
              {any && !repair && <p className="mt-3 text-sm font-semibold">✓ Looks like the better fit</p>}
            </div>
            <div className={`rounded-2xl p-6 transition-all ${repair ? "bg-ink-950 text-sand-50 shadow-lg" : "bg-clay-100/60 text-ink-900"} ${any && !repair ? "opacity-50" : ""}`}>
              <BwIcon name="tools" className={`h-7 w-7 ${repair ? "text-clay-300" : "text-clay-700"}`} />
              <h3 className="mt-3 font-serif text-2xl">Repair first</h3>
              <p className={`mt-2 text-sm ${repair ? "text-ink-300" : "text-ink-600"}`}>More appropriate when plaster is damaged, cracks recur, moisture is involved, the surface is loose or masonry is deteriorating.</p>
              {repair && <p className="mt-3 text-sm font-semibold">✓ Looks like the better fit</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
