import { buildWhatsAppLink } from "@/lib/site-config";

const topics = [
  "Visible roof leakage",
  "Ceiling stains below roof areas",
  "Recurring moisture after rain",
  "Exposed roof surfaces",
  "Maintenance considerations",
];

export default function RoofWaterproofingSection() {
  return (
    <section id="roof-waterproofing" className="py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div className="max-w-xl">
          <p className="section-label text-cyan-800">Roof</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            When the roof is where the water starts.
          </h2>
          <p className="mt-4 text-ink-700">
            A leak that only appears with rain, or a ceiling mark that
            keeps returning, often points upward. The roof&rsquo;s
            condition and the actual entry point both need assessing
            before any work is planned — waterproofing can help protect
            exposed surfaces, but it isn&rsquo;t a guarantee against every
            possible roof leak.
          </p>

          <ul className="mt-6 space-y-2.5">
            {topics.map((t) => (
              <li key={t} className="flex gap-3 text-[15px] text-ink-700">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-700" />
                {t}
              </li>
            ))}
          </ul>

          <a
            href={buildWhatsAppLink(
              "Hello Dammam Home Solutions, I'd like to ask about roof waterproofing. Here's the situation: "
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-7 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Ask About Roof Waterproofing
          </a>
        </div>

        <svg viewBox="0 0 320 260" className="w-full max-w-sm justify-self-center" role="img" aria-label="Simplified roofline with a ceiling mark below it">
          <rect x="0" y="0" width="320" height="260" rx="16" fill="#e6e2d6" />
          <path d="M0 90 L160 20 L320 90" fill="none" stroke="#a6926a" strokeWidth="3" strokeLinejoin="round" />
          <rect x="20" y="90" width="280" height="150" fill="#f2efe6" stroke="#cfc7b2" />
          <g transform="translate(150,150)">
            <ellipse cx="0" cy="0" rx="46" ry="24" fill="#b7a377" opacity="0.4" />
            <ellipse cx="8" cy="-4" rx="26" ry="12" fill="#8f7c58" opacity="0.4" />
          </g>
          <path d="M150 96 V126" stroke="#1f8f96" strokeWidth="2" strokeDasharray="1 7" opacity="0.75" />
        </svg>
      </div>
    </section>
  );
}
