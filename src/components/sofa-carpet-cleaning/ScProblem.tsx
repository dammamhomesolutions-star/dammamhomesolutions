import ScIcon from "./ScIcon";

const buildup = ["Dust", "Soil", "Food residue", "Spills", "Body oils", "Pet-related dirt", "Everyday grime", "Odours", "Fine particles"];

const answers = [
  {
    q: "How often should a sofa be professionally cleaned?",
    a: "Cleaning frequency depends on household use, material, visible soil, spills and other conditions. High-use furniture may need attention more often than lightly used furniture.",
  },
  {
    q: "Can old carpet stains be removed?",
    a: "Some old stains improve significantly, but results depend on the stain, fibre, age, previous treatment and whether the material has been permanently discoloured.",
  },
  {
    q: "How long does a sofa take to dry?",
    a: "Drying time depends on the material, cleaning method, moisture level, ventilation and indoor conditions.",
  },
];

export default function ScProblem() {
  return (
    <section aria-label="Why soft furnishings need deeper cleaning" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="section-label !text-glass-700">The real problem</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              Your sofa or carpet can look clean and still need a deeper clean
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              What you see on the surface is only part of what collects in
              soft furnishings. Most of it settles into the fibres, seams and
              padding, where vacuuming doesn&rsquo;t reach.
            </p>
            <p className="mt-4 rounded-xl border-l-4 border-glass-600 bg-glass-100 px-4 py-3 text-[15px] font-medium leading-relaxed text-ink-900">
              Professional cleaning should start with understanding the
              material and its condition, rather than using the same method on
              every surface.
            </p>
          </div>
          {/* fibre cross-section showing where soil sits */}
          <figure className="lg:col-span-6">
            <svg viewBox="0 0 480 220" className="h-auto w-full" role="img" aria-labelledby="sc-fibre-title">
              <title id="sc-fibre-title">Cross-section of carpet pile with dust on top and finer soil, oils and residue settled deeper in the fibres</title>
              <rect x="0" y="0" width="480" height="220" rx="20" fill="#eef3f5" />
              <rect x="30" y="170" width="420" height="22" fill="#9a968a" />
              <g stroke="#5b7d8f" strokeWidth="3" strokeLinecap="round">
                {Array.from({ length: 28 }).map((_, i) => {
                  const x = 40 + i * 15;
                  return <path key={x} d={`M${x} 170c-3-30 4-60 0-${100 + (i % 3) * 10}`} fill="none" />;
                })}
              </g>
              <g fill="#8a8170">
                {[[60, 62], [120, 58], [210, 66], [300, 60], [390, 64], [430, 70]].map(([x, y]) => <circle key={`${x}`} cx={x} cy={y} r="3" />)}
              </g>
              <g fill="#6b5a44" opacity="0.7">
                {[[80, 120], [140, 140], [190, 110], [250, 150], [320, 125], [360, 145], [410, 118]].map(([x, y]) => <circle key={`${x}`} cx={x} cy={y} r="4" />)}
              </g>
              <g fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.2" fill="#3d5a6b">
                <text x="40" y="40">SURFACE DUST — VISIBLE</text>
                <text x="250" y="206">SOIL, OILS & RESIDUE — DEEPER</text>
              </g>
            </svg>
            <figcaption className="mt-3 flex flex-wrap gap-2">
              {buildup.map((b) => (
                <span key={b} className="rounded-full bg-glass-100 px-3 py-1 text-xs text-glass-900">{b}</span>
              ))}
            </figcaption>
          </figure>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {answers.map((x) => (
            <div key={x.q} className="border-l-4 border-glass-600 pl-5">
              <h2 className="font-serif text-xl tracking-tight text-ink-950">{x.q}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{x.a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 flex items-start gap-2 text-sm text-ink-500">
          <ScIcon name="alert" className="mt-0.5 h-4 w-4 flex-none" />
          We don&rsquo;t make allergen, bacteria or health claims — cleaning
          removes soil, residue and stains, with results that depend on the
          material.
        </p>
      </div>
    </section>
  );
}
