import { buildWhatsAppLink } from "@/lib/site-config";

const services = [
  {
    title: "Split AC Repair",
    body: "The most common residential setup — wall-mounted indoor units paired with an outdoor condenser. Covers cooling faults, airflow, noise and leaks on split systems.",
  },
  {
    title: "Central & Ducted AC Repair",
    body: "Larger homes and villas with a central unit and ducted distribution. Faults here often affect multiple rooms at once, which usually points to the central system rather than one unit.",
  },
  {
    title: "AC Gas & Refrigerant Issues",
    body: "Reduced cooling that isn't explained by a blocked filter or a dirty coil is often related to the refrigerant level, which needs checking rather than assuming.",
  },
  {
    title: "AC Water Leakage Repair",
    body: "Water dripping from an indoor unit or appearing nearby, usually related to condensation handling or how the unit is draining.",
  },
  {
    title: "AC Drain Cleaning",
    body: "A blocked condensate drain line is one of the more common causes of AC leaks, and is usually straightforward to clear once identified.",
  },
  {
    title: "AC Compressor Problems",
    body: "Unusual noise, an AC that keeps stopping, or a unit that runs without cooling properly can point to the compressor, which needs a closer look to confirm.",
  },
  {
    title: "AC Cleaning & Servicing",
    body: "Routine cleaning of filters, coils and the indoor unit to keep a working AC running efficiently, separate from fixing an active fault.",
  },
];

export default function AcServicesBreakdown() {
  return (
    <section className="border-b border-ink-900/10 py-16 sm:py-20">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-sky-700">What this covers</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            AC repair services in Dammam.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            AC repair cost depends on the fault, the type of unit, and
            whether parts need replacing. Send a photo or short video on
            WhatsApp for an initial assessment.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-ink-900/10 p-6">
              <h3 className="font-semibold text-ink-950">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.body}</p>
            </div>
          ))}
        </div>

        <a
          href={buildWhatsAppLink(
            "Hello Dammam Home Solutions, I'd like to request AC repair. Here's what's happening: "
          )}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="focus-ring mt-10 inline-flex items-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
        >
          WhatsApp Your AC Problem
        </a>
      </div>
    </section>
  );
}
