import WpCtas from "./WpCtas";

// Tank → suction → pump → pressure control → discharge → fixtures, with a
// pressure gauge. CSS-only motion; server-rendered.
function SystemVisual() {
  return (
    <figure className="rounded-3xl border border-ink-900/10 bg-sand-50 p-4 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.35)] sm:p-6">
      <svg viewBox="0 0 520 320" className="h-auto w-full" role="img" aria-labelledby="wp-hero-title">
        <title id="wp-hero-title">Residential water pressure system: tank, pump, pressure control and the pipe to the taps, with a pressure gauge</title>
        <rect width="520" height="320" fill="#eef3f5" />
        <path d="M0 280h520" stroke="#9a968a" strokeWidth="2" />

        {/* tank */}
        <path d="M30 120c0-10 30-16 60-16s60 6 60 16v140c0 10-30 16-60 16s-60-6-60-16z" fill="#d7e4ea" stroke="#26333f" strokeWidth="2" />
        <path d="M32 170c18 6 40 8 58 8s40-2 58-8v90c0 10-30 16-58 16s-58-6-58-16z" fill="#7fa0b0" opacity="0.6" />
        <text x="62" y="148" fontFamily="ui-monospace, monospace" fontSize="10" fill="#26333f">TANK</text>

        {/* suction */}
        <path d="M150 248h60" stroke="#5b7d8f" strokeWidth="9" />
        <path className="fs-flow" d="M152 248h56" stroke="#d7e4ea" strokeWidth="2" />

        {/* pump */}
        <rect x="210" y="220" width="80" height="56" rx="8" fill="#faf8f4" stroke="#26333f" strokeWidth="2" />
        <circle cx="238" cy="248" r="16" fill="none" stroke="#26333f" strokeWidth="2" />
        <g className="pc-spin">
          <circle cx="238" cy="248" r="12" fill="none" />
          <path d="M238 248v-11M238 248l10 6M238 248l-10 6" stroke="#26333f" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <path d="M262 232h20M262 240h20M262 248h20M262 256h20" stroke="#9a968a" strokeWidth="2" />
        <text x="228" y="296" fontFamily="ui-monospace, monospace" fontSize="10" fill="#26333f">PUMP</text>

        {/* discharge up to controller and on to fixtures */}
        <path d="M290 236h30V120h150" fill="none" stroke="#5b7d8f" strokeWidth="9" strokeLinejoin="round" />
        <path className="fs-flow" d="M292 236h26V120h150" fill="none" stroke="#d7e4ea" strokeWidth="2" />

        {/* pressure control + gauge */}
        <rect x="300" y="150" width="40" height="50" rx="6" fill="#faf8f4" stroke="#26333f" strokeWidth="2" />
        <path d="M310 168h20v12h-20z" fill="#26333f" />
        <text x="254" y="180" fontFamily="ui-monospace, monospace" fontSize="9" fill="#26333f">CONTROL</text>
        <circle cx="390" cy="78" r="30" fill="#faf8f4" stroke="#26333f" strokeWidth="2" />
        <path d="M368 92a26 26 0 0 1 44 0" fill="none" stroke="#b8ccd4" strokeWidth="4" />
        <path d="M372 64a26 26 0 0 1 36 0" fill="none" stroke="#5b7d8f" strokeWidth="4" />
        <path d="M390 108V120" stroke="#5b7d8f" strokeWidth="4" />
        <g style={{ transformOrigin: "390px 78px" }} className="wp-needle">
          <path d="M390 78V56" stroke="#c76a3f" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <circle cx="390" cy="78" r="3" fill="#26333f" />

        {/* fixtures */}
        <path d="M470 120v30" stroke="#5b7d8f" strokeWidth="6" />
        <path d="M455 150h30l-4 8h-22z" fill="#faf8f4" stroke="#26333f" strokeWidth="2" />
        <path className="fs-flow" d="M470 160v40" stroke="#7fa0b0" strokeWidth="2.5" strokeDasharray="3 5" />
        <text x="440" y="226" fontFamily="ui-monospace, monospace" fontSize="10" fill="#26333f">TAPS</text>
      </svg>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-500">
        Simplified booster system — real installations vary
      </figcaption>
    </figure>
  );
}

export default function WpHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-glass-100">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-glass-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-glass-600" aria-hidden="true" />
            Water pump repair in Dammam
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.2rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl">
            Weak water pressure? The pump may not be the only problem.
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            No water, weak pressure or a pump that won&rsquo;t stop running can
            come from the pump — or from the tank, valves, filters, pipes or
            controls around it. Dammam Home Solutions checks the whole system,
            then repairs or replaces only what&rsquo;s actually faulty.
          </p>
          <WpCtas className="mt-8" />
          <p className="mt-5 max-w-md text-xs leading-relaxed text-ink-500">
            Tell us what the pump is doing, what the water flow is like, and
            what type of property you have.
          </p>
        </div>
        <div className="animate-fadeIn [animation-delay:150ms]">
          <SystemVisual />
        </div>
      </div>
    </section>
  );
}
