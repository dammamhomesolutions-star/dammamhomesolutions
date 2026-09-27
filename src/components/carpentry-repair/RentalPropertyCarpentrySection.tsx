const needs = ["Door adjustment", "Damaged handles", "Locks", "Cabinet issues", "Minor carpentry", "Touch-up repairs"];

export default function RentalPropertyCarpentrySection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-lg">
          <p className="section-label text-amber-800">Landlords &amp; property owners</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Small repairs matter between tenants.
          </h2>
          <p className="mt-4 text-ink-700">
            A door that doesn&rsquo;t close properly or a handle held on
            with tape isn&rsquo;t a big job, but it&rsquo;s one of the
            first things a new tenant notices.
          </p>
        </div>

        <div className="rounded-2xl border border-ink-900/10 bg-stone-100/60 p-7">
          <ul className="space-y-2.5 text-sm text-ink-700">
            {needs.map((n) => (
              <li key={n} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-700" />
                {n}
              </li>
            ))}
          </ul>
          <a
            href="/property-maintenance/"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Discuss Property Maintenance
          </a>
        </div>
      </div>
    </section>
  );
}
