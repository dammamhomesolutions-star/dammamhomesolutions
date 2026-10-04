import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";
import FcIcon from "./FcIcon";

export default function FcFinalCta() {
  return (
    <section aria-labelledby="fc-final" className="relative overflow-hidden bg-glass-900 py-24 text-sand-50 sm:py-28">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full opacity-25" aria-hidden="true">
        <path d="M0 20h1200" stroke="#7fa0b0" strokeWidth="40" />
        <path d="M0 50h200v24h800V50h200" stroke="#b8ccd4" strokeWidth="4" fill="none" />
        <path className="lt-beam" d="M200 70c100-20 200-26 400-26s300 6 400 26" stroke="#f6dfb4" strokeWidth="6" fill="none" />
      </svg>
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="fc-final" className="font-serif text-3xl tracking-tight sm:text-5xl">Planning a new ceiling?</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-glass-200">
          Tell us which room you&rsquo;re upgrading, what type of ceiling you
          want, and whether lighting, AC or other services need to be
          coordinated within the design.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="#ceiling-request" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-glass-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
            Request a Ceiling Assessment
            <FcIcon name="arrow" className="h-4 w-4" />
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of a ceiling for a false ceiling assessment.")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10"
          >
            Send Ceiling Photos
          </a>
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10">
            <FcIcon name="phone" className="h-4 w-4" />
            Call
          </a>
        </div>
      </div>
    </section>
  );
}
