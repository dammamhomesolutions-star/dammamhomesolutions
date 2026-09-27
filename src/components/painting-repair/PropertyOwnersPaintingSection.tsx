const needs = ["Move-out touch-ups", "Repainting", "Wall repairs", "Damage restoration", "Preparing a property for a new tenant"];

export default function PropertyOwnersPaintingSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-lg">
          <p className="section-label">Landlords &amp; property managers</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Keeping a rental property presentable.
          </h2>
          <p className="mt-4 text-ink-700">
            Between tenants, or during general upkeep, wall and paint
            condition is one of the first things people notice — often
            worth handling before it becomes a bigger job.
          </p>
        </div>

        <div className="rounded-2xl border border-ink-900/10 bg-stone-100/60 p-7">
          <ul className="space-y-2.5 text-sm text-ink-700">
            {needs.map((n) => (
              <li key={n} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-rust-600" />
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
