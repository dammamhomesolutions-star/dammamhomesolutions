const propertyTypes = ["Villas", "Apartments", "Rental properties", "Family homes", "Residential buildings"];

export default function DammamRoomContext() {
  return (
    <section className="border-y border-ink-900/10 bg-zinc-100/70 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-xl">
          <p className="section-label text-emerald-800">Local context</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Bathroom and kitchen repairs in Dammam.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Villas, apartments and family homes each have their own layout
            of bathrooms and kitchens, and rental properties often add
            timing considerations around tenants. Telling us the property
            type helps us picture the job.
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
