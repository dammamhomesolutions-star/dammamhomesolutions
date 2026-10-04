import FsCtas from "./FsCtas";

// Server-rendered hero. The visual is an abstract section through a room:
// the fire is out, smoke residue lingers along the ceiling and drifts into
// the next room, and water sits at floor level. Motion is CSS-only.
export default function FsHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-ink-950 text-sand-50">
      <div
        aria-hidden="true"
        className="fs-drift pointer-events-none absolute -left-1/4 -top-1/3 h-[80%] w-[90%] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(105,116,138,0.35), transparent)" }}
      />
      <div
        aria-hidden="true"
        className="fs-drift-slow pointer-events-none absolute -bottom-1/3 right-0 h-[70%] w-[70%] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(214,154,95,0.16), transparent)" }}
      />

      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 lg:py-24">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ember-500">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember-500" aria-hidden="true" />
            Fire &amp; smoke damage restoration
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.1rem] leading-[1.1] tracking-tight sm:text-5xl">
            Fire &amp; Smoke Damage Restoration in Dammam
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-300 sm:text-base">
            After a fire, the visible damage is only part of the problem.
            Smoke, soot, lingering odors and firefighting water can keep
            affecting your property after the flames are out. Dammam Home
            Solutions helps assess the damage, deal with smoke odor and
            water, and restore the damaged parts of your home or business.
          </p>

          <FsCtas tone="dark" className="mt-8" />

          <p className="mt-5 max-w-md text-xs leading-relaxed text-ink-400">
            Tell us what happened, where the damage is, and whether the
            property is currently accessible.
          </p>
        </div>

        <figure className="relative mx-auto w-full max-w-xl animate-fadeIn [animation-delay:200ms]">
          <svg viewBox="0 0 520 380" className="h-auto w-full" role="img" aria-labelledby="fs-hero-title fs-hero-desc">
            <title id="fs-hero-title">Illustrated section through a fire-affected room</title>
            <desc id="fs-hero-desc">
              The burned area is in one room, but smoke residue spreads along the
              ceiling into the next room and water from firefighting sits on the floor.
            </desc>
            <defs>
              <linearGradient id="fs-hero-smoke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#8e97a8" stopOpacity="0.75" />
                <stop offset="1" stopColor="#8e97a8" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="fs-hero-heat" cx="0.5" cy="0.8" r="0.6">
                <stop offset="0" stopColor="#d69a5f" stopOpacity="0.55" />
                <stop offset="1" stopColor="#d69a5f" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="fs-hero-water" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#7fa0b0" stopOpacity="0.7" />
                <stop offset="1" stopColor="#5b7d8f" stopOpacity="0.3" />
              </linearGradient>
              <pattern id="fs-hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20 0H0V20" fill="none" stroke="#333a49" strokeWidth="0.6" />
              </pattern>
            </defs>

            <rect x="0" y="0" width="520" height="380" fill="url(#fs-hero-grid)" opacity="0.6" />

            {/* building shell */}
            <path d="M30 70h460v260H30z" fill="#191d25" stroke="#4a5468" strokeWidth="2" />
            <path d="M30 70h460" stroke="#69748a" strokeWidth="6" />
            <path d="M260 70v190" stroke="#4a5468" strokeWidth="2" />
            <path d="M260 290v40" stroke="#4a5468" strokeWidth="2" />
            {/* doorway gap between rooms */}
            <path d="M254 260h12M254 290h12" stroke="#4a5468" strokeWidth="2" />

            {/* heat glow at origin */}
            <ellipse cx="120" cy="250" rx="110" ry="110" fill="url(#fs-hero-heat)" />

            {/* kitchen counter + scorched wall */}
            <path d="M50 270h140v60H50z" fill="#232833" stroke="#4a5468" strokeWidth="1.5" />
            <path d="M60 270V200h120v70" fill="none" stroke="#4a5468" strokeWidth="1.5" strokeDasharray="3 4" />
            <path d="M85 270c4-24 18-38 14-62 12 14 22 34 18 62" fill="#14181f" stroke="#a8662a" strokeWidth="1.2" />

            {/* smoke band along ceiling, spreading through doorway */}
            <path d="M32 74h300c40 0 60 10 90 22 30 12 50 10 66 4v30c-30 10-60 4-96-8-34-12-60-16-110-16H32z" fill="url(#fs-hero-smoke)" className="fs-drift" />
            <path
              className="fs-flow"
              d="M110 220C110 150 150 100 250 98c80-2 140 16 220 40"
              fill="none"
              stroke="#b4bac6"
              strokeWidth="1.4"
              strokeLinecap="round"
            />

            {/* second room: sofa holding odor */}
            <path d="M300 300v-26a8 8 0 0 1 8-8h104a8 8 0 0 1 8 8v26" fill="none" stroke="#69748a" strokeWidth="1.6" />
            <path d="M292 300h136v26H292z" fill="#232833" stroke="#69748a" strokeWidth="1.6" />
            <path d="M330 258c-6-8 6-12 0-20M360 256c-6-8 6-12 0-20M390 258c-6-8 6-12 0-20" fill="none" stroke="#8e97a8" strokeWidth="1.2" strokeLinecap="round" className="fs-drift-slow" />

            {/* firefighting water at floor level */}
            <path d="M32 322c40-6 90 6 140 0s110 4 170 0 100 4 146 2v6H32z" fill="url(#fs-hero-water)" />

            {/* assessment markers */}
            <g fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1">
              <circle cx="110" cy="230" r="5" fill="#d69a5f" />
              <path d="M110 230l-40-60h-36" fill="none" stroke="#d69a5f" strokeWidth="1" />
              <text x="34" y="164" fill="#d69a5f">HEAT</text>

              <circle cx="400" cy="112" r="5" fill="#b4bac6" />
              <path d="M400 112l30-50h56" fill="none" stroke="#b4bac6" strokeWidth="1" />
              <text x="436" y="56" fill="#b4bac6">SMOKE</text>

              <circle cx="360" cy="246" r="5" fill="#b4bac6" />
              <path d="M360 246l40-30h80" fill="none" stroke="#b4bac6" strokeWidth="1" />
              <text x="420" y="210" fill="#b4bac6">ODOR</text>

              <circle cx="220" cy="326" r="5" fill="#7fa0b0" />
              <path d="M220 326l20 30h80" fill="none" stroke="#7fa0b0" strokeWidth="1" />
              <text x="250" y="372" fill="#7fa0b0">WATER</text>
            </g>
          </svg>
          <figcaption className="mt-3 text-center text-[11px] uppercase tracking-[0.16em] text-ink-400">
            Illustration — damage rarely stays in one room
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
