import { buildWhatsAppLink } from "@/lib/site-config";

export default function RepairVsPropertyMaintenance() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid overflow-hidden rounded-3xl border border-ink-900/10 sm:grid-cols-2">
          <div className="p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust-600">
              Something is leaking now
            </p>
            <h2 className="mt-4 font-serif text-2xl text-ink-950 sm:text-3xl">
              Plumbing Repair
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              For active problems such as leaks, blocked drains, damaged
              fittings and water issues that need attention now.
            </p>
            <a
              href={buildWhatsAppLink(
                "Hello Dammam Home Solutions, I have an active plumbing problem. Here's what's happening: "
              )}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring mt-6 inline-flex items-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              Request Plumbing Repair
            </a>
          </div>

          <div className="border-t border-ink-900/10 bg-sand-100/60 p-8 sm:border-l sm:border-t-0 sm:p-10">
            <p className="section-label text-teal-700">Nothing is broken today</p>
            <h2 className="mt-4 font-serif text-2xl text-ink-950 sm:text-3xl">
              Property Maintenance
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              For recurring maintenance and ongoing property care, rather
              than a single active problem.
            </p>
            <a
              href="/property-maintenance/"
              className="focus-ring mt-6 inline-flex items-center rounded-full border border-ink-900/20 px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-ink-900/5"
            >
              Explore Property Maintenance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
