import ScCtas from "./ScCtas";

// A sofa on a rug, drawn twice — soiled underneath the wipe, clean beneath.
function Scene({ soiled }: { soiled: boolean }) {
  const fabric = soiled ? "#a9a69b" : "#7fa0b0";
  const fabricDark = soiled ? "#8b877a" : "#5b7d8f";
  const rug = soiled ? "#c9bfa9" : "#ebe4d6";
  const rugBorder = soiled ? "#a99f88" : "#c17f3e";
  return (
    <svg viewBox="0 0 520 360" className="h-auto w-full" aria-hidden="true">
      <rect x="0" y="0" width="520" height="360" fill={soiled ? "#ece6d9" : "#faf8f4"} />
      <rect x="0" y="250" width="520" height="110" fill={soiled ? "#ddd3be" : "#eae7de"} />
      {/* rug */}
      <path d="M60 330l40-70h320l40 70z" fill={rug} stroke={rugBorder} strokeWidth="3" />
      <path d="M100 316l26-44h268l26 44z" fill="none" stroke={rugBorder} strokeWidth="1.5" strokeDasharray="6 5" />
      {/* sofa */}
      <path d="M120 250V150a16 16 0 0 1 16-16h248a16 16 0 0 1 16 16v100z" fill={fabricDark} />
      <path d="M100 270v-70a18 18 0 0 1 36 0v50h248v-50a18 18 0 0 1 36 0v70z" fill={fabric} />
      <path d="M140 206h120v44H140zM260 206h120v44H260z" fill={fabric} stroke={fabricDark} strokeWidth="2" />
      <path d="M140 150h120v56H140zM260 150h120v56H260z" fill="none" stroke={fabricDark} strokeWidth="2" opacity="0.5" />
      <path d="M118 270v18M402 270v18" stroke="#5c584f" strokeWidth="6" strokeLinecap="round" />
      {soiled && (
        <g>
          <ellipse cx="200" cy="226" rx="24" ry="9" fill="#6b5a44" opacity="0.45" />
          <ellipse cx="330" cy="300" rx="34" ry="8" fill="#6b5a44" opacity="0.35" />
          <path d="M118 206a18 18 0 0 1 0-12M402 206a18 18 0 0 0 0-12" stroke="#5c584f" strokeWidth="6" opacity="0.4" />
          <path d="M150 300l30-36h60l-30 36z" fill="#9a8f78" opacity="0.4" />
        </g>
      )}
      {!soiled && (
        <g stroke="#2f7a7a" strokeWidth="2" strokeLinecap="round">
          <path d="M210 176v10M205 181h10M380 300v8M376 304h8M120 186v8M116 190h8" />
        </g>
      )}
    </svg>
  );
}

export default function ScHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-glass-100">
      <div className="container-edge grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-glass-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-glass-600" aria-hidden="true" />
            Sofa &amp; carpet cleaning
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.2rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.4rem]">
            Sofa &amp; Carpet Cleaning in Dammam
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            Give sofas, carpets and upholstered furniture a deeper clean
            without guessing which treatment they need. Dammam Home Solutions
            cleans fabric and leather sofas, carpets and rugs affected by
            dust, soil, stains, buildup and everyday use — with the method
            chosen for the material.
          </p>
          <ScCtas className="mt-8" />
          <p className="mt-5 max-w-md text-xs leading-relaxed text-ink-500">
            Tell us what needs cleaning, the material if you know it, and the
            problem you&rsquo;re trying to solve.
          </p>
        </div>

        <figure className="mx-auto w-full max-w-xl animate-fadeIn [animation-delay:150ms]">
          <div
            className="relative overflow-hidden rounded-3xl border border-ink-900/10 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.35)]"
            role="img"
            aria-label="Illustration of a sofa and rug being cleaned, from soiled to clean"
          >
            <Scene soiled={false} />
            <div className="dc-reveal absolute inset-0">
              <Scene soiled />
            </div>
            <div className="dc-bar pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-glass-600 shadow-[0_0_20px_rgba(91,125,143,0.8)]" aria-hidden="true" />
          </div>
          <figcaption className="mt-3 text-center text-[11px] uppercase tracking-[0.16em] text-ink-500">
            Illustrative cleaning — not a photo of a completed job
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
