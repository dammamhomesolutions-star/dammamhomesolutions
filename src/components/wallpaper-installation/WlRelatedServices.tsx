import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700";

export default function WlRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-sand-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          Damp walls need the source found first — see{" "}
          <Link href="/water-leak-repair/" className={linkClass}>water leak repair</Link>{" "}
          and{" "}
          <Link href="/waterproofing/" className={linkClass}>waterproofing</Link>
          . Prefer paint? There&rsquo;s{" "}
          <Link href="/painting-wall-repair/" className={linkClass}>painting &amp; wall repair</Link>
          , and damaged gypsum is covered by{" "}
          <Link href="/ceiling-gypsum-board-repair/" className={linkClass}>ceiling &amp; gypsum board repair</Link>
          . Finishing a room? Add{" "}
          <Link href="/curtain-blind-installation-dammam/" className={linkClass}>curtains &amp; blinds</Link>
          ,{" "}
          <Link href="/lighting-fixture-installation-dammam/" className={linkClass}>lighting</Link>{" "}
          or{" "}
          <Link href="/furniture-assembly-dammam/" className={linkClass}>furniture assembly</Link>
          . Landlords can combine visits through{" "}
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
