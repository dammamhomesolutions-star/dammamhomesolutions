import { buildTelLink } from "@/lib/site-config";
import SpCtas from "./SpCtas";
import SpIcon from "./SpIcon";

export default function SpFinalCta() {
  return (
    <section aria-labelledby="sp-final" className="relative overflow-hidden bg-ink-950 py-24 text-sand-50 sm:py-32">
      <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="sp-final-caustic" width="160" height="90" patternUnits="userSpaceOnUse">
            <path d="M0 45c26-20 54-20 80 0s54 20 80 0M-10 0c26 20 54 20 80 0s54-20 80 0" stroke="#8fc4c4" strokeWidth="2" fill="none" opacity="0.18" />
          </pattern>
        </defs>
        <rect width="1440" height="400" fill="#0f3a3a" />
        <g className="sp-caustic"><rect x="-40" y="-20" width="1520" height="440" fill="url(#sp-final-caustic)" /></g>
      </svg>
      <div className="container-edge relative max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal-300">Ready when you are</p>
        <h2 id="sp-final" className="mt-4 font-serif text-3xl tracking-tight sm:text-6xl">Get your pool back to inviting</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-teal-100">
          Tell us what&rsquo;s changed — water, equipment, surface or lights — and
          we&rsquo;ll assess the pool, explain whether it needs repair or routine
          maintenance, and quote before any work.
        </p>
        <div className="mt-9 flex justify-center"><SpCtas /></div>
        <a href={buildTelLink()} className="focus-ring mt-4 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-teal-100 underline underline-offset-4 hover:text-sand-50">
          <SpIcon name="phone" className="h-4 w-4" />
          Or call us
        </a>
      </div>
    </section>
  );
}
