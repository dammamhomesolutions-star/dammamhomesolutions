import { buildWhatsAppLink } from "@/lib/site-config";

const shots = [
  { tag: "01", title: "Show the area", body: "Take a photo showing where the problem is located." },
  { tag: "02", title: "Show the detail", body: "Take a closer photo of the damaged component." },
  { tag: "03", title: "Show the context", body: "If relevant, show what is around the affected area." },
];

export default function EhPhotoGuide() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div className="max-w-lg">
            <p className="section-label !text-ember-700">Photos that help</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              A few clear photos can make the first conversation easier.
            </h2>
            <p className="mt-4 text-sm text-ink-500">
              Photos help us understand faster — they don&rsquo;t guarantee a
              diagnosis on their own.
            </p>
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send a few photos of a problem at my property. Here's a quick note: ")}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-6 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              Send Photos on WhatsApp
            </a>
          </div>

          <div className="grid gap-px overflow-hidden rounded-md border border-ink-900/10 bg-ink-900/10 sm:grid-cols-3">
            {shots.map((shot) => (
              <div key={shot.tag} className="bg-sand-50 p-6">
                <p className="font-mono text-xs text-ember-700">{shot.tag}</p>
                <h3 className="mt-2 text-sm font-semibold text-ink-950">{shot.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-600">{shot.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
