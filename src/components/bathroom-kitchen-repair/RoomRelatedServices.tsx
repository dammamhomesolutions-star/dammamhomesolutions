import Link from "next/link";

export default function RoomRelatedServices() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          Bathroom and kitchen problems often connect to related work.
          Pipework and fixtures beyond these rooms fall under{" "}
          <Link href="/plumbing-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-rose-600 decoration-2 underline-offset-4 hover:text-rose-700">
            plumbing repair
          </Link>
          . Damaged or discoloured surfaces are covered by{" "}
          <Link href="/tile-repair-grout/" className="focus-ring font-semibold text-ink-950 underline decoration-rose-600 decoration-2 underline-offset-4 hover:text-rose-700">
            tile repair &amp; grout restoration
          </Link>
          . Cabinet-specific issues fall under{" "}
          <Link href="/kitchen-cabinet-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-rose-600 decoration-2 underline-offset-4 hover:text-rose-700">
            kitchen cabinet &amp; joinery repair
          </Link>
          , and a wider set of concerns across the property is covered by{" "}
          <Link href="/property-maintenance/" className="focus-ring font-semibold text-ink-950 underline decoration-rose-600 decoration-2 underline-offset-4 hover:text-rose-700">
            property maintenance
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
