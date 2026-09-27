"use client";

import { useState } from "react";

const rooms = [
  { id: "living", label: "Living Room", issues: ["Walls", "Doors", "Handles", "Lighting", "Fixtures", "Minor surface damage"] },
  { id: "bedroom", label: "Bedroom", issues: ["Doors", "Locks", "Handles", "Cabinets", "Walls", "Fittings"] },
  { id: "bathroom", label: "Bathroom", issues: ["Fixtures", "Drains", "Tiles", "Water-related problems", "Doors", "Surfaces"] },
  { id: "kitchen", label: "Kitchen", issues: ["Cabinets", "Drawers", "Sink and tap", "Tiles", "Wall marks", "Hardware"] },
  { id: "entrance", label: "Entrance", issues: ["Main door", "Locks", "Handles", "Nearby wall surfaces"] },
  { id: "outdoor", label: "Outdoor / Utility", issues: ["Exterior surfaces", "Utility fittings", "Doors", "General wear"] },
];

export default function RoomPatternsSection() {
  const [activeId, setActiveId] = useState(rooms[0].id);
  const active = rooms.find((r) => r.id === activeId)!;

  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-indigo-700">By room</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Rooms have different repair patterns.
          </h2>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-[200px_1fr]">
          <div role="tablist" aria-label="Rooms" aria-orientation="vertical" className="flex gap-2 overflow-x-auto pb-2 sm:flex-col sm:overflow-visible sm:border-l sm:border-ink-900/15 sm:pb-0">
            {rooms.map((room) => {
              const isActive = room.id === activeId;
              return (
                <button
                  key={room.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(room.id)}
                  className={`focus-ring flex-none rounded-full px-4 py-2 text-left text-sm font-medium transition-colors sm:flex-auto sm:rounded-none sm:border-l-2 sm:py-2.5 sm:pl-5 ${
                    isActive
                      ? "bg-indigo-700 text-sand-50 sm:-ml-px sm:border-indigo-700 sm:bg-transparent sm:text-indigo-800"
                      : "bg-sand-50 text-ink-700 sm:border-transparent sm:bg-transparent sm:text-ink-600 sm:hover:text-ink-950"
                  }`}
                >
                  {room.label}
                </button>
              );
            })}
          </div>

          <div key={active.id} className="animate-fadeUp">
            <h3 className="font-serif text-xl text-ink-950">{active.label}</h3>
            <p className="mt-2 text-sm text-ink-500">Common repair requests may involve:</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {active.issues.map((issue) => (
                <li key={issue} className="rounded-full border border-ink-900/10 bg-stone-100/60 px-4 py-2 text-sm text-ink-700">
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
