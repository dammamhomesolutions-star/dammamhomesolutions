const chain = [
  { label: "Roof", body: "Absorbs heat from the sun all day." },
  { label: "Insulation", body: "Slows that heat moving down — if it's dry and intact." },
  { label: "Indoor heat", body: "Top-floor rooms warm up when insulation is missing or wet." },
  { label: "AC load", body: "The AC works harder to keep those rooms cool." },
  { label: "Moisture", body: "Wet insulation loses performance and holds water against the slab." },
  { label: "Comfort", body: "Hot ceilings and uneven room temperatures upstairs." },
];

export default function RrInsulation() {
  return (
    <section aria-labelledby="rr-ins" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="section-label !text-ember-700">Insulation</p>
          <h2 id="rr-ins" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Should roof replacement include insulation?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            A replacement opens the roof up, which makes it the practical
            moment to deal with insulation that is wet, crushed or missing.
            Insulation only works when it stays dry, so it&rsquo;s always
            planned together with the waterproofing above it.
          </p>
          <p className="mt-4 rounded-xl border-l-4 border-ember-600 bg-ember-100/60 px-4 py-3 text-sm leading-relaxed text-ink-800">
            Whether insulation should be replaced or upgraded depends on the
            existing assembly, its condition and the project scope.
          </p>
        </div>

        <div className="lg:col-span-7">
          <svg viewBox="0 0 520 120" className="h-auto w-full" aria-hidden="true">
            <defs>
              <linearGradient id="rr-heat" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#c17f3e" stopOpacity="0.9" />
                <stop offset="1" stopColor="#c17f3e" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* without insulation */}
            <rect x="10" y="10" width="240" height="100" rx="10" fill="#f4f0e8" />
            <rect x="30" y="30" width="200" height="12" fill="#9a968a" />
            <rect x="30" y="42" width="200" height="56" fill="url(#rr-heat)" />
            <text x="30" y="24" fontFamily="ui-monospace, monospace" fontSize="9" fill="#78746a">WET / MISSING INSULATION</text>
            {/* with insulation */}
            <rect x="270" y="10" width="240" height="100" rx="10" fill="#f4f0e8" />
            <rect x="290" y="30" width="200" height="12" fill="#9a968a" />
            <path d="M290 50c10-8 20 8 30 0s20 8 30 0 20 8 30 0 20 8 30 0 20 8 30 0 20 8 30 0 20 8 20 0" fill="none" stroke="#b8916c" strokeWidth="6" />
            <rect x="290" y="58" width="200" height="40" fill="url(#rr-heat)" opacity="0.25" />
            <text x="290" y="24" fontFamily="ui-monospace, monospace" fontSize="9" fill="#78746a">DRY, INTACT INSULATION</text>
          </svg>
          <ol className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {chain.map((c, i) => (
              <li key={c.label} className="flex gap-3">
                <span className="font-mono text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-sm font-semibold text-ink-950">{c.label}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-600">{c.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
