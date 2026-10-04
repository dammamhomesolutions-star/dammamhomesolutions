import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700";

export default function WhRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-sand-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          If the issue involves the wider pipework, see our{" "}
          <Link href="/plumbing-repair/" className={linkClass}>plumbing services</Link>
          . Water stains on a ceiling under a heater are traced through{" "}
          <Link href="/water-leak-repair/" className={linkClass}>water leak repair</Link>
          , and the gypsum itself is repaired through{" "}
          <Link href="/ceiling-gypsum-board-repair/" className={linkClass}>ceiling repair</Link>
          . Discoloured water from the whole house may come from the tank on the roof — see{" "}
          <Link href="/water-tank-cleaning/" className={linkClass}>water tank cleaning</Link>
          . For bathrooms being renovated, there&rsquo;s{" "}
          <Link href="/bathroom-kitchen-repair/" className={linkClass}>bathroom &amp; kitchen repair</Link>
          , or{" "}
          <Link href="/contact-us/" className={linkClass}>contact us</Link>{" "}
          directly.
        </p>
      </div>
    </section>
  );
}
