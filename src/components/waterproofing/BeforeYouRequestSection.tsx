import { buildWhatsAppLink } from "@/lib/site-config";

const items = [
  "Your property location",
  "Where the moisture appears",
  "When you first noticed it",
  "Whether it appears after rain",
  "Whether plumbing is nearby",
  "A photo of the affected area",
  "A wider photo showing surrounding context",
  "A short video, if useful",
];

export default function BeforeYouRequestSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-lg">
          <p className="section-label text-cyan-800">Before you request service</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Show us what the moisture is doing.
          </h2>
          <p className="mt-4 text-ink-700">
            None of this requires removing tiles, opening walls, climbing
            onto the roof, or anything else unsafe — just what you can see
            from where you&rsquo;re standing.
          </p>
          <p className="mt-3 text-sm text-ink-500">
            If the affected area is near a socket or switch, treat that as
            a priority on its own — see our{" "}
            <a href="/electrical-repair/" className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-cyan-700">
              electrical repair
            </a>{" "}
            service.
          </p>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of a moisture problem.")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Send Photos on WhatsApp
          </a>
        </div>

        <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {items.map((item, i) => (
            <li key={item} className="flex items-baseline gap-3 rounded-lg bg-stone-100/70 px-4 py-3.5 text-sm text-ink-800">
              <span className="font-serif text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
