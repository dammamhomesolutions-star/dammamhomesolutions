"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { wpIdDoes, wpIdWhere, wpTypes } from "@/lib/water-pump";
import WpIcon from "./WpIcon";

// Rough match from location + job. Never claims to identify a model.
function suggest(where: string, does: string): string[] {
  if (does === "Increase pressure") return ["booster", "ptank"];
  if (does === "Move water up to a tank" || does === "Fill a tank") return where === "Not sure" ? ["transfer", "submersible"] : ["transfer"];
  if (where === "Roof") return ["booster"];
  if (where === "Basement / pump room") return ["transfer", "booster"];
  return [];
}

export default function WpTypes() {
  const [where, setWhere] = useState("");
  const [does, setDoes] = useState("");
  const match = suggest(where, does);

  return (
    <section aria-labelledby="wp-types" className="border-b border-ink-900/10 bg-glass-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Pump types</p>
          <h2 id="wp-types" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Which pump do you have?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">We repair and replace all four types below.</p>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {wpTypes.map((t) => (
            <li
              key={t.key}
              className={`rounded-2xl border p-6 transition-colors ${match.includes(t.key) ? "border-glass-700 bg-sand-50 ring-2 ring-glass-600/40" : "border-ink-900/10 bg-sand-50"}`}
            >
              <h3 className="text-lg font-semibold text-ink-950">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{t.body}</p>
              <p className="mt-3 text-sm text-ink-600"><span className="font-semibold text-ink-800">Usually: </span>{t.where}</p>
              {match.includes(t.key) && <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-glass-700">Possible match</p>}
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-6 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:grid-cols-12">
          <fieldset className="lg:col-span-5">
            <legend className="font-serif text-xl">Where is the pump installed?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {wpIdWhere.map((w) => (
                <label key={w} className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-300 ${where === w ? "border-glass-300 bg-glass-300 text-ink-950" : "border-sand-100/20 hover:border-sand-100/50"}`}>
                  <input type="radio" name="wp-id-where" value={w} checked={where === w} onChange={() => setWhere(w)} className="sr-only" />
                  {w}
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset className="lg:col-span-4">
            <legend className="font-serif text-xl">What does it seem to do?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {wpIdDoes.map((w) => (
                <label key={w} className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-300 ${does === w ? "border-glass-300 bg-glass-300 text-ink-950" : "border-sand-100/20 hover:border-sand-100/50"}`}>
                  <input type="radio" name="wp-id-does" value={w} checked={does === w} onChange={() => setDoes(w)} className="sr-only" />
                  {w}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="lg:col-span-3" aria-live="polite">
            <p className="text-sm text-ink-300">
              {match.length ? "Possible matches are highlighted above." : "Choose both to highlight possible matches."}
            </p>
            <p className="mt-2 text-xs text-ink-400">A rough guide — it can&rsquo;t identify the exact model.</p>
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, here's a photo of my water pump — can you tell me what it is?")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring mt-4 inline-flex items-center gap-2 rounded-full border border-sand-100/25 px-4 py-2 text-sm font-semibold hover:bg-sand-100/10"
            >
              Not sure? Send us a photo
              <WpIcon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
