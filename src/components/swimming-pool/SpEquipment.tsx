"use client";

import { useState } from "react";
import { spFilter, spPump, spRoom, type SpRoomPart } from "@/lib/swimming-pool";
import SpIcon from "./SpIcon";

const hi = "#8fc4c4";

// Equipment pad: pump, filter, valves, pipes and a control box.
function Room({ part }: { part: SpRoomPart }) {
  const st = (p: SpRoomPart) => (part === p ? { stroke: hi, strokeWidth: 3 } : { stroke: "#4a5468", strokeWidth: 1.5 });
  return (
    <svg viewBox="0 0 360 220" className="h-auto w-full" role="img" aria-labelledby="sp-room-title">
      <title id="sp-room-title">{`Pool equipment pad with the ${spRoom.find((x) => x.key === part)?.label.toLowerCase()} highlighted`}</title>
      <rect width="360" height="220" fill="#191d25" />
      <rect y="190" width="360" height="30" fill="#232833" />
      {/* pipes */}
      <path d="M0 150h60v-40h70M190 110h40v-60h70v100h60" fill="none" stroke={part === "pipes" ? hi : "#4a5468"} strokeWidth={part === "pipes" ? 7 : 6} />
      {part === "pipes" && <path className="fs-flow" d="M0 150h60v-40h70M190 110h40v-60h70v100h60" fill="none" stroke="#e0f0f0" strokeWidth="1.5" />}
      {/* pump */}
      <rect x="60" y="120" width="70" height="56" rx="10" fill="#333a49" {...st("pump")} />
      <circle cx="85" cy="148" r="16" fill="#191d25" {...st("pump")} />
      <g className={part === "pump" ? "pc-spin" : undefined}>
        <circle cx="85" cy="148" r="12" fill="none" />
        <path d="M85 148v-10M85 148l9 5M85 148l-9 5" stroke={part === "pump" ? hi : "#69748a"} strokeWidth="2.5" strokeLinecap="round" />
      </g>
      {/* filter */}
      <rect x="140" y="60" width="50" height="116" rx="25" fill="#333a49" {...st("filter")} />
      <circle cx="165" cy="80" r="7" fill="#191d25" stroke="#69748a" />
      {/* valves */}
      <g {...st("valves")} fill="#333a49">
        <rect x="222" y="40" width="16" height="20" rx="3" />
        <rect x="292" y="40" width="16" height="20" rx="3" />
        <rect x="292" y="140" width="16" height="20" rx="3" />
      </g>
      {/* controls */}
      <rect x="250" y="80" width="40" height="46" rx="4" fill="#232833" {...st("controls")} />
      <circle cx="260" cy="92" r="3" fill="#8fc4c4" className="cv-pulse" />
      <path d="M258 104h24M258 112h16" stroke="#69748a" strokeWidth="2" />
      <g fontFamily="ui-monospace, monospace" fontSize="9" fill="#8e97a8">
        <text x="66" y="190">PUMP</text><text x="146" y="190">FILTER</text><text x="246" y="140">CONTROLS</text><text x="214" y="34">VALVES</text>
      </g>
    </svg>
  );
}

export default function SpEquipment() {
  const [part, setPart] = useState<SpRoomPart>("pump");
  const p = spRoom.find((x) => x.key === part)!;

  return (
    <section id="equipment" aria-labelledby="sp-equipment" className="bg-ink-900 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-300">Pump &amp; filtration</p>
          <h2 id="sp-equipment" className="mt-4 font-serif text-3xl tracking-tight sm:text-5xl">When the pool circulation changes</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[{ t: "Pump", icon: "pump" as const, items: spPump }, { t: "Filter", icon: "filter" as const, items: spFilter }].map((c) => (
            <div key={c.t} className="rounded-[2rem] bg-ink-950 p-6 ring-1 ring-sand-100/10">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-300/15 text-teal-300"><SpIcon name={c.icon} className="h-6 w-6" /></span>
                <h3 className="font-serif text-2xl">{c.t}</h3>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-teal-300">Signs to look out for</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">{c.items.map((i) => <li key={i} className="rounded-full bg-sand-100/10 px-3 py-1 text-sm text-sand-100">{i}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="mt-4 flex gap-2 text-sm text-ink-300"><SpIcon name="alert" className="mt-0.5 h-4 w-4 flex-none text-ember-500" />Don&rsquo;t open pump motors or control panels yourself. We repair and replace pumps and filters with the power safely isolated.</p>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="overflow-hidden rounded-[2rem] ring-1 ring-sand-100/10 lg:col-span-7">
            <Room part={part} />
          </div>
          <div className="lg:col-span-5">
            <h3 className="font-serif text-2xl">Inside the equipment area</h3>
            <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Equipment">
              {spRoom.map((x) => (
                <button key={x.key} type="button" aria-pressed={part === x.key} onClick={() => setPart(x.key)} className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${part === x.key ? "border-teal-300 bg-teal-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"}`}>
                  {x.label}
                </button>
              ))}
            </div>
            <p key={part} className="mt-5 animate-fadeIn rounded-2xl bg-ink-950 p-5 text-[15px] leading-relaxed text-ink-300" aria-live="polite">
              <span className="font-semibold text-sand-50">{p.label}: </span>{p.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
