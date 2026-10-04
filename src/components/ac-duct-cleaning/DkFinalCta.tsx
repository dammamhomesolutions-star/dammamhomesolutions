import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";
import DkIcon from "./DkIcon";

export default function DkFinalCta() {
  return (
    <section aria-labelledby="dk-final" className="relative overflow-hidden bg-ink-950 py-24 text-sand-50 sm:py-28">
      <svg viewBox="0 0 1200 200" className="pointer-events-none absolute inset-x-0 top-0 h-32 w-full opacity-30" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 60h1200" stroke="#666f78" strokeWidth="30" />
        <path className="fs-flow" d="M0 60h1200" stroke="#c98246" strokeWidth="2" />
        <path d="M300 75v80M900 75v80" stroke="#666f78" strokeWidth="20" />
      </svg>
      <div className="container-edge relative max-w-3xl text-center">
        <p className="section-label !text-copper-300">Not sure if your ducts need cleaning?</p>
        <h2 id="dk-final" className="mt-4 font-serif text-3xl tracking-tight sm:text-5xl">Cleaner ducts start with knowing what&rsquo;s actually inside them</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-300">
          You don&rsquo;t need to guess. Send us a few details about the
          property and what you&rsquo;re noticing, and we&rsquo;ll help you
          understand what to check.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#duct-quote"
            className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full bg-copper-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Request a Quote
            <DkIcon name="arrow" className="h-4 w-4" />
          </a>
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10">
            <DkIcon name="phone" className="h-4 w-4" />
            Call
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to talk about AC duct cleaning.")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10"
          >
            Talk to Dammam Home Solutions on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
