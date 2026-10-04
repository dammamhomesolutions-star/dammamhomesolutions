"use client";

import { useState } from "react";
import Link from "next/link";
import { apOvenProblems, apOvenZones, type ApOvenZone } from "@/lib/appliance-repair";
import ApIcon from "./ApIcon";

const hi = "#c98246";
const base = "#838d96";

function OvenDiagram({ zone }: { zone: ApOvenZone }) {
  const on = (z: ApOvenZone) => zone === z;
  return (
    <svg viewBox="0 0 300 260" className="mx-auto h-auto w-full max-w-[340px]" role="img" aria-labelledby="ap-oven-diagram">
      <title id="ap-oven-diagram">{`Oven front view, highlighting the ${apOvenZones.find((z) => z.key === zone)?.label.toLowerCase()}`}</title>
      <rect x="20" y="16" width="260" height="228" rx="12" fill="#faf8f4" stroke="#2b2f33" strokeWidth="2" />
      {/* control panel */}
      <rect x="32" y="26" width="236" height="30" rx="5" fill={on("panel") ? "#f5e3d2" : "#eceef0"} stroke={on("panel") ? hi : "#b7bfc6"} strokeWidth={on("panel") ? 3 : 1.5} />
      <circle cx="56" cy="41" r="8" fill="none" stroke="#2b2f33" strokeWidth="2" />
      <circle cx="84" cy="41" r="8" fill="none" stroke="#2b2f33" strokeWidth="2" />
      <rect x="196" y="33" width="58" height="16" rx="3" fill="#2b2f33" />
      {/* door seal */}
      <rect x="36" y="68" width="228" height="164" rx="8" fill="none" stroke={on("seal") ? hi : "#b7bfc6"} strokeWidth={on("seal") ? 5 : 3} strokeDasharray={on("seal") ? "8 5" : undefined} />
      {/* cavity */}
      <rect x="46" y="78" width="208" height="144" rx="5" fill={on("cavity") ? "#4a2c1e" : "#2b2f33"} />
      {/* elements */}
      <path className={on("element") ? "wh-glow" : undefined} d="M60 92h180M60 208h180" stroke={on("element") ? hi : "#4d545c"} strokeWidth="4" strokeLinecap="round" />
      {/* fan */}
      <circle cx="150" cy="150" r="24" fill="none" stroke={on("fan") ? hi : base} strokeWidth={on("fan") ? 3 : 2} />
      <g className={on("fan") ? "ap-drum" : undefined}>
        <circle cx="150" cy="150" r="18" fill="none" />
        <path d="M150 150v-16M150 150l14 8M150 150l-14 8" stroke={on("fan") ? hi : base} strokeWidth="2.5" strokeLinecap="round" />
      </g>
      {/* sensor */}
      <rect x="64" y="104" width="5" height="34" rx="2" fill={on("sensor") ? hi : base} />
      {on("sensor") && <circle cx="66.5" cy="104" r="9" fill="none" stroke={hi} strokeWidth="2" />}
      {/* handle */}
      <path d="M90 72h120" stroke="#2b2f33" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

const linkClass =
  "focus-ring rounded-sm font-semibold text-sand-50 underline decoration-copper-300 decoration-2 underline-offset-4 hover:text-copper-300";

export default function ApOven() {
  const [zone, setZone] = useState<ApOvenZone>("element");
  const active = apOvenZones.find((z) => z.key === zone)!;

  return (
    <section id="oven" aria-labelledby="ap-oven" className="border-b border-ink-900/10 bg-steel-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="flex items-center gap-3 text-copper-700">
          <ApIcon name="oven" className="h-8 w-8" />
          <p className="section-label !text-copper-700">Ovens &amp; cookers</p>
        </div>
        <h2 id="ap-oven" className="mt-4 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Oven repair in Dammam</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-600">
          We repair electric ovens and gas ovens and cookers. Heating faults can
          be electrical, in the controls or sensor, in an element — or, on gas
          models, in the ignition or supply.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:order-2 lg:col-span-5">
            <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10">
              <OvenDiagram zone={zone} />
            </div>
          </div>
          <div className="lg:order-1 lg:col-span-7">
            <p className="text-sm font-semibold text-ink-950" id="ap-oven-parts">Tap a part to see what it does</p>
            <div className="mt-3 flex flex-wrap gap-2" role="group" aria-labelledby="ap-oven-parts">
              {apOvenZones.map((z) => (
                <button
                  key={z.key}
                  type="button"
                  aria-pressed={zone === z.key}
                  onClick={() => setZone(z.key)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    zone === z.key ? "border-copper-800 bg-copper-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-copper-600"
                  }`}
                >
                  {z.label}
                </button>
              ))}
            </div>
            <div key={zone} className="mt-5 animate-fadeIn rounded-2xl border border-ink-900/10 bg-sand-50 p-5" aria-live="polite">
              <h3 className="font-serif text-xl text-ink-950">{active.label}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{active.body}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apOvenProblems.map((p) => (
            <div key={p.title} className="rounded-2xl border border-ink-900/10 bg-sand-50 p-5">
              <h3 className="font-semibold text-ink-950">{p.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.causes.map((c) => (
                  <li key={c} className="rounded-full bg-steel-100 px-2.5 py-1 text-xs text-ink-700">{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-rust-600/40 bg-rust-100/50 p-6 sm:p-8">
            <ApIcon name="flame" className="h-7 w-7 text-rust-700" />
            <h3 className="mt-3 font-serif text-2xl text-ink-950">Smell gas near a gas cooker?</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-800">
              <li>Don&rsquo;t switch lights or appliances on or off, and don&rsquo;t use flames.</li>
              <li>Open doors and windows if it&rsquo;s safe to do so.</li>
              <li>Leave the area.</li>
              <li>Contact your gas supplier or emergency services from outside.</li>
            </ul>
            <p className="mt-3 text-xs text-ink-600">Don&rsquo;t try to repair gas connections or burners yourself.</p>
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <ApIcon name="alert" className="h-7 w-7 text-copper-300" />
            <h3 className="mt-3 font-serif text-2xl">Oven electrical safety</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              Stop using the oven if you notice burning smells, smoke, sparks,
              damaged wiring, repeated breaker trips or severe overheating.
              Ovens draw a lot of power, so don&rsquo;t open panels or reset a
              tripping circuit again and again. If the problem is the circuit or
              socket rather than the oven, see{" "}
              <Link href="/electrical-repair/" className={linkClass}>electrical repair</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
