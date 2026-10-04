import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";
import FaIcon from "./FaIcon";

export default function FaFinalCta() {
  return (
    <section aria-labelledby="fa-final" className="relative overflow-hidden bg-walnut-900 py-24 text-sand-50 sm:py-28">
      <svg viewBox="0 0 400 200" className="pointer-events-none absolute -bottom-6 right-0 h-48 w-auto opacity-20" aria-hidden="true">
        <path d="M40 60l80-32 80 32v100l-80 32-80-32z" fill="none" stroke="#cdab8f" strokeWidth="3" />
        <path d="M40 60l80 32 80-32M120 92v100" fill="none" stroke="#cdab8f" strokeWidth="3" />
        <rect x="240" y="20" width="120" height="180" fill="none" stroke="#cdab8f" strokeWidth="3" />
        <path d="M300 20v180" stroke="#cdab8f" strokeWidth="3" />
      </svg>
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="fa-final" className="font-serif text-3xl tracking-tight sm:text-5xl">Need furniture assembled?</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-walnut-100">
          Tell us what furniture you have, how many items need assembly, and
          whether it&rsquo;s new, flat-packed or being reassembled after a move.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="#assembly-request" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-walnut-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
            Request Furniture Assembly
            <FaIcon name="arrow" className="h-4 w-4" />
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of furniture I need assembled.")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10"
          >
            Send Furniture Photos
          </a>
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10">
            <FaIcon name="phone" className="h-4 w-4" />
            Call
          </a>
        </div>
      </div>
    </section>
  );
}
