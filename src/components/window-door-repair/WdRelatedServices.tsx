import Link from "next/link";

export default function WdRelatedServices() {
  return (
    <section className="border-b border-glass-900/10 bg-glass-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          A door or window issue sometimes overlaps with other work around
          the property — a frame that needs{" "}
          <Link href="/painting-wall-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-glass-600 decoration-2 underline-offset-4 hover:text-glass-700">
            painting or wall repair
          </Link>{" "}
          once fixed, a lock or latch better handled under{" "}
          <Link href="/carpentry-doors-locks/" className="focus-ring font-semibold text-ink-950 underline decoration-glass-600 decoration-2 underline-offset-4 hover:text-glass-700">
            carpentry, doors &amp; locks
          </Link>
          , or a wider set of issues across the property covered by{" "}
          <Link href="/property-maintenance/" className="focus-ring font-semibold text-ink-950 underline decoration-glass-600 decoration-2 underline-offset-4 hover:text-glass-700">
            property maintenance
          </Link>
          . If something feels urgent, our{" "}
          <Link href="/emergency-home-repairs/" className="focus-ring font-semibold text-ink-950 underline decoration-glass-600 decoration-2 underline-offset-4 hover:text-glass-700">
            emergency home repairs
          </Link>{" "}
          service covers that, and{" "}
          <Link href="/general-home-repairs/" className="focus-ring font-semibold text-ink-950 underline decoration-glass-600 decoration-2 underline-offset-4 hover:text-glass-700">
            general home repairs
          </Link>{" "}
          and{" "}
          <Link href="/bathroom-kitchen-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-glass-600 decoration-2 underline-offset-4 hover:text-glass-700">
            bathroom &amp; kitchen repair
          </Link>{" "}
          are there for everything else.
        </p>
      </div>
    </section>
  );
}
