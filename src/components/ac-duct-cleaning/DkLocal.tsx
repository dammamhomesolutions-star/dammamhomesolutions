import Link from "next/link";
import DkIcon from "./DkIcon";

const points = [
  { title: "Long cooling seasons", body: "Ducted systems run for most of the year, moving a lot of air — and whatever it carries." },
  { title: "Dust exposure", body: "Fine dust finds its way indoors and onto return grilles and filters." },
  { title: "Villas with central systems", body: "Large villas often have long duct runs in ceiling voids that are rarely opened." },
  { title: "Renovation activity", body: "Fit-outs and refurbishments add construction dust to systems that keep running." },
];

export default function DkLocal() {
  return (
    <section aria-label="Dammam context and service area" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-copper-700">Local context</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">AC duct cleaning for Dammam properties</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p.title} className="group flex gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-copper-100 text-copper-700">
                  <DkIcon name="duct" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink-950">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-steel-100/70 p-6 sm:p-8">
            <h2 className="font-serif text-2xl tracking-tight text-ink-950">Service area</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              We inspect and clean ducted AC systems in villas, apartments,
              offices and commercial properties across Dammam, in the Eastern
              Province of Saudi Arabia. Tell us your neighbourhood and
              we&rsquo;ll confirm we can reach you.
            </p>
            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Why customers trust the process</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-800">
              {[
                "We inspect before recommending cleaning",
                "We say when cleaning isn't the answer",
                "A clear scope: what's included and what's separate",
                "Property protected and debris contained",
                "Filters, coils and duct repairs available from the same team",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <DkIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-copper-700" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ink-600">
              More{" "}
              <Link href="/about-us/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-copper-600 decoration-2 underline-offset-4 hover:text-copper-700">
                about Dammam Home Solutions
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
