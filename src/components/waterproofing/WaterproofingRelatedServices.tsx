import Link from "next/link";

export default function WaterproofingRelatedServices() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          Waterproofing work often connects to related problems elsewhere in
          the property. When a leak&rsquo;s source isn&rsquo;t clear, that
          falls under{" "}
          <Link href="/water-leak-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-cyan-600 decoration-2 underline-offset-4 hover:text-cyan-700">
            water leak detection &amp; repair
          </Link>
          . Surface and drainage issues at the top of the building are
          covered by{" "}
          <Link href="/roof-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-cyan-600 decoration-2 underline-offset-4 hover:text-cyan-700">
            roof &amp; rooftop repair
          </Link>
          . Visible damage where water has already reached a ceiling falls
          under{" "}
          <Link href="/ceiling-gypsum-board-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-cyan-600 decoration-2 underline-offset-4 hover:text-cyan-700">
            ceiling &amp; gypsum board repair
          </Link>
          , and marks left on a wall afterward are covered by{" "}
          <Link href="/painting-wall-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-cyan-600 decoration-2 underline-offset-4 hover:text-cyan-700">
            painting &amp; wall repair
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
