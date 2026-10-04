"use client";

import { useState } from "react";
import { ltRooms } from "@/lib/lighting-installation";
import LtIcon from "./LtIcon";

// Every room's guidance stays in the HTML (hidden when not selected), so the
// room-by-room guide is readable without JavaScript.
export default function LtRooms() {
  const [room, setRoom] = useState("kitchen");

  return (
    <section id="rooms" aria-labelledby="lt-rooms" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-700">Room-by-room guide</p>
          <h2 id="lt-rooms" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Which space are you lighting?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Choose a space">
              {ltRooms.map((r) => (
                <button
                  key={r.key}
                  type="button"
                  aria-pressed={room === r.key}
                  aria-controls={`lt-room-${r.key}`}
                  onClick={() => setRoom(r.key)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    room === r.key ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-ember-600"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            {ltRooms.map((r) => (
              <div
                key={r.key}
                id={`lt-room-${r.key}`}
                hidden={room !== r.key}
                className="animate-fadeIn rounded-2xl border border-ink-900/10 bg-ember-100/40 p-6 sm:p-8"
              >
                <h3 className="font-serif text-2xl text-ink-950">{r.label} lighting</h3>
                <ul className="mt-4 space-y-2.5">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-800">
                      <LtIcon name="check" className="mt-1 h-4 w-4 flex-none text-ember-700" />
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
