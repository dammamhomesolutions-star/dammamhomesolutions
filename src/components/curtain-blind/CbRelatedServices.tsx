import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-clay-600 decoration-2 underline-offset-4 hover:text-clay-700";

export default function CbRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-sand-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          Windows that stick, leak or have broken glass are repaired through{" "}
          <Link href="/window-door-glass-repair/" className={linkClass}>window, door &amp; glass repair</Link>
          . A power point for motorised blinds falls under{" "}
          <Link href="/electrical-repair/" className={linkClass}>electrical repair</Link>
          , and gypsum around ceiling tracks under{" "}
          <Link href="/ceiling-gypsum-board-repair/" className={linkClass}>ceiling &amp; gypsum board repair</Link>
          . Setting up a new home? See{" "}
          <Link href="/furniture-assembly-dammam/" className={linkClass}>furniture assembly</Link>
          ,{" "}
          <Link href="/lighting-fixture-installation-dammam/" className={linkClass}>lighting &amp; fixture installation</Link>{" "}
          and{" "}
          <Link href="/deep-cleaning-move-in-move-out-cleaning-dammam/" className={linkClass}>move-in deep cleaning</Link>
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
