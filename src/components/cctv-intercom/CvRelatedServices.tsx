import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-moss-600 decoration-2 underline-offset-4 hover:text-moss-700";

export default function CvRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-sand-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          New power points, sockets or circuits for cameras and recorders are
          handled through{" "}
          <Link href="/electrical-repair/" className={linkClass}>electrical repair</Link>
          . If the gate itself is sticking or its motor isn&rsquo;t working, see{" "}
          <Link href="/gate-garage-door-repair/" className={linkClass}>gate &amp; garage door repair</Link>
          ; door locks and frames fall under{" "}
          <Link href="/carpentry-doors-locks/" className={linkClass}>carpentry, doors &amp; locks</Link>
          . Landlords can combine visits through{" "}
          <Link href="/property-maintenance/" className={linkClass}>property maintenance</Link>
          , and smaller jobs around the house are covered by{" "}
          <Link href="/general-home-repairs/" className={linkClass}>general home repairs</Link>
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
