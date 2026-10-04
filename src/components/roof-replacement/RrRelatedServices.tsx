import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700";

export default function RrRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-sand-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          If the roof only needs a targeted fix, start with{" "}
          <Link href="/roof-repair/" className={linkClass}>roof &amp; rooftop repair</Link>
          . Where the structure is fine but water is getting through, our{" "}
          <Link href="/waterproofing/" className={linkClass}>waterproofing</Link>{" "}
          service may be enough. To rule out plumbing or AC lines behind a
          stain, see{" "}
          <Link href="/water-leak-repair/" className={linkClass}>water leak detection</Link>
          . For regular checks of drains and rooftop details, there&rsquo;s{" "}
          <Link href="/property-maintenance/" className={linkClass}>property maintenance</Link>
          , and for sudden water coming through a ceiling, see{" "}
          <Link href="/emergency-home-repairs/" className={linkClass}>emergency home repairs</Link>
          .
        </p>
      </div>
    </section>
  );
}
