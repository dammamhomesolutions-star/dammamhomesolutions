import Link from "next/link";
import { areas } from "@/lib/areas";

export default function HpAreas() {
  return (
    <section aria-labelledby="hp-areas" className="py-20 sm:py-28">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="section-label">Areas we serve</p>
          <h2 id="hp-areas" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Home maintenance across Dammam</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
            We&rsquo;re based in Dammam and work across the neighbouring cities of
            Al Khobar, Dhahran and Qatif. Not sure if we cover your street? Send
            your location on WhatsApp and we&rsquo;ll confirm.
          </p>
          <Link href="/areas-we-serve/" className="focus-ring mt-6 inline-flex items-center rounded-full border border-ink-900/20 px-6 py-3 text-sm font-semibold text-ink-950 hover:border-ink-900/50">
            More about our service areas
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 lg:col-span-7">
          {areas.map((a, i) => (
            <li key={a.slug}>
              <Link href={`/areas-we-serve/#${a.slug}`} className={`focus-ring group flex h-full flex-col justify-between rounded-2xl p-5 transition-colors sm:p-6 ${i === 0 ? "bg-ink-950 text-sand-50" : "border border-ink-900/10 bg-sand-50 hover:border-ink-900/40"}`}>
                <span lang="ar" dir="rtl" className={`self-end text-lg ${i === 0 ? "text-rust-500" : "text-rust-700"}`}>{a.arabic}</span>
                <span className="mt-8 block font-serif text-2xl sm:text-3xl">{a.name}</span>
                <span className={`mt-1 block text-xs ${i === 0 ? "text-ink-300" : "text-ink-500"}`}>{i === 0 ? "Home base" : "Served from Dammam"}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
