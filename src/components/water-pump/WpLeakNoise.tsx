"use client";

import { useState } from "react";
import { wpLeakPoints, wpNoises } from "@/lib/water-pump";
import WpIcon from "./WpIcon";

export default function WpLeakNoise() {
  const [pt, setPt] = useState(wpLeakPoints[2].key);
  const p = wpLeakPoints.find((x) => x.key === pt)!;

  return (
    <section aria-label="Pump leaks and noises" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="section-label !text-glass-700">Leaks</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Water pump leaking? Find the leak before replacing the pump.</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              A leak near the pump doesn&rsquo;t necessarily mean the pump body
              is damaged. Tap where the water seems to come from.
            </p>
            <div role="radiogroup" aria-label="Leak location" className="mt-6 flex flex-wrap gap-2">
              {wpLeakPoints.map((l) => (
                <button
                  key={l.key}
                  type="button"
                  role="radio"
                  aria-checked={pt === l.key}
                  onClick={() => setPt(l.key)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    pt === l.key ? "border-glass-800 bg-glass-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/40"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <p key={p.key} className="mt-5 animate-fadeIn rounded-2xl border border-ink-900/10 bg-glass-100/50 p-5 text-sm leading-relaxed text-ink-800" aria-live="polite">
              <span className="font-semibold">{p.label}: </span>
              {p.meaning}
            </p>
          </div>
          <figure className="lg:col-span-7">
            <svg viewBox="0 0 320 210" className="mx-auto h-auto w-full max-w-lg touch-manipulation select-none" aria-hidden="true">
              <rect width="320" height="210" rx="18" fill="#eef3f5" />
              <path d="M20 190h280" stroke="#9a968a" strokeWidth="2" />
              <ellipse cx="160" cy="192" rx="70" ry="5" fill="#7fa0b0" opacity="0.4" />
              <path d="M10 130h60" stroke="#5b7d8f" strokeWidth="10" />
              <path d="M210 60h100" stroke="#5b7d8f" strokeWidth="10" />
              <path d="M205 60v40" stroke="#5b7d8f" strokeWidth="10" />
              <rect x="80" y="100" width="70" height="70" rx="10" fill="#faf8f4" stroke="#26333f" strokeWidth="2" />
              <circle cx="115" cy="135" r="20" fill="none" stroke="#26333f" strokeWidth="2" />
              <rect x="150" y="110" width="70" height="50" rx="6" fill="#d7e4ea" stroke="#26333f" strokeWidth="2" />
              <path d="M160 120v30M170 120v30M180 120v30M190 120v30M200 120v30" stroke="#9a968a" strokeWidth="2" />
              <path d="M240 80l14 10-14 10z" fill="#faf8f4" stroke="#26333f" strokeWidth="2" />
              <path d="M280 170v-40h20" stroke="#5b7d8f" strokeWidth="8" fill="none" />
              {wpLeakPoints.map((l) => {
                const on = l.key === pt;
                return (
                  <g key={l.key} onClick={() => setPt(l.key)} className="cursor-pointer">
                    <circle cx={l.x} cy={l.y} r="15" fill="transparent" />
                    <circle cx={l.x} cy={l.y} r={on ? 8 : 5.5} fill={on ? "#26333f" : "#faf8f4"} stroke="#26333f" strokeWidth="2" />
                    {on && <path className="fs-flow" d={`M${l.x} ${l.y + 10}v18`} stroke="#4a9797" strokeWidth="2.5" strokeLinecap="round" />}
                  </g>
                );
              })}
            </svg>
          </figure>
        </div>

        <div className="mt-16">
          <h2 className="font-serif text-3xl tracking-tight text-ink-950">What does that pump noise mean?</h2>
          <p className="mt-2 text-sm text-ink-600">Possible meanings only — a sound alone isn&rsquo;t a diagnosis.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {wpNoises.map((n, i) => (
              <li key={n.title} className="group rounded-2xl border border-ink-900/10 bg-glass-100/40 p-5">
                <svg viewBox="0 0 100 30" className="h-8 w-full text-glass-700" aria-hidden="true">
                  <path
                    d={
                      [
                        "M0 15 Q 12 10 25 15 T 50 15 T 75 15 T 100 15",
                        "M0 15 L 8 5 L 16 25 L 24 4 L 32 26 L 40 6 L 48 24 L 56 5 L 64 25 L 72 6 L 80 24 L 88 5 L 100 15",
                        "M0 15 h10 v-8 h6 v16 h6 v-16 h6 v8 h10 v-8 h6 v16 h6 v-16 h6 v8 h38",
                        "M0 15 Q 6 2 12 15 T 24 15 T 36 15 T 48 15 T 60 15 T 72 15 T 84 15 T 100 15",
                        "M0 15 h40 L 46 2 L 52 28 L 58 2 L 64 28 L 70 15 h30",
                      ][i]
                    }
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <h3 className="mt-3 flex items-center gap-2 text-base font-semibold text-ink-950">
                  <WpIcon name="sound" className="h-4 w-4 text-glass-700" />
                  {n.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-600">{n.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
