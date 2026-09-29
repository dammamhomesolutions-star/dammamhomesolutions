import { buildWhatsAppLink } from "@/lib/site-config";

const considerations = [
  { title: "Cleaning", body: "Removing dust and buildup that accumulates inside the unit over time." },
  { title: "Filters", body: "A blocked filter is one of the most common reasons cooling and airflow drop off." },
  { title: "Airflow", body: "Checking that air is actually moving the way it should, indoors and out." },
  { title: "Drainage", body: "Making sure condensation is being handled properly, not pooling or leaking." },
  { title: "General condition", body: "A look at the unit overall, not just the symptom you called about." },
  { title: "Seasonal checks", body: "Useful before the unit goes into heavier use for the season." },
];

export default function AcMaintenanceSection() {
  return (
    <section id="ac-maintenance" className="bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-sky-700">Maintenance</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Keep the problem from becoming the problem.
          </h2>
          <p className="mt-4 text-ink-700">
            Routine maintenance doesn&rsquo;t chase a specific fault. It
            covers the things that quietly affect cooling performance over
            time.
          </p>
          <p className="mt-3 text-sm text-ink-500">
            Looking after a property more broadly? See our{" "}
            <a
              href="/property-maintenance/"
              className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-sky-600"
            >
              property maintenance
            </a>{" "}
            service.
          </p>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {considerations.map((c) => (
            <div key={c.title} className="border-t border-ink-900/15 pt-4">
              <h3 className="text-sm font-semibold text-ink-950">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.body}</p>
            </div>
          ))}
        </div>

        <a
          href={buildWhatsAppLink(
            "Hello Dammam Home Solutions, I'd like to ask about AC maintenance."
          )}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="focus-ring mt-10 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
        >
          Ask About AC Maintenance
        </a>
      </div>
    </section>
  );
}
