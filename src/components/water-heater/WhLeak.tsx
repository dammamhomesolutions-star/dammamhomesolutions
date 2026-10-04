"use client";

import { useState } from "react";
import { whLeaks, type WhLeakKey } from "@/lib/water-heater";
import WhIcon from "./WhIcon";
import WhCtas from "./WhCtas";

export default function WhLeak() {
  const [spot, setSpot] = useState<WhLeakKey>("inlet");
  const s = whLeaks.find((x) => x.key === spot)!;

  return (
    <section id="leaking" aria-label="Leaking heaters and no hot water" className="border-b border-ink-900/10 bg-glass-100/70 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="section-label !text-glass-700">Leaks</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              Water heater leaking? Find the source before assuming the tank is finished.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              A leak from a connection is not the same problem as a leak from
              the tank itself. Tap where the water seems to be coming from.
            </p>
            <div role="radiogroup" aria-label="Leak location" className="mt-6 flex flex-wrap gap-2">
              {whLeaks.map((l) => (
                <button
                  key={l.key}
                  type="button"
                  role="radio"
                  aria-checked={spot === l.key}
                  onClick={() => setSpot(l.key)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    spot === l.key ? "border-glass-800 bg-glass-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/40"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div key={s.key} className="mt-5 animate-fadeIn rounded-2xl border border-ink-900/10 bg-sand-50 p-5" aria-live="polite">
              <h3 className="font-serif text-xl text-ink-950">{s.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.meaning}</p>
            </div>
          </div>
          <figure className="lg:col-span-7">
            <svg viewBox="0 0 300 330" className="mx-auto h-auto w-full max-w-md touch-manipulation select-none" aria-hidden="true">
              <rect width="300" height="330" rx="20" fill="#eef3f5" />
              <path d="M30 304h240" stroke="#9a968a" strokeWidth="3" />
              <ellipse cx="150" cy="306" rx="60" ry="7" fill="#7fa0b0" opacity="0.5" />
              <path d="M104 64V12M196 64V12" stroke="#5b7d8f" strokeWidth="8" />
              <path d="M196 64V12" stroke="#c76a3f" strokeWidth="8" />
              <rect x="90" y="60" width="120" height="226" rx="34" fill="#d7e4ea" stroke="#333a49" strokeWidth="2" />
              <path d="M140 58h20v8h-20z" fill="#78746a" />
              <path d="M210 110h20" stroke="#78746a" strokeWidth="6" />
              <rect x="226" y="100" width="14" height="20" rx="3" fill="#faf8f4" stroke="#333a49" strokeWidth="1.5" />
              <rect x="182" y="262" width="16" height="12" rx="2" fill="#faf8f4" stroke="#333a49" strokeWidth="1.5" />
              {whLeaks.map((l) => {
                const on = l.key === spot;
                return (
                  <g key={l.key} onClick={() => setSpot(l.key)} className="cursor-pointer">
                    <circle cx={l.x} cy={l.y} r="16" fill="transparent" />
                    <circle cx={l.x} cy={l.y} r={on ? 9 : 6} fill={on ? "#26333f" : "#faf8f4"} stroke="#26333f" strokeWidth="2" />
                    {on && (
                      <path className="fs-flow" d={`M${l.x} ${l.y + 10}v22`} stroke="#5b7d8f" strokeWidth="2.5" strokeLinecap="round" />
                    )}
                  </g>
                );
              })}
            </svg>
            <figcaption className="mt-2 text-center text-[11px] uppercase tracking-[0.14em] text-ink-500">Storage heater — common leak points</figcaption>
          </figure>
        </div>

        {/* No hot water */}
        <div className="mt-16 grid gap-8 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <WhIcon name="cold" className="h-8 w-8 text-glass-300" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight">No hot water? Start with the right diagnosis.</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
              &ldquo;No hot water&rdquo; is a symptom, not a cause. Replacing the
              whole heater won&rsquo;t help if the problem is the power supply,
              and replacing a part won&rsquo;t help if the tank has failed.
              Please don&rsquo;t open electrical covers to check.
            </p>
          </div>
          <div className="lg:col-span-6">
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {["No electrical supply", "Heating element", "Thermostat / controls", "Internal fault", "Water supply", "Capacity vs demand"].map((c) => (
                <li key={c} className="flex items-center gap-2 rounded-xl bg-sand-50/5 px-3 py-2.5">
                  <WhIcon name="search" className="h-4 w-4 flex-none text-ember-500" />
                  {c}
                </li>
              ))}
            </ul>
            <WhCtas tone="dark" className="mt-6" primaryLabel="Request an Inspection" />
          </div>
        </div>
      </div>
    </section>
  );
}
