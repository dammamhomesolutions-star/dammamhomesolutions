import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-clay-600 decoration-2 underline-offset-4 hover:text-clay-700";

export default function BwRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-sand-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          Interior walls and repainting are covered by{" "}
          <Link href="/painting-wall-repair/" className={linkClass}>painting &amp; wall repair</Link>
          , and roofs and parapets by{" "}
          <Link href="/roof-repair/" className={linkClass}>roof &amp; rooftop repair</Link>
          . Where damp is the cause, see{" "}
          <Link href="/waterproofing/" className={linkClass}>waterproofing</Link>{" "}
          and{" "}
          <Link href="/water-leak-repair/" className={linkClass}>water leak repair</Link>
          . Gates themselves are repaired through{" "}
          <Link href="/gate-garage-door-repair/" className={linkClass}>gate &amp; garage door repair</Link>
          , car parking shades and pergolas through{" "}
          <Link href="/shade-pergola-repair-car-parking-shades-dammam/" className={linkClass}>shade &amp; pergola repair</Link>
          , and outdoor lights through{" "}
          <Link href="/lighting-fixture-installation-dammam/" className={linkClass}>lighting installation</Link>
          . Landlords and compounds can plan repairs through{" "}
          <Link href="/property-maintenance/" className={linkClass}>property maintenance</Link>
          . Read more{" "}
          <Link href="/about-us/" className={linkClass}>about us</Link>
          , or{" "}
          <Link href="/contact-us/" className={linkClass}>contact us</Link>{" "}
          directly.
        </p>
      </div>
    </section>
  );
}
