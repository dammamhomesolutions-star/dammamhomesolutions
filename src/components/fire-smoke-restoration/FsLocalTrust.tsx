import Link from "next/link";
import FsIcon from "./FsIcon";
import type { FsIconName } from "@/lib/fire-smoke-restoration";

const trustPoints: { title: string; body: string; icon: FsIconName }[] = [
  {
    title: "Local to Dammam",
    body: "We work on homes and business premises in Dammam, so the assessment is with a local team you can reach directly.",
    icon: "pin",
  },
  {
    title: "A clear process",
    body: "You know what's being done, in what order, and why — from assessment to final review.",
    icon: "clipboard",
  },
  {
    title: "Property first",
    body: "Drying, cleaning and odor treatment come before cosmetic repairs, so new finishes aren't put over hidden problems.",
    icon: "shield",
  },
  {
    title: "One complete view",
    body: "Fire, smoke, soot and firefighting water are considered together instead of being handled as separate jobs.",
    icon: "search",
  },
  {
    title: "The trades under one roof",
    body: "Gypsum, ceilings, flooring, cabinets, painting, electrical and AC work are services we already provide.",
    icon: "tools",
  },
];

export default function FsLocalTrust() {
  return (
    <section aria-label="Service area and why choose us" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="section-label !text-ember-700">Service area</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Fire &amp; smoke damage restoration across Dammam
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            We restore fire- and smoke-affected homes and businesses in
            Dammam, in the Eastern Province of Saudi Arabia — from apartments
            and villas to shops, offices and workshops.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Local conditions matter after a fire. Summer heat and humidity
            can make smoke odor more noticeable, AC systems run for most of
            the year and can spread smell between rooms, and wet gypsum and
            cabinets need proper drying before anything is closed up.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Tell us your neighbourhood when you get in touch, and we&rsquo;ll
            confirm whether we can reach you. You can also read more{" "}
            <Link href="/about-us/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4 hover:text-ember-700">
              about Dammam Home Solutions
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
            Why choose Dammam Home Solutions?
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {trustPoints.map((t) => (
              <li key={t.title} className="group">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 bg-sand-50 text-ember-700">
                  <FsIcon name={t.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-ink-950">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{t.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
