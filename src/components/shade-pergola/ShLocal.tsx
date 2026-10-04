import Link from "next/link";
import { Tag } from "./ShUi";

const a = "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-copper-600 underline-offset-4 hover:text-copper-700";

// Local context, written once, with contextual internal links.
export default function ShLocal() {
  return (
    <section aria-labelledby="sh-local" className="border-t border-steel-900/10 bg-steel-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Tag n="16">Local context</Tag>
          <h2 id="sh-local" className="mt-5 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Car parking shades for Dammam properties</h2>
        </div>
        <div className="space-y-5 text-[15px] leading-relaxed text-ink-700 lg:col-span-8">
          <p>
            In much of the year, a car left in the open sun gets very hot very
            quickly — which is why so many villas, compounds and commercial sites
            have parking shades. The same sun, heat and dust that make shade
            useful are what slowly wear it out: covers fade and stiffen, paint
            breaks down, and fixings work loose in the wind.
          </p>
          <p>
            Villa parking and driveway shades, entrance canopies and garden
            pergolas usually see daily use, while compounds and commercial car
            parks have rows of bays where consistent appearance and phased repairs
            matter. Coastal humidity also means unprotected steel deserves
            attention before surface rust spreads.
          </p>
          <p>
            Related exterior work:{" "}
            <Link href="/outdoor-boundary-wall-repair-dammam/" className={a}>outdoor and boundary wall repair</Link>,{" "}
            <Link href="/gate-garage-door-repair/" className={a}>gate and garage door repair</Link>,{" "}
            <Link href="/waterproofing/" className={a}>waterproofing</Link> and{" "}
            <Link href="/painting-wall-repair/" className={a}>painting</Link>. For wider changes to the property, see{" "}
            <Link href="/home-renovation-dammam/" className={a}>home renovation</Link>; for a list of smaller jobs,{" "}
            <Link href="/handyman-services-dammam/" className={a}>handyman services</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
