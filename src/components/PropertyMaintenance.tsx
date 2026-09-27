import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/site-config";

const modes = [
  {
    title: "Scheduled maintenance",
    body: "Recurring visits to check on the property and handle small issues before they grow.",
  },
  {
    title: "Inspection-based maintenance",
    body: "A visit focused on identifying what needs attention, ahead of any repair work.",
  },
  {
    title: "Recurring property support",
    body: "Ongoing support for landlords and property managers across one or more properties.",
  },
];

export default function PropertyMaintenance() {
  return (
    <section id="property-maintenance" className="bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-lg">
            <p className="section-label">Property maintenance</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              Not everything needs fixing today. Some things need looking
              after.
            </h2>
            <p className="mt-4 text-ink-700">
              For villas, apartments, rental properties and residential
              buildings, ongoing care reduces how often something turns into
              an urgent repair. This applies whether you live in the
              property, rent it out, or manage it on someone else&rsquo;s
              behalf.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link
                href="/property-maintenance/"
                className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
              >
                See How Property Maintenance Works
              </Link>
              <a
                href={buildWhatsAppLink(
                  "Hello Dammam Home Solutions, I'd like to ask about property maintenance for: "
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring text-sm font-semibold text-ink-800 underline underline-offset-4 hover:text-rust-700"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 sm:grid-cols-3">
            {modes.map((mode) => (
              <div key={mode.title} className="bg-sand-50 p-6">
                <h3 className="font-serif text-base text-ink-950">{mode.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{mode.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
