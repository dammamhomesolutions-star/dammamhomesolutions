const propertyTypes = ["Villas", "Apartments", "Family homes", "Rental properties", "Residential buildings", "Commercial properties"];

export default function AboutServiceArea() {
  return (
    <section className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust-500">
            Where we work
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Focused on properties in Dammam.
          </h2>
          <p className="mt-5 leading-relaxed text-ink-300">
            We work with the kind of residential and rental properties common
            across Dammam — villas, apartments and family homes — each with
            their own layout, plumbing and electrical setup, and maintenance
            history. Landlords and property managers add another layer on
            top, which we take into account rather than working from a fixed
            checklist.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-sand-100/10 sm:grid-cols-3 lg:grid-cols-2">
          {propertyTypes.map((label) => (
            <div key={label} className="bg-ink-900 px-5 py-6">
              <p className="text-sm text-ink-300">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
