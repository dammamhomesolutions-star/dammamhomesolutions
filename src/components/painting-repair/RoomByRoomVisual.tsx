"use client";

import { useState } from "react";

interface Room {
  id: string;
  label: string;
  considerations: string;
}

const rooms: Room[] = [
  { id: "living-room", label: "Living Room", considerations: "Larger wall areas, everyday marks near seating and walkways, ceiling condition." },
  { id: "bedroom", label: "Bedroom", considerations: "Usually more straightforward — condition of walls, corners and behind furniture." },
  { id: "hallway", label: "Hallway", considerations: "Higher traffic, more scuffs and marks, corners that take the most wear." },
  { id: "kitchen", label: "Kitchen", considerations: "Areas near cooking and water use tend to show marks first." },
  { id: "bathroom", label: "Bathroom", considerations: "Moisture-prone area — worth checking whether any marks are paint-related or moisture-related first." },
  { id: "ceiling", label: "Ceiling", considerations: "Staining and unevenness are more visible from below than walls are." },
  { id: "exterior", label: "Exterior", considerations: "Exposed surfaces, weathering, and general condition of external walls." },
];

export default function RoomByRoomVisual() {
  const [activeId, setActiveId] = useState(rooms[0].id);
  const active = rooms.find((r) => r.id === activeId)!;

  return (
    <section className="bg-stone-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label">Scope of work</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Which part of the property?
          </h2>
          <p className="mt-4 text-ink-700">
            Naming the room helps describe the scope, even before we talk
            about the specific problem.
          </p>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {rooms.map((room) => {
            const isActive = room.id === activeId;
            return (
              <button
                key={room.id}
                onClick={() => setActiveId(room.id)}
                aria-pressed={isActive}
                className={`focus-ring flex-none rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-rust-700 bg-rust-700 text-sand-50"
                    : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/35"
                }`}
              >
                {room.label}
              </button>
            );
          })}
        </div>

        <div key={active.id} className="mt-6 max-w-xl animate-fadeUp rounded-2xl border border-ink-900/10 bg-sand-50 p-6">
          <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
          <p className="mt-2 text-ink-700">{active.considerations}</p>
        </div>
      </div>
    </section>
  );
}
