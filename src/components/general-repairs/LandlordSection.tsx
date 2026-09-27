const workflow = ["Property", "Problems", "Photos", "Review", "Repair plan"];

export default function LandlordSection() {
  return (
    <section className="border-y border-ink-900/10 bg-stone-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-lg">
          <p className="section-label text-indigo-700">Landlords &amp; property managers</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Managing a property with several small repairs?
          </h2>
          <p className="mt-4 text-ink-700">
            Instead of treating every minor issue as a separate project,
            send a consolidated repair request covering everything at once.
          </p>
          <a
            href="/property-maintenance/"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Explore Property Maintenance
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-3 rounded-2xl border border-ink-900/10 bg-sand-50 p-6">
          {workflow.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-ink-900/15 px-4 py-2 text-sm text-ink-800">{step}</span>
              {i < workflow.length - 1 && (
                <span aria-hidden="true" className="text-indigo-700">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
