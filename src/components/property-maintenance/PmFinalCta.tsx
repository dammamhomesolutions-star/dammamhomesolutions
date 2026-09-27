import { buildWhatsAppLink } from "@/lib/site-config";

export default function PmFinalCta() {
  return (
    <section id="contact" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="rounded-md border border-ink-900/10 bg-sand-100/50 px-6 py-14 text-center sm:px-16 sm:py-16">
          <h2 className="mx-auto max-w-xl font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Know something needs attention? Start there.
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-ink-600">
            Tell us what you&rsquo;ve noticed, where it is happening, and
            send a few photos if useful. We&rsquo;ll help you work out the
            appropriate next step.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <a
              href={buildWhatsAppLink(
                "Hello Dammam Home Solutions, I'd like to request property maintenance. Here's what I've noticed: "
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              Request Property Maintenance
            </a>
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to get in touch.")}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring text-sm font-semibold text-ink-800 underline underline-offset-4 hover:text-moss-700"
            >
              WhatsApp Dammam Home Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
