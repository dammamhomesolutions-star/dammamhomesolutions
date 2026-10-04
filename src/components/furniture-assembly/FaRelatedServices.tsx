import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-walnut-600 decoration-2 underline-offset-4 hover:text-walnut-700";

export default function FaRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-sand-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          Doors, hinges and built-in woodwork are covered by{" "}
          <Link href="/carpentry-doors-locks/" className={linkClass}>carpentry, doors &amp; locks</Link>
          , and kitchen units by{" "}
          <Link href="/kitchen-cabinet-repair/" className={linkClass}>kitchen cabinet repair</Link>
          . Moving into a new place? A{" "}
          <Link href="/deep-cleaning-move-in-move-out-cleaning-dammam/" className={linkClass}>move-in / move-out deep clean</Link>{" "}
          pairs well with assembly, and new lights can be fitted through{" "}
          <Link href="/lighting-fixture-installation-dammam/" className={linkClass}>lighting &amp; fixture installation</Link>
          . For anything else around the house, see{" "}
          <Link href="/general-home-repairs/" className={linkClass}>general home repairs</Link>{" "}
          or{" "}
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
