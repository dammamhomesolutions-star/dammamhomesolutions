"use client";

import { useState } from "react";
import { dcRooms, type DcRoomKey } from "@/lib/deep-cleaning";
import DcIcon from "./DcIcon";
import DcCtas from "./DcCtas";

const HI = "#1f5b53";

const rects: Record<DcRoomKey, { x: number; y: number; w: number; h: number; dashed?: boolean }> = {
  bedroom: { x: 20, y: 20, w: 190, h: 160 },
  bathroom: { x: 210, y: 20, w: 120, h: 110 },
  storage: { x: 210, y: 130, w: 120, h: 50 },
  kitchen: { x: 330, y: 20, w: 190, h: 160 },
  balcony: { x: 520, y: 20, w: 100, h: 160, dashed: true },
  living: { x: 20, y: 180, w: 280, h: 220 },
  dining: { x: 300, y: 180, w: 160, h: 120 },
  utility: { x: 460, y: 180, w: 160, h: 120 },
  hallway: { x: 300, y: 300, w: 220, h: 100 },
  entry: { x: 520, y: 300, w: 100, h: 100 },
};

export default function DcRoomMap() {
  const [room, setRoom] = useState<DcRoomKey>("kitchen");
  const r = dcRooms.find((x) => x.key === room)!;

  return (
    <section id="what-gets-cleaned" aria-labelledby="dc-rooms" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-label !text-mint-700">Room by room</p>
            <h2 id="dc-rooms" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What gets cleaned?</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-600 lg:col-span-5">
            Tap a room to see what we focus on, what may need extra attention,
            and what isn&rsquo;t included unless you ask for it.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="rounded-2xl border border-ink-900/10 bg-mint-100/40 p-3 sm:p-5 lg:col-span-7">
            <svg viewBox="0 0 640 420" className="h-auto w-full touch-manipulation select-none" aria-hidden="true">
              {dcRooms.map((d) => {
                const g = rects[d.key];
                const on = room === d.key;
                return (
                  <rect
                    key={d.key}
                    x={g.x}
                    y={g.y}
                    width={g.w}
                    height={g.h}
                    fill={on ? "rgba(72,160,143,0.22)" : "#faf8f4"}
                    stroke={on ? HI : g.dashed ? "#9a968a" : "#2c3524"}
                    strokeWidth={on ? 3 : 2}
                    strokeDasharray={g.dashed && !on ? "6 5" : undefined}
                    className="cursor-pointer"
                    style={{ transition: "fill 250ms" }}
                    onClick={() => setRoom(d.key)}
                  />
                );
              })}

              {/* fixtures */}
              <g fill="none" stroke="#48a08f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" pointerEvents="none">
                <path d="M40 160v-60h110v60M40 116h110M40 100V80h30v20" />
                <path d="M230 40h40v24h-40zM290 100a14 10 0 1 0 0.1 0M232 110h30" />
                <path d="M345 40h160v28H345zM360 54h.01M390 54h.01M440 40v28" />
                <path d="M60 370v-30a8 8 0 0 1 8-8h130a8 8 0 0 1 8 8v30M60 350h146M220 240h40v60h-40z" />
                <path d="M340 220h80v50h-80zM352 210v10M408 210v10M352 270v10M408 270v10" />
                <path d="M480 200h50v50h-50zM505 225a14 14 0 1 0 0.1 0M560 200h40v80h-40z" />
                <path d="M540 60h60M540 90h60M540 120h60" strokeDasharray="4 4" />
                <path d="M230 140h80M230 160h80" />
                <path d="M560 400v-50" stroke="#2c3524" strokeWidth="4" />
              </g>

              <g fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.2" fill="#184540" pointerEvents="none">
                <text x="30" y="40">BEDROOM</text>
                <text x="218" y="124">BATH</text>
                <text x="218" y="176" fontSize="9">STORE</text>
                <text x="340" y="170">KITCHEN</text>
                <text x="528" y="170" fontSize="9">BALCONY</text>
                <text x="30" y="200">LIVING</text>
                <text x="310" y="296">DINING</text>
                <text x="470" y="296">UTILITY</text>
                <text x="310" y="390">HALLWAY</text>
                <text x="530" y="324">ENTRY</text>
              </g>
            </svg>
            <p className="px-2 pt-2 text-[11px] uppercase tracking-[0.14em] text-ink-500">Illustrative floor plan — tap a room</p>
          </div>

          <div className="lg:col-span-5">
            <div role="radiogroup" aria-label="Room" className="flex flex-wrap gap-2">
              {dcRooms.map((d) => (
                <button
                  key={d.key}
                  type="button"
                  role="radio"
                  aria-checked={room === d.key}
                  onClick={() => setRoom(d.key)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    room === d.key ? "border-mint-800 bg-mint-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/40"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            <div key={r.key} className="mt-6 animate-fadeIn rounded-2xl border border-ink-900/10 bg-sand-50 p-6" aria-live="polite">
              <h3 className="font-serif text-2xl text-ink-950">{r.label}</h3>
              <div className="mt-5 space-y-5 text-sm">
                <div>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-mint-700">
                    <DcIcon name="check" className="h-4 w-4" /> What we focus on
                  </p>
                  <ul className="mt-2 space-y-1 text-ink-800">
                    {r.focus.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-ember-700">
                    <DcIcon name="alert" className="h-4 w-4" /> May need extra attention
                  </p>
                  <ul className="mt-2 space-y-1 text-ink-700">
                    {r.extra.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
                    <span aria-hidden="true" className="flex h-4 w-4 items-center justify-center rounded-full border border-ink-400 text-[10px]">–</span>
                    Not included unless requested
                  </p>
                  <ul className="mt-2 space-y-1 text-ink-600">
                    {r.notIncluded.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DcCtas className="mt-10" />
      </div>
    </section>
  );
}
