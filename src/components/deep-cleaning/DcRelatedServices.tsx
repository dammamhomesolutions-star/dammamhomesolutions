import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-mint-600 decoration-2 underline-offset-4 hover:text-mint-700";

export default function DcRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-sand-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          For sofas, carpets and rugs on their own, see{" "}
          <Link href="/sofa-carpet-cleaning-dammam/" className={linkClass}>sofa &amp; carpet cleaning</Link>
          . Moving often turns up more than cleaning. If you spot pests in an
          empty property, see{" "}
          <Link href="/pest-control-dammam/" className={linkClass}>pest control</Link>
          . Scuffed or marked walls before a handover are handled by{" "}
          <Link href="/painting-wall-repair/" className={linkClass}>painting &amp; wall repair</Link>
          , loose handles and sticking doors by{" "}
          <Link href="/general-home-repairs/" className={linkClass}>general home repairs</Link>
          , and a water tank that needs attention before you move in by{" "}
          <Link href="/water-tank-cleaning/" className={linkClass}>water tank cleaning</Link>
          . Landlords looking after several properties may also want{" "}
          <Link href="/property-maintenance/" className={linkClass}>property maintenance</Link>
          , or{" "}
          <Link href="/contact-us/" className={linkClass}>contact us</Link>{" "}
          directly.
        </p>
      </div>
    </section>
  );
}
