import Link from "next/link";

export default function TrRelatedServices() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          Tile and grout problems sometimes point to something else.
          Plumbing and fixtures in wet areas fall under{" "}
          <Link href="/bathroom-kitchen-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-stone-600 decoration-2 underline-offset-4 hover:text-stone-700">
            bathroom &amp; kitchen repair
          </Link>
          . Damage that extends beyond the tiled surface itself is covered by{" "}
          <Link href="/flooring-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-stone-600 decoration-2 underline-offset-4 hover:text-stone-700">
            flooring repair &amp; surface restoration
          </Link>
          , and moisture behind discoloured or failing grout falls under{" "}
          <Link href="/waterproofing/" className="focus-ring font-semibold text-ink-950 underline decoration-stone-600 decoration-2 underline-offset-4 hover:text-stone-700">
            waterproofing
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
