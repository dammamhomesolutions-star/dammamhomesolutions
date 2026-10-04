import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700";

export default function SpRelatedServices() {
  return (
    <section aria-label="Related services" className="bg-sand-100/70 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">Around the pool</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          Water pressure problems in the house are handled by{" "}
          <Link href="/water-pump-repair-dammam/" className={linkClass}>water pump repair</Link>
          , and household pipes by{" "}
          <Link href="/plumbing-repair/" className={linkClass}>plumbing repair</Link>
          . Damp in walls next to the pool may need{" "}
          <Link href="/waterproofing/" className={linkClass}>waterproofing</Link>{" "}
          or{" "}
          <Link href="/water-leak-repair/" className={linkClass}>water leak repair</Link>
          , and cracked garden or boundary walls are covered by{" "}
          <Link href="/outdoor-boundary-wall-repair-dammam/" className={linkClass}>outdoor wall repair</Link>
          . Garden and patio lights fall under{" "}
          <Link href="/lighting-fixture-installation-dammam/" className={linkClass}>lighting installation</Link>
          , sockets and breakers under{" "}
          <Link href="/electrical-repair/" className={linkClass}>electrical repair</Link>
          , and ongoing care for the whole property under{" "}
          <Link href="/property-maintenance/" className={linkClass}>property maintenance</Link>
          . Read more{" "}
          <Link href="/about-us/" className={linkClass}>about us</Link>
          , or{" "}
          <Link href="/contact-us/" className={linkClass}>contact us</Link>.
        </p>
      </div>
    </section>
  );
}
