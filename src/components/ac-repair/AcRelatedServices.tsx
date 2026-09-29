import Link from "next/link";

export default function AcRelatedServices() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          An AC problem sometimes connects to other systems in the property.
          A fault behind a unit&rsquo;s power supply may fall under{" "}
          <Link href="/electrical-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-sky-600 decoration-2 underline-offset-4 hover:text-sky-700">
            electrical repair
          </Link>
          . A sudden failure that needs an urgent response is covered by{" "}
          <Link href="/emergency-home-repairs/" className="focus-ring font-semibold text-ink-950 underline decoration-sky-600 decoration-2 underline-offset-4 hover:text-sky-700">
            emergency home repairs
          </Link>
          . Ongoing upkeep across the property falls under{" "}
          <Link href="/property-maintenance/" className="focus-ring font-semibold text-ink-950 underline decoration-sky-600 decoration-2 underline-offset-4 hover:text-sky-700">
            property maintenance
          </Link>
          , and unrelated household issues are covered by{" "}
          <Link href="/general-home-repairs/" className="focus-ring font-semibold text-ink-950 underline decoration-sky-600 decoration-2 underline-offset-4 hover:text-sky-700">
            general home repairs
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
