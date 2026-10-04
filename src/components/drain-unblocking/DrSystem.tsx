"use client";

import { useState } from "react";
import { drPoints, type DrPointKey } from "@/lib/drain-unblocking";

const HI = "#94472a";

// Kitchen sink, bathroom and toilet → branch drain → main drain → sewer,
// with an access point. Tap a point to see what a blockage there affects.
export default function DrSystem() {
  const [pt, setPt] = useState<DrPointKey>("branch");
  const p = drPoints.find((x) => x.key === pt)!;
  const on = (k: DrPointKey) => pt === k;
  const pick = (k: DrPointKey) => () => setPt(k);
  const pipe = (k: DrPointKey) => ({ stroke: on(k) ? HI : "#9a968a", strokeWidth: on(k) ? 11 : 8 });

  return (
    <section id="drainage-system" aria-labelledby="dr-system" className="border-b border-ink-900/10 bg-concrete-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="section-label !text-teal-700">How drainage connects</p>
            <h2 id="dr-system" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Where could the blockage be?</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-600 lg:col-span-6">
            Drains join up as they go. The further down the system a blockage
            sits, the more fixtures it affects. Tap a point to see.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="rounded-2xl border border-ink-900/10 bg-sand-50 p-3 sm:p-5 lg:col-span-8">
            <svg viewBox="0 0 640 260" className="h-auto w-full touch-manipulation select-none" aria-hidden="true">
              {/* fixtures */}
              <g fill="#faf8f4" stroke="#333a49" strokeWidth="2">
                <path d="M40 60h70v20H40z" />
                <path d="M150 60h60v30h-60z" />
                <path d="M250 50h30v20h-30zM240 70h50a20 20 0 0 1-20 20h-10a20 20 0 0 1-20-20z" />
              </g>
              <g fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1" fill="#4a5468" pointerEvents="none">
                <text x="40" y="44">KITCHEN SINK</text>
                <text x="150" y="44">SHOWER</text>
                <text x="246" y="38">TOILET</text>
              </g>

              {/* fixture drains */}
              <g onClick={pick("fixture")} className="cursor-pointer">
                <path d="M75 80v50M180 90v40M265 90v40" fill="none" stroke="transparent" strokeWidth="24" />
                <path d="M75 80v50M180 90v40M265 90v40" fill="none" {...pipe("fixture")} />
              </g>
              {/* branch */}
              <g onClick={pick("branch")} className="cursor-pointer">
                <path d="M75 134h290" fill="none" stroke="transparent" strokeWidth="24" />
                <path d="M75 134h290" fill="none" {...pipe("branch")} />
              </g>
              {/* main */}
              <g onClick={pick("main")} className="cursor-pointer">
                <path d="M365 134v60h150" fill="none" stroke="transparent" strokeWidth="26" />
                <path d="M365 134v60h150" fill="none" {...pipe("main")} strokeWidth={on("main") ? 14 : 11} strokeLinejoin="round" />
              </g>
              {/* sewer */}
              <g onClick={pick("sewer")} className="cursor-pointer">
                <path d="M515 194h110" fill="none" stroke="transparent" strokeWidth="26" />
                <path d="M515 194h110" fill="none" {...pipe("sewer")} strokeWidth={on("sewer") ? 16 : 13} />
                <rect x="560" y="150" width="40" height="30" rx="4" fill="#c4c0b4" stroke={on("sewer") ? HI : "#5c584f"} strokeWidth="2" />
              </g>
              {/* cleanout */}
              <g onClick={pick("cleanout")} className="cursor-pointer">
                <path d="M440 194v-60" stroke={on("cleanout") ? HI : "#9a968a"} strokeWidth="7" />
                <rect x="428" y="118" width="24" height="16" rx="2" fill="#faf8f4" stroke={on("cleanout") ? HI : "#333a49"} strokeWidth="2" />
                <circle cx="440" cy="126" r="20" fill="transparent" />
              </g>

              {/* flow */}
              <g fill="none" stroke="#4a9797" strokeWidth="2" strokeLinecap="round" pointerEvents="none">
                <path className="fs-flow" d="M75 84v50h286v60h260" />
                <path className="fs-flow" d="M180 94v40M265 94v40" />
              </g>
              <path d="M0 214h640" stroke="#c4c0b4" strokeDasharray="4 6" />
              <g fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1" fill="#4a5468" pointerEvents="none">
                <text x="160" y="160">BRANCH DRAIN</text>
                <text x="380" y="230">MAIN DRAIN</text>
                <text x="560" y="230">SEWER</text>
                <text x="410" y="110">ACCESS POINT</text>
              </g>
            </svg>
            <p className="px-2 pt-2 text-[11px] uppercase tracking-[0.14em] text-ink-500">Simplified — real layouts vary</p>
          </div>

          <div className="lg:col-span-4">
            <div role="radiogroup" aria-label="Point in the drainage system" className="flex flex-wrap gap-2">
              {drPoints.map((x) => (
                <button
                  key={x.key}
                  type="button"
                  role="radio"
                  aria-checked={on(x.key)}
                  onClick={pick(x.key)}
                  className={`focus-ring rounded-full border px-3 py-1.5 text-sm transition-colors ${
                    on(x.key) ? "border-teal-800 bg-teal-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/40"
                  }`}
                >
                  {x.label}
                </button>
              ))}
            </div>
            <div key={p.key} className="mt-6 animate-fadeIn rounded-2xl border border-ink-900/10 bg-sand-50 p-6" aria-live="polite">
              <h3 className="font-serif text-2xl text-ink-950">{p.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{p.body}</p>
              <p className="mt-4 rounded-xl bg-teal-100/70 p-3 text-sm text-ink-800">
                <span className="font-semibold">A blockage here affects: </span>
                {p.affects}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
