import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700";

export default function AiRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-sand-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          Once the system is in, regular servicing and any faults are handled
          through{" "}
          <Link href="/ac-repair/" className={linkClass}>AC repair &amp; maintenance</Link>
          . Ducted systems that have been running a while may need{" "}
          <Link href="/ac-duct-cleaning-dammam/" className={linkClass}>duct cleaning</Link>
          . Circuit or board upgrades go through{" "}
          <Link href="/electrical-repair/" className={linkClass}>electrical repair</Link>
          , and wall openings left by old units can be patched and repainted with{" "}
          <Link href="/painting-wall-repair/" className={linkClass}>painting &amp; wall repair</Link>
          . A water stain below an AC is often a drain problem — see{" "}
          <Link href="/water-leak-repair/" className={linkClass}>water leak repair</Link>
          . For buildings with many units, there&rsquo;s{" "}
          <Link href="/property-maintenance/" className={linkClass}>property maintenance</Link>
          , or{" "}
          <Link href="/contact-us/" className={linkClass}>contact us</Link>{" "}
          directly.
        </p>
      </div>
    </section>
  );
}
