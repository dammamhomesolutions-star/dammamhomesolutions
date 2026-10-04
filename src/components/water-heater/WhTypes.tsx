"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { whTypes } from "@/lib/water-heater";
import WhIcon from "./WhIcon";

const answers = [
  { key: "yes", label: "Yes — there's a tank", hint: "Probably an electric storage heater, or a gas or solar system with a tank." },
  { key: "no", label: "No tank", hint: "Probably an instant / tankless heater." },
  { key: "unsure", label: "Not sure", hint: "Send us a photo — it's the quickest way to tell." },
];

export default function WhTypes() {
  const [tank, setTank] = useState("");
  const hint = answers.find((a) => a.key === tank);

  return (
    <section aria-labelledby="wh-types" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Heater types</p>
          <h2 id="wh-types" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Which water heater do you have?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">We repair and install all four types below.</p>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whTypes.map((t) => (
            <li
              key={t.key}
              className={`group rounded-2xl border p-6 transition-colors ${
                (tank === "no" && t.key === "instant") || (tank === "yes" && t.key !== "instant")
                  ? "border-rust-600 bg-sand-50 ring-2 ring-rust-600/30"
                  : "border-ink-900/10 bg-sand-50"
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-ember-500">
                <WhIcon name={t.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink-950">{t.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{t.how}</p>
              <p className="mt-2 text-sm text-ink-600"><span className="font-semibold text-ink-800">Look for: </span>{t.spot}</p>
              <p className="mt-2 text-sm text-ink-600">{t.notes}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-6 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:grid-cols-12 lg:items-center">
          <fieldset className="lg:col-span-7">
            <legend className="font-serif text-xl">Does your heater store hot water in a tank?</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {answers.map((a) => (
                <label
                  key={a.key}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ember-500 ${
                    tank === a.key ? "border-ember-500 bg-ember-500 text-ink-950" : "border-sand-100/20 hover:border-sand-100/50"
                  }`}
                >
                  <input type="radio" name="wh-tank" value={a.key} checked={tank === a.key} onChange={() => setTank(a.key)} className="sr-only" />
                  {a.label}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="lg:col-span-5" aria-live="polite">
            <p className="text-sm text-ink-300">{hint ? hint.hint : "Choose an answer — the matching types above will be highlighted."}</p>
            <p className="mt-2 text-xs text-ink-400">A guide only — we confirm the type from a photo or on site.</p>
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, here's a photo of my water heater — can you tell me what type it is?")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring mt-4 inline-flex items-center gap-2 rounded-full border border-sand-100/25 px-5 py-2.5 text-sm font-semibold hover:bg-sand-100/10"
            >
              Send us a photo if you&rsquo;re unsure
              <WhIcon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
