"use client";

import { useState } from "react";
import { mdRooms, mdSpots } from "@/lib/mold-damp";
import { useReport } from "./MdReport";
import { Spec } from "./MdUi";

// Room-by-room context and a "where on the wall" spot map. Both add to the
// shared report; neither diagnoses anything.
const roomCells: Record<string, string> = {
  bathroom: "col-span-2 row-span-1",
  kitchen: "col-span-2 row-span-1",
  bedroom: "col-span-2 row-span-2",
  living: "col-span-4 row-span-1",
  ceiling: "col-span-6 row-span-1",
  lower: "col-span-6 row-span-1",
};
const roomOrder = ["ceiling", "bathroom", "kitchen", "bedroom", "living", "lower"];

export default function MdMap() {
  const { locations, add } = useReport();
  const [mode, setMode] = useState<"room" | "spot">("room");
  const [room, setRoom] = useState("bathroom");
  const [spot, setSpot] = useState<string | null>(null);
  const r = mdRooms.find((x) => x.key === room)!;
  const sp = mdSpots.find((x) => x.key === spot);

  return (
    <section id="moisture-map" aria-labelledby="md-map" className="scroll-mt-20 border-t border-ink-900/10 bg-glass-100/60 py-20 sm:py-28">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Spec code="S-04">Moisture map</Spec>
            <h2 id="md-map" className="mt-4 max-w-2xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Where in the home is it?</h2>
          </div>
          <div className="inline-flex rounded-lg border border-ink-900/15 bg-sand-50 p-1" role="group" aria-label="Map view">
            {[{ k: "room" as const, l: "By room" }, { k: "spot" as const, l: "By spot on the wall" }].map((o) => (
              <button key={o.k} type="button" aria-pressed={mode === o.k} onClick={() => setMode(o.k)} className={`focus-ring rounded-md px-4 py-2 text-sm font-semibold transition-colors ${mode === o.k ? "bg-glass-900 text-sand-50" : "text-ink-700 hover:text-ink-950"}`}>{o.l}</button>
            ))}
          </div>
        </div>

        {/* By room */}
        <div hidden={mode !== "room"}>
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="grid auto-rows-[4.5rem] grid-cols-6 gap-1.5 rounded-2xl border-2 border-glass-800 bg-glass-800 p-1.5 sm:auto-rows-[5.5rem]" role="group" aria-label="Room">
                {roomOrder.map((k) => {
                  const x = mdRooms.find((m) => m.key === k)!;
                  const on = room === k;
                  return (
                    <button key={k} type="button" aria-pressed={on} aria-controls="md-room-panel" onClick={() => setRoom(k)} className={`focus-ring relative rounded-lg p-3 text-left text-sm font-semibold transition-colors ${roomCells[k]} ${on ? "bg-glass-300 text-glass-900" : "bg-sand-50 text-ink-900 hover:bg-glass-200"}`}>
                      {x.label}
                      {locations.includes(x.label) && <span className="absolute bottom-2 right-2 font-mono text-[9px] uppercase tracking-wider text-glass-700">✓ report</span>}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-ink-500">Simplified plan. Lower floor / ground level applies only where a property has it.</p>
            </div>
            <div id="md-room-panel" aria-live="polite" className="lg:col-span-6">
              {mdRooms.map((x) => (
                <article key={x.key} hidden={x.key !== room}>
                  <h3 className="font-serif text-3xl text-ink-950">{x.label}</h3>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-glass-700">Possible concerns</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {x.concerns.map((c) => <li key={c} className="rounded-md border border-glass-700/25 bg-sand-50 px-3 py-1.5 text-sm text-ink-800">{c}</li>)}
                  </ul>
                  <p className="mt-5 text-[15px] leading-relaxed text-ink-700">{x.context}</p>
                </article>
              ))}
              <button type="button" onClick={() => add("locations", r.label)} className="focus-ring mt-6 rounded-lg border border-glass-800 px-4 py-2.5 text-sm font-semibold text-glass-900 hover:bg-glass-200">
                {locations.includes(r.label) ? "✓ In my report" : `+ Add ${r.label.toLowerCase()} to my report`}
              </button>
            </div>
          </div>
        </div>

        {/* By spot */}
        <div hidden={mode !== "spot"}>
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink-900/10 bg-sand-100">
                <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <rect width="400" height="22" fill="#d7e4ea" />
                  <rect y="22" width="400" height="248" fill="#f4f0e8" />
                  <rect y="258" width="400" height="12" fill="#ebe4d6" />
                  <rect y="270" width="400" height="30" fill="#c4c0b4" />
                  <path d="M370 22V270" stroke="#c4c0b4" strokeWidth="2" />
                  <rect x="240" y="80" width="80" height="80" fill="#eef3f5" stroke="#b7bfc6" strokeWidth="6" />
                  <rect x="0" y="22" width="60" height="236" fill="#eceef0" />
                  <path d="M0 80h60M0 140h60M0 200h60M30 22v236" stroke="#b7bfc6" />
                  <rect x="70" y="160" width="110" height="98" fill="#b8916c" opacity="0.6" />
                  <rect x="180" y="200" width="70" height="58" fill="#d9bfa0" />
                  <path d="M195 200v-14h20" stroke="#838d96" strokeWidth="3" fill="none" />
                </svg>
                {mdSpots.map((s, i) => (
                  <button
                    key={s.key}
                    type="button"
                    aria-pressed={spot === s.key}
                    aria-controls="md-spot-panel"
                    onClick={() => setSpot(s.key)}
                    aria-label={s.label}
                    className={`focus-ring absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 font-mono text-xs font-semibold shadow transition-transform hover:scale-110 sm:h-9 sm:w-9 ${spot === s.key ? "border-sand-50 bg-glass-900 text-sand-50" : "border-glass-800 bg-sand-50 text-glass-900"}`}
                    style={{ left: `${s.x}%`, top: `${s.y}%` }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <ol className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-ink-600 sm:grid-cols-3">
                {mdSpots.map((s, i) => <li key={s.key}><span className="font-mono text-glass-700">{i + 1}</span> {s.label}</li>)}
              </ol>
            </div>
            <div id="md-spot-panel" aria-live="polite" className="lg:col-span-5">
              {!sp ? (
                <p className="rounded-xl border border-dashed border-glass-700/40 p-6 text-[15px] leading-relaxed text-ink-600">Tap a numbered spot to see what damp in that position can be associated with.</p>
              ) : (
                <div className="rounded-xl border border-glass-700/20 bg-sand-50 p-6">
                  <h3 className="font-serif text-2xl text-ink-950">{sp.label}</h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-glass-700">Possible considerations</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{sp.considerations}</p>
                  <button type="button" onClick={() => add("locations", sp.label)} className="focus-ring mt-5 rounded-lg border border-glass-800 px-4 py-2.5 text-sm font-semibold text-glass-900 hover:bg-glass-200">
                    {locations.includes(sp.label) ? "✓ In my report" : "+ Add to my report"}
                  </button>
                </div>
              )}
              <ul className="sr-only">
                {mdSpots.map((s) => <li key={s.key}>{s.label}: {s.considerations}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
