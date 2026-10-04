import DkCtas from "./DkCtas";
import DkHeroVisual from "./DkHeroVisual";

export default function DkHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-steel-100">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-copper-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-copper-600" aria-hidden="true" />
            AC duct cleaning in Dammam
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.2rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl">
            Cleaner air starts with the ducts you can&rsquo;t see
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            Dust, debris and construction residue can build up inside AC
            ductwork, out of sight above the ceiling. Dammam Home Solutions
            inspects ducted AC systems, tells you honestly whether cleaning is
            needed, and cleans supply and return ducts, vents and grilles when
            it is.
          </p>
          <DkCtas className="mt-8" />
          <p className="mt-5 max-w-md text-xs leading-relaxed text-ink-500">
            Tell us about your property, your AC system and what you&rsquo;re
            noticing. We&rsquo;ll help you work out the right next step.
          </p>
        </div>
        <div className="animate-fadeIn [animation-delay:150ms]">
          <DkHeroVisual />
        </div>
      </div>
    </section>
  );
}
