import CbCtas from "./CbCtas";
import CbIcon from "./CbIcon";

const support = [
  { icon: "curtain" as const, label: "Curtain installation" },
  { icon: "roller" as const, label: "Blind installation" },
  { icon: "track" as const, label: "Rods & ceiling tracks" },
  { icon: "building" as const, label: "Residential & commercial" },
];

// Large window with ceiling-track curtains and a smaller window with a roller
// blind, plus a measurement line. CSS-only motion.
function WindowVisual() {
  return (
    <figure className="rounded-3xl border border-ink-900/10 bg-sand-50 p-4 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.35)] sm:p-6">
      <svg viewBox="0 0 520 330" className="h-auto w-full" role="img" aria-labelledby="cb-hero-title">
        <title id="cb-hero-title">{`Room with a large window dressed with full-height curtains on a ceiling track, and a smaller window with a roller blind, with a measurement line across the window`}</title>
        <rect width="520" height="330" fill="#f2e6d5" />
        <rect width="520" height="14" fill="#d9bfa0" />
        <rect y="300" width="520" height="30" fill="#d9bfa0" />

        {/* large window */}
        <rect x="70" y="60" width="230" height="200" fill="#e3eef7" stroke="#4a3626" strokeWidth="3" />
        <path d="M185 60v200M70 160h230" stroke="#4a3626" strokeWidth="2" />
        <rect x="62" y="260" width="246" height="8" fill="#b8916c" />
        {/* ceiling track */}
        <rect x="30" y="16" width="310" height="6" rx="2" fill="#4a3626" />
        {/* curtains */}
        <g className="lt-sway" style={{ transformOrigin: "60px 22px" }}>
          <path d="M34 22h66c-6 60-6 180 4 278H30c8-100 8-200 4-278z" fill="#9c7752" />
          <path d="M50 22c-2 90-2 180 2 278M70 22c2 90 2 180-2 278M86 22c-4 90-4 180 0 278" stroke="#7a5a3f" strokeWidth="2" fill="none" />
        </g>
        <g className="lt-sway [animation-delay:1.2s]" style={{ transformOrigin: "310px 22px" }}>
          <path d="M270 22h66c-4 78-4 200 4 278h-74c-6-100-6-200 4-278z" fill="#9c7752" />
          <path d="M286 22c-2 90-2 180 2 278M304 22c2 90 2 180-2 278M322 22c-4 90-4 180 0 278" stroke="#7a5a3f" strokeWidth="2" fill="none" />
        </g>

        {/* small window with roller blind */}
        <rect x="380" y="80" width="110" height="140" fill="#e3eef7" stroke="#4a3626" strokeWidth="3" />
        <rect x="374" y="70" width="122" height="12" rx="6" fill="#4a3626" />
        <rect x="384" y="82" width="102" height="86" fill="#d9bfa0" />
        <rect x="384" y="164" width="102" height="6" fill="#7a5a3f" />
        <path d="M480 82v120" stroke="#9c7752" strokeWidth="1.5" strokeDasharray="2 3" />
        <rect x="372" y="220" width="126" height="7" fill="#b8916c" />
        <path d="M480 202l0 6" stroke="#4a3626" strokeWidth="3" />

        {/* measurement */}
        <path d="M380 248h110" stroke="#b3652f" strokeWidth="1.5" />
        <path d="M380 242v12M490 242v12" stroke="#b3652f" strokeWidth="1.5" />
        <path className="fs-flow" d="M384 248h102" stroke="#f2e6d5" strokeWidth="1.5" />
        <text x="410" y="270" fontFamily="ui-monospace, monospace" fontSize="10" fill="#4a3626">MEASURE</text>
      </svg>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-500">
        Illustration — Choose · Measure · Plan · Mount · Align · Test
      </figcaption>
    </figure>
  );
}

export default function CbHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-clay-100/70">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-clay-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay-600" aria-hidden="true" />
            Curtains · Blinds · Rods · Tracks
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.2rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl">
            Curtain &amp; Blind Installation in Dammam
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            Curtains, blinds, rods and tracks installed with careful attention
            to measurements, mounting, alignment, window clearance and the way
            the finished covering needs to open and close. We can measure,
            supply and install — or fit what you&rsquo;ve already bought.
          </p>
          <CbCtas className="mt-8" />
          <a href="#coverings" className="focus-ring mt-4 inline-block rounded-sm text-sm font-semibold text-clay-700 underline decoration-clay-600/40 underline-offset-4 hover:decoration-clay-600">
            Explore curtain &amp; blind options
          </a>
          <ul className="mt-7 grid grid-cols-2 gap-2 text-xs text-ink-700 sm:flex sm:flex-wrap">
            {support.map((s) => (
              <li key={s.label} className="inline-flex items-center gap-1.5 rounded-full bg-sand-50 px-3 py-1.5 ring-1 ring-ink-900/10">
                <CbIcon name={s.icon} className="h-4 w-4 flex-none text-clay-700" />
                {s.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fadeIn [animation-delay:150ms]">
          <WindowVisual />
        </div>
      </div>
    </section>
  );
}
