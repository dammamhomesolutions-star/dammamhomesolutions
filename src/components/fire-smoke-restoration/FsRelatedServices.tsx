import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4 hover:text-ember-700";

export default function FsRelatedServices() {
  return (
    <section aria-label="Related services" className="border-b border-ink-900/10 bg-sand-100/60 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related restoration services</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          Fire restoration usually overlaps with other work. Moisture that
          spreads after firefighting is covered by{" "}
          <Link href="/water-leak-repair/" className={linkClass}>water leak and damage repair</Link>
          , and burned or stained ceilings by{" "}
          <Link href="/ceiling-gypsum-board-repair/" className={linkClass}>ceiling &amp; gypsum board repair</Link>
          . Walls are finished through{" "}
          <Link href="/painting-wall-repair/" className={linkClass}>painting &amp; wall repair</Link>
          , kitchens through{" "}
          <Link href="/kitchen-cabinet-repair/" className={linkClass}>kitchen cabinet repair</Link>
          , and damaged floors through{" "}
          <Link href="/flooring-repair/" className={linkClass}>flooring repair</Link>
          . For other sudden problems around the home, see{" "}
          <Link href="/emergency-home-repairs/" className={linkClass}>emergency home repairs</Link>
          , or{" "}
          <Link href="/contact-us/" className={linkClass}>contact us</Link>{" "}
          if you&rsquo;re not sure where to start.
        </p>
      </div>
    </section>
  );
}
