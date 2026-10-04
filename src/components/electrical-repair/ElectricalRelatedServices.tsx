import Link from "next/link";

export default function ElectricalRelatedServices() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          Electrical problems sometimes trace back to another system.{" "}
          <Link href="/ac-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-blue-600 decoration-2 underline-offset-4 hover:text-blue-700">
            AC repair
          </Link>{" "}
          covers faults specific to cooling units. New fixtures, chandeliers,
          downlights and outdoor lights are handled by{" "}
          <Link href="/lighting-fixture-installation-dammam/" className="focus-ring font-semibold text-ink-950 underline decoration-blue-600 decoration-2 underline-offset-4 hover:text-blue-700">
            lighting &amp; fixture installation
          </Link>
          . Anything that needs an
          urgent response falls under{" "}
          <Link href="/emergency-home-repairs/" className="focus-ring font-semibold text-ink-950 underline decoration-blue-600 decoration-2 underline-offset-4 hover:text-blue-700">
            emergency home repairs
          </Link>
          . Unrelated household problems are covered by{" "}
          <Link href="/general-home-repairs/" className="focus-ring font-semibold text-ink-950 underline decoration-blue-600 decoration-2 underline-offset-4 hover:text-blue-700">
            general home repairs
          </Link>
          , and ongoing upkeep across the property falls under{" "}
          <Link href="/property-maintenance/" className="focus-ring font-semibold text-ink-950 underline decoration-blue-600 decoration-2 underline-offset-4 hover:text-blue-700">
            property maintenance
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
