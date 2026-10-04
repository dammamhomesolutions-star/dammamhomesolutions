import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-glass-600 decoration-2 underline-offset-4 hover:text-glass-700";

export default function FcRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-sand-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          Cracks, holes and water-damaged patches in an existing ceiling are
          fixed through{" "}
          <Link href="/ceiling-gypsum-board-repair/" className={linkClass}>ceiling &amp; gypsum board repair</Link>
          , and the leak behind a stain is traced through{" "}
          <Link href="/water-leak-repair/" className={linkClass}>water leak repair</Link>
          . New AC units are handled by{" "}
          <Link href="/ac-installation-dammam/" className={linkClass}>AC installation</Link>{" "}
          and ducts by{" "}
          <Link href="/ac-duct-cleaning-dammam/" className={linkClass}>AC duct cleaning</Link>
          . To finish the room, see{" "}
          <Link href="/lighting-fixture-installation-dammam/" className={linkClass}>lighting &amp; fixture installation</Link>
          ,{" "}
          <Link href="/curtain-blind-installation-dammam/" className={linkClass}>curtains &amp; blinds</Link>{" "}
          and{" "}
          <Link href="/painting-wall-repair/" className={linkClass}>painting</Link>
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
