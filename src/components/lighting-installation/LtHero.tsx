import LtCtas from "./LtCtas";
import LtIcon from "./LtIcon";

const support = [
  { icon: "home" as const, label: "Residential & commercial" },
  { icon: "install" as const, label: "Installation & replacement" },
  { icon: "outdoor" as const, label: "Indoor & outdoor" },
  { icon: "dimmer" as const, label: "Switches, dimmers & smart controls" },
];

// Living room with a pendant, downlights and a wall light. CSS-only motion.
function RoomVisual() {
  return (
    <figure className="rounded-3xl border border-ink-900/10 bg-ink-950 p-4 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.5)] sm:p-6">
      <svg viewBox="0 0 520 330" className="h-auto w-full" role="img" aria-labelledby="lt-hero-title">
        <title id="lt-hero-title">{`Illustrated living room lit by a pendant over a table, two ceiling downlights and a wall light beside the sofa`}</title>
        <defs>
          <linearGradient id="lt-cone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f6c98a" stopOpacity="0.75" />
            <stop offset="1" stopColor="#f6c98a" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="520" height="330" fill="#232833" />
        <rect y="0" width="520" height="24" fill="#191d25" />
        <rect y="286" width="520" height="44" fill="#333a49" />

        {/* downlights */}
        <path className="lt-beam" d="M92 24h16l46 262H46z" fill="url(#lt-cone)" />
        <rect x="90" y="22" width="20" height="4" rx="2" fill="#f3e4d1" />
        <path className="lt-beam [animation-delay:1.5s]" d="M412 24h16l46 262H366z" fill="url(#lt-cone)" />
        <rect x="410" y="22" width="20" height="4" rx="2" fill="#f3e4d1" />

        {/* pendant */}
        <g className="lt-sway" style={{ transformOrigin: "260px 24px" }}>
          <path d="M260 24v86" stroke="#8e97a8" strokeWidth="1.5" />
          <path d="M232 132a28 22 0 0 1 56 0z" fill="#c17f3e" />
          <path className="lt-beam" d="M236 132h48l46 112H190z" fill="url(#lt-cone)" />
          <ellipse cx="260" cy="132" rx="10" ry="3" fill="#fff3dc" />
        </g>

        {/* table */}
        <rect x="200" y="238" width="120" height="8" rx="2" fill="#a8662a" />
        <path d="M214 246v40M306 246v40" stroke="#a8662a" strokeWidth="6" />

        {/* wall light + sofa */}
        <rect x="58" y="150" width="14" height="22" rx="3" fill="#d69a5f" />
        <path className="lt-beam" d="M58 150l-14-40h42l-14 40z" fill="#f6c98a" opacity="0.35" />
        <path className="lt-beam" d="M58 172l-16 40h46l-16-40z" fill="#f6c98a" opacity="0.35" />
        <rect x="24" y="230" width="140" height="40" rx="10" fill="#4a5468" />
        <rect x="24" y="214" width="140" height="22" rx="8" fill="#69748a" />
        <path d="M24 270v16M164 270v16" stroke="#4a5468" strokeWidth="6" />

        {/* art + accent */}
        <rect x="380" y="140" width="80" height="56" fill="#191d25" stroke="#d69a5f" strokeWidth="2" />
        <path d="M392 186l18-22 14 14 10-10 16 18z" fill="#4a5468" />

        {/* switch */}
        <rect x="486" y="170" width="14" height="22" rx="2" fill="#f3e4d1" />
        <rect x="490" y="176" width="6" height="10" rx="1" fill="#8e97a8" />
      </svg>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-400">
        Illustration — layered ambient, task and accent light
      </figcaption>
    </figure>
  );
}

export default function LtHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-ember-100/60">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ember-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember-600" aria-hidden="true" />
            Choose · Assess · Plan · Install · Test
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.2rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl">
            Lighting &amp; Fixture Installation in Dammam
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            Upgrade a room, replace an existing fixture, add new lighting, or
            plan a multi-fixture installation — with careful attention to
            placement, mounting, existing electrical points, controls and
            finish.
          </p>
          <LtCtas className="mt-8" />
          <a href="#fixtures" className="focus-ring mt-4 inline-block rounded-sm text-sm font-semibold text-ember-700 underline decoration-ember-600/40 underline-offset-4 hover:decoration-ember-600">
            Explore lighting options
          </a>
          <ul className="mt-7 grid grid-cols-2 gap-2 text-xs text-ink-700 sm:flex sm:flex-wrap">
            {support.map((s) => (
              <li key={s.label} className="inline-flex items-center gap-1.5 rounded-full bg-sand-50 px-3 py-1.5 ring-1 ring-ink-900/10">
                <LtIcon name={s.icon} className="h-4 w-4 flex-none text-ember-700" />
                {s.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fadeIn [animation-delay:150ms]">
          <RoomVisual />
        </div>
      </div>
    </section>
  );
}
