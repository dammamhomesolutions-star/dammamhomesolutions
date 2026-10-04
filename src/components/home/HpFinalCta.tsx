import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";

export default function HpFinalCta() {
  return (
    <section aria-labelledby="hp-final" className="bg-ink-950 py-20 text-sand-50 sm:py-28">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 id="hp-final" className="font-serif text-4xl tracking-tight sm:text-6xl">Something at home needs fixing?</h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-300 sm:text-base">
            Send a photo and a short description on WhatsApp, or call us. We&rsquo;re
            available 24/7 across Dammam, Al Khobar, Dhahran and Qatif.
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:col-span-5">
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like a quote. Here's the problem: ")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-rust-700 px-7 py-4 text-sm font-semibold text-sand-50 hover:bg-rust-600"
          >
            Get a Quote on WhatsApp
          </a>
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center rounded-full border border-sand-50/30 px-7 py-4 text-sm font-semibold hover:bg-sand-50/10">
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
