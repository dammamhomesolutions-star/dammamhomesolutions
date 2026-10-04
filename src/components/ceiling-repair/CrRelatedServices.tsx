import Link from "next/link";

export default function CrRelatedServices() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          Ceiling damage often has a cause above it. Moisture that has
          worked its way down is addressed by{" "}
          <Link href="/waterproofing/" className="focus-ring font-semibold text-ink-950 underline decoration-slate-600 decoration-2 underline-offset-4 hover:text-slate-700">
            waterproofing
          </Link>
          , and the source is covered by{" "}
          <Link href="/roof-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-slate-600 decoration-2 underline-offset-4 hover:text-slate-700">
            roof &amp; rooftop repair
          </Link>{" "}
          when the building&rsquo;s top surface is involved. Matching marks
          on a nearby wall fall under{" "}
          <Link href="/painting-wall-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-slate-600 decoration-2 underline-offset-4 hover:text-slate-700">
            painting &amp; wall repair
          </Link>
          , a new or redesigned ceiling is handled by{" "}
          <Link href="/false-ceiling-installation-dammam/" className="focus-ring font-semibold text-ink-950 underline decoration-slate-600 decoration-2 underline-offset-4 hover:text-slate-700">
            false ceiling installation
          </Link>
          , and a wider set of issues across the property is covered by{" "}
          <Link href="/property-maintenance/" className="focus-ring font-semibold text-ink-950 underline decoration-slate-600 decoration-2 underline-offset-4 hover:text-slate-700">
            property maintenance
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
