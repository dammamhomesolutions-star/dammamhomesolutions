import Link from "next/link";
import { serviceGroups } from "@/lib/services-catalog";

// Every service, grouped the way people think about their home.
export default function HpServices() {
  return (
    <section id="services" aria-labelledby="hp-services" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-label">Our services</p>
            <h2 id="hp-services" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Everything your home needs, in one place</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-600 lg:col-span-5">
            From a dripping tap to a full renovation. Choose a service below, or{" "}
            <a href="#what-needs-fixing" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-rust-600 underline-offset-4">describe the problem</a>{" "}
            if you&rsquo;re not sure which one you need.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceGroups.map((g, gi) => (
            <article key={g.key} className={`flex flex-col rounded-2xl border p-6 ${gi === 0 ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/10 bg-sand-50"}`}>
              <h3 className="font-serif text-2xl">{g.title}</h3>
              <p className={`mt-1.5 text-sm leading-relaxed ${gi === 0 ? "text-ink-300" : "text-ink-600"}`}>{g.intro}</p>
              <ul className={`mt-5 flex-1 divide-y ${gi === 0 ? "divide-sand-50/10" : "divide-ink-900/10"}`}>
                {g.services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className={`focus-ring group flex items-start justify-between gap-3 rounded-sm py-2 sm:py-2.5 ${gi === 0 ? "hover:text-rust-500" : "hover:text-rust-700"}`}>
                      <span>
                        <span className={`block text-[15px] ${s.major ? "font-semibold" : "font-medium"}`}>{s.label}</span>
                        <span className={`hidden text-xs sm:block ${gi === 0 ? "text-ink-300" : "text-ink-500"}`}>{s.blurb}</span>
                      </span>
                      <span aria-hidden="true" className="mt-1 transition-transform group-hover:translate-x-0.5">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <article className="flex flex-col justify-between rounded-2xl bg-rust-700 p-6 text-sand-50">
            <div>
              <h3 className="font-serif text-2xl">Not on the list?</h3>
              <p className="mt-2 text-sm leading-relaxed text-rust-100">Send a photo and a short description on WhatsApp — we&rsquo;ll tell you whether it&rsquo;s something we handle.</p>
            </div>
            <Link href="/services/" className="focus-ring mt-6 inline-flex items-center justify-center rounded-full bg-sand-50 px-5 py-3 text-sm font-semibold text-rust-700">See the full services guide</Link>
          </article>
        </div>
      </div>
    </section>
  );
}
