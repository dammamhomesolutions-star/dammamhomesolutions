import Link from "next/link";

export default function KcRelatedServices() {
  return (
    <section className="border-b border-walnut-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          A kitchen cabinet issue sometimes overlaps with other work around
          the property — a lock or hinge better handled under{" "}
          <Link href="/carpentry-doors-locks/" className="focus-ring font-semibold text-ink-950 underline decoration-walnut-600 decoration-2 underline-offset-4 hover:text-walnut-700">
            carpentry, doors &amp; locks
          </Link>
          , a wider kitchen or bathroom problem covered by{" "}
          <Link href="/bathroom-kitchen-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-walnut-600 decoration-2 underline-offset-4 hover:text-walnut-700">
            bathroom &amp; kitchen repair
          </Link>
          , or a plumbing or wall issue found alongside it, covered by{" "}
          <Link href="/plumbing-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-walnut-600 decoration-2 underline-offset-4 hover:text-walnut-700">
            plumbing
          </Link>{" "}
          and{" "}
          <Link href="/painting-wall-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-walnut-600 decoration-2 underline-offset-4 hover:text-walnut-700">
            painting &amp; wall repair
          </Link>
          . A wider set of issues across the property is covered by{" "}
          <Link href="/property-maintenance/" className="focus-ring font-semibold text-ink-950 underline decoration-walnut-600 decoration-2 underline-offset-4 hover:text-walnut-700">
            property maintenance
          </Link>
          , and{" "}
          <Link href="/general-home-repairs/" className="focus-ring font-semibold text-ink-950 underline decoration-walnut-600 decoration-2 underline-offset-4 hover:text-walnut-700">
            general home repairs
          </Link>{" "}
          is there for everything else.
        </p>
      </div>
    </section>
  );
}
