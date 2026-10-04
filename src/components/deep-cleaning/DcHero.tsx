import DcCtas from "./DcCtas";

// The same empty room drawn twice: clean underneath, dusty on top. A slow
// CSS clip-path wipe reveals the clean version. Conceptual, not a photo.
function Room({ dusty }: { dusty: boolean }) {
  const wall = dusty ? "#e4ddcd" : "#faf8f4";
  const floor = dusty ? "#c9bea6" : "#ebe4d6";
  const line = dusty ? "#9a968a" : "#1f5b53";
  return (
    <svg viewBox="0 0 520 360" className="h-auto w-full" aria-hidden="true">
      <rect x="0" y="0" width="520" height="360" fill={wall} />
      {/* back wall + floor in perspective */}
      <path d="M90 60h340v200H90z" fill={wall} stroke={line} strokeWidth="1.5" />
      <path d="M0 0l90 60M520 0l-90 60M0 360l90-100M520 360l-90-100" stroke={line} strokeWidth="1.5" />
      <path d="M90 260h340l90 100H0z" fill={floor} />
      {/* window */}
      <path d="M270 90h120v110H270z" fill={dusty ? "#d7d2c4" : "#e2f2ee"} stroke={line} strokeWidth="1.5" />
      <path d="M330 90v110M270 145h120" stroke={line} strokeWidth="1.2" />
      {/* door */}
      <path d="M120 260V120h80v140" fill="none" stroke={line} strokeWidth="1.5" />
      <circle cx="188" cy="195" r="3" fill={line} />
      {/* skirting */}
      <path d="M90 252h340" stroke={line} strokeWidth="3" />
      {/* kitchen-style cabinet on the left wall */}
      <path d="M20 180l50-20v90l-50 25z" fill={dusty ? "#d9cfba" : "#f4f0e8"} stroke={line} strokeWidth="1.5" />

      {dusty ? (
        <g>
          {/* dust, marks where furniture stood, cobweb */}
          <rect x="220" y="236" width="70" height="20" fill="#a99f88" opacity="0.5" />
          <path d="M430 60l-30 0M430 60l0 30M430 60l-22 22M412 60c0 10 8 18 18 18" stroke="#78746a" strokeWidth="1" fill="none" />
          <g fill="#8a8170" opacity="0.55">
            {[
              [60, 300], [140, 320], [210, 290], [300, 330], [380, 300], [460, 320], [250, 280], [110, 280], [340, 285], [420, 340],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" />
            ))}
          </g>
          <path d="M280 120c10 6 20 2 30 8M300 160c14 4 26 0 36 6" stroke="#a99f88" strokeWidth="3" opacity="0.6" fill="none" />
        </g>
      ) : (
        <g stroke="#48a08f" strokeWidth="2" strokeLinecap="round" fill="none">
          {/* sparkle marks on clean surfaces */}
          <path d="M360 120v10M355 125h10M150 300v8M146 304h8M440 300v8M436 304h8" />
        </g>
      )}
    </svg>
  );
}

export default function DcHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-mint-100/60">
      <div className="container-edge grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-mint-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint-600" aria-hidden="true" />
            Deep cleaning &amp; move-in / move-out cleaning
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.1rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl">
            Deep Cleaning &amp; Move-In / Move-Out Cleaning in Dammam
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            Moving into a new home, leaving a rental, or living in a home that
            needs more than routine cleaning? Dammam Home Solutions provides
            detailed property cleaning focused on kitchens, bathrooms, floors,
            surfaces, cabinets and the overlooked areas that make a property
            feel unfinished.
          </p>
          <DcCtas className="mt-8" secondaryLabel="Call Dammam Home Solutions" />
          <p className="mt-5 max-w-md text-xs leading-relaxed text-ink-500">
            Tell us the property type, its size, and whether it&rsquo;s a
            move-in, move-out or deep-cleaning job.
          </p>
        </div>

        <figure className="mx-auto w-full max-w-xl animate-fadeIn [animation-delay:150ms]">
          <div
            className="relative overflow-hidden rounded-3xl border border-ink-900/10 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.35)]"
            role="img"
            aria-label="Illustration of an empty room being wiped clean, from dusty to ready to move in"
          >
            <Room dusty={false} />
            <div className="dc-reveal absolute inset-0">
              <Room dusty />
            </div>
            <div className="dc-bar pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-mint-600 shadow-[0_0_20px_rgba(72,160,143,0.8)]" aria-hidden="true" />
            <span className="absolute left-4 top-4 rounded-full bg-ink-950/85 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-sand-50">
              BEFORE MOVE-IN → READY
            </span>
          </div>
          <figcaption className="mt-3 text-center text-[11px] uppercase tracking-[0.16em] text-ink-500">
            Illustration — not a photo of a completed job
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
