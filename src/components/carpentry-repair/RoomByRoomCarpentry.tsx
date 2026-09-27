"use client";

import { useState } from "react";

interface Area {
  id: string;
  label: string;
  covers: string;
}

const areas: Area[] = [
  { id: "entrance", label: "Entrance", covers: "Doors, locks, handles — often the most-used door in the property." },
  { id: "bedrooms", label: "Bedrooms", covers: "Doors, hinges, locks, handles." },
  { id: "kitchen", label: "Kitchen", covers: "Cabinet doors, drawers, hardware." },
  { id: "bathrooms", label: "Bathrooms", covers: "Doors, locks, supported hardware." },
  { id: "storage", label: "Storage Areas", covers: "Cabinet, door and shelving-related repairs." },
  { id: "living", label: "Living Areas", covers: "Interior doors, trim, supported carpentry." },
];

export default function RoomByRoomCarpentry() {
  const [activeId, setActiveId] = useState(areas[0].id);
  const active = areas.find((a) => a.id === activeId)!;

  return (
    <section className="bg-stone-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-amber-800">Scope of work</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Which part of the property?
          </h2>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {areas.map((area) => {
            const isActive = area.id === activeId;
            return (
              <button
                key={area.id}
                onClick={() => setActiveId(area.id)}
                aria-pressed={isActive}
                className={`focus-ring flex-none rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-amber-700 bg-amber-700 text-sand-50"
                    : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/35"
                }`}
              >
                {area.label}
              </button>
            );
          })}
        </div>

        <div key={active.id} className="mt-6 max-w-xl animate-fadeUp rounded-2xl border border-ink-900/10 bg-sand-50 p-6">
          <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
          <p className="mt-2 text-ink-700">{active.covers}</p>
          {(active.id === "entrance" || active.id === "kitchen") && (
            <p className="mt-3 text-sm text-ink-500">
              If a switch or socket near the door is also involved, see{" "}
              <a href="/electrical-repair/" className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-amber-700">
                electrical repair &amp; maintenance
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
