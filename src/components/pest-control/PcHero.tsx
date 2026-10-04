import PcCtas from "./PcCtas";

// Clean, calm hero: a house section with an inspection lens sweeping the
// rooms. No insects in the hero by design.
export default function PcHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-moss-100/60">
      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-moss-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-moss-600" aria-hidden="true" />
            Pest control services
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.2rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.4rem]">
            Pest Control in Dammam
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            Seeing pests in your home or business usually means something
            needs attention. Dammam Home Solutions helps identify the pest,
            find where the activity is coming from, and recommend the right
            treatment and prevention approach for your property.
          </p>
          <PcCtas className="mt-8" secondaryLabel="Call Dammam Home Solutions" />
          <p className="mt-5 max-w-md text-xs leading-relaxed text-ink-500">
            Tell us what you&rsquo;ve seen, where you&rsquo;ve seen it, and how
            often it&rsquo;s happening.
          </p>
        </div>

        <figure className="mx-auto w-full max-w-xl animate-fadeIn [animation-delay:150ms]">
          <svg viewBox="0 0 520 380" className="h-auto w-full" role="img" aria-labelledby="pc-hero-title pc-hero-desc">
            <title id="pc-hero-title">Illustration of a home being inspected room by room</title>
            <desc id="pc-hero-desc">An inspection lens moves across the kitchen, bathroom, bedroom and living room of a two-storey home.</desc>
            <defs>
              <clipPath id="pc-hero-house">
                <path d="M60 140L260 50l200 90v210H60z" />
              </clipPath>
            </defs>
            <rect x="0" y="0" width="520" height="380" rx="24" fill="#faf8f4" />
            <path d="M30 350h460" stroke="#c4c0b4" strokeWidth="2" />

            {/* house shell */}
            <path d="M60 140L260 50l200 90v210H60z" fill="#f4f0e8" stroke="#374330" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M60 245h400" stroke="#374330" strokeWidth="2" />
            <path d="M260 140v210" stroke="#374330" strokeWidth="2" />

            {/* rooms */}
            <g fill="none" stroke="#79895f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              {/* bedroom: bed */}
              <path d="M90 230v-24h110v24M90 206v-16h26v16" />
              {/* bathroom: tub + basin */}
              <path d="M290 230v-18h70v18M380 230v-26h40v26M390 204v-10" />
              {/* kitchen: counter + cabinets */}
              <path d="M84 340v-40h120v40M84 270h120v14H84z" />
              <path d="M130 300h30" />
              {/* living: sofa + window */}
              <path d="M300 340v-20a6 6 0 0 1 6-6h90a6 6 0 0 1 6 6v20M292 340h118" />
              <path d="M400 268h40v30h-40z" />
            </g>
            <g fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1.4" fill="#5f7050">
              <text x="90" y="170">BEDROOM</text>
              <text x="290" y="170">BATHROOM</text>
              <text x="84" y="262">KITCHEN</text>
              <text x="290" y="262">LIVING</text>
            </g>

            {/* inspection lens, clipped to the house */}
            <g clipPath="url(#pc-hero-house)">
              <g className="pc-sweep">
                <circle cx="130" cy="200" r="46" fill="#dbe1cd" opacity="0.55" />
              </g>
            </g>
            <g className="pc-sweep">
              <circle cx="130" cy="200" r="46" fill="none" stroke="#374330" strokeWidth="3" />
              <path d="M163 233l26 26" stroke="#374330" strokeWidth="8" strokeLinecap="round" />
            </g>

            {/* check marks for inspected rooms */}
            <g fill="#4b5a3f">
              <circle cx="232" cy="164" r="9" />
              <circle cx="432" cy="164" r="9" />
            </g>
            <path d="M228 164l3 3 5-6M428 164l3 3 5-6" stroke="#faf8f4" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
          <figcaption className="mt-3 text-center text-[11px] uppercase tracking-[0.16em] text-ink-500">
            Inspection first — then treatment where it&rsquo;s needed
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
