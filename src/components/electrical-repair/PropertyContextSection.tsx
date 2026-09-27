const propertyTypes = ["Villas", "Apartments", "Family homes", "Rental properties", "Residential buildings"];

export default function PropertyContextSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-xl">
          <p className="section-label text-blue-700">Property context</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Electrical problems don&rsquo;t care what kind of home you
            live in.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            A tripping breaker or a dead socket shows up the same way in a
            villa, an apartment or a family home — what differs is the
            layout and how the property&rsquo;s circuits are arranged.
            Telling us the property type helps us picture the job.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {propertyTypes.map((type) => (
            <span key={type} className="rounded-full border border-ink-900/15 bg-sand-100/70 px-4 py-2 text-sm text-ink-700">
              {type}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
