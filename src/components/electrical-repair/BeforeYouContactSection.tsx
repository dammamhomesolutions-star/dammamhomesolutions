import { buildWhatsAppLink } from "@/lib/site-config";

const items = [
  "What stopped working",
  "Which room or area",
  "Whether it's constant or intermittent",
  "Whether other areas are affected",
  "Whether there's visible damage",
  "Your property location",
  "A photo or video, if safe and useful",
];

export default function BeforeYouContactSection() {
  return (
    <section className="border-y border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-lg">
          <p className="section-label text-blue-700">Before you contact us</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A few details can make the first conversation easier.
          </h2>
          <p className="mt-4 text-ink-700">
            None of this needs opening a panel or testing anything live —
            just what you&rsquo;ve already noticed.
          </p>
          <a
            href={buildWhatsAppLink(
              "Hello Dammam Home Solutions, here are the details of my electrical problem: "
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-7 inline-flex items-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Send the Details on WhatsApp
          </a>
        </div>

        <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {items.map((item, i) => (
            <li key={item} className="flex items-baseline gap-3 rounded-lg bg-sand-50 px-4 py-3.5 text-sm text-ink-800">
              <span className="font-serif text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
