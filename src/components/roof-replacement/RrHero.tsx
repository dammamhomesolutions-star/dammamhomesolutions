import RrCtas from "./RrCtas";
import RrRoofAssembly from "./RrRoofAssembly";

export default function RrHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-sand-100">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            <span className="inline-block h-1.5 w-1.5 bg-teal-600" aria-hidden="true" />
            Roof replacement
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.2rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.4rem]">
            Roof Replacement in Dammam
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            When a roof keeps leaking, is badly deteriorated, or no longer
            protects the property properly, another patch may not be the
            right answer. Dammam Home Solutions helps property owners assess
            roof condition and decide whether repair, restoration or full
            replacement is the better solution.
          </p>
          <RrCtas className="mt-8" secondaryLabel="Call Dammam Home Solutions" />
          <p className="mt-5 max-w-md text-xs leading-relaxed text-ink-500">
            Tell us where the problem is, what you&rsquo;ve noticed, and
            whether the roof has been repaired before.
          </p>
        </div>

        <div className="animate-fadeIn [animation-delay:150ms]">
          <RrRoofAssembly />
        </div>
      </div>
    </section>
  );
}
