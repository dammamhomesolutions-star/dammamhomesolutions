"use client";

import { useState } from "react";
import { roomHotspots, type RoomId } from "@/lib/room-issues";
import { buildWhatsAppLink } from "@/lib/site-config";
import BathroomPlanVisual from "./BathroomPlanVisual";
import KitchenPlanVisual from "./KitchenPlanVisual";

export default function RoomExplorer() {
  const [room, setRoom] = useState<RoomId>("bathroom");
  const hotspots = roomHotspots[room];
  const [activeId, setActiveId] = useState(hotspots[0].id);

  const changeRoom = (next: RoomId) => {
    setRoom(next);
    setActiveId(roomHotspots[next][0].id);
  };

  const active = hotspots.find((h) => h.id === activeId) ?? hotspots[0];

  return (
    <section id="choose-the-room" className="border-y border-ink-900/10 bg-zinc-100/70 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-emerald-800">Start here</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Which room needs attention?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Choose the room, then the part of it that&rsquo;s giving you
            trouble. It helps us understand the problem before anyone
            visits.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Choose a room"
          className="mt-8 inline-flex rounded-full border border-ink-900/15 bg-sand-50 p-1"
        >
          {(["bathroom", "kitchen"] as RoomId[]).map((r) => (
            <button
              key={r}
              role="tab"
              aria-selected={room === r}
              onClick={() => changeRoom(r)}
              className={`focus-ring rounded-full px-6 py-2.5 text-sm font-semibold capitalize transition-colors ${
                room === r ? "bg-emerald-800 text-sand-50" : "text-ink-700 hover:text-ink-950"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="flex justify-center rounded-2xl border border-ink-900/10 bg-sand-50 p-6 lg:justify-start">
            {room === "bathroom" ? <BathroomPlanVisual /> : <KitchenPlanVisual />}
          </div>

          <div>
            <div
              role="tablist"
              aria-label={`${room} areas`}
              className="grid grid-cols-2 gap-2 sm:grid-cols-3"
            >
              {hotspots.map((h) => {
                const isActive = h.id === activeId;
                return (
                  <button
                    key={h.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`hotspot-panel-${h.id}`}
                    onClick={() => setActiveId(h.id)}
                    className={`focus-ring rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? "border-emerald-800 bg-emerald-800/10 text-emerald-900"
                        : "border-ink-900/10 bg-sand-50 text-ink-700 hover:border-ink-900/25"
                    }`}
                  >
                    {h.label}
                  </button>
                );
              })}
            </div>

            <div
              id={`hotspot-panel-${active.id}`}
              role="tabpanel"
              key={`${room}-${active.id}`}
              className="mt-5 animate-fadeUp rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-7"
            >
              <h3 className="font-serif text-lg text-ink-950">
                {room === "bathroom" ? "Bathroom" : "Kitchen"} → {active.label}
              </h3>
              <p className="mt-1 text-sm text-ink-500">Possible issues:</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {active.issues.map((issue) => (
                  <li key={issue} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-ink-700">
                    {issue}
                  </li>
                ))}
              </ul>
              <p className="mt-4 leading-relaxed text-ink-700">{active.panel}</p>

              {active.crossover && (
                <p className="mt-3 text-sm text-ink-500">
                  This is often more about{" "}
                  <a
                    href={active.crossover.href}
                    className="focus-ring rounded-sm text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                  >
                    {active.crossover.label}
                  </a>{" "}
                  than the room itself.
                </p>
              )}

              <a
                href={buildWhatsAppLink(active.whatsappMessage)}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring mt-5 inline-flex items-center rounded-full bg-rust-700 px-5 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
              >
                Send This Problem on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
