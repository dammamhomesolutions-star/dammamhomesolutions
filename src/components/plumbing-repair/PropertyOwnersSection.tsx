import { buildWhatsAppLink } from "@/lib/site-config";

const points = [
  "Recurring plumbing problems across a property",
  "Tenant-reported leaks that need a response",
  "Multiple repair items on the same visit",
  "Coordinating maintenance rather than one-off calls",
];

export default function PropertyOwnersSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-lg">
          <p className="section-label text-teal-700">Landlords &amp; property managers</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            One property rarely has only one maintenance issue.
          </h2>
          <p className="mt-4 text-ink-700">
            If you&rsquo;re managing a rental property or a portfolio of
            them, plumbing issues tend to show up alongside other repair
            and maintenance needs rather than in isolation.
          </p>
        </div>

        <div className="rounded-2xl border border-ink-900/10 bg-sand-100/70 p-7">
          <ul className="space-y-3 text-sm text-ink-700">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-600" />
                {p}
              </li>
            ))}
          </ul>
          <a
            href={buildWhatsAppLink(
              "Hello Dammam Home Solutions, I manage a rental property and would like to discuss maintenance."
            )}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Discuss Property Maintenance
          </a>
        </div>
      </div>
    </section>
  );
}
