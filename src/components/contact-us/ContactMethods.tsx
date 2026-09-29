import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

const sendItems = [
  "What is wrong?",
  "Your Dammam location",
  "Photos or video, if useful",
  "Preferred time",
];

export default function ContactMethods() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="overflow-hidden rounded-3xl border border-ink-900/10 bg-sand-100/70">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="section-label">WhatsApp</p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
                The quickest way to reach us.
              </h2>
              <p className="mt-4 text-ink-700">
                Send us the following and we&rsquo;ll follow up from there:
              </p>

              <ul className="mt-6 space-y-2.5">
                {sendItems.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-ink-800">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-rust-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-4 rounded-2xl bg-sand-50 p-7 lg:items-center lg:text-center">
              <p className="text-sm text-ink-600 lg:max-w-xs">
                We reply on WhatsApp during working hours. This is the fastest
                way to describe your repair or maintenance need.
              </p>
              <a
                href={buildWhatsAppLink(
                  "Hello Dammam Home Solutions, I'd like to request a repair. Here's what's happening: "
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-rust-700 px-7 py-3.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02] lg:w-auto"
              >
                WhatsApp Dammam Home Solutions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-md border border-ink-900/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">WhatsApp</p>
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to get in touch.")}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-2 block text-lg font-medium text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700"
            >
              Message us
            </a>
          </div>

          {siteConfig.phoneDisplay ? (
            <div className="rounded-md border border-ink-900/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">Phone</p>
              <a href={`tel:${siteConfig.phoneDisplay}`} className="focus-ring mt-2 block text-lg font-medium text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
                {siteConfig.phoneDisplay}
              </a>
            </div>
          ) : (
            <div className="rounded-md border border-ink-900/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">Phone</p>
              <p className="mt-2 text-sm text-ink-600">Available via WhatsApp call.</p>
            </div>
          )}

          {siteConfig.email ? (
            <div className="rounded-md border border-ink-900/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="focus-ring mt-2 block text-lg font-medium text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
                {siteConfig.email}
              </a>
            </div>
          ) : (
            <div className="rounded-md border border-ink-900/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">Service area</p>
              <p className="mt-2 text-sm text-ink-600">{siteConfig.region}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
