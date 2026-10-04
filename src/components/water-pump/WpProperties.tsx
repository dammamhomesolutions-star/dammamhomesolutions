import Link from "next/link";
import WpIcon from "./WpIcon";
import type { WpIconName } from "@/lib/water-pump";

const types: { title: string; icon: WpIconName; points: string[] }[] = [
  { title: "Apartments", icon: "apartment", points: ["Building-level water supply", "Internal plumbing", "Booster pumps", "Shared systems"] },
  { title: "Villas", icon: "home", points: ["Roof and ground tanks", "Several bathrooms", "Multiple floors", "Long pipe runs", "Transfer and booster pumps"] },
  { title: "Commercial", icon: "building", points: ["Higher demand", "Many fixtures", "Larger pumps", "More complex controls"] },
];

export default function WpProperties() {
  return (
    <section aria-label="Water pressure by property type and service area" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <h2 className="font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Water pressure by property type</h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {types.map((t) => (
            <li key={t.title} className="group rounded-2xl border border-ink-900/10 bg-glass-100/40 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand-50 text-glass-700 ring-1 ring-ink-900/10">
                <WpIcon name={t.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink-950">{t.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-700">
                {t.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Water pump services for Dammam properties</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Many villas and buildings here rely on a ground or underground
              tank, a transfer pump up to the roof, and a booster pump for
              pressure to the taps. When something goes wrong, the fault can be
              anywhere in that chain — which is why we look at the whole system
              rather than just the pump you can hear.
            </p>
          </div>
          <div className="rounded-2xl bg-glass-100/60 p-6 lg:col-span-5">
            <h3 className="font-serif text-xl text-ink-950">Service area</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              We serve homes and businesses across Dammam, in the Eastern
              Province of Saudi Arabia. Tell us your neighbourhood and we&rsquo;ll
              confirm we can reach you. More{" "}
              <Link href="/about-us/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-glass-600 decoration-2 underline-offset-4 hover:text-glass-700">
                about us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
