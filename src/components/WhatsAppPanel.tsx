import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";

const sendItems = [
  "What is wrong?",
  "Your Dammam location",
  "Photos or video, if useful",
  "Preferred time",
];

export default function WhatsAppPanel() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="overflow-hidden rounded-3xl border border-ink-900/10 bg-sand-100/70">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="section-label">Get in touch</p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
                Need something fixed?
              </h2>
              <p className="mt-4 text-ink-700">
                WhatsApp is the quickest way to reach us. Send us the
                following and we&rsquo;ll follow up from there:
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
              {siteConfig.phoneDisplay && (
                <p className="text-sm text-ink-600">
                  Or call{" "}
                  <a href={buildTelLink()} className="focus-ring rounded-sm font-medium text-ink-900 underline">
                    {siteConfig.phoneDisplay}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
