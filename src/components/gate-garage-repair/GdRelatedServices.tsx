import Link from "next/link";

export default function GdRelatedServices() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-14 sm:py-16">
      <div className="container-edge max-w-3xl">
        <p className="text-sm leading-relaxed text-ink-700">
          A gate or garage door issue sometimes overlaps with other work
          around the property — a lock or handle better handled under{" "}
          <Link href="/carpentry-doors-locks/" className="focus-ring font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
            carpentry, doors &amp; locks
          </Link>
          , or an interior door, window or glass panel covered by{" "}
          <Link href="/window-door-glass-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
            window, door &amp; glass repair
          </Link>
          . If a motor, opener or nearby wiring is involved,{" "}
          <Link href="/electrical-repair/" className="focus-ring font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
            electrical repair
          </Link>{" "}
          can help alongside this service. To see and talk to visitors at the
          gate — or open it from inside — see{" "}
          <Link href="/cctv-intercom-installation-dammam/" className="focus-ring font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
            CCTV &amp; intercom installation
          </Link>
          . A wider set of issues across the
          property is covered by{" "}
          <Link href="/property-maintenance/" className="focus-ring font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
            property maintenance
          </Link>
          , and{" "}
          <Link href="/general-home-repairs/" className="focus-ring font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
            general home repairs
          </Link>{" "}
          is there for everything else.
        </p>
      </div>
    </section>
  );
}
