import Link from "next/link";
import { rrLeakSources } from "@/lib/roof-replacement";

export default function RrLeakNotReplace() {
  return (
    <section aria-labelledby="rr-leak" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="section-label !text-teal-300">Before you replace anything</p>
          <h2 id="rr-leak" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
            A roof leak doesn&rsquo;t always mean you need a new roof
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            One leak usually has one source. The right fix depends on the
            condition of the whole roof system, not just the spot that let
            water in. A leak can come from any of these:
          </p>
          <ol className="mt-6 space-y-2.5">
            {rrLeakSources.map((s, i) => (
              <li key={s.label} className="flex items-start gap-3 text-sm text-sand-100">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-teal-300/60 font-mono text-[11px] text-teal-300">
                  {i + 1}
                </span>
                {s.label}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-relaxed text-ink-300">
            The last one matters: stains are sometimes caused by plumbing or AC
            drain lines.{" "}
            <Link href="/water-leak-repair/" className="focus-ring rounded-sm font-semibold text-sand-50 underline decoration-teal-500 decoration-2 underline-offset-4 hover:text-teal-300">
              Water leak detection
            </Link>{" "}
            can rule those out first.
          </p>
        </div>

        <figure className="lg:col-span-7">
          <svg viewBox="0 0 500 240" className="h-auto w-full" role="img" aria-labelledby="rr-leak-title">
            <title id="rr-leak-title">Section through a flat roof showing seven common, localized leak sources</title>
            <rect x="40" y="96" width="420" height="40" fill="#232833" stroke="#4a5468" />
            <path d="M40 96h420" stroke="#9a968a" strokeWidth="4" />
            <rect x="40" y="56" width="20" height="80" fill="#333a49" stroke="#4a5468" />
            <rect x="440" y="76" width="20" height="60" fill="#333a49" stroke="#4a5468" />
            <path d="M146 96V62M150 62h-8" stroke="#8e97a8" strokeWidth="4" strokeLinecap="round" />
            <rect x="350" y="96" width="22" height="10" fill="#14181f" />
            <path d="M361 106v34" stroke="#4a5468" strokeWidth="5" />
            <path d="M300 96c20-6 40-6 60 0" fill="#4a9797" opacity="0.6" />
            <path d="M40 136v80h420v-80" fill="none" stroke="#4a5468" strokeDasharray="4 5" />
            <path d="M250 150h80v20h-80z" fill="none" stroke="#69748a" />
            <text x="254" y="164" fontFamily="ui-monospace, monospace" fontSize="8" fill="#8e97a8">AC DRAIN</text>
            {rrLeakSources.map((s, i) => (
              <g key={s.label}>
                <circle cx={s.x} cy={s.y} r="11" fill="#14181f" stroke="#8fc4c4" strokeWidth="1.5" />
                <text x={s.x} y={s.y + 4} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fill="#8fc4c4">
                  {i + 1}
                </text>
              </g>
            ))}
          </svg>
          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-400">
            Illustrative section — numbers match the list
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
