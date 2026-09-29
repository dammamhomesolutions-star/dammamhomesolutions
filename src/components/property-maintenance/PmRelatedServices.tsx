import Link from "next/link";

export default function PmRelatedServices() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          When a single problem needs attention rather than ongoing upkeep,
          a dedicated service is usually the quicker route.{" "}
          <Link href="/ac-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-moss-600 decoration-2 underline-offset-4 hover:text-moss-700">
            AC repair
          </Link>
          ,{" "}
          <Link href="/plumbing-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-moss-600 decoration-2 underline-offset-4 hover:text-moss-700">
            plumbing repair
          </Link>{" "}
          and{" "}
          <Link href="/electrical-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-moss-600 decoration-2 underline-offset-4 hover:text-moss-700">
            electrical repair
          </Link>{" "}
          each cover faults in those systems directly, and anything urgent
          falls under{" "}
          <Link href="/emergency-home-repairs/" className="focus-ring font-semibold text-ink-950 underline decoration-moss-600 decoration-2 underline-offset-4 hover:text-moss-700">
            emergency home repairs
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
