import Link from "next/link";

export default function PlumbingRelatedServices() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          A plumbing issue sometimes overlaps with other work. No hot water,
          or a leaking heater, is handled under{" "}
          <Link href="/water-heater-repair-installation-dammam/" className="focus-ring font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
            water heater repair &amp; installation
          </Link>
          . When the
          source of a leak isn&rsquo;t obvious, that falls under{" "}
          <Link href="/water-leak-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
            water leak detection &amp; repair
          </Link>
          . Broader moisture and damp problems are covered by{" "}
          <Link href="/waterproofing/" className="focus-ring font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
            waterproofing
          </Link>
          . Fixtures and plumbing specific to those rooms fall under{" "}
          <Link href="/bathroom-kitchen-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
            bathroom &amp; kitchen repair
          </Link>
          , and a wider set of issues across the property is covered by{" "}
          <Link href="/property-maintenance/" className="focus-ring font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
            property maintenance
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
