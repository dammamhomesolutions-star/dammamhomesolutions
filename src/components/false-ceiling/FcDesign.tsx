"use client";

import { useState } from "react";
import { fcSimpleVsMulti, fcStyles, type FcStyle } from "@/lib/false-ceiling";
import FcStylePreview from "./FcStylePreview";

const roomSize = [
  { t: "High ceilings", b: "Room for deeper features and multiple levels, but plan access for installation and future maintenance, and keep fittings in proportion." },
  { t: "Large rooms", b: "Use levels and lighting to zone the space, spread AC evenly and keep the design consistent across it." },
  { t: "Small rooms", b: "Keep profiles simple and slim so the room doesn't feel heavy; let lighting do the work." },
];

export default function FcDesign() {
  const [style, setStyle] = useState<FcStyle>("cove");
  const s = fcStyles.find((x) => x.key === style)!;

  return (
    <section id="design" aria-label="Ceiling design styles" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Design</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What style are you looking for?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">We help plan the design to suit your room&rsquo;s height and use.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7" role="group" aria-label="Ceiling style">
            {fcStyles.map((x) => (
              <button
                key={x.key}
                type="button"
                aria-pressed={style === x.key}
                onClick={() => setStyle(x.key)}
                className={`focus-ring overflow-hidden rounded-2xl border text-left transition-all ${style === x.key ? "border-glass-900 shadow-lg" : "border-ink-900/10 hover:-translate-y-0.5 hover:border-glass-600"}`}
              >
                <span className="block h-16"><FcStylePreview style={x.key} /></span>
                <span className={`block px-3 py-2 text-sm font-semibold ${style === x.key ? "bg-glass-900 text-sand-50" : "text-ink-900"}`}>{style === x.key ? "✓ " : ""}{x.label}</span>
              </button>
            ))}
          </div>
          <div className="lg:col-span-5">
            <div key={style} className="animate-fadeIn overflow-hidden rounded-2xl bg-ink-950 text-sand-50" aria-live="polite">
              <div className="h-36"><FcStylePreview style={style} /></div>
              <div className="p-6">
                <p className="font-serif text-2xl">{s.label}</p>
                <p className="mt-2 text-sm text-ink-300">{s.body}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Simple or multi-level ceiling?</h2>
            <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-2xl ring-1 ring-ink-900/10">
              <div className="bg-glass-100 p-5">
                <h3 className="font-semibold text-ink-950">Simple</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink-700">{fcSimpleVsMulti.map((r) => <li key={r.simple}>{r.simple}</li>)}</ul>
              </div>
              <div className="bg-ink-950 p-5 text-sand-50">
                <h3 className="font-semibold">Multi-level</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink-300">{fcSimpleVsMulti.map((r) => <li key={r.multi}>{r.multi}</li>)}</ul>
              </div>
            </div>
            <p className="mt-3 text-sm text-ink-600">More levels usually mean more framing and finishing, which can affect cost — we&rsquo;ll show the difference in your quote.</p>
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">High, large and small rooms</h2>
            <ul className="mt-6 space-y-3">
              {roomSize.map((r) => (
                <li key={r.t} className="rounded-2xl border border-ink-900/10 p-5">
                  <h3 className="font-semibold text-ink-950">{r.t}</h3>
                  <p className="mt-1 text-sm text-ink-600">{r.b}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
