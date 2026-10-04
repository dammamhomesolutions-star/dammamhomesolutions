import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-concrete-600 decoration-2 underline-offset-4 hover:text-concrete-700";

export default function MgRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-sand-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          Loose, hollow or broken floor tiles are re-laid through{" "}
          <Link href="/flooring-repair/" className={linkClass}>flooring repair</Link>
          , and cracked grout and ceramic tiles through{" "}
          <Link href="/tile-repair-grout/" className={linkClass}>tile &amp; grout repair</Link>
          . Moving in or out? A{" "}
          <Link href="/deep-cleaning-move-in-move-out-cleaning-dammam/" className={linkClass}>deep clean</Link>{" "}
          pairs well with polishing, and rugs and sofas are covered by{" "}
          <Link href="/sofa-carpet-cleaning-dammam/" className={linkClass}>sofa &amp; carpet cleaning</Link>
          . Kitchen and bathroom fittings around countertops fall under{" "}
          <Link href="/bathroom-kitchen-repair/" className={linkClass}>bathroom &amp; kitchen repair</Link>
          , and ongoing care under{" "}
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
