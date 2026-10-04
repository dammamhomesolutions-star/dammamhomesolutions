import AiCtas from "./AiCtas";
import AiSystemDiagram from "./AiSystemDiagram";

export default function AiHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-teal-100/50">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-600" aria-hidden="true" />
            AC installation
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.2rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.4rem]">
            AC Installation in Dammam
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            Installing a new air conditioner is more than mounting the indoor
            unit. The right capacity, placement, refrigerant piping, drainage,
            electrical connection and final testing all affect how the system
            performs. Dammam Home Solutions installs split, central / ducted,
            window, cassette and floor-standing AC for homes and businesses in
            Dammam.
          </p>
          <AiCtas className="mt-8" secondaryLabel="Call Dammam Home Solutions" />
          <p className="mt-5 max-w-md text-xs leading-relaxed text-ink-500">
            Tell us the property type, room size if known, the AC type, and
            whether you&rsquo;re replacing an existing unit.
          </p>
        </div>
        <div className="animate-fadeIn [animation-delay:150ms]">
          <AiSystemDiagram />
        </div>
      </div>
    </section>
  );
}
