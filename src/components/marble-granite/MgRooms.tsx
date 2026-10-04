"use client";

import { useState } from "react";
import { mgRooms } from "@/lib/marble-granite";
import MgIcon from "./MgIcon";

// Every room's guidance stays in the HTML (hidden when not selected), so the
// room-by-room guide is readable without JavaScript.
export default function MgRooms() {
  const [room, setRoom] = useState("entrance");

  return (
    <section id="rooms" aria-labelledby="mg-rooms" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-concrete-700">Rooms</p>
          <h2 id="mg-rooms" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Room-by-room stone guide</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Choose a space">
              {mgRooms.map((r) => (
                <button
                  key={r.key}
                  type="button"
                  aria-pressed={room === r.key}
                  aria-controls={`mg-room-${r.key}`}
                  onClick={() => setRoom(r.key)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    room === r.key ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-concrete-600"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            {mgRooms.map((r) => (
              <div
                key={r.key}
                id={`mg-room-${r.key}`}
                hidden={room !== r.key}
                className="animate-fadeIn rounded-2xl border border-ink-900/10 bg-concrete-100/50 p-6 sm:p-8"
              >
                <h3 className="font-serif text-2xl text-ink-950">{r.label}</h3>
                <ul className="mt-4 space-y-2.5">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-800">
                      <MgIcon name="check" className="mt-1 h-4 w-4 flex-none text-concrete-700" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
