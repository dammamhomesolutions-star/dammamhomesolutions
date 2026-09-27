import { buildWhatsAppLink } from "@/lib/site-config";

const situations = [
  "AC not cooling properly",
  "Water dripping from the indoor unit",
  "Weak or reduced airflow",
  "Unusual noise from the unit",
  "Routine AC maintenance",
];

function AcDiagnosticVisual() {
  return (
    <svg viewBox="0 0 300 260" className="w-full max-w-sm" role="img" aria-labelledby="ac-visual-title">
      <title id="ac-visual-title">Simple diagram of an AC indoor unit airflow and drainage check</title>
      <rect x="0" y="0" width="300" height="260" rx="16" fill="#f4f0e8" />
      <rect x="40" y="40" width="180" height="46" rx="6" fill="#232833" />
      <rect x="52" y="52" width="70" height="6" rx="3" fill="#69748a" />
      <rect x="52" y="64" width="70" height="6" rx="3" fill="#69748a" />
      <circle cx="196" cy="55" r="4" fill="#c76a3f" />

      <g stroke="#8e97a8" strokeWidth="1.4" fill="none" strokeDasharray="3 4">
        <path d="M50 86 C 30 120, 30 150, 50 175" />
        <path d="M100 86 C 90 130, 90 150, 100 175" />
        <path d="M150 86 C 150 130, 150 150, 150 175" />
      </g>
      <text x="40" y="196" fontSize="11" fill="#69748a" fontFamily="var(--font-poppins), sans-serif">
        airflow pattern
      </text>

      <path d="M60 86 L54 108" stroke="#c76a3f" strokeWidth="2" strokeLinecap="round" />
      <circle cx="53" cy="116" r="3" fill="#c76a3f">
        <animate attributeName="cy" values="116;128;116" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="70" y="120" fontSize="11" fill="#94472a" fontFamily="var(--font-poppins), sans-serif">
        drain line
      </text>

      <g transform="translate(200,150)">
        <rect x="0" y="0" width="70" height="70" rx="10" fill="#ebe4d6" stroke="#ded2ba" />
        <path
          d="M20 40 L30 50 L52 22"
          stroke="#b3562f"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="4" y="90" fontSize="11" fill="#69748a" fontFamily="var(--font-poppins), sans-serif">
          drainage checked
        </text>
      </g>
    </svg>
  );
}

export default function AcSpotlight() {
  return (
    <section id="ac-repair" className="py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div className="max-w-xl">
          <p className="section-label">Service spotlight</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The room isn&rsquo;t cooling. Let&rsquo;s start there.
          </h2>
          <p className="mt-4 text-ink-700">
            AC problems in Dammam homes usually show up in one of a few
            familiar ways. Tell us which one matches, and we&rsquo;ll take it
            from there.
          </p>

          <ul className="mt-7 space-y-2.5">
            {situations.map((s) => (
              <li key={s} className="flex gap-3 text-[15px] text-ink-700">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-rust-600" />
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/ac-repair/"
              className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              AC Repair &amp; Maintenance
            </a>
            <a
              href={buildWhatsAppLink(
                "Hello Dammam Home Solutions, my AC needs attention. Here's the issue: "
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center rounded-full border border-ink-900/20 px-6 py-3 text-sm font-medium text-ink-800 hover:bg-ink-900/5"
            >
              WhatsApp about AC
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <AcDiagnosticVisual />
        </div>
      </div>
    </section>
  );
}
