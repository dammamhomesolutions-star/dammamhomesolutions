import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";
import WhIcon from "./WhIcon";

export default function WhFinalCta() {
  return (
    <section aria-labelledby="wh-final" className="relative overflow-hidden bg-ink-950 py-24 text-sand-50 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(199,106,63,0.25), transparent)" }}
      />
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="wh-final" className="font-serif text-3xl tracking-tight sm:text-5xl">Not sure whether to repair or replace your water heater?</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-300">
          Tell us what your heater is doing, where it&rsquo;s installed and what
          type of system you have. We&rsquo;ll help you understand the next step.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="#heater-service" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-ember-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
            Request an Inspection
            <WhIcon name="arrow" className="h-4 w-4" />
          </a>
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10">
            <WhIcon name="phone" className="h-4 w-4" />
            Call
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to talk about my water heater.")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10"
          >
            WhatsApp Dammam Home Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
