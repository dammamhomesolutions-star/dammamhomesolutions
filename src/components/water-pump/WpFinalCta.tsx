import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";
import WpIcon from "./WpIcon";

export default function WpFinalCta() {
  return (
    <section aria-labelledby="wp-final" className="relative overflow-hidden bg-glass-900 py-24 text-sand-50 sm:py-28">
      <svg viewBox="0 0 1200 120" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full opacity-30" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 70h1200" stroke="#7fa0b0" strokeWidth="24" />
        <path className="fs-flow" d="M0 70h1200" stroke="#eef3f5" strokeWidth="2" />
      </svg>
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="wp-final" className="font-serif text-3xl tracking-tight sm:text-5xl">Low water pressure? Let&rsquo;s find out whether the pump is really the problem.</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-glass-100">
          Tell us what your pump is doing, which areas are affected and what
          type of property you have. We&rsquo;ll help you understand the right
          next step.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="#pump-service" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-glass-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
            Request an Inspection
            <WpIcon name="arrow" className="h-4 w-4" />
          </a>
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10">
            <WpIcon name="phone" className="h-4 w-4" />
            Call
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to talk about my water pump.")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10"
          >
            Talk to Dammam Home Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
