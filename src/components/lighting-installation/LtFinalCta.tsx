import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";
import LtIcon from "./LtIcon";

export default function LtFinalCta() {
  return (
    <section aria-labelledby="lt-final" className="relative overflow-hidden bg-ink-950 py-24 text-sand-50 sm:py-28">
      <svg viewBox="0 0 200 300" className="pointer-events-none absolute left-1/2 top-0 h-full w-auto -translate-x-1/2 opacity-30" aria-hidden="true">
        <defs>
          <linearGradient id="lt-final-cone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f6c98a" stopOpacity="0.9" />
            <stop offset="1" stopColor="#f6c98a" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path className="lt-beam" d="M90 0h20l90 300H0z" fill="url(#lt-final-cone)" />
      </svg>
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="lt-final" className="font-serif text-3xl tracking-tight sm:text-5xl">Need a light fixture installed?</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-300">
          Tell us what you want installed, where it will go, and whether
          you&rsquo;re replacing an existing fixture or planning a new lighting
          point.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="#lighting-request" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-ember-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
            Request Lighting Installation
            <LtIcon name="arrow" className="h-4 w-4" />
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos and details for a lighting installation.")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10"
          >
            Send Photos &amp; Details
          </a>
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10">
            <LtIcon name="phone" className="h-4 w-4" />
            Call
          </a>
        </div>
      </div>
    </section>
  );
}
