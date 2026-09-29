import Link from "next/link";

export default function FlRelatedServices() {
  return (
    <section className="border-b border-concrete-900/10 bg-concrete-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          A flooring issue sometimes overlaps with other work around the
          property — a cracked or damaged tile better handled under{" "}
          <Link href="/tile-repair-grout/" className="focus-ring font-semibold text-ink-950 underline decoration-clay-600 decoration-2 underline-offset-4 hover:text-clay-700">
            tile &amp; grout repair
          </Link>
          , a stain that may relate to{" "}
          <Link href="/plumbing-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-clay-600 decoration-2 underline-offset-4 hover:text-clay-700">
            plumbing
          </Link>{" "}
          or{" "}
          <Link href="/waterproofing/" className="focus-ring font-semibold text-ink-950 underline decoration-clay-600 decoration-2 underline-offset-4 hover:text-clay-700">
            waterproofing
          </Link>
          , or a bathroom or kitchen floor covered by{" "}
          <Link href="/bathroom-kitchen-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-clay-600 decoration-2 underline-offset-4 hover:text-clay-700">
            bathroom &amp; kitchen repair
          </Link>
          . If the surrounding wall is also affected,{" "}
          <Link href="/painting-wall-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-clay-600 decoration-2 underline-offset-4 hover:text-clay-700">
            painting &amp; wall repair
          </Link>{" "}
          can help alongside the floor. A wider set of issues across the
          property is covered by{" "}
          <Link href="/property-maintenance/" className="focus-ring font-semibold text-ink-950 underline decoration-clay-600 decoration-2 underline-offset-4 hover:text-clay-700">
            property maintenance
          </Link>
          , and{" "}
          <Link href="/general-home-repairs/" className="focus-ring font-semibold text-ink-950 underline decoration-clay-600 decoration-2 underline-offset-4 hover:text-clay-700">
            general home repairs
          </Link>{" "}
          is there for everything else.
        </p>
      </div>
    </section>
  );
}
