import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function AboutFinalCta() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="overflow-hidden rounded-3xl border border-ink-900/10 bg-sand-100/70 p-8 text-center sm:p-12">
          <p className="section-label mx-auto">Have a property issue?</p>
          <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Tell us what&rsquo;s going on and we&rsquo;ll take it from there.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a repair. Here's what's happening: ")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring inline-flex items-center rounded-full bg-rust-700 px-7 py-3.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              WhatsApp Dammam Home Solutions
            </a>
            <Link
              href="/contact-us/"
              className="focus-ring text-sm font-semibold text-ink-800 underline underline-offset-4 hover:text-rust-700"
            >
              See all contact options
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
