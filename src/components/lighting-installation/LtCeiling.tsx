import { ltCeilings } from "@/lib/lighting-installation";
import LtIcon from "./LtIcon";

const highPoints = ["Fixture weight", "Mounting / support", "Ceiling height", "Access equipment", "Final hanging height", "Maintenance access", "Visual scale", "Room proportions"];

// Ceiling → mounting point → fixture → floor clearance.
function HighCeiling() {
  return (
    <svg viewBox="0 0 260 340" className="mx-auto h-auto w-full max-w-[260px]" role="img" aria-labelledby="lt-high-title">
      <title id="lt-high-title">{`Diagram of a chandelier on a high ceiling: the ceiling, the mounting point, the fixture and the clearance down to the floor`}</title>
      <rect width="260" height="340" fill="#f3e4d1" />
      <rect width="260" height="22" fill="#a8662a" />
      <rect x="112" y="22" width="36" height="8" fill="#4a2f18" />
      <g className="lt-sway" style={{ transformOrigin: "130px 30px" }}>
        <path d="M130 30v70" stroke="#4a2f18" strokeWidth="2" />
        <path d="M90 118a40 14 0 0 0 80 0" fill="none" stroke="#4a2f18" strokeWidth="3" />
        <path d="M130 100v18M90 118v-12M170 118v-12M108 124v-12M152 124v-12" stroke="#4a2f18" strokeWidth="2.5" />
        <circle cx="90" cy="104" r="4" fill="#d69a5f" />
        <circle cx="170" cy="104" r="4" fill="#d69a5f" />
        <circle cx="108" cy="110" r="4" fill="#d69a5f" />
        <circle cx="152" cy="110" r="4" fill="#d69a5f" />
        <path d="M122 132h16l-8 12z" fill="#4a2f18" />
      </g>
      <rect y="320" width="260" height="20" fill="#a8662a" />
      {/* dimension line */}
      <path d="M222 146v172" stroke="#a8662a" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M216 146h12M216 318h12" stroke="#a8662a" strokeWidth="2" />
      <text x="214" y="236" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="11" fill="#4a2f18">CLEARANCE</text>
      <text x="152" y="30" fontFamily="ui-monospace, monospace" fontSize="11" fill="#4a2f18">MOUNTING</text>
      <text x="8" y="16" fontFamily="ui-monospace, monospace" fontSize="11" fill="#f3e4d1">CEILING</text>
      <text x="40" y="160" fontFamily="ui-monospace, monospace" fontSize="11" fill="#4a2f18">FIXTURE</text>
    </svg>
  );
}

export default function LtCeiling() {
  return (
    <section id="ceilings" aria-label="Ceiling types and high ceilings" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-700">Ceilings</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Your ceiling can affect the installation</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Ceiling construction decides how a fixture is mounted, how much
            weight it can take, how cables reach it and how the ceiling is
            finished afterwards.
          </p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ltCeilings.map((c) => (
            <div key={c.name} className="rounded-2xl border border-ink-900/10 p-5 transition-colors hover:border-ember-600">
              <h3 className="font-semibold text-ink-950">{c.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 rounded-2xl bg-ember-100/50 p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <LtIcon name="chandelier" className="h-8 w-8 text-ember-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">High ceilings &amp; large fixtures need more planning</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
              We install chandeliers and heavy fixtures, including in
              double-height villa entrances. The mounting point must suit the
              fixture&rsquo;s weight, and the hanging height has to work for the
              room — not too low to walk under, not lost near the ceiling.
              Please don&rsquo;t attempt high-level electrical work yourself.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {highPoints.map((p) => (
                <li key={p} className="flex items-center gap-2 rounded-xl bg-sand-50 px-3 py-2 text-sm text-ink-800">
                  <LtIcon name="check" className="h-4 w-4 flex-none text-ember-700" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <HighCeiling />
          </div>
        </div>
      </div>
    </section>
  );
}
