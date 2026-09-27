const propertyTypes = ["Villas", "Apartments", "Family homes", "Rental properties", "Residential buildings"];

export default function DammamCarpentryContext() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-xl">
          <p className="section-label text-amber-800">Local context</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Door and carpentry repairs for homes in Dammam.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Villas, apartments and family homes all have their own mix of
            doors, cabinets and hardware, and rental properties often add
            timing around a tenant moving in or out. Telling us the
            property type helps us picture the job.
          </p>
        </div>

        <ul className="divide-y divide-ink-900/10 border-y border-ink-900/10">
          {propertyTypes.map((type) => (
            <li key={type} className="py-3 text-[15px] text-ink-700">
              {type}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
