export default function PropertyOwnersMoistureSection() {
  return (
    <section className="border-y border-ink-900/10 bg-stone-100/70 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-lg">
          <p className="section-label text-cyan-800">Landlords &amp; property managers</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Recurring moisture deserves more than another temporary patch.
          </h2>
          <p className="mt-4 text-ink-700">
            If the same damp patch or ceiling mark keeps coming back
            across a rental property, it&rsquo;s worth documenting and
            assessing properly rather than repainting over it each time.
            This kind of recurring issue can be looked at as part of
            broader property maintenance.
          </p>
        </div>

        <a
          href="/property-maintenance/"
          className="focus-ring inline-flex items-center justify-self-start rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02] lg:justify-self-end"
        >
          Discuss Property Maintenance
        </a>
      </div>
    </section>
  );
}
