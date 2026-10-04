import Link from "next/link";

export default function CarpentryRelatedServices() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          Door and hardware issues sometimes overlap with other work. Glazing
          and window frame issues fall under{" "}
          <Link href="/window-door-glass-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-amber-600 decoration-2 underline-offset-4 hover:text-amber-700">
            window, door &amp; glass repair
          </Link>
          . Larger exterior gates and garage doors are covered by{" "}
          <Link href="/gate-garage-door-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-amber-600 decoration-2 underline-offset-4 hover:text-amber-700">
            gate &amp; garage door repair
          </Link>
          . Cabinet-specific woodwork falls under{" "}
          <Link href="/kitchen-cabinet-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-amber-600 decoration-2 underline-offset-4 hover:text-amber-700">
            kitchen cabinet &amp; joinery repair
          </Link>
          , flat-pack wardrobes, beds and desks are put together through{" "}
          <Link href="/furniture-assembly-dammam/" className="focus-ring font-semibold text-ink-950 underline decoration-amber-600 decoration-2 underline-offset-4 hover:text-amber-700">
            furniture assembly
          </Link>
          , and everything else around the property is covered by{" "}
          <Link href="/general-home-repairs/" className="focus-ring font-semibold text-ink-950 underline decoration-amber-600 decoration-2 underline-offset-4 hover:text-amber-700">
            general home repairs
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
