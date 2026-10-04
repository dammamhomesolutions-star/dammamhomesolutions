"use client";

import { useState } from "react";
import { apFridgeProblems, apFridgeZones, type ApFridgeZone } from "@/lib/appliance-repair";
import ApIcon from "./ApIcon";

const hi = "#b3652f";
const base = "#4d545c";

function FridgeDiagram({ zone }: { zone: ApFridgeZone }) {
  const on = (z: ApFridgeZone) => zone === z;
  return (
    <svg viewBox="0 0 260 360" className="mx-auto h-auto w-full max-w-[280px]" role="img" aria-labelledby="ap-fridge-diagram">
      <title id="ap-fridge-diagram">{`Refrigerator cross-section, highlighting the ${apFridgeZones.find((z) => z.key === zone)?.label.toLowerCase()}`}</title>
      <rect x="30" y="16" width="200" height="328" rx="12" fill="#faf8f4" stroke="#2b2f33" strokeWidth="2" />
      {/* freezer */}
      <rect x="40" y="26" width="180" height="96" rx="6" fill={on("freezer") ? "#f5e3d2" : "#e3ebf0"} stroke={on("freezer") ? hi : "#b7bfc6"} strokeWidth={on("freezer") ? 3 : 1.5} />
      <path d="M60 50h60M60 66h70" stroke="#b7bfc6" strokeWidth="2" strokeDasharray="3 5" />
      {/* cooling compartment */}
      <rect x="40" y="130" width="180" height="204" rx="6" fill={on("cooling") ? "#f5e3d2" : "#f2f4f5"} stroke={on("cooling") ? hi : "#b7bfc6"} strokeWidth={on("cooling") ? 3 : 1.5} />
      <path d="M48 200h150M48 260h150" stroke="#b7bfc6" strokeWidth="2" />
      {/* door seal */}
      <rect x="34" y="20" width="192" height="320" rx="10" fill="none" stroke={on("seal") ? hi : "transparent"} strokeWidth="4" strokeDasharray="8 5" />
      {/* airflow duct */}
      <path d="M200 112v110" stroke={on("airflow") ? hi : base} strokeWidth={on("airflow") ? 6 : 3} strokeLinecap="round" />
      {on("airflow") && <path className="fs-flow" d="M200 112v110M196 222h-60" stroke="#faf8f4" strokeWidth="2" />}
      <path d="M196 222h-60" stroke={on("airflow") ? hi : base} strokeWidth={on("airflow") ? 4 : 2} strokeDasharray="4 4" />
      {/* fan */}
      <circle cx="196" cy="56" r="14" fill="#faf8f4" stroke={on("fan") ? hi : base} strokeWidth={on("fan") ? 3 : 2} />
      <g className={on("fan") ? "ap-drum" : undefined}>
        <circle cx="196" cy="56" r="10" fill="none" />
        <path d="M196 56v-9M196 56l8 5M196 56l-8 5" stroke={on("fan") ? hi : base} strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* defrost drain */}
      <path d="M150 118v8h-20v206" fill="none" stroke={on("drain") ? hi : "#b7bfc6"} strokeWidth={on("drain") ? 4 : 2} />
      <path d="M124 332h12" stroke={on("drain") ? hi : "#b7bfc6"} strokeWidth="3" />
      {/* controls */}
      <rect x="54" y="140" width="52" height="18" rx="3" fill={on("control") ? hi : "#2b2f33"} />
      <circle cx="66" cy="149" r="3" fill="#faf8f4" />
      <path d="M76 149h22" stroke="#faf8f4" strokeWidth="2" />
    </svg>
  );
}

export default function ApFridge() {
  const [zone, setZone] = useState<ApFridgeZone>("airflow");
  const active = apFridgeZones.find((z) => z.key === zone)!;

  return (
    <section id="refrigerator" aria-labelledby="ap-fridge" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="flex items-center gap-3 text-copper-700">
          <ApIcon name="fridge" className="h-8 w-8" />
          <p className="section-label !text-copper-700">Refrigerators &amp; freezers</p>
        </div>
        <h2 id="ap-fridge" className="mt-4 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Refrigerator repair in Dammam</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-600">
          A fridge that isn&rsquo;t cooling isn&rsquo;t automatically &ldquo;out of
          gas&rdquo;. Airflow, fans, seals, controls and defrost faults are all
          common — the cooling system needs checking before anyone recommends a
          gas refill or compressor work.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="rounded-2xl bg-steel-100 p-6 lg:col-span-5">
            <FridgeDiagram zone={zone} />
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-ink-950" id="ap-fridge-parts">Tap a part to see what it does</p>
            <div className="mt-3 flex flex-wrap gap-2" role="group" aria-labelledby="ap-fridge-parts">
              {apFridgeZones.map((z) => (
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
            <div key={zone} className="mt-5 animate-fadeIn rounded-2xl border border-ink-900/10 bg-steel-100/50 p-5" aria-live="polite">
              <h3 className="font-serif text-xl text-ink-950">{active.label}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{active.body}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apFridgeProblems.map((p) => (
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
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <ApIcon name="cooling" className="h-7 w-7 text-copper-300" />
            <h3 className="mt-3 font-serif text-2xl">Gas refill and sealed-system work</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              We do carry out refrigerant and compressor work when the sealed
              system is actually at fault. That can only be confirmed by
              inspecting the appliance — not over the phone. Refrigerant work
              needs proper tools and training; never attempt it yourself or
              pierce or bend the pipework at the back.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-copper-600/40 bg-copper-100/50 p-6 sm:p-8">
            <ApIcon name="thermometer" className="h-7 w-7 text-copper-700" />
            <h3 className="mt-3 font-serif text-2xl text-ink-950">If the fridge has stopped cooling</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-800">
              <li>Keep the doors closed as much as possible.</li>
              <li>Move perishable food somewhere cold if you can.</li>
              <li>If you&rsquo;re unsure whether food is still safe, follow official food-safety guidance — when in doubt, throw it out.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
