import { pcInspectFor, pcProcess } from "@/lib/pest-control";
import PcIcon from "./PcIcon";
import PcCtas from "./PcCtas";

export default function PcInspection() {
  return (
    <section id="process" aria-label="Inspection and process" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="section-label !text-moss-700">Inspection</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Why inspection comes before treatment</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Treatment chosen without knowing the pest or its source is
            guesswork. The inspection is the diagnostic step — it decides
            what is treated, where, and what needs to change afterwards.
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">What we look for</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-ink-800">
            {pcInspectFor.map((i) => (
              <li key={i} className="flex gap-2">
                <PcIcon name="search" className="mt-0.5 h-4 w-4 flex-none text-moss-700" />
                {i}
              </li>
            ))}
          </ul>
        </div>

        <figure className="lg:col-span-7">
          <svg viewBox="0 0 520 260" className="h-auto w-full" role="img" aria-labelledby="pc-insp-title">
            <title id="pc-insp-title">A magnifying glass moving along a wall and floor, revealing a gap at a pipe, moisture under a sink and droppings in a corner</title>
            <rect x="0" y="0" width="520" height="260" rx="20" fill="#eaeee0" />
            {/* wall + floor */}
            <rect x="20" y="20" width="480" height="180" fill="#faf8f4" />
            <rect x="20" y="200" width="480" height="40" fill="#ded2ba" />
            {/* sink cabinet, with moisture underneath */}
            <path d="M60 200v-70h120v70M60 130h120" fill="none" stroke="#5f7050" strokeWidth="2" />
            <ellipse cx="120" cy="198" rx="34" ry="5" fill="#7fa0b0" opacity="0.7" />
            {/* pipe with a gap where it enters the wall */}
            <path d="M300 60v140" stroke="#b4bac6" strokeWidth="8" />
            <path d="M288 118h24M288 126h24" stroke="#2c3524" strokeWidth="2" />
            {/* crack */}
            <path d="M380 80l-8 16 6 10-6 12" fill="none" stroke="#2c3524" strokeWidth="1.5" />
            {/* droppings in the corner */}
            <g fill="#2c3524">
              <circle cx="440" cy="212" r="2" /><circle cx="448" cy="216" r="2" /><circle cx="434" cy="218" r="2" />
            </g>
            {/* numbered findings */}
            <g fontFamily="ui-monospace, monospace" fontSize="9" fill="#374330">
              <text x="70" y="226">MOISTURE</text>
              <text x="316" y="112">GAP</text>
              <text x="390" y="78">CRACK</text>
              <text x="410" y="236">DROPPINGS</text>
            </g>
            {/* sweeping lens */}
            <g className="pc-sweep">
              <circle cx="100" cy="80" r="46" fill="#dbe1cd" opacity="0.35" stroke="#2c3524" strokeWidth="4" />
              <path d="M133 113l26 26" stroke="#2c3524" strokeWidth="10" strokeLinecap="round" />
            </g>
          </svg>
          <figcaption className="mt-2 text-[11px] uppercase tracking-[0.14em] text-ink-500">
            What the lens finds: moisture, a pipe gap, a crack, droppings
          </figcaption>
        </figure>

        <div className="lg:col-span-12">
          <h2 className="mt-6 font-serif text-3xl tracking-tight text-ink-950">How our pest control process works</h2>
          <ol className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            <span aria-hidden="true" className="absolute left-6 right-6 top-6 hidden h-px bg-moss-600/40 lg:block" />
            {pcProcess.map((s, i) => (
              <li key={s.title} className="group relative">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-moss-600/50 bg-sand-50 text-moss-800">
                  <PcIcon name={s.icon} className="h-5 w-5" />
                </span>
                <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-ink-400">STEP {i + 1}</p>
                <h3 className="mt-1 text-base font-semibold text-ink-950">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-ink-600">The exact process depends on the pest, the property and the conditions found.</p>
          <PcCtas className="mt-6" />
        </div>
      </div>
    </section>
  );
}
