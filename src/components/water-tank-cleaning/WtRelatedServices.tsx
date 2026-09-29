import Link from "next/link";

export default function WtRelatedServices() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          Water tank concerns sometimes overlap with other work around the
          property. If the concern is more about water reaching the tank or
          leaking from it, that may connect with{" "}
          <Link href="/plumbing-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-mint-600 decoration-2 underline-offset-4 hover:text-mint-700">
            plumbing
          </Link>{" "}
          or{" "}
          <Link href="/water-leak-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-mint-600 decoration-2 underline-offset-4 hover:text-mint-700">
            water leak detection &amp; repair
          </Link>
          . Protecting a rooftop tank enclosure from water damage falls
          under{" "}
          <Link href="/waterproofing/" className="focus-ring font-semibold text-ink-950 underline decoration-mint-600 decoration-2 underline-offset-4 hover:text-mint-700">
            waterproofing
          </Link>
          , and a wider set of issues across the property is covered by{" "}
          <Link href="/property-maintenance/" className="focus-ring font-semibold text-ink-950 underline decoration-mint-600 decoration-2 underline-offset-4 hover:text-mint-700">
            property maintenance
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
