export default function WlDammamContext() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_1fr] lg:gap-16">
          <div>
            <p className="section-label !text-copper-700">Local context</p>
            <h2 className="mt-4 font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
              Water leak detection for existing properties in Dammam
            </h2>
          </div>

          <div className="max-w-2xl space-y-5 text-[15px] leading-relaxed text-ink-700">
            <p>
              Villas and apartments across Dammam often run supply lines
              through walls, under floor slabs, and up to rooftop tanks —
              which means a leak can develop somewhere that&rsquo;s never
              directly visible.
            </p>
            <p>
              We&rsquo;re regularly asked to look at a damp wall, a ceiling
              stain, or a water bill that&rsquo;s crept up without an obvious
              reason. In many of these cases, the visible sign and the actual
              source turn out to be in different places.
            </p>
            <p>
              The first useful step is usually the same: tell us what
              you&rsquo;ve noticed, where, and roughly how long it&rsquo;s
              been happening.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
