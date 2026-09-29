import Link from "next/link";

export default function EhRelatedServices() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          Once the urgent part of a problem is handled, remaining work often
          falls under a dedicated service. AC-specific faults are covered by{" "}
          <Link href="/ac-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4 hover:text-ember-700">
            AC repair
          </Link>
          , plumbing issues by{" "}
          <Link href="/plumbing-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4 hover:text-ember-700">
            plumbing repair
          </Link>
          , and electrical faults by{" "}
          <Link href="/electrical-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4 hover:text-ember-700">
            electrical repair
          </Link>
          . For problems that aren&rsquo;t urgent, describing what happened is
          still enough to start under{" "}
          <Link href="/general-home-repairs/" className="focus-ring font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4 hover:text-ember-700">
            general home repairs
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
