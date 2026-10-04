"use client";

import { useState } from "react";
import { cbLight, cbPrivacy } from "@/lib/curtain-blind";
import CbIcon from "./CbIcon";

// Five light levels, each shown as a window with a matching amount of light.
const glow = [0.08, 0.45, 0.65, 0.35, 0.85];

export default function CbLight() {
  const [i, setI] = useState(0);
  const l = cbLight[i];

  return (
    <section id="light-control" aria-label="Blackout, light control and privacy" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="section-label !text-clay-300">Blackout</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">Planning a blackout curtain or blind?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
              There&rsquo;s a difference between <strong className="text-sand-50">blackout material</strong>{" "}
              — fabric that blocks light passing through it — and a{" "}
              <strong className="text-sand-50">blackout result</strong> in the room. Light still leaks
              around the top and sides unless the installation is planned for it.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {["Covering type", "Mounting position", "Window size", "Side gaps", "Top gaps", "Edge light leakage", "Fabric / system design"].map((x) => (
                <li key={x} className="rounded-full bg-sand-100/10 px-3 py-1 text-xs text-sand-100">{x}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-400">We won&rsquo;t promise &ldquo;100% blackout&rdquo; — we&rsquo;ll tell you how close a given setup is likely to get.</p>
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl" id="cb-light-q">How much light do you want to control?</h2>
            <div className="mt-5 flex flex-wrap gap-2" role="group" aria-labelledby="cb-light-q">
              {cbLight.map((x, n) => (
                <button
                  key={x.label}
                  type="button"
                  aria-pressed={i === n}
                  onClick={() => setI(n)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    i === n ? "border-clay-300 bg-clay-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"
                  }`}
                >
                  {x.label}
                </button>
              ))}
            </div>
            <div className="mt-5 flex gap-5 rounded-2xl bg-ink-900 p-5">
              <svg viewBox="0 0 80 100" className="h-24 w-20 flex-none" aria-hidden="true">
                <rect x="4" y="4" width="72" height="92" fill="#191d25" stroke="#b8916c" strokeWidth="3" />
                <rect x="8" y="8" width="64" height="84" fill="#f6c98a" style={{ opacity: glow[i], transition: "opacity 400ms" }} />
                <path d="M40 4v92" stroke="#b8916c" strokeWidth="2" />
              </svg>
              <p key={i} className="animate-fadeIn text-sm leading-relaxed text-ink-300" aria-live="polite">
                <span className="block font-semibold text-sand-50">{l.label}</span>
                {l.body}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-sand-100/10 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <CbIcon name="eye" className="h-7 w-7 text-clay-300" />
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">Privacy &amp; window coverings</h2>
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-300">
            Sheer curtains give privacy by day but become see-through at night
            when the lights are on inside. Street-facing and ground-floor rooms
            usually need a heavier layer or a blind as well. No covering
            guarantees privacy in every lighting condition.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {cbPrivacy.map((p) => <li key={p} className="rounded-full bg-sand-100/10 px-3 py-1 text-xs text-sand-100">{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
