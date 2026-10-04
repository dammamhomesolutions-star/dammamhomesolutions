"use client";

import { useState } from "react";
import { wpParts, type WpPartKey } from "@/lib/water-pump";
import WpIcon from "./WpIcon";

const HI = "#8f4f2f";

// Tank → suction → pump → check valve → pressure control (+ pressure tank)
// → discharge → fixtures. Tap a component.
export default function WpSystem() {
  const [part, setPart] = useState<WpPartKey>("pump");
  const p = wpParts.find((x) => x.key === part)!;
  const on = (k: WpPartKey) => part === k;
  const pick = (k: WpPartKey) => () => setPart(k);
  const st = (k: WpPartKey) => ({ stroke: on(k) ? HI : "#26333f", strokeWidth: on(k) ? 3 : 2 });
  const pipe = (k: WpPartKey) => ({ stroke: on(k) ? HI : "#5b7d8f", strokeWidth: on(k) ? 11 : 8 });

  return (
    <section id="system" aria-labelledby="wp-system" className="border-b border-ink-900/10 bg-glass-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="section-label !text-glass-700">How it works</p>
            <h2 id="wp-system" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What does a water pump actually do?</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-600 lg:col-span-6">
            A pump moves water and adds pressure — but it doesn&rsquo;t work
            alone. It depends on the water reaching it, the controls telling it
            when to run, and the pipes carrying water away. Tap each part.
          </p>
        </div>

        <ol className="mt-8 flex flex-wrap items-center gap-2 text-sm text-ink-700" aria-label="Path of the water">
          {["Water source", "Pump", "Pressure / flow system", "Fixtures"].map((s, i, a) => (
            <li key={s} className="flex items-center gap-2">
              <span className="rounded-full bg-sand-50 px-3 py-1 ring-1 ring-ink-900/10">{s}</span>
              {i < a.length - 1 && <WpIcon name="arrow" className="h-4 w-4 text-glass-700" />}
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="rounded-2xl border border-ink-900/10 bg-sand-50 p-3 sm:p-5 lg:col-span-8">
            <svg viewBox="0 0 640 240" className="h-auto w-full touch-manipulation select-none" aria-hidden="true">
              {/* tank */}
              <g onClick={pick("tank")} className="cursor-pointer">
                <path d="M20 70c0-8 25-12 50-12s50 4 50 12v120c0 8-25 12-50 12s-50-4-50-12z" fill="#d7e4ea" {...st("tank")} />
                <path d="M22 120c15 5 32 6 48 6s33-1 48-6v70c0 8-25 12-48 12s-48-4-48-12z" fill="#7fa0b0" opacity="0.6" />
              </g>
              {/* suction */}
              <g onClick={pick("suction")} className="cursor-pointer">
                <path d="M120 180h70" fill="none" stroke="transparent" strokeWidth="24" />
                <path d="M120 180h70" fill="none" {...pipe("suction")} />
              </g>
              {/* pump */}
              <g onClick={pick("pump")} className="cursor-pointer">
                <rect x="190" y="150" width="80" height="56" rx="8" fill="#faf8f4" {...st("pump")} />
                <circle cx="218" cy="178" r="15" fill="none" stroke="#26333f" strokeWidth="2" />
                <path d="M242 162h20M242 170h20M242 178h20M242 186h20M242 194h20" stroke="#9a968a" strokeWidth="2" />
              </g>
              {/* check valve */}
              <g onClick={pick("check")} className="cursor-pointer">
                <path d="M270 166h40" {...pipe("check")} />
                <path d="M290 152l12 14-12 14z" fill="#faf8f4" {...st("check")} />
              </g>
              {/* control + pressure tank */}
              <g onClick={pick("control")} className="cursor-pointer">
                <path d="M310 166h50" {...pipe("control")} />
                <rect x="326" y="104" width="36" height="44" rx="5" fill="#faf8f4" {...st("control")} />
                <path d="M344 148v18" stroke="#5b7d8f" strokeWidth="5" />
                <path d="M334 116h20v10h-20z" fill="#26333f" />
              </g>
              <g onClick={pick("ptank")} className="cursor-pointer">
                <path d="M370 166v20" stroke="#5b7d8f" strokeWidth="5" />
                <rect x="352" y="186" width="36" height="44" rx="16" fill="#eef3f5" {...st("ptank")} strokeDasharray={on("ptank") ? undefined : "5 4"} />
              </g>
              {/* discharge */}
              <g onClick={pick("discharge")} className="cursor-pointer">
                <path d="M360 166h80V70h120" fill="none" stroke="transparent" strokeWidth="24" />
                <path d="M360 166h80V70h120" fill="none" {...pipe("discharge")} strokeLinejoin="round" />
              </g>
              {/* fixtures */}
              <g onClick={pick("fixtures")} className="cursor-pointer">
                <path d="M560 70v30M600 70v30" stroke="#5b7d8f" strokeWidth="6" />
                <path d="M545 100h30l-4 8h-22zM585 100h30l-4 8h-22z" fill="#faf8f4" {...st("fixtures")} />
                <path d="M560 70h40" stroke="#5b7d8f" strokeWidth="6" />
              </g>
              {/* flow */}
              <path className="fs-flow" d="M124 180h66M272 166h166V70h158" fill="none" stroke="#d7e4ea" strokeWidth="2" pointerEvents="none" />
              <g fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1" fill="#3d5a6b" pointerEvents="none">
                <text x="44" y="50">TANK</text>
                <text x="128" y="204">SUCTION</text>
                <text x="210" y="222">PUMP</text>
                <text x="282" y="146">CHECK</text>
                <text x="318" y="96">CONTROL</text>
                <text x="394" y="214">PRESSURE TANK</text>
                <text x="450" y="60">DISCHARGE</text>
                <text x="556" y="128">FIXTURES</text>
              </g>
            </svg>
            <p className="px-2 pt-2 text-[11px] uppercase tracking-[0.14em] text-ink-500">Simplified — not every system has every component</p>
          </div>
          <div className="lg:col-span-4">
            <div role="radiogroup" aria-label="System component" className="flex flex-wrap gap-2">
              {wpParts.map((x) => (
                <button
                  key={x.key}
                  type="button"
                  role="radio"
                  aria-checked={on(x.key)}
                  onClick={pick(x.key)}
                  className={`focus-ring rounded-full border px-3 py-1.5 text-sm transition-colors ${
                    on(x.key) ? "border-glass-800 bg-glass-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/40"
                  }`}
                >
                  {x.label}
                </button>
              ))}
            </div>
            <div key={p.key} className="mt-6 animate-fadeIn rounded-2xl border border-ink-900/10 bg-sand-50 p-6" aria-live="polite">
              <h3 className="font-serif text-2xl text-ink-950">{p.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{p.body}</p>
            </div>
            <p className="mt-4 text-sm text-ink-600">A pump doesn&rsquo;t automatically solve every low-pressure problem.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
