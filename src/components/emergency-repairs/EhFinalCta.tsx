import { buildWhatsAppLink } from "@/lib/site-config";

export default function EhFinalCta() {
  return (
    <section id="contact" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="rounded-md border border-ink-900/10 bg-sand-100/50 px-6 py-14 text-center sm:px-16 sm:py-16">
          <h2 className="mx-auto max-w-xl font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Something went wrong? Tell us what happened.
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-ink-600">
            Choose the problem, tell us where it happened, and send a photo
            if useful. We&rsquo;ll help direct your request to the
            appropriate repair service.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <a
              href="#what-happened"
              className="focus-ring inline-flex items-center rounded-full bg-ember-600 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
            >
              Start Repair Request
            </a>
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, something has come up at my property. Here's what happened: ")}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring text-sm font-semibold text-ink-800 underline underline-offset-4 hover:text-ember-700"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
