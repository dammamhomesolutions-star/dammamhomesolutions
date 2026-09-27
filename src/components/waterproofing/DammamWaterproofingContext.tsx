const propertyTypes = ["Villas", "Apartments", "Family homes", "Rental properties", "Residential buildings"];

export default function DammamWaterproofingContext() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-xl">
          <p className="section-label text-cyan-800">Local context</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Waterproofing support for properties in Dammam.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Villas, apartments and family homes are exposed to moisture
            differently depending on their construction and layout, and
            rental properties often add their own access and timing
            considerations. Telling us the property type helps us picture
            the job before we arrive.
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
