import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";
import MgIcon from "./MgIcon";
import MgSlab from "./MgSlab";

export default function MgFinalCta() {
  return (
    <section aria-labelledby="mg-final" className="relative overflow-hidden bg-concrete-900 py-24 text-sand-50 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-15">
        <MgSlab uid="final" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="mg-sheen absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="mg-final" className="font-serif text-3xl tracking-tight sm:text-5xl">Book a marble &amp; granite assessment</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-concrete-100">
          Tell us what the stone is, where it is and what you&rsquo;re seeing.
          We&rsquo;ll tell you honestly whether it needs cleaning, polishing,
          restoration or repair.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="#stone-request" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-concrete-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
            Book a Marble &amp; Granite Assessment
            <MgIcon name="arrow" className="h-4 w-4" />
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of marble / granite for an assessment.")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10"
          >
            WhatsApp Photos
          </a>
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10">
            <MgIcon name="phone" className="h-4 w-4" />
            Call
          </a>
        </div>
      </div>
    </section>
  );
}
