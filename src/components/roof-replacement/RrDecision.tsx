import Link from "next/link";
import RrCtas from "./RrCtas";
import RrIcon from "./RrIcon";
import type { RrIconName } from "@/lib/roof-replacement";

const options: {
  title: string;
  lead: string;
  icon: RrIconName;
  points: string[];
  accent: string;
  link?: { href: string; label: string };
}[] = [
  {
    title: "Repair",
    lead: "Best when",
    icon: "tools",
    points: [
      "Damage is localized",
      "The roof system is generally sound",
      "The problem has a clear, limited source",
      "Existing materials are still serviceable",
    ],
    accent: "#5f7050",
    link: { href: "/roof-repair/", label: "Roof & rooftop repair" },
  },
  {
    title: "Restoration / waterproofing",
    lead: "Potentially appropriate when",
    icon: "waterproof",
    points: [
      "The existing roof structure is still suitable",
      "The surface or system can be renewed in place",
      "Damage is not extensive",
      "The existing system can reasonably be restored",
    ],
    accent: "#2f7a7a",
    link: { href: "/waterproofing/", label: "Waterproofing" },
  },
  {
    title: "Replacement",
    lead: "May be appropriate when",
    icon: "layers",
    points: [
      "Damage is widespread",
      "Repeated repairs aren't solving the problem",
      "There is major waterproofing failure",
      "Roof components have significantly deteriorated",
      "The system is no longer suitable for continued repair",
    ],
    accent: "#14181f",
  },
];

export default function RrDecision() {
  return (
    <section id="repair-or-replace" aria-labelledby="rr-decision" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">The decision</p>
          <h2 id="rr-decision" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Roof repair or full replacement? Start here.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            The right answer sits on a scale — from a single local fault to a
            roof that has failed across its whole area.
          </p>
        </div>

        {/* extent scale */}
        <div className="mt-10" aria-hidden="true">
          <svg viewBox="0 0 1000 56" className="h-auto w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="rr-scale" x1="0" x2="1">
                <stop offset="0" stopColor="#79895f" />
                <stop offset="0.5" stopColor="#4a9797" />
                <stop offset="1" stopColor="#14181f" />
              </linearGradient>
            </defs>
            <rect x="0" y="22" width="1000" height="8" rx="4" fill="url(#rr-scale)" />
            {[0, 333, 666].map((x) => (
              <path key={x} d={`M${x + 2} 14v24`} stroke="#14181f" strokeWidth="2" />
            ))}
            <path d="M998 14v24" stroke="#14181f" strokeWidth="2" />
          </svg>
          <div className="mt-1 flex justify-between text-[11px] uppercase tracking-[0.14em] text-ink-500">
            <span>Localized fault</span>
            <span>Widespread failure</span>
          </div>
        </div>

        <ol className="mt-8 grid gap-5 lg:grid-cols-3">
          {options.map((o) => (
            <li key={o.title} className="group flex flex-col rounded-2xl border border-ink-900/10 bg-sand-100/50 p-6" style={{ borderTop: `4px solid ${o.accent}` }}>
              <span className="flex h-11 w-11 items-center justify-center rounded-full text-sand-50" style={{ background: o.accent }}>
                <RrIcon name={o.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink-950">{o.title}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">{o.lead}</p>
              <ul className="mt-4 space-y-2.5">
                {o.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-800">
                    <RrIcon name="check" className="mt-0.5 h-4 w-4 flex-none" />
                    {p}
                  </li>
                ))}
              </ul>
              {o.link && (
                <Link
                  href={o.link.href}
                  className="focus-ring mt-auto inline-flex items-center gap-1.5 rounded-sm pt-6 text-sm font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700"
                >
                  {o.link.label}
                  <RrIcon name="arrow" className="h-3.5 w-3.5" />
                </Link>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-serif text-xl">Not sure which option applies? Request an inspection.</p>
          <RrCtas tone="dark" />
        </div>
      </div>
    </section>
  );
}
