import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-glass-600 decoration-2 underline-offset-4 hover:text-glass-700";

export default function ScRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-sand-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          If the rest of the home needs attention too, there&rsquo;s{" "}
          <Link href="/deep-cleaning-move-in-move-out-cleaning-dammam/" className={linkClass}>deep cleaning and move-in / move-out cleaning</Link>
          . Bed bugs or other pests in upholstery are handled by{" "}
          <Link href="/pest-control-dammam/" className={linkClass}>pest control</Link>
          , and a carpet soaked by a leak needs the source fixed first through{" "}
          <Link href="/water-leak-repair/" className={linkClass}>water leak repair</Link>
          . Smoke odour in furnishings after a fire is covered by{" "}
          <Link href="/fire-smoke-damage-restoration-dammam/" className={linkClass}>fire &amp; smoke damage restoration</Link>
          , or you can{" "}
          <Link href="/contact-us/" className={linkClass}>contact us</Link>{" "}
          directly.
        </p>
      </div>
    </section>
  );
}
