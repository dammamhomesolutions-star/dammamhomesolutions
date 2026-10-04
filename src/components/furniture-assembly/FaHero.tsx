import FaCtas from "./FaCtas";
import FaIcon from "./FaIcon";

const support = [
  { icon: "home" as const, label: "Residential & commercial" },
  { icon: "box" as const, label: "Flat-pack assembly" },
  { icon: "truck" as const, label: "Disassembly, moving & reassembly" },
  { icon: "storage" as const, label: "Multiple items per visit" },
];

// Flat-pack box → components → finished wardrobe. CSS-only motion.
function AssemblyVisual() {
  return (
    <figure className="rounded-3xl border border-ink-900/10 bg-sand-50 p-4 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.35)] sm:p-6">
      <svg viewBox="0 0 520 320" className="h-auto w-full" role="img" aria-labelledby="fa-hero-title">
        <title id="fa-hero-title">{`A flat-pack box, its panels and hardware laid out, and the finished wardrobe assembled and standing level`}</title>
        <rect width="520" height="320" fill="#f0e4d8" />
        <path d="M0 270h520" stroke="#a67c5b" strokeWidth="2" />

        {/* box */}
        <path d="M30 190l60-24 60 24v74l-60 24-60-24z" fill="#cdab8f" stroke="#3d2b1f" strokeWidth="2" />
        <path d="M30 190l60 24 60-24M90 214v74" stroke="#3d2b1f" strokeWidth="2" fill="none" />
        <path d="M54 180l60 24" stroke="#8a6248" strokeWidth="6" />
        <text x="46" y="306" fontFamily="ui-monospace, monospace" fontSize="10" fill="#3d2b1f">FLAT-PACK</text>

        {/* arrow */}
        <path className="fs-flow" d="M162 226h34" stroke="#6b4a35" strokeWidth="2.5" />
        <path d="M192 220l8 6-8 6" fill="none" stroke="#6b4a35" strokeWidth="2.5" />

        {/* components */}
        <rect x="212" y="150" width="16" height="114" rx="2" fill="#faf8f4" stroke="#3d2b1f" strokeWidth="2" transform="rotate(-6 220 207)" />
        <rect x="236" y="160" width="16" height="104" rx="2" fill="#faf8f4" stroke="#3d2b1f" strokeWidth="2" />
        <rect x="262" y="236" width="56" height="12" rx="2" fill="#faf8f4" stroke="#3d2b1f" strokeWidth="2" />
        <rect x="262" y="252" width="56" height="12" rx="2" fill="#faf8f4" stroke="#3d2b1f" strokeWidth="2" />
        <g fill="#6b4a35">
          <circle cx="272" cy="220" r="3" /><circle cx="282" cy="224" r="3" /><circle cx="292" cy="218" r="3" />
          <rect x="300" y="214" width="12" height="4" rx="1" />
          <rect x="268" y="206" width="4" height="10" rx="1" />
        </g>
        <text x="226" y="306" fontFamily="ui-monospace, monospace" fontSize="10" fill="#3d2b1f">COMPONENTS</text>

        {/* arrow */}
        <path className="fs-flow" d="M330 226h34" stroke="#6b4a35" strokeWidth="2.5" />
        <path d="M360 220l8 6-8 6" fill="none" stroke="#6b4a35" strokeWidth="2.5" />

        {/* wardrobe */}
        <rect x="384" y="64" width="112" height="198" rx="4" fill="#faf8f4" stroke="#3d2b1f" strokeWidth="2.5" />
        <path d="M440 64v198" stroke="#3d2b1f" strokeWidth="2" />
        <path d="M432 150v20M448 150v20" stroke="#6b4a35" strokeWidth="3" strokeLinecap="round" />
        <path d="M388 262v8M492 262v8" stroke="#3d2b1f" strokeWidth="3" />
        {/* wall anchor */}
        <path d="M500 74h14" stroke="#8a6248" strokeWidth="3" />
        <path d="M514 40v240" stroke="#a67c5b" strokeWidth="2" strokeDasharray="4 4" />
        {/* level */}
        <rect x="408" y="52" width="64" height="8" rx="3" fill="#6b4a35" />
        <circle className="wh-glow" cx="440" cy="56" r="2.5" fill="#f0e4d8" />
        <text x="410" y="306" fontFamily="ui-monospace, monospace" fontSize="10" fill="#3d2b1f">ASSEMBLED</text>
      </svg>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-500">
        Illustration — Identify · Prepare · Assemble · Align · Check
      </figcaption>
    </figure>
  );
}

export default function FaHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-walnut-100/70">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-walnut-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-walnut-600" aria-hidden="true" />
            Flat-pack · New · Reassembly
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.2rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl">
            Furniture Assembly in Dammam
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            Flat-pack furniture to assemble, a new item to put together, or
            furniture to reassemble after moving? We assemble wardrobes, beds,
            desks, tables, cabinets and other household or commercial furniture
            — aligned, level and stable, and secured to the wall where it
            needs to be.
          </p>
          <FaCtas className="mt-8" />
          <a href="#furniture-types" className="focus-ring mt-4 inline-block rounded-sm text-sm font-semibold text-walnut-700 underline decoration-walnut-600/40 underline-offset-4 hover:decoration-walnut-600">
            See what we assemble
          </a>
          <ul className="mt-7 grid grid-cols-2 gap-2 text-xs text-ink-700 sm:flex sm:flex-wrap">
            {support.map((s) => (
              <li key={s.label} className="inline-flex items-center gap-1.5 rounded-full bg-sand-50 px-3 py-1.5 ring-1 ring-ink-900/10">
                <FaIcon name={s.icon} className="h-4 w-4 flex-none text-walnut-700" />
                {s.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fadeIn [animation-delay:150ms]">
          <AssemblyVisual />
        </div>
      </div>
    </section>
  );
}
