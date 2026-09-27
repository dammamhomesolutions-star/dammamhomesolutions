import { buildWhatsAppLink } from "@/lib/site-config";

const frames = [
  { tag: "P-01", label: "Full area", note: "The room or space as a whole." },
  { tag: "P-02", label: "Close-up", note: "Nearer to where the issue is." },
  { tag: "P-03", label: "Affected component", note: "The specific fixture, wall or fitting." },
];

function ViewfinderFrame() {
  return (
    <svg viewBox="0 0 100 72" aria-hidden="true" className="h-auto w-full">
      <path d="M2 16V2h14" fill="none" stroke="#4b5a3f" strokeWidth="2" />
      <path d="M84 2h14v14" fill="none" stroke="#4b5a3f" strokeWidth="2" />
      <path d="M98 56v14H84" fill="none" stroke="#4b5a3f" strokeWidth="2" />
      <path d="M16 70H2V56" fill="none" stroke="#4b5a3f" strokeWidth="2" />
    </svg>
  );
}

export default function PmPhotoCta() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div className="max-w-lg">
            <p className="section-label !text-moss-700">Before you explain everything</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              A photo can tell us more than a paragraph.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-600">
              If you&rsquo;re not sure how to describe the issue, send a
              photo of the area and a short note about what you&rsquo;ve
              noticed.
            </p>
            <a
              href={buildWhatsAppLink(
                "Hello Dammam Home Solutions, I'd like to send a few photos of something I've noticed. Here's a quick note: "
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-7 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              Send Photos on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {frames.map((frame) => (
              <div key={frame.tag} className="flex flex-col items-center gap-3 rounded-md border border-ink-900/10 bg-sand-100/60 p-4">
                <ViewfinderFrame />
                <div className="text-center">
                  <p className="font-mono text-[10px] text-ink-400">{frame.tag}</p>
                  <p className="mt-1 text-xs font-semibold text-ink-800">{frame.label}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-ink-500">{frame.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
