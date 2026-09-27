import MoistureMapVisual from "./MoistureMapVisual";

export default function MoistureMapSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-cyan-800">How moisture travels</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The moisture map.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Moisture doesn&rsquo;t always show up where it enters. These
            are two common paths — not the only ones, and not a guarantee
            that either applies to your property.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-ink-900/10 bg-stone-100/70 p-8 sm:p-10">
          <MoistureMapVisual />
        </div>
        <p className="mt-4 text-sm text-ink-500">
          Possible moisture paths — the actual source requires assessment.
        </p>
      </div>
    </section>
  );
}
