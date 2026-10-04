import { buildWhatsAppLink } from "@/lib/site-config";

const steps = [
  { title: "Tell us what's wrong", text: "By WhatsApp or phone — in your own words." },
  { title: "Send photos", text: "Photos or a short video where it helps." },
  { title: "We assess the work", text: "We work out the likely issue and what's needed." },
  { title: "Confirm the scope", text: "We explain what will be done before we start." },
  { title: "Complete the repair", text: "The technician carries out the agreed work." },
];

export default function HpProcess() {
  return (
    <section id="how-it-works" aria-labelledby="hp-process" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-edge">
        <p className="section-label">How it works</p>
        <h2 id="hp-process" className="mt-4 max-w-2xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">From message to finished repair</h2>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-ink-950 font-mono text-sm text-sand-50">{i + 1}</span>
                {i < steps.length - 1 && <span aria-hidden="true" className="hidden h-px flex-1 bg-ink-900/15 lg:block" />}
              </div>
              <h3 className="mt-4 font-semibold text-ink-950">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">{s.text}</p>
            </li>
          ))}
        </ol>
        <a
          href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of a problem at home.")}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="focus-ring mt-12 inline-flex items-center justify-center rounded-full border border-ink-900/20 px-6 py-3.5 text-sm font-semibold text-ink-950 hover:border-ink-900/50"
        >
          Send Photos on WhatsApp
        </a>
      </div>
    </section>
  );
}
