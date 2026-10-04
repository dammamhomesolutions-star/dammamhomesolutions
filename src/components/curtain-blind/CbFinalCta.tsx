import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";
import CbIcon from "./CbIcon";

export default function CbFinalCta() {
  return (
    <section aria-labelledby="cb-final" className="relative overflow-hidden bg-clay-900 py-24 text-sand-50 sm:py-28">
      <svg viewBox="0 0 300 300" className="pointer-events-none absolute -right-8 top-0 h-full w-auto opacity-20" aria-hidden="true">
        <rect x="20" y="10" width="260" height="6" fill="#d9bfa0" />
        <g className="lt-sway" style={{ transformOrigin: "60px 16px" }}>
          <path d="M24 16h70c-6 100-6 200 4 284H20c8-90 8-190 4-284z" fill="#d9bfa0" />
        </g>
        <g className="lt-sway [animation-delay:1.5s]" style={{ transformOrigin: "240px 16px" }}>
          <path d="M206 16h70c-4 94-4 194 4 284h-78c-6-94-6-190 4-284z" fill="#d9bfa0" />
        </g>
      </svg>
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="cb-final" className="font-serif text-3xl tracking-tight sm:text-5xl">Need curtains or blinds installed?</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-clay-100">
          Tell us what type of window covering you have, how many windows need
          installation, and whether you&rsquo;re replacing existing hardware or
          starting from scratch.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="#curtain-request" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-clay-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
            Request Installation
            <CbIcon name="arrow" className="h-4 w-4" />
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of windows for curtain / blind installation.")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10"
          >
            Send Window Photos
          </a>
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10">
            <CbIcon name="phone" className="h-4 w-4" />
            Call
          </a>
        </div>
      </div>
    </section>
  );
}
