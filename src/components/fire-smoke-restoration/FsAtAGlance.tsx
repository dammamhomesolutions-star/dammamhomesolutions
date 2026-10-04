const rows: { term: string; detail: string }[] = [
  { term: "Service", detail: "Fire & smoke damage restoration" },
  { term: "Location", detail: "Dammam, Eastern Province, Saudi Arabia" },
  {
    term: "Problems addressed",
    detail:
      "Fire and heat damage, smoke damage, soot, smoke odor, firefighting water, affected contents, property repairs",
  },
  { term: "Properties", detail: "Homes (apartments, villas, townhouses) and businesses" },
  { term: "First step", detail: "A damage assessment — request one below or call" },
];

export default function FsAtAGlance() {
  return (
    <section aria-labelledby="fs-glance" className="border-b border-ink-900/10 bg-sand-50">
      <div className="container-edge grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <p className="section-label !text-ember-700">At a glance</p>
          <h2 id="fs-glance" className="mt-4 font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
            What is fire damage restoration?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Fire damage restoration is the work of returning a property to a
            usable condition after a fire. It covers more than the burned
            room: assessing what heat, smoke, soot and firefighting water
            have affected, drying and cleaning what can be saved, treating
            odor at its source, removing what can&rsquo;t be kept, and
            rebuilding and finishing the damaged areas.
          </p>
          <p className="mt-4 text-[15px] font-medium leading-relaxed text-ink-900">
            One problem. One coordinated restoration process.
          </p>
        </div>

        <dl className="divide-y divide-ink-900/10 rounded-2xl border border-ink-900/10 bg-sand-100/60">
          {rows.map((row) => (
            <div key={row.term} className="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">{row.term}</dt>
              <dd className="text-sm leading-relaxed text-ink-900">{row.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
