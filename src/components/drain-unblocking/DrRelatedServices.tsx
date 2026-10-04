import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700";

export default function DrRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-concrete-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          For taps, pipes and fittings beyond the drain, see our{" "}
          <Link href="/plumbing-repair/" className={linkClass}>plumbing services</Link>
          . If a blockage has caused water damage, there&rsquo;s{" "}
          <Link href="/water-leak-repair/" className={linkClass}>water leak &amp; damage repair</Link>
          , and drain flies or cockroaches coming from drains are handled by{" "}
          <Link href="/pest-control-dammam/" className={linkClass}>pest control</Link>
          . Kitchen and bathroom fixtures themselves fall under{" "}
          <Link href="/bathroom-kitchen-repair/" className={linkClass}>bathroom &amp; kitchen repair</Link>
          , and buildings with recurring drainage issues may benefit from{" "}
          <Link href="/property-maintenance/" className={linkClass}>property maintenance</Link>
          . You can also{" "}
          <Link href="/contact-us/" className={linkClass}>contact us</Link>{" "}
          directly.
        </p>
      </div>
    </section>
  );
}
