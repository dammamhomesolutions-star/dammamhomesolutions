import { buildWhatsAppLink } from "@/lib/site-config";

const items = [
  "Photo of the full door or cabinet",
  "Close-up of the hardware",
  "Photo showing the gap or misalignment, if relevant",
  "A short video, if the issue is movement-related",
  "Your location in Dammam",
  "A short description",
];

export default function BeforeYouContactSection() {
  return (
    <section className="border-y border-ink-900/10 bg-stone-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-lg">
          <p className="section-label text-amber-800">Before you contact us</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Show us the part that isn&rsquo;t behaving.
          </h2>
          <p className="mt-4 text-ink-700">
            None of this means taking anything apart — just what you can
            see and film as it is.
          </p>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send a photo of a door, lock or carpentry problem.")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            WhatsApp a Photo
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
