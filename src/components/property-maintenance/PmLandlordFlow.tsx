import { buildWhatsAppLink } from "@/lib/site-config";

const flowSteps = ["Property", "Issues", "Photos", "Priorities", "Maintenance work"];

export default function PmLandlordFlow() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div className="max-w-md">
            <p className="section-label !text-moss-700">Landlords &amp; property managers</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              Managing more than one property?
            </h2>
            <p className="mt-4 leading-relaxed text-ink-600">
              For landlords, rental-property owners and property managers,
              you can send several property concerns together instead of
              one message per issue.
            </p>
            <a
              href={buildWhatsAppLink(
                "Hello Dammam Home Solutions, I manage more than one property and would like to send maintenance requests. Here's the property, issues and priorities: "
              )}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring mt-6 inline-flex items-center rounded-full border border-ink-900/20 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:border-moss-700 hover:text-moss-700"
            >
              Send Multiple Property Concerns
            </a>
          </div>

          <div>
            <div
              aria-label="Suggested workflow"
              className="flex flex-wrap items-center gap-x-3 gap-y-4"
            >
              {flowSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-full border border-ink-900/15 bg-sand-100/70 px-4 py-2 text-sm font-medium text-ink-800">
                    {step}
                  </span>
                  {i < flowSteps.length - 1 && (
                    <span aria-hidden="true" className="text-ink-400">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-ink-500">
              This is a practical way to organise a message, not a formal
              facility-management service. We don&rsquo;t currently offer
              guaranteed response times, scheduled maintenance
              contracts or a dedicated account manager — if that changes,
              this page will say so.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
