import Link from "next/link";

export default function PaintingRelatedServices() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          A wall problem sometimes has a cause elsewhere. Moisture behind a
          stain or damp patch is covered by{" "}
          <Link href="/waterproofing/" className="focus-ring font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
            waterproofing
          </Link>
          . Damage above a wall, where the ceiling meets it, falls under{" "}
          <Link href="/ceiling-gypsum-board-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
            ceiling &amp; gypsum board repair
          </Link>
          , and unrelated household repairs fall under{" "}
          <Link href="/general-home-repairs/" className="focus-ring font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
            general home repairs
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
