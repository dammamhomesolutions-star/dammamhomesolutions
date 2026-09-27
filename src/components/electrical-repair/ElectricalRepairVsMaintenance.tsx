import { buildWhatsAppLink } from "@/lib/site-config";

export default function ElectricalRepairVsMaintenance() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge divide-y divide-ink-900/10 border-y border-ink-900/10">
        <div className="grid gap-4 py-10 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust-600">
              Something has stopped working
            </p>
            <h3 className="mt-2 font-serif text-2xl text-ink-950">Electrical Repair</h3>
            <p className="mt-2 max-w-xl text-ink-600">
              For active electrical problems — a light, a socket, a
              breaker, or power loss in part of the property.
            </p>
          </div>
          <a
            href={buildWhatsAppLink(
              "Hello Dammam Home Solutions, I have an active electrical problem. Here's what's happening: "
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex flex-none items-center justify-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Request Electrical Repair
          </a>
        </div>

        <div className="grid gap-4 py-10 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-10">
          <div>
            <p className="section-label text-blue-700">Everything works, but the property needs attention</p>
            <h3 className="mt-2 font-serif text-2xl text-ink-950">Electrical Maintenance</h3>
            <p className="mt-2 max-w-xl text-ink-600">
              For supported preventive checks rather than an active fault.
              For ongoing property care more broadly, explore{" "}
              <a
                href="/property-maintenance/"
                className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-blue-600"
              >
                property maintenance
              </a>
              .
            </p>
          </div>
          <a
            href={buildWhatsAppLink(
              "Hello Dammam Home Solutions, I'd like to ask about electrical maintenance."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex flex-none items-center justify-center rounded-full border border-ink-900/20 px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-ink-900/5"
          >
            Ask About Maintenance
          </a>
        </div>
      </div>
    </section>
  );
}
