import { buildWhatsAppLink } from "@/lib/site-config";

const signs = [
  "Slow sink drainage",
  "Recurring blockage",
  "Standing water that takes a while to clear",
  "Unpleasant drainage smell or behavior",
];

export default function DrainageSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="max-w-lg">
          <p className="section-label text-teal-700">Drainage</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Slow drainage is a warning, not a diagnosis.
          </h2>
          <p className="mt-4 text-ink-700">
            A drain that empties slowly or backs up repeatedly is telling
            you something is partly blocked or not working the way it
            should — it doesn&rsquo;t tell you exactly what or where on its
            own. We&rsquo;d rather look at it than guess with chemicals
            that can do more harm than good.
          </p>
        </div>

        <div>
          <ul className="space-y-3">
            {signs.map((s) => (
              <li key={s} className="flex gap-3 rounded-lg border border-ink-900/10 bg-sand-100/50 px-4 py-3 text-sm text-ink-700">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-teal-600" />
                {s}
              </li>
            ))}
          </ul>

          <a
            href={buildWhatsAppLink(
              "Hello Dammam Home Solutions, I need help with a slow or blocked drain. Here's what's happening: "
            )}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Request Drainage Help
          </a>
        </div>
      </div>
    </section>
  );
}
