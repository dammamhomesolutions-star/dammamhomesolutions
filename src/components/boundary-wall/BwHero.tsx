import BwCtas from "./BwCtas";
import BwIcon from "./BwIcon";

const support = [
  { icon: "crack" as const, label: "Crack & plaster repair" },
  { icon: "coping" as const, label: "Coping & corners" },
  { icon: "rebuild" as const, label: "Partial rebuilding" },
  { icon: "paint" as const, label: "Exterior coating" },
];

// Villa boundary wall with coping, a gate opening, a crack and a damp base.
function WallVisual() {
  return (
    <figure className="rounded-3xl border border-ink-900/10 bg-sand-50 p-4 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.35)] sm:p-6">
      <svg viewBox="0 0 520 320" className="h-auto w-full" role="img" aria-labelledby="bw-hero-title">
        <title id="bw-hero-title">{`Illustrated villa boundary wall with a coping along the top, a gate opening, a diagonal crack spreading from the gate corner and a damp patch near the base`}</title>
        <rect width="520" height="320" fill="#e9eef1" />
        <circle cx="440" cy="60" r="26" fill="#f2e6d5" />
        <rect y="268" width="520" height="52" fill="#d9bfa0" />
        {/* villa behind */}
        <rect x="250" y="70" width="200" height="110" fill="#f2e6d5" stroke="#9c7752" strokeWidth="1.5" />
        <rect x="275" y="96" width="34" height="30" fill="#b8916c" />
        <rect x="390" y="96" width="34" height="30" fill="#b8916c" />
        {/* wall */}
        <rect x="20" y="150" width="200" height="118" fill="#f2e6d5" />
        <rect x="300" y="150" width="200" height="118" fill="#f2e6d5" />
        <g stroke="#d9bfa0" strokeWidth="1">
          {[180, 210, 240].map((y) => <path key={y} d={`M20 ${y}h200M300 ${y}h200`} />)}
        </g>
        {/* coping */}
        <rect x="14" y="140" width="212" height="12" fill="#9c7752" />
        <rect x="294" y="140" width="212" height="12" fill="#9c7752" />
        <path d="M330 140l10 12" stroke="#4a3626" strokeWidth="2" />
        {/* gate */}
        <rect x="220" y="134" width="12" height="134" fill="#7a5a3f" />
        <rect x="288" y="134" width="12" height="134" fill="#7a5a3f" />
        <path d="M232 170h56M232 250h56M242 170v80M254 170v80M266 170v80M278 170v80" stroke="#4a3626" strokeWidth="2.5" />
        {/* crack */}
        <path className="bw-crack" pathLength={1} d="M300 158l18 16-6 14 20 18-8 14 16 22" stroke="#4a3626" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* damp base */}
        <path d="M30 268c20-14 40-20 70-18s50 10 80 18z" fill="#b8916c" opacity="0.45" />
        {/* labels */}
        <text x="352" y="214" fontFamily="ui-monospace, monospace" fontSize="10" fill="#4a3626">CRACK AT OPENING</text>
        <text x="26" y="134" fontFamily="ui-monospace, monospace" fontSize="10" fill="#4a3626">COPING</text>
        <text x="40" y="296" fontFamily="ui-monospace, monospace" fontSize="10" fill="#4a3626">DAMP BASE</text>
      </svg>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-500">
        Illustration — Surface · Plaster · Masonry · Moisture · Coping · Movement
      </figcaption>
    </figure>
  );
}

export default function BwHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-clay-100/70">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-clay-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay-600" aria-hidden="true" />
            Repair the cause, not just the crack
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.2rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl">
            Outdoor &amp; Boundary Wall Repair in Dammam
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            We assess and repair cracked, damaged and weathered exterior and
            boundary walls — plaster and render, coping, corners, damp-damaged
            finishes and, where needed, rebuilt block sections — then finish
            them with paint or a waterproof coating.
          </p>
          <BwCtas className="mt-8" />
          <ul className="mt-7 grid grid-cols-2 gap-2 text-xs text-ink-700 sm:flex sm:flex-wrap">
            {support.map((s) => (
              <li key={s.label} className="inline-flex items-center gap-1.5 rounded-full bg-sand-50 px-3 py-1.5 ring-1 ring-ink-900/10">
                <BwIcon name={s.icon} className="h-4 w-4 flex-none text-clay-700" />
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
