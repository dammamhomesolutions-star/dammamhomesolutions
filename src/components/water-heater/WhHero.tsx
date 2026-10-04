import WhCtas from "./WhCtas";
import WhHeaterDiagram from "./WhHeaterDiagram";

export default function WhHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-ember-100/50">
      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-rust-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-rust-600" aria-hidden="true" />
            Water heater repair &amp; installation in Dammam
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.1rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl">
            No hot water? Let&rsquo;s find the problem before you replace the heater.
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            Dammam Home Solutions repairs, replaces and installs electric
            storage, instant, gas and solar water heaters. We check what&rsquo;s
            actually wrong first, then tell you honestly whether a repair,
            a replacement or a new installation makes more sense.
          </p>
          <WhCtas className="mt-8" />
          <p className="mt-5 max-w-md text-xs leading-relaxed text-ink-500">
            Tell us what&rsquo;s happening, what type of heater you have, and
            where you&rsquo;re located.
          </p>
        </div>
        <div className="animate-fadeIn [animation-delay:150ms]">
          <WhHeaterDiagram />
        </div>
      </div>
    </section>
  );
}
