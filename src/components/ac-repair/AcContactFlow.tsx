import { buildWhatsAppLink } from "@/lib/site-config";

const steps = [
  {
    n: "01",
    title: "Tell us the symptom",
    body: "For example: “Bedroom AC is running but not cooling.”",
    quote: true,
  },
  {
    n: "02",
    title: "Share the location",
    body: "Tell us where the property is in Dammam.",
  },
  {
    n: "03",
    title: "Send photos or video if useful",
    body: "A photo of the indoor unit or a visible leak can help explain the issue.",
  },
  {
    n: "04",
    title: "We clarify the job",
    body: "We work out what information is needed before arranging the appropriate service.",
  },
  {
    n: "05",
    title: "Inspection / repair",
    body: "Where required, the unit is assessed before repair work begins.",
  },
];

export default function AcContactFlow() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-md">
          <p className="section-label text-sky-700">What happens next</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What happens when you contact us.
          </h2>
          <p className="mt-4 text-ink-700">
            WhatsApp is the main way this works — no long form to fill in
            first.
          </p>
          <a
            href={buildWhatsAppLink(
              "Hello Dammam Home Solutions, I need AC repair or maintenance in Dammam. The issue is: "
            )}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring mt-7 inline-flex items-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            WhatsApp AC Repair
          </a>
        </div>

        <ol className="space-y-8">
          {steps.map((step) => (
            <li key={step.n} className="flex gap-5">
              <span className="flex-none font-serif text-2xl text-ink-300">{step.n}</span>
              <div>
                <h3 className="text-base font-semibold text-ink-950">{step.title}</h3>
                {step.quote ? (
                  <p className="mt-1.5 rounded-lg bg-sand-100/70 px-4 py-2.5 text-sm italic text-ink-700">
                    {step.body}
                  </p>
                ) : (
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{step.body}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
