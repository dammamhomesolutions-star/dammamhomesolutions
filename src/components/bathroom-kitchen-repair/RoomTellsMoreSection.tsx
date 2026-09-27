const bathroomOverlaps = ["Plumbing", "Drainage", "Waterproofing", "Surface repair", "Tiles", "Fixtures", "Doors / hardware"];
const kitchenOverlaps = ["Plumbing", "Carpentry", "Electrical", "Tiles", "Painting", "General repair"];

export default function RoomTellsMoreSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-emerald-800">Why we start with the room</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The room tells you more than the trade.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            A bathroom problem can involve plumbing, drainage,
            waterproofing, surface repair, tiles, fixtures or doors and
            hardware. Kitchen problems overlap just as much. That&rsquo;s
            why you can describe the room and the symptom rather than
            needing to know the right trade first.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-ink-900/10 bg-zinc-100/70 p-6">
            <h3 className="font-serif text-lg text-ink-950">A bathroom problem can involve</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {bathroomOverlaps.map((o) => (
                <span key={o} className="rounded-full border border-ink-900/15 bg-sand-50 px-3.5 py-1.5 text-sm text-ink-700">
                  {o}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-zinc-100/70 p-6">
            <h3 className="font-serif text-lg text-ink-950">A kitchen problem can involve</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {kitchenOverlaps.map((o) => (
                <span key={o} className="rounded-full border border-ink-900/15 bg-sand-50 px-3.5 py-1.5 text-sm text-ink-700">
                  {o}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
