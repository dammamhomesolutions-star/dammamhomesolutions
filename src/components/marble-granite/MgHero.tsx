import MgCtas from "./MgCtas";
import MgIcon from "./MgIcon";
import MgSlab from "./MgSlab";

const support = [
  { icon: "hone" as const, label: "Honing & polishing" },
  { icon: "restore" as const, label: "Restoration & repair" },
  { icon: "drop" as const, label: "Stain treatment & sealing" },
  { icon: "building" as const, label: "Residential & commercial" },
];

// A stone slab split into a dull "before" side and a polished side with a
// moving reflection. Illustration only.
function StoneVisual() {
  return (
    <figure className="rounded-3xl border border-ink-900/10 bg-concrete-900 p-4 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.5)] sm:p-6">
      <div className="relative aspect-[400/260] overflow-hidden rounded-2xl" role="img" aria-label="Illustration of a marble slab: the left half looks dull and hazy, the right half is polished and reflects light">
        <MgSlab />
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1/2 bg-concrete-500/35 backdrop-grayscale" />
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1/2" style={{ backgroundImage: "repeating-linear-gradient(115deg, transparent 0 14px, rgba(53,51,46,0.08) 14px 15px)" }} />
        <div aria-hidden="true" className="absolute inset-y-0 left-1/2 w-1/2 overflow-hidden">
          <div className="mg-sheen absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
        </div>
        <span aria-hidden="true" className="absolute inset-y-0 left-1/2 w-px bg-sand-50/80" />
        <span className="absolute left-3 top-3 rounded-full bg-concrete-900/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-sand-50">Dull</span>
        <span className="absolute right-3 top-3 rounded-full bg-concrete-900/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-sand-50">Polished</span>
      </div>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-concrete-300">
        Illustration — not a photo of a completed project
      </figcaption>
    </figure>
  );
}

export default function MgHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-concrete-100">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-concrete-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-concrete-600" aria-hidden="true" />
            Bring back the surface your stone was meant to have
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.2rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl">
            Marble &amp; Granite Polishing in Dammam
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            Dull, scratched or worn stone can often be brought back — but
            polishing isn&rsquo;t just cleaning. We assess whether your floor,
            countertop or stairs need cleaning, honing, polishing, restoration
            or repair, and tell you honestly what&rsquo;s achievable.
          </p>
          <MgCtas className="mt-8" />
          <ul className="mt-7 grid grid-cols-2 gap-2 text-xs text-ink-700 sm:flex sm:flex-wrap">
            {support.map((s) => (
              <li key={s.label} className="inline-flex items-center gap-1.5 rounded-full bg-sand-50 px-3 py-1.5 ring-1 ring-ink-900/10">
                <MgIcon name={s.icon} className="h-4 w-4 flex-none text-concrete-700" />
                {s.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fadeIn [animation-delay:150ms]">
          <StoneVisual />
        </div>
      </div>
    </section>
  );
}
