import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-moss-600 decoration-2 underline-offset-4 hover:text-moss-700";

export default function PcRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-sand-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          Pests and building problems often go together. Leaks under sinks
          and behind walls are handled by{" "}
          <Link href="/water-leak-repair/" className={linkClass}>water leak repair</Link>
          {" "}and{" "}
          <Link href="/plumbing-repair/" className={linkClass}>plumbing repair</Link>
          , gaps and damaged frames around doors by{" "}
          <Link href="/carpentry-doors-locks/" className={linkClass}>carpentry &amp; door repair</Link>
          , and standing water on roofs by{" "}
          <Link href="/roof-repair/" className={linkClass}>roof repair</Link>
          . Kitchen cabinets damaged by pests or moisture fall under{" "}
          <Link href="/kitchen-cabinet-repair/" className={linkClass}>kitchen cabinet repair</Link>
          , and regular checks across a building under{" "}
          <Link href="/property-maintenance/" className={linkClass}>property maintenance</Link>
          . You can also{" "}
          <Link href="/contact-us/" className={linkClass}>contact us</Link>{" "}
          directly.
        </p>
      </div>
    </section>
  );
}
