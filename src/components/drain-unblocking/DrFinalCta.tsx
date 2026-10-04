import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";
import DrIcon from "./DrIcon";

export default function DrFinalCta() {
  return (
    <section aria-labelledby="dr-final" className="relative overflow-hidden bg-teal-900 py-24 text-sand-50 sm:py-28">
      <svg viewBox="0 0 1200 120" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full opacity-30" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 70h1200" stroke="#8fc4c4" strokeWidth="24" />
        <path className="fs-flow" d="M0 70h1200" stroke="#e0f0f0" strokeWidth="2" />
      </svg>
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="dr-final" className="font-serif text-3xl tracking-tight sm:text-5xl">Blocked drain or bigger sewer problem? Let&rsquo;s find out.</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-teal-100">
          Tell us which drains are affected, what you&rsquo;re seeing, and
          whether the problem keeps returning. We&rsquo;ll help work out the
          right next step.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="#drain-service" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-teal-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
            Request Drain Service
            <DrIcon name="arrow" className="h-4 w-4" />
          </a>
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10">
            <DrIcon name="phone" className="h-4 w-4" />
            Call
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to talk about a drain problem.")}
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
