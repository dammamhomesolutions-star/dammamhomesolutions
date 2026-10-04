import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-copper-600 decoration-2 underline-offset-4 hover:text-copper-700";

export default function ApRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-sand-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          If a washing machine or dishwasher can&rsquo;t drain because the waste
          line is blocked, that&rsquo;s{" "}
          <Link href="/drain-unblocking-sewer-line-cleaning-dammam/" className={linkClass}>drain unblocking</Link>
          ; supply valves, hoses and leaks behind the machine fall under{" "}
          <Link href="/plumbing-repair/" className={linkClass}>plumbing repair</Link>
          . Weak water flow to the whole house is usually a{" "}
          <Link href="/water-pump-repair-dammam/" className={linkClass}>water pump</Link>{" "}
          issue, and no hot water is handled by{" "}
          <Link href="/water-heater-repair-installation-dammam/" className={linkClass}>water heater repair</Link>
          . Sockets, circuits and breakers that keep tripping are{" "}
          <Link href="/electrical-repair/" className={linkClass}>electrical repair</Link>
          . For air conditioners see{" "}
          <Link href="/ac-repair/" className={linkClass}>AC repair</Link>{" "}
          and{" "}
          <Link href="/ac-installation-dammam/" className={linkClass}>AC installation</Link>
          ; for the units around built-in appliances, see{" "}
          <Link href="/kitchen-cabinet-repair/" className={linkClass}>kitchen cabinet repair</Link>
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
