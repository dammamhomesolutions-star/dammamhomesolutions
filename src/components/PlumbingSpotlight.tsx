import { buildWhatsAppLink } from "@/lib/site-config";

const topics = [
  "Leaks",
  "Blocked drains",
  "Low water pressure",
  "Bathroom plumbing",
  "Kitchen plumbing",
  "Visible water damage",
];

function WaterFlowVisual() {
  return (
    <svg viewBox="0 0 320 200" className="w-full max-w-md" role="img" aria-labelledby="plumbing-visual-title">
      <title id="plumbing-visual-title">Simple line illustration of a water pipe run with a leak point</title>
      <rect x="0" y="0" width="320" height="200" rx="16" fill="#232833" />

      <path
        d="M20 40 H140 V90 H220 V150 H300"
        stroke="#69748a"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 40 H140 V90 H220 V150 H300"
        stroke="#3a4152"
        strokeWidth="2"
        fill="none"
        strokeDasharray="1 10"
        strokeLinecap="round"
      />

      <g>
        <circle cx="220" cy="120" r="4" fill="#5b8fbf">
          <animate attributeName="cy" values="120;96;120" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;0" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="65" r="4" fill="#5b8fbf">
          <animate attributeName="cy" values="65;40;65" dur="2.2s" repeatCount="indefinite" begin="0.6s" />
          <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" begin="0.6s" />
        </circle>
      </g>

      <g transform="translate(220,90)">
        <path d="M0 0 L-6 22" stroke="#c76a3f" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="-7" cy="30" r="3.4" fill="#c76a3f">
          <animate attributeName="cy" values="30;42;30" dur="1.6s" repeatCount="indefinite" />
        </circle>
        <text x="10" y="12" fontSize="11" fill="#c76a3f" fontFamily="var(--font-poppins), sans-serif">
          leak point
        </text>
      </g>

      <text x="20" y="180" fontSize="11" fill="#8e97a8" fontFamily="var(--font-poppins), sans-serif">
        supply run — kitchen to bathroom
      </text>
    </svg>
  );
}

export default function PlumbingSpotlight() {
  return (
    <section id="plumbing-repair" className="bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
          <WaterFlowVisual />
        </div>

        <div className="order-1 max-w-xl lg:order-2">
          <p className="section-label">Service spotlight</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Water problems don&rsquo;t always start where you see them.
          </h2>
          <p className="mt-4 text-ink-700">
            A damp patch, a slow drain or a drop in pressure can point to
            something further up the line. We trace it back before we start
            repair work.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {topics.map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink-900/15 bg-sand-50 px-3.5 py-1.5 text-[13px] text-ink-700"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/plumbing-repair/"
              className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              Plumbing &amp; Leak Repair
            </a>
            <a
              href={buildWhatsAppLink(
                "Hello Dammam Home Solutions, I have a plumbing / water issue. Here's the issue: "
              )}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring inline-flex items-center rounded-full border border-ink-900/20 px-6 py-3 text-sm font-medium text-ink-800 hover:bg-ink-900/5"
            >
              WhatsApp about water
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
