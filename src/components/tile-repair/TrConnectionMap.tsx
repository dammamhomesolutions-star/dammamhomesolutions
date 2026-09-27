import Link from "next/link";
import { connectionMapEntries } from "@/lib/tile-repair";

export default function TrConnectionMap() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Where this service fits</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Tile damage rarely stands alone.
          </h2>
        </div>

        <div className="mt-10 max-w-2xl divide-y divide-ink-900/10 border-y border-ink-900/10">
          {connectionMapEntries.map((entry) => (
            <div
              key={entry.combo}
              className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4"
            >
              <span className="text-[15px] text-ink-800">{entry.combo}</span>
              <div className="flex flex-wrap gap-x-5 gap-y-1">
                {entry.routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700"
                  >
                    <span aria-hidden="true">→</span>
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
