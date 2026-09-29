import Link from "next/link";

export default function WlRelatedServices() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          A water leak sometimes overlaps with other work around the
          property. Everyday plumbing issues fall under{" "}
          <Link href="/plumbing-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-copper-600 decoration-2 underline-offset-4 hover:text-copper-700">
            plumbing
          </Link>
          , and dedicated protection against water ingress is covered by{" "}
          <Link href="/waterproofing/" className="focus-ring font-semibold text-ink-950 underline decoration-copper-600 decoration-2 underline-offset-4 hover:text-copper-700">
            waterproofing
          </Link>
          . If the source turns out to be the rooftop rather than plumbing,{" "}
          <Link href="/roof-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-copper-600 decoration-2 underline-offset-4 hover:text-copper-700">
            roof &amp; rooftop repair
          </Link>{" "}
          can help. A stain on the ceiling itself is covered by{" "}
          <Link href="/ceiling-gypsum-board-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-copper-600 decoration-2 underline-offset-4 hover:text-copper-700">
            ceiling &amp; gypsum board repair
          </Link>
          , and marks on a wall may fall under{" "}
          <Link href="/painting-wall-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-copper-600 decoration-2 underline-offset-4 hover:text-copper-700">
            painting &amp; wall repair
          </Link>
          . A wider set of issues across the property is covered by{" "}
          <Link href="/property-maintenance/" className="focus-ring font-semibold text-ink-950 underline decoration-copper-600 decoration-2 underline-offset-4 hover:text-copper-700">
            property maintenance
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
