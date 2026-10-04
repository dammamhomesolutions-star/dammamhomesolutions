import Link from "next/link";

const weakPoints = [
  { n: 1, label: "Roof-to-wall transitions", x: 74, y: 92 },
  { n: 2, label: "Joints in the surface", x: 176, y: 92 },
  { n: 3, label: "Penetrations — pipes, vents, supports", x: 290, y: 66 },
  { n: 4, label: "Drains and outlets", x: 420, y: 92 },
];

const covers = [
  "Waterproofing layers",
  "Roof-to-wall transitions",
  "Drainage",
  "Penetrations",
  "Joints",
  "Details at upstands and edges",
  "Surface preparation",
];

export default function RrWaterproofing() {
  return (
    <section aria-labelledby="rr-wp" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="section-label !text-teal-300">Waterproofing</p>
          <h2 id="rr-wp" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
            Roof replacement and waterproofing work together
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            A new roof surface doesn&rsquo;t help if water can still get in
            at the vulnerable points. Most leaks start at the edges, joints
            and openings rather than in the middle of the roof — so the
            details matter as much as the main layer.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-sand-100">
            {covers.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-300" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-ink-300">
            Where the roof itself is sound and only the waterproofing needs
            renewing, see{" "}
            <Link href="/waterproofing/" className="focus-ring rounded-sm font-semibold text-sand-50 underline decoration-teal-500 decoration-2 underline-offset-4 hover:text-teal-300">
              waterproofing services
            </Link>
            .
          </p>
        </div>

        <figure className="lg:col-span-7">
          <svg viewBox="0 0 520 300" className="h-auto w-full" role="img" aria-labelledby="rr-wp-title rr-wp-desc">
            <title id="rr-wp-title">Rain passing a roof cross-section at four common weak points</title>
            <desc id="rr-wp-desc">
              Rain lands on the roof surface. Below it are the waterproofing layer, the structure and the room. Water can get past
              the waterproofing at wall transitions, joints, penetrations and drains, and appear as a stain on the ceiling.
            </desc>

            {/* rain */}
            <g stroke="#8fc4c4" strokeWidth="1.5" strokeLinecap="round" opacity="0.8">
              {[60, 110, 160, 210, 260, 310, 360, 410, 460].map((x, i) => (
                <path key={x} d={`M${x} ${4 + (i % 3) * 6}l-6 22`} className="fs-flow" />
              ))}
            </g>
            <text x="490" y="20" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1.4" fill="#8fc4c4">RAIN</text>

            {/* parapet wall */}
            <rect x="40" y="40" width="30" height="120" fill="#4a5468" />
            {/* surface, waterproofing, structure */}
            <rect x="70" y="86" width="430" height="14" fill="#9a968a" />
            <rect x="70" y="100" width="430" height="6" fill="#14181f" stroke="#4a9797" strokeWidth="1" />
            <path d="M70 100v-30" stroke="#4a9797" strokeWidth="3" />
            <rect x="70" y="106" width="430" height="42" fill="#5c584f" />
            {/* drain */}
            <rect x="410" y="86" width="22" height="20" fill="#14181f" />
            <path d="M421 106v54" stroke="#35332e" strokeWidth="8" />
            {/* pipe penetration */}
            <path d="M290 100V56" stroke="#b4bac6" strokeWidth="6" strokeLinecap="round" />
            {/* joint */}
            <path d="M176 86v14" stroke="#14181f" strokeWidth="2" />

            {/* interior */}
            <rect x="70" y="148" width="430" height="120" fill="#232833" />
            <rect x="70" y="148" width="430" height="8" fill="#eae7de" />
            <ellipse cx="200" cy="158" rx="30" ry="6" fill="#b8916c" opacity="0.8" />

            {/* water path from a weak point to the ceiling */}
            <path d="M176 100c0 20 6 30 10 46s8 8 14 10" fill="none" stroke="#4a9797" strokeWidth="2" className="fs-flow" />

            {/* labels */}
            <g fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1.2" fill="#8e97a8">
              <text x="80" y="124">STRUCTURE</text>
              <text x="320" y="96" fill="#14181f">SURFACE</text>
              <text x="320" y="121" fill="#8fc4c4">↑ WATERPROOFING</text>
              <text x="80" y="200">INTERIOR</text>
              <text x="236" y="178" fill="#d9bfa0">STAIN MAY APPEAR AWAY FROM SOURCE</text>
            </g>

            {weakPoints.map((w) => (
              <g key={w.n}>
                <circle cx={w.x} cy={w.y - 24} r="10" fill="#14181f" stroke="#e0b28a" strokeWidth="1.5" />
                <text x={w.x} y={w.y - 20} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fill="#e0b28a">
                  {w.n}
                </text>
                <path d={`M${w.x} ${w.y - 14}V${w.y - 2}`} stroke="#e0b28a" strokeWidth="1" />
              </g>
            ))}
          </svg>
          <figcaption className="mt-4">
            <ol className="grid gap-2 text-sm text-ink-300 sm:grid-cols-2">
              {weakPoints.map((w) => (
                <li key={w.n} className="flex gap-2">
                  <span className="font-mono text-ember-500">{w.n}</span>
                  {w.label}
                </li>
              ))}
            </ol>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
