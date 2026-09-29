import Link from "next/link";

export default function GeneralRepairsRelatedServices() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          If a problem turns out to be more specific, it may fit a dedicated
          service better.{" "}
          <Link href="/ac-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-indigo-600 decoration-2 underline-offset-4 hover:text-indigo-700">
            AC repair
          </Link>
          ,{" "}
          <Link href="/plumbing-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-indigo-600 decoration-2 underline-offset-4 hover:text-indigo-700">
            plumbing repair
          </Link>{" "}
          and{" "}
          <Link href="/electrical-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-indigo-600 decoration-2 underline-offset-4 hover:text-indigo-700">
            electrical repair
          </Link>{" "}
          each cover faults in those systems directly. Ongoing, scheduled
          upkeep is covered by{" "}
          <Link href="/property-maintenance/" className="focus-ring font-semibold text-ink-950 underline decoration-indigo-600 decoration-2 underline-offset-4 hover:text-indigo-700">
            property maintenance
          </Link>
          , and anything urgent falls under{" "}
          <Link href="/emergency-home-repairs/" className="focus-ring font-semibold text-ink-950 underline decoration-indigo-600 decoration-2 underline-offset-4 hover:text-indigo-700">
            emergency home repairs
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
