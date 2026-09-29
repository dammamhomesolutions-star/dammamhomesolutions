import { buildWhatsAppLink } from "@/lib/site-config";
import { landlordSteps } from "@/lib/emergency-repairs";

export default function EhLandlordFlow() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-ember-700">Landlords &amp; property managers</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Managing a property when something suddenly goes wrong?
        </h2>
        <p className="mt-4 text-ink-600">
          Useful for landlords, rental owners and property managers handling
          a sudden issue on a property they don&rsquo;t occupy themselves.
        </p>

        <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 text-[15px] font-medium text-ink-800">
          {landlordSteps.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              {step}
              {i < landlordSteps.length - 1 && (
                <span aria-hidden="true" className="text-ink-400">
                  →
                </span>
              )}
            </span>
          ))}
        </p>

        <p className="mt-6 text-sm text-ink-500">
          This is a practical way to organise a request, not a formal
          emergency property-management contract — we don&rsquo;t currently
          offer guaranteed SLAs or 24/7 coverage unless stated elsewhere.
        </p>

        <a
          href={buildWhatsAppLink("Hello Dammam Home Solutions, I manage a property and need to report a sudden issue. Here are the details: ")}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="focus-ring mt-6 inline-flex items-center rounded-full border border-ink-900/20 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:border-ember-600 hover:text-ember-700"
        >
          Report a Property Issue
        </a>
      </div>
    </section>
  );
}
