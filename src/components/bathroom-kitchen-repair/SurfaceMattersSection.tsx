const surfaces = [
  { title: "Tile", body: "Cracked, loose or damaged grout — each needs a slightly different approach." },
  { title: "Stone-like surfaces", body: "Counters and similar surfaces vary in how they take damage and how it's addressed." },
  { title: "Painted wall", body: "Condition and cause both affect what the repair actually involves." },
  { title: "Cabinet", body: "Wood, laminate and hardware all behave differently when something goes wrong." },
  { title: "Fixture", body: "Taps, handles and fittings vary by age, brand and how they were installed." },
  { title: "Floor", body: "What's underneath the visible surface matters as much as the surface itself." },
];

export default function SurfaceMattersSection() {
  return (
    <section className="border-y border-ink-900/10 bg-zinc-100/70 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-emerald-800">Before any repair</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The surface matters.
          </h2>
          <p className="mt-4 text-ink-700">
            The right repair approach depends on the surface and its
            condition, not just what&rsquo;s visibly wrong with it.
          </p>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {surfaces.map((s) => (
            <div key={s.title} className="border-t border-ink-900/15 pt-4">
              <h3 className="text-sm font-semibold text-ink-950">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
