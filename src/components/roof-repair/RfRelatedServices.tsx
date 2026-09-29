import Link from "next/link";

export default function RfRelatedServices() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          A rooftop concern sometimes overlaps with other work around the
          property. Dedicated waterproofing work falls under{" "}
          <Link href="/waterproofing/" className="focus-ring font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
            waterproofing
          </Link>
          , and a leak that seems to originate inside the property may
          connect with{" "}
          <Link href="/plumbing-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
            plumbing
          </Link>
          . A stain or damage on the ceiling itself is covered by{" "}
          <Link href="/ceiling-gypsum-board-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
            ceiling &amp; gypsum board repair
          </Link>
          , and marks on a wall may fall under{" "}
          <Link href="/painting-wall-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
            painting &amp; wall repair
          </Link>
          . A wider set of issues across the property is covered by{" "}
          <Link href="/property-maintenance/" className="focus-ring font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
            property maintenance
          </Link>
          , and urgent situations are handled under{" "}
          <Link href="/emergency-home-repairs/" className="focus-ring font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
            emergency home repairs
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
