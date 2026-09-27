const zones = [
  {
    title: "Roof & exposed surfaces",
    body: "Where waterproofing may help protect areas exposed to water and weather.",
    tone: "bg-stone-50",
  },
  {
    title: "Bathrooms & wet areas",
    body: "Areas where water exposure makes proper protection important.",
    tone: "bg-stone-100",
  },
  {
    title: "Walls & affected surfaces",
    body: "Where recurring moisture may require investigation and repair.",
    tone: "bg-stone-200/70",
  },
  {
    title: "External areas",
    body: "Where water entry may occur around exposed building surfaces.",
    tone: "bg-stone-300/50",
  },
];

export default function WhereWaterproofingMatters() {
  return (
    <section>
      <div className="container-edge py-4">
        <p className="section-label text-cyan-800">Where it matters</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Different parts of a property, different exposure.
        </h2>
      </div>

      <div>
        {zones.map((zone, i) => (
          <div key={zone.title} className={zone.tone}>
            <div className="container-edge grid gap-3 py-8 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-8 sm:py-9">
              <span className="font-serif text-sm text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-serif text-xl text-ink-950 sm:text-2xl">{zone.title}</h3>
                <p className="mt-2 max-w-2xl text-ink-700">{zone.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
