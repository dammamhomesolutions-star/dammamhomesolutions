import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";
import ApIcon from "./ApIcon";

export default function ApFinalCta() {
  return (
    <section aria-labelledby="ap-final" className="relative overflow-hidden bg-copper-900 py-24 text-sand-50 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border-[28px] border-copper-700/40" />
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="ap-final" className="font-serif text-3xl tracking-tight sm:text-5xl">Appliance acting up? Let&rsquo;s find out what&rsquo;s actually wrong.</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-copper-100">
          Send us the appliance, brand, model and what it&rsquo;s doing.
          We&rsquo;ll tell you whether a visit makes sense and what to expect.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="#appliance-service" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-copper-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
            Book Appliance Repair
            <ApIcon name="arrow" className="h-4 w-4" />
          </a>
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10">
            <ApIcon name="phone" className="h-4 w-4" />
            Call
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to talk about an appliance repair.")}
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
