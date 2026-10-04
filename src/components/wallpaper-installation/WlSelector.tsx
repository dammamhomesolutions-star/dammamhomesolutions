"use client";

import { useState } from "react";
import { wlKinds } from "@/lib/wallpaper-installation";
import WlCtas from "./WlCtas";
import WlIcon from "./WlIcon";
import WlSwatch, { type WlSwatchKind } from "./WlSwatch";

const swatch: Record<string, WlSwatchKind> = {
  "Paper-based": "plain",
  Vinyl: "stripe",
  "Non-woven": "texture",
  Textured: "texture",
  "Peel-and-stick": "geo",
  "Mural / feature": "mural",
  Patterned: "pattern",
  "Not sure": "plain",
};

export default function WlSelector() {
  const [kind, setKind] = useState(wlKinds[0].label);
  const k = wlKinds.find((x) => x.label === kind)!;

  return (
    <section id="wallpaper-types" aria-labelledby="wl-sel" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">Wallpaper selector</p>
          <h2 id="wl-sel" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What type of wallpaper are you installing?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Not every wallpaper is hung the same way — the product&rsquo;s own instructions always come first.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <fieldset className="lg:col-span-7">
            <legend className="sr-only">Wallpaper type</legend>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {wlKinds.map((x, i) => {
                const on = kind === x.label;
                return (
                  <label
                    key={x.label}
                    className={`group cursor-pointer overflow-hidden rounded-2xl border transition-all has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-600 ${
                      on ? "border-ink-950 shadow-lg" : "border-ink-900/10 hover:-translate-y-0.5 hover:border-teal-600"
                    }`}
                  >
                    <input type="radio" name="wl-kind" checked={on} onChange={() => setKind(x.label)} className="sr-only" />
                    <span className="block h-16"><WlSwatch kind={swatch[x.label]} uid={`sel-${i}`} /></span>
                    <span className={`block px-3 py-2.5 text-sm font-semibold ${on ? "bg-ink-950 text-sand-50" : "bg-sand-50 text-ink-900"}`}>
                      {on ? "✓ " : ""}{x.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <div className="lg:col-span-5">
            <div key={kind} className="animate-fadeIn rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8" aria-live="polite">
              <WlIcon name={kind === "Mural / feature" ? "mural" : kind === "Not sure" ? "camera" : "roll"} className="h-7 w-7 text-teal-300" />
              <p className="mt-3 font-serif text-2xl">{k.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">{k.note}</p>
              <WlCtas tone="dark" className="mt-6" primaryLabel="Get This Installed" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
