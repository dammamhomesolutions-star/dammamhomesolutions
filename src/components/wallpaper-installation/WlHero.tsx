import WlCtas from "./WlCtas";
import WlIcon from "./WlIcon";

const support = [
  { icon: "sheet" as const, label: "Wallpaper installation" },
  { icon: "prepared" as const, label: "Wall preparation" },
  { icon: "scraper" as const, label: "Wallpaper removal" },
  { icon: "building" as const, label: "Residential & commercial" },
];

// Feature wall with patterned sheets; the last sheet eases into place.
function WallVisual() {
  return (
    <figure className="rounded-3xl border border-ink-900/10 bg-sand-50 p-4 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.35)] sm:p-6">
      <svg viewBox="0 0 520 330" className="h-auto w-full" role="img" aria-labelledby="wl-hero-title">
        <title id="wl-hero-title">{`A feature wall being papered: patterned sheets aligned edge to edge, with the last sheet being lowered into place beside a plumb line`}</title>
        <defs>
          <pattern id="wl-hero-pat" x="40" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
            <rect width="56" height="56" fill="#164848" />
            <path d="M28 6c8 8 8 14 0 22-8-8-8-14 0-22zM0 34c8 8 8 14 0 22M56 34c-8 8-8 14 0 22" fill="#4a9797" />
            <circle cx="28" cy="42" r="3" fill="#e0b28a" />
          </pattern>
        </defs>
        <rect width="520" height="330" fill="#f4f0e8" />
        <rect y="290" width="520" height="40" fill="#ded2ba" />
        <rect y="0" width="520" height="14" fill="#ebe4d6" />

        {/* papered wall */}
        <rect x="40" y="14" width="336" height="276" fill="url(#wl-hero-pat)" />
        <path d="M152 14v276M264 14v276" stroke="#0f3a3a" strokeWidth="1" opacity="0.6" />
        {/* bare wall */}
        <rect x="376" y="14" width="104" height="276" fill="#ebe4d6" />

        {/* hanging sheet */}
        <g className="wl-hang">
          <rect x="376" y="14" width="104" height="276" fill="url(#wl-hero-pat)" />
          <path d="M376 14v276" stroke="#0f3a3a" strokeWidth="1" opacity="0.6" />
        </g>
        {/* plumb line */}
        <path d="M486 14v276" stroke="#b3562f" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M482 292l4 8 4-8z" fill="#b3562f" />

        {/* sofa */}
        <rect x="90" y="236" width="220" height="44" rx="10" fill="#4a5468" />
        <rect x="90" y="216" width="220" height="26" rx="8" fill="#69748a" />
        <path d="M100 280v10M300 280v10" stroke="#333a49" strokeWidth="6" />
      </svg>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-500">
        Illustration — Assess · Prepare · Measure · Install · Match · Finish
      </figcaption>
    </figure>
  );
}

export default function WlHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-teal-100/60">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-600" aria-hidden="true" />
            Feature walls · Patterns · Murals
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.2rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl">
            Wallpaper Installation in Dammam
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            A clean finished wall starts before the first sheet goes up —
            with surface preparation, accurate positioning, neat seams and
            careful pattern matching. We prepare, measure, supply and install,
            or hang the wallpaper you&rsquo;ve chosen.
          </p>
          <WlCtas className="mt-8" />
          <a href="#wall-check" className="focus-ring mt-4 inline-block rounded-sm text-sm font-semibold text-teal-700 underline decoration-teal-600/40 underline-offset-4 hover:decoration-teal-600">
            Check your wall
          </a>
          <ul className="mt-7 grid grid-cols-2 gap-2 text-xs text-ink-700 sm:flex sm:flex-wrap">
            {support.map((s) => (
              <li key={s.label} className="inline-flex items-center gap-1.5 rounded-full bg-sand-50 px-3 py-1.5 ring-1 ring-ink-900/10">
                <WlIcon name={s.icon} className="h-4 w-4 flex-none text-teal-700" />
                {s.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fadeIn [animation-delay:150ms]">
          <WallVisual />
        </div>
      </div>
    </section>
  );
}
