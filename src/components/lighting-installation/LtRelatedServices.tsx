import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4 hover:text-ember-700";

export default function LtRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-sand-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          Sockets, circuits and breakers that keep tripping are covered by{" "}
          <Link href="/electrical-repair/" className={linkClass}>electrical repair</Link>
          . Larger gypsum repairs after moving lights fall under{" "}
          <Link href="/ceiling-gypsum-board-repair/" className={linkClass}>ceiling &amp; gypsum board repair</Link>
          , and repainting under{" "}
          <Link href="/painting-wall-repair/" className={linkClass}>painting &amp; wall repair</Link>
          . For under-cabinet lighting during a kitchen update, see{" "}
          <Link href="/kitchen-cabinet-repair/" className={linkClass}>kitchen cabinet repair</Link>
          ; for outdoor security, see{" "}
          <Link href="/cctv-intercom-installation-dammam/" className={linkClass}>CCTV &amp; intercom installation</Link>
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
