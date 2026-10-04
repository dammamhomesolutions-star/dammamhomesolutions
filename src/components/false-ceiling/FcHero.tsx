import FcCtas from "./FcCtas";
import FcIcon from "./FcIcon";

const support = [
  { icon: "board" as const, label: "Gypsum & grid ceilings" },
  { icon: "cove" as const, label: "Lighting integration" },
  { icon: "replace" as const, label: "Modification & replacement" },
  { icon: "building" as const, label: "Residential & commercial" },
];

// Room cross-section: slab, cavity, framing, a stepped gypsum ceiling with cove
// light, downlights and an AC diffuser. CSS-only motion.
function CeilingVisual() {
  return (
    <figure className="rounded-3xl border border-ink-900/10 bg-glass-900 p-4 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.5)] sm:p-6">
      <svg viewBox="0 0 520 330" className="h-auto w-full" role="img" aria-labelledby="fc-hero-title">
        <title id="fc-hero-title">{`Cross-section of a room with a stepped gypsum false ceiling hung below the concrete slab, cove lighting around the edge, downlights and an AC diffuser`}</title>
        <defs>
          <linearGradient id="fc-hero-cone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f6dfb4" stopOpacity="0.7" />
            <stop offset="1" stopColor="#f6dfb4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="520" height="330" fill="#26333f" />
        {/* slab */}
        <rect width="520" height="34" fill="#5b7d8f" />
        <path d="M20 17h.01M80 22h.01M150 14h.01M240 20h.01M330 15h.01M420 22h.01M490 16h.01" stroke="#26333f" strokeWidth="4" strokeLinecap="round" />
        {/* hangers + cavity */}
        {[60, 140, 220, 300, 380, 460].map((x) => <path key={x} d={`M${x} 34v34`} stroke="#7fa0b0" strokeWidth="2" />)}
        <path d="M30 68h460" stroke="#7fa0b0" strokeWidth="2" strokeDasharray="6 4" />
        {/* duct in cavity */}
        <rect x="300" y="42" width="130" height="20" rx="3" fill="#3d5a6b" />
        {/* stepped ceiling */}
        <path d="M0 86h80v20h360V86h80v10h-70v20H70V96H0z" fill="#eef3f5" />
        {/* cove glow */}
        <path className="lt-beam" d="M80 104c30-10 60-14 90-14M440 104c-30-10-60-14-90-14" stroke="#f6dfb4" strokeWidth="6" strokeLinecap="round" fill="none" />
        {/* downlights */}
        {[180, 260, 340].map((x, i) => (
          <g key={x}>
            <rect x={x - 9} y="115" width="18" height="4" rx="2" fill="#fff6e3" />
            <path className="lt-beam" style={{ animationDelay: `${i * 0.8}s` }} d={`M${x - 8} 119h16l40 180h-96z`} fill="url(#fc-hero-cone)" />
          </g>
        ))}
        {/* diffuser */}
        <rect x="414" y="96" width="36" height="8" fill="#b8ccd4" />
        <path className="fs-flow" d="M420 110l-10 30M432 110v34M444 110l10 30" stroke="#b8ccd4" strokeWidth="2" />
        {/* access panel */}
        <rect x="30" y="98" width="30" height="6" fill="#d7e4ea" stroke="#7fa0b0" />
        {/* floor + furniture */}
        <rect y="300" width="520" height="30" fill="#1c2733" />
        <rect x="170" y="252" width="180" height="40" rx="10" fill="#3d5a6b" />
        <rect x="170" y="236" width="180" height="22" rx="8" fill="#5b7d8f" />
        <text x="90" y="80" fontFamily="ui-monospace, monospace" fontSize="9" fill="#b8ccd4">CAVITY</text>
        <text x="320" y="56" fontFamily="ui-monospace, monospace" fontSize="9" fill="#d7e4ea">AC DUCT</text>
      </svg>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-glass-300">
        Illustration — Assess · Plan · Frame · Install · Integrate · Finish
      </figcaption>
    </figure>
  );
}

export default function FcHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-glass-100">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-glass-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-glass-600" aria-hidden="true" />
            Gypsum · Suspended · Cove · Multi-level
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.2rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl">
            False Ceiling Installation in Dammam
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            A cleaner, more finished ceiling — planned around your room&rsquo;s
            height, lighting, air-conditioning, access needs and the existing
            ceiling. We design, frame, light and finish it as one job.
          </p>
          <FcCtas className="mt-8" />
          <a href="#ceiling-systems" className="focus-ring mt-4 inline-block rounded-sm text-sm font-semibold text-glass-700 underline decoration-glass-600/40 underline-offset-4 hover:decoration-glass-600">
            Explore ceiling options
          </a>
          <ul className="mt-7 grid grid-cols-2 gap-2 text-xs text-ink-700 sm:flex sm:flex-wrap">
            {support.map((s) => (
              <li key={s.label} className="inline-flex items-center gap-1.5 rounded-full bg-sand-50 px-3 py-1.5 ring-1 ring-ink-900/10">
                <FcIcon name={s.icon} className="h-4 w-4 flex-none text-glass-700" />
                {s.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fadeIn [animation-delay:150ms]">
          <CeilingVisual />
        </div>
      </div>
    </section>
  );
}
