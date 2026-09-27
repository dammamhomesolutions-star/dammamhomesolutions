import { buildWhatsAppLink } from "@/lib/site-config";

const items = ["A wide photo of the room", "A close-up of the problem", "A short video, where useful", "Your location in Dammam", "A short description"];

export default function PhotoFirstSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-lg">
          <p className="section-label text-emerald-800">Before we visit</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Show us the room before you explain everything.
          </h2>
          <p className="mt-4 text-ink-700">
            A photo of the affected area can make it easier to understand
            what you&rsquo;re dealing with. Send the room, the problem
            area and your Dammam location through WhatsApp.
          </p>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of a bathroom or kitchen problem.")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Send Room Photos
          </a>
        </div>

        <ul className="space-y-2.5">
          {items.map((item, i) => (
            <li key={item} className="flex items-baseline gap-3 rounded-lg bg-zinc-100/70 px-4 py-3.5 text-sm text-ink-800">
              <span className="font-serif text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
