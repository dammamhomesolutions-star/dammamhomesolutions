"use client";

import { useState } from "react";
import { rnRooms, type RnRoomKey } from "@/lib/renovation";
import { usePlan } from "./RnPlan";
import { Check, Eyebrow } from "./RnUi";

type Shape = { key: Exclude<RnRoomKey, "multiple">; x: number; y: number; w: number; h: number };

const shapes: Shape[] = [
  { key: "outdoor", x: 10, y: 10, w: 80, h: 400 },
  { key: "living", x: 90, y: 10, w: 240, h: 220 },
  { key: "dining", x: 330, y: 10, w: 140, h: 220 },
  { key: "kitchen", x: 470, y: 10, w: 160, h: 220 },
  { key: "entrance", x: 90, y: 230, w: 120, h: 180 },
  { key: "hallway", x: 210, y: 230, w: 420, h: 70 },
  { key: "bedroom", x: 210, y: 300, w: 260, h: 110 },
  { key: "bathroom", x: 470, y: 300, w: 160, h: 110 },
];

// The signature visual: a drawn floor plan. Rooms respond to the pointer; the
// list of room buttons beside it is the keyboard and screen-reader path.
function Plan({ sel, inPlan, onPick }: { sel: RnRoomKey | null; inPlan: (k: RnRoomKey) => boolean; onPick: (k: RnRoomKey) => void }) {
  const all = sel === "multiple";
  return (
    <svg viewBox="0 0 640 420" className="h-auto w-full" aria-hidden="true">
      <defs>
        <pattern id="rn-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0v8" stroke="#cdab8f" strokeWidth="1.2" strokeOpacity="0.45" />
        </pattern>
        <pattern id="rn-yard" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1" fill="#79895f" fillOpacity="0.5" />
        </pattern>
      </defs>

      {shapes.map((s) => {
        const on = all || sel === s.key;
        const planned = inPlan(s.key);
        return (
          <g key={s.key} onClick={() => onPick(s.key)} className="cursor-pointer">
            <rect x={s.x} y={s.y} width={s.w} height={s.h} fill={s.key === "outdoor" ? "url(#rn-yard)" : "#1c2026"} />
            {planned && <rect x={s.x} y={s.y} width={s.w} height={s.h} fill="url(#rn-hatch)" />}
            <rect x={s.x} y={s.y} width={s.w} height={s.h} fill="#d69a5f" fillOpacity={on ? 0.32 : 0} className={`transition-[fill-opacity] duration-300 ${on ? "" : "hover:[fill-opacity:0.14]"}`} />
            <text
              x={s.key === "outdoor" ? s.x + 30 : s.x + 12}
              y={s.key === "outdoor" ? s.y + s.h - 16 : s.y + 26}
              transform={s.key === "outdoor" ? `rotate(-90 ${s.x + 30} ${s.y + s.h - 16})` : undefined}
              className="fill-sand-100 font-mono"
              fontSize="15"
              letterSpacing="1"
              fillOpacity={on ? 1 : 0.75}
            >
              {(s.key === "dining" ? "DINING" : rnRooms.find((r) => r.key === s.key)!.label).toUpperCase()}
            </text>
            {planned && (
              <g transform={`translate(${s.x + s.w - 24} ${s.y + 10})`}>
                <rect width="14" height="14" fill="#d69a5f" />
                <path d="M3.5 7.5l2.5 2.5 4.5-5" stroke="#14181f" strokeWidth="1.8" fill="none" />
              </g>
            )}
          </g>
        );
      })}

      {/* furniture hints */}
      <g stroke="#faf8f4" strokeOpacity="0.28" fill="none" strokeWidth="1.2" pointerEvents="none">
        <rect x="120" y="150" width="130" height="40" rx="4" />
        <rect x="150" y="80" width="70" height="40" />
        <circle cx="400" cy="120" r="34" />
        <path d="M480 30h140v36H480zM600 66v120" />
        <rect x="300" y="320" width="90" height="70" />
        <rect x="560" y="320" width="56" height="76" rx="14" />
        <circle cx="500" cy="380" r="12" />
        <path d="M30 40c14 10 14 26 0 36M50 300c18 6 20 30 4 40" />
      </g>

      {/* walls, drawn once on load */}
      <g stroke="#faf8f4" strokeWidth="4" fill="none" strokeLinecap="square" pointerEvents="none">
        <path pathLength={1} className="rn-draw" d="M90 10H630V410H90Z" />
        <path pathLength={1} className="rn-draw" d="M470 10V120M470 170V230M90 230H140M180 230H560M600 230H630M210 230V300M210 340V410M210 300H250M300 300H520M560 300H630M470 300V410" />
      </g>
      <path d="M330 10V230" stroke="#faf8f4" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="5 6" pointerEvents="none" />
      <path d="M90 300v60" stroke="#14181f" strokeWidth="6" pointerEvents="none" />
      <path d="M90 300a60 60 0 0 1 60 60" stroke="#faf8f4" strokeOpacity="0.4" fill="none" pointerEvents="none" />
    </svg>
  );
}

export default function RnFloorPlan() {
  const { hasRoom, toggleRoom } = usePlan();
  const [sel, setSel] = useState<RnRoomKey | null>(null);
  const room = rnRooms.find((r) => r.key === sel);

  return (
    <section id="floor-plan" aria-labelledby="rn-plan" className="scroll-mt-20 overflow-hidden bg-ink-950 py-20 text-sand-50 sm:py-28">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow n="03" dark>The home transformation</Eyebrow>
            <h2 id="rn-plan" className="mt-5 font-serif text-4xl font-light tracking-tight sm:text-6xl">Which part of your home?</h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-sand-200 lg:col-span-5">
            Choose a room to see what renovation there can involve — from where
            it is now to where it could be. Add the rooms you want to your plan.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <div className="border border-sand-50/15 p-3 sm:p-5">
              <Plan sel={sel} inPlan={hasRoom} onPick={setSel} />
            </div>
            <div className="-mx-4 mt-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0" role="group" aria-label="Choose a room">
              <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
                {rnRooms.map((r) => (
                  <button
                    key={r.key}
                    type="button"
                    aria-pressed={sel === r.key}
                    aria-controls="rn-room-panel"
                    onClick={() => setSel(r.key)}
                    className={`focus-ring inline-flex items-center gap-2 whitespace-nowrap border px-3.5 py-2.5 text-sm transition-colors ${sel === r.key ? "border-ember-500 bg-ember-500 font-semibold text-ink-950" : "border-sand-50/20 text-sand-100 hover:border-sand-50/60"}`}
                  >
                    {hasRoom(r.key) && <Check className="h-3.5 w-3.5" />}
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div id="rn-room-panel" aria-live="polite" className="lg:col-span-5">
            {!room && (
              <div className="border-l border-sand-50/15 pl-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember-500">Current home</p>
                <p className="mt-4 font-serif text-2xl leading-snug">Every renovation starts with the home as it is now.</p>
                <p className="mt-4 text-sm leading-relaxed text-sand-200">
                  Select a room on the plan or from the list. You&rsquo;ll see what
                  typically needs attention, the possible scope of work and the
                  kind of result to aim for.
                </p>
              </div>
            )}
            {rnRooms.map((r) => (
              <article key={r.key} hidden={sel !== r.key} className="border-l border-sand-50/15 pl-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember-500">{r.label}</p>
                <h3 className="mt-2 font-serif text-3xl">{r.short}</h3>

                <ol className="mt-6 space-y-0">
                  {[
                    { k: "Current", v: r.current, tone: "text-sand-300" },
                    { k: "Possible scope", v: r.scope, tone: "text-sand-50" },
                    { k: "Vision", v: r.vision, tone: "text-ember-500" },
                  ].map((step, i) => (
                    <li key={step.k} className="relative pb-5 pl-6">
                      <span aria-hidden="true" className={`absolute left-0 top-1.5 h-2 w-2 ${i === 2 ? "bg-ember-500" : "border border-sand-50/60"}`} />
                      {i < 2 && <span aria-hidden="true" className="absolute left-[3.5px] top-4 h-[calc(100%-0.75rem)] w-px bg-sand-50/20" />}
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-sand-300">{step.k}</p>
                      <p className={`mt-1 font-serif text-lg ${step.tone}`}>{step.v.join(" · ")}</p>
                    </li>
                  ))}
                </ol>

                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-sand-300">Renovation areas</p>
                <ul className="mt-3 grid grid-cols-1 gap-x-4 gap-y-2 text-sm text-sand-100 sm:grid-cols-2">
                  {r.areas.map((a) => (
                    <li key={a} className="flex gap-2"><span aria-hidden="true" className="mt-2 h-px w-3 flex-none bg-ember-500" />{a}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-sand-300">{r.note}</p>

                <button
                  type="button"
                  onClick={() => toggleRoom(r.key)}
                  aria-pressed={hasRoom(r.key)}
                  className={`focus-ring mt-6 inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-colors ${hasRoom(r.key) ? "bg-ember-500 text-ink-950" : "border border-sand-50/40 text-sand-50 hover:bg-sand-50/10"}`}
                >
                  {hasRoom(r.key) ? <><Check /> In my renovation plan</> : <>+ Add {r.label.toLowerCase()} to my plan</>}
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
