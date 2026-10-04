"use client";

import { useState } from "react";
import { dkParts, type DkPartKey } from "@/lib/ac-duct-cleaning";
import DkIcon from "./DkIcon";

const HI = "#8f4f2f";

// Schematic of a ducted system laid out left to right in the order air
// travels: room → return grille → return duct → filter → air handler →
// supply duct → supply vent → room.
export default function DkSystem() {
  const [part, setPart] = useState<DkPartKey>("filter");
  const p = dkParts.find((x) => x.key === part)!;
  const on = (k: DkPartKey) => part === k;
  const pick = (k: DkPartKey) => () => setPart(k);
  const st = (k: DkPartKey) => ({ stroke: on(k) ? HI : "#4d545c", strokeWidth: on(k) ? 3 : 1.8 });

  return (
    <section id="system" aria-labelledby="dk-what" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="section-label !text-copper-700">The system</p>
            <h2 id="dk-what" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What is AC duct cleaning?</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-600 lg:col-span-6">
            It&rsquo;s inspecting and removing accumulated dust and debris from
            the accessible parts of the air-distribution system. The ducts are
            only one part of that system — tap each part below to see what it
            does and whether duct cleaning covers it.
          </p>
        </div>

        <ol className="mt-8 flex flex-wrap items-center gap-2 text-sm text-ink-700" aria-label="Path of the air">
          {["Room air", "Return", "Air-handling equipment", "Supply ducts", "Rooms"].map((s, i, a) => (
            <li key={s} className="flex items-center gap-2">
              <span className="rounded-full bg-steel-100 px-3 py-1">{s}</span>
              {i < a.length - 1 && <DkIcon name="arrow" className="h-4 w-4 text-copper-600" />}
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="rounded-2xl border border-ink-900/10 bg-steel-100/60 p-3 sm:p-5 lg:col-span-8">
            <svg viewBox="0 0 640 220" className="h-auto w-full touch-manipulation select-none" aria-hidden="true">
              {/* return grille */}
              <g onClick={pick("return")} className="cursor-pointer">
                <rect x="14" y="120" width="60" height="60" rx="4" fill="#faf8f4" {...st("return")} />
                <path d="M24 134h40M24 146h40M24 158h40M24 170h40" stroke="#838d96" strokeWidth="2" />
              </g>
              {/* return duct */}
              <g onClick={pick("returnDuct")} className="cursor-pointer">
                <path d="M74 140h90v-40h40v40" fill="none" stroke="transparent" strokeWidth="30" />
                <path d="M74 136h100v24H74z" fill="#e0d4bd" {...st("returnDuct")} />
                <path className="fs-flow" d="M80 148h90" stroke="#c98246" strokeWidth="2" fill="none" />
              </g>
              {/* filter */}
              <g onClick={pick("filter")} className="cursor-pointer">
                <rect x="174" y="118" width="22" height="60" fill="#faf8f4" {...st("filter")} />
                <path d="M174 126l22-8M174 138l22-8M174 150l22-8M174 162l22-8M174 174l22-8" stroke="#838d96" strokeWidth="1.5" />
              </g>
              {/* air handler */}
              <g onClick={pick("handler")} className="cursor-pointer">
                <rect x="196" y="96" width="130" height="100" rx="8" fill="#faf8f4" {...st("handler")} />
                <circle cx="290" cy="146" r="24" fill="none" stroke="#4d545c" strokeWidth="2" />
                <g className="pc-spin">
                  <circle cx="290" cy="146" r="18" fill="none" />
                  <path d="M290 146v-16M290 146l14 8M290 146l-14 8" stroke="#4d545c" strokeWidth="3" strokeLinecap="round" />
                </g>
                <path d="M214 110v72M222 110v72M230 110v72M238 110v72" stroke="#5b7d8f" strokeWidth="2" />
              </g>
              {/* supply duct */}
              <g onClick={pick("supplyDuct")} className="cursor-pointer">
                <path d="M326 120h240v30H326z" fill="#d7dce0" {...st("supplyDuct")} />
                <path d="M440 150v30M540 150v30" stroke={on("supplyDuct") ? HI : "#4d545c"} strokeWidth="14" />
                <path d="M440 150v30M540 150v30" stroke="#d7dce0" strokeWidth="10" />
                <path className="fs-flow" d="M334 135h226" stroke="#5b7d8f" strokeWidth="2" fill="none" />
              </g>
              {/* supply vents */}
              <g onClick={pick("supplyVent")} className="cursor-pointer">
                <rect x="418" y="180" width="44" height="14" rx="3" fill="#faf8f4" {...st("supplyVent")} />
                <rect x="518" y="180" width="44" height="14" rx="3" fill="#faf8f4" {...st("supplyVent")} />
                <path className="fs-flow" d="M440 196v18M540 196v18" stroke="#7fa0b0" strokeWidth="2" />
              </g>
              <g fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1" fill="#4d545c" pointerEvents="none">
                <text x="14" y="198">RETURN</text>
                <text x="84" y="128">RETURN DUCT</text>
                <text x="158" y="112">FILTER</text>
                <text x="212" y="90">AIR HANDLER</text>
                <text x="400" y="112">SUPPLY DUCT</text>
                <text x="470" y="212">VENTS</text>
              </g>
            </svg>
            <p className="px-2 pt-2 text-[11px] uppercase tracking-[0.14em] text-ink-500">Simplified ducted system — tap a part</p>
          </div>

          <div className="lg:col-span-4">
            <div role="radiogroup" aria-label="System part" className="flex flex-wrap gap-2">
              {dkParts.map((x) => (
                <button
                  key={x.key}
                  type="button"
                  role="radio"
                  aria-checked={on(x.key)}
                  onClick={pick(x.key)}
                  className={`focus-ring rounded-full border px-3 py-1.5 text-sm transition-colors ${
                    on(x.key) ? "border-copper-700 bg-copper-700 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/40"
                  }`}
                >
                  {x.label}
                </button>
              ))}
            </div>
            <div key={p.key} className="mt-6 animate-fadeIn rounded-2xl border border-ink-900/10 bg-sand-50 p-6" aria-live="polite">
              <h3 className="font-serif text-2xl text-ink-950">{p.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{p.body}</p>
              <p className="mt-4 flex gap-2 rounded-xl bg-steel-100 p-3 text-sm text-ink-800">
                <DkIcon name="checklist" className="mt-0.5 h-4 w-4 flex-none text-copper-700" />
                {p.cleaned}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
