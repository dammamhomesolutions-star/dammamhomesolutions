import { buildWhatsAppLink } from "@/lib/site-config";

const topics = [
  "Leaking taps",
  "Toilet-related plumbing issues",
  "Shower drainage",
  "Sink problems",
  "Water around bathroom fixtures",
  "Blocked drains",
];

export default function BathroomPlumbingSection() {
  return (
    <section id="bathroom-plumbing" className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-teal-700">Bathroom plumbing</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Bathroom problems have a way of becoming daily problems.
          </h2>
          <p className="mt-4 text-ink-700">
            The bathroom gets used every day, so a small issue there tends
            to get noticed — and get annoying — faster than almost anywhere
            else in the property.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {topics.map((t) => (
            <span
              key={t}
              className="rounded-full border border-teal-700/25 bg-teal-700/5 px-4 py-2 text-sm text-teal-800"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={buildWhatsAppLink(
            "Hello Dammam Home Solutions, I have a bathroom plumbing problem. Here's what's happening: "
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-8 inline-flex items-center rounded-full border border-ink-900/20 px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-ink-900/5"
        >
          WhatsApp about a bathroom issue
        </a>
      </div>
    </section>
  );
}
