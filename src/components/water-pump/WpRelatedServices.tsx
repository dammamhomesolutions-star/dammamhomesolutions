import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-glass-600 decoration-2 underline-offset-4 hover:text-glass-700";

export default function WpRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-glass-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          If the pressure problem is part of a wider plumbing issue, see our{" "}
          <Link href="/plumbing-repair/" className={linkClass}>plumbing services</Link>
          . A leak that keeps the pump running is traced through{" "}
          <Link href="/water-leak-repair/" className={linkClass}>water leak detection</Link>
          , and dirty or discoloured water from the roof tank is handled by{" "}
          <Link href="/water-tank-cleaning/" className={linkClass}>water tank cleaning</Link>
          . Wiring and breaker problems go through{" "}
          <Link href="/electrical-repair/" className={linkClass}>electrical repair</Link>
          , and buildings with several pumps may benefit from{" "}
          <Link href="/property-maintenance/" className={linkClass}>property maintenance</Link>
          . You can also{" "}
          <Link href="/contact-us/" className={linkClass}>contact us</Link>{" "}
          directly.
        </p>
      </div>
    </section>
  );
}
