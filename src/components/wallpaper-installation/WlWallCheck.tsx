"use client";

import { useState } from "react";
import { wlConditions, wlSurfaces } from "@/lib/wallpaper-installation";
import WlCtas from "./WlCtas";
import WlIcon from "./WlIcon";

export default function WlWallCheck() {
  const [cond, setCond] = useState<string[]>([]);
  const [surface, setSurface] = useState("");
  const picked = wlConditions.filter((c) => cond.includes(c.label));
  const stop = picked.some((c) => c.flag === "stop");
  const prep = picked.some((c) => c.flag === "prep");
  const toggle = (l: string) => setCond((s) => (s.includes(l) ? s.filter((x) => x !== l) : [...s, l]));

  const headline = stop
    ? "Deal with the moisture before wallpapering."
    : prep
      ? "The wall needs some preparation first."
      : picked.length
        ? "The wall looks close to ready."
        : "";

  return (
    <section id="wall-check" aria-labelledby="wl-check" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">Wall check</p>
          <h2 id="wl-check" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Is your wall ready for wallpaper?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="space-y-7 lg:col-span-7">
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">1. What&rsquo;s the wall like? <span className="font-normal text-ink-500">(tick all that apply)</span></legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {wlConditions.map((c) => {
                  const on = cond.includes(c.label);
                  return (
                    <label key={c.label} className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-600 ${on ? "border-teal-800 bg-teal-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-teal-600"}`}>
                      <input type="checkbox" checked={on} onChange={() => toggle(c.label)} className="sr-only" />
                      {on ? "✓ " : ""}{c.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">2. What&rsquo;s the surface?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {wlSurfaces.map((s) => (
                  <label key={s} className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-600 ${surface === s ? "border-teal-800 bg-teal-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-teal-600"}`}>
                    <input type="radio" name="wl-surface" checked={surface === s} onChange={() => setSurface(s)} className="sr-only" />
                    {s}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28" aria-live="polite">
              {picked.length ? (
                <div key={cond.join() + surface} className="animate-fadeIn">
                  <WlIcon name={stop ? "drop" : prep ? "prepared" : "check"} className="h-7 w-7 text-teal-300" />
                  <p className="mt-3 font-serif text-2xl leading-snug">{headline}</p>
                  <ul className="mt-4 space-y-2">
                    {picked.map((c) => (
                      <li key={c.label} className="text-sm leading-relaxed text-ink-300"><span className="font-semibold text-sand-50">{c.label}: </span>{c.note}</li>
                    ))}
                  </ul>
                  {surface === "Previously wallpapered" && <p className="mt-3 text-sm text-ink-300">We&rsquo;ll check whether the old paper can stay or should come off.</p>}
                  {surface === "Concrete" && <p className="mt-3 text-sm text-ink-300">Bare concrete usually needs sealing or skimming before wallpaper.</p>}
                  <WlCtas tone="dark" className="mt-6" primaryLabel="Get the Wall Assessed" />
                </div>
              ) : (
                <p className="text-sm text-ink-300">Tick what you see to get a sense of the preparation involved.</p>
              )}
              <p className="mt-6 border-t border-sand-100/10 pt-4 text-xs text-ink-400">
                General guidance only — it can&rsquo;t diagnose structural or moisture problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
