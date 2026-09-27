const rooms = [
  { name: "Living Room", covers: "Lighting, sockets, switches" },
  { name: "Bedroom", covers: "Lights, sockets, fixtures" },
  { name: "Kitchen", covers: "Sockets, lighting, supported fixtures" },
  { name: "Bathroom", covers: "Lighting and appropriate electrical fixtures" },
  { name: "Outdoor / Utility", covers: "Supported electrical points" },
];

export default function RoomByRoomSection() {
  return (
    <section className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
            Tell us where
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Where is the problem happening?
          </h2>
          <p className="mt-4 text-ink-300">
            Naming the room helps as much as naming the symptom.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-sand-100/10 sm:grid-cols-2 lg:grid-cols-5">
          {rooms.map((room) => (
            <div key={room.name} className="bg-ink-900 p-6">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="text-blue-400">
                <rect x="3" y="3" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M3 9 H25" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              </svg>
              <h3 className="mt-4 text-sm font-semibold text-sand-50">{room.name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-400">{room.covers}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
