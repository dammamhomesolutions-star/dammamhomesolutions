import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";
import CvIcon from "./CvIcon";

export default function CvFinalCta() {
  return (
    <section aria-labelledby="cv-final" className="relative overflow-hidden bg-moss-900 py-24 text-sand-50 sm:py-28">
      <svg viewBox="0 0 400 200" className="pointer-events-none absolute -right-10 -top-6 h-64 w-auto opacity-25" aria-hidden="true">
        <g className="cv-pan" style={{ transformOrigin: "360px 20px" }}>
          <path d="M360 20L120 200h160z" fill="#dbe1cd" />
        </g>
      </svg>
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="cv-final" className="font-serif text-3xl tracking-tight sm:text-5xl">Not sure what security system your property needs?</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-moss-200">
          Tell us about your property, the areas you want to monitor, and
          whether you need visitor communication. We&rsquo;ll help you understand
          the right system to consider.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="#security-plan" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-moss-200 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
            Request a Security Assessment
            <CvIcon name="arrow" className="h-4 w-4" />
          </a>
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10">
            <CvIcon name="phone" className="h-4 w-4" />
            Call
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to talk about CCTV / intercom for my property.")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
