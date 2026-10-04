import Link from "next/link";
import RrIcon from "./RrIcon";
import type { RrIconName } from "@/lib/roof-replacement";

const trust: { title: string; body: string; icon: RrIconName }[] = [
  { title: "Repair-versus-replace guidance", body: "We'll tell you when a repair or restoration is the better answer.", icon: "checklist" },
  { title: "Inspection before recommendation", body: "Every scope starts with looking at the roof, not with a standard package.", icon: "search" },
  { title: "A clearly defined scope", body: "What's removed, what's installed, and how hidden damage is handled — agreed up front.", icon: "layers" },
  { title: "Local to Dammam", body: "A local team you can reach directly by phone or WhatsApp.", icon: "pin" },
  { title: "The related trades", body: "Waterproofing, leak detection, ceiling and painting repairs are services we already provide.", icon: "tools" },
];

export default function RrLocalTrust() {
  return (
    <section aria-label="Service area and why property owners choose us" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="section-label !text-teal-700">Service area</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Roof replacement services in Dammam</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            We inspect and replace roofs on homes and commercial buildings in
            Dammam, in the Eastern Province of Saudi Arabia. Tell us your
            neighbourhood when you get in touch and we&rsquo;ll confirm we
            can reach you.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Learn more{" "}
            <Link href="/about-us/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
              about Dammam Home Solutions
            </Link>
            , or{" "}
            <Link href="/contact-us/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
              contact us
            </Link>{" "}
            directly.
          </p>
        </div>
        <div className="lg:col-span-7">
          <h2 className="font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">Why property owners choose Dammam Home Solutions</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {trust.map((t) => (
              <li key={t.title} className="group">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 bg-sand-100 text-teal-700">
                  <RrIcon name={t.icon} className="h-5 w-5" />
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
