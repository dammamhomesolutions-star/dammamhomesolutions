import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-copper-600 decoration-2 underline-offset-4 hover:text-copper-700";

export default function DkRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-steel-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          If your AC system needs more than duct cleaning, see{" "}
          <Link href="/ac-repair/" className={linkClass}>AC repair &amp; maintenance</Link>
          , or{" "}
          <Link href="/ac-installation-dammam/" className={linkClass}>AC installation</Link>{" "}
          if a unit is due for replacement. After renovation, the rest of the
          home may need{" "}
          <Link href="/deep-cleaning-move-in-move-out-cleaning-dammam/" className={linkClass}>deep cleaning</Link>
          . Signs of pests in vents are handled by{" "}
          <Link href="/pest-control-dammam/" className={linkClass}>pest control</Link>
          , and water stains below ducts by{" "}
          <Link href="/water-leak-repair/" className={linkClass}>water leak repair</Link>
          . You can also{" "}
          <Link href="/contact-us/" className={linkClass}>contact us</Link>{" "}
          directly.
        </p>
      </div>
    </section>
  );
}
