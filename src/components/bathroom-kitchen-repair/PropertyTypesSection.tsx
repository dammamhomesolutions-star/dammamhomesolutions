const propertyTypes = ["Villas", "Apartments", "Family homes", "Rental properties", "Residential buildings"];

export default function PropertyTypesSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-edge">
        <p className="section-label text-emerald-800">For everyday residential properties</p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {propertyTypes.map((type) => (
            <span key={type} className="rounded-full border border-ink-900/15 bg-zinc-100/70 px-4 py-2 text-sm text-ink-700">
              {type}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
