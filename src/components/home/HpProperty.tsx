import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/site-config";

const options = [
  { title: "Routine checks & minor repairs", text: "Periodic checks of AC, plumbing, electrical and finishes, with small repairs handled as they come up." },
  { title: "Seasonal checks", text: "AC checks before summer, roof and water-tank checks, and other inspections booked when the property needs them." },
  { title: "Landlord & property manager support", text: "Repairs between tenancies, move-in and move-out work, and one contact for several units." },
];
const who = ["Homeowners", "Landlords", "Property managers", "Rental properties", "Villas", "Apartments"];

export default function HpProperty() {
  return (
    <section aria-labelledby="hp-property" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-28">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="section-label">Property maintenance</p>
          <h2 id="hp-property" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Ongoing care, not just one-off fixes</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
            Small problems are cheaper to fix early. Regular maintenance keeps AC,
            plumbing, electrics and finishes in working order — and gives
            landlords one team to call.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {who.map((w) => <li key={w} className="rounded-full border border-ink-900/15 bg-sand-50 px-3 py-1.5 text-sm text-ink-800">{w}</li>)}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to discuss property maintenance for my property.")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-sand-50"
            >
              Discuss Property Maintenance
            </a>
            <Link href="/property-maintenance/" className="focus-ring inline-flex items-center justify-center rounded-full border border-ink-900/20 px-6 py-3.5 text-sm font-semibold text-ink-950 hover:border-ink-900/50">
              How it works
            </Link>
          </div>
        </div>
        <ul className="space-y-3 lg:col-span-7">
          {options.map((o, i) => (
            <li key={o.title} className="flex gap-5 rounded-2xl border border-ink-900/10 bg-sand-50 p-6">
              <span className="font-serif text-3xl text-rust-600">{i + 1}</span>
              <div>
                <h3 className="text-lg font-semibold text-ink-950">{o.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{o.text}</p>
              </div>
            </li>
          ))}
          <li className="px-2 text-xs text-ink-500">Scope and pricing are agreed per property — we don&rsquo;t publish fixed packages.</li>
        </ul>
      </div>
    </section>
  );
}
