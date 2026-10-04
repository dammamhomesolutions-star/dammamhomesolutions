import DrCtas from "./DrCtas";
import DrHeroVisual from "./DrHeroVisual";

export default function DrHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-teal-100/50">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-600" aria-hidden="true" />
            Drain unblocking &amp; sewer line cleaning in Dammam
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.2rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl">
            Blocked drain? Let&rsquo;s find what&rsquo;s actually causing it.
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            A slow or blocked drain can be a simple build-up at one fixture — or
            a sign of a deeper problem in the main drain or sewer line. Dammam
            Home Solutions works out which it is, clears it with the right
            equipment, and inspects the pipe when the blockage keeps coming
            back.
          </p>
          <DrCtas className="mt-8" />
          <p className="mt-5 max-w-md text-xs leading-relaxed text-ink-500">
            Tell us where the blockage is, what you&rsquo;re noticing, and
            whether it has happened before.
          </p>
        </div>
        <div className="animate-fadeIn [animation-delay:150ms]">
          <DrHeroVisual />
        </div>
      </div>
    </section>
  );
}
