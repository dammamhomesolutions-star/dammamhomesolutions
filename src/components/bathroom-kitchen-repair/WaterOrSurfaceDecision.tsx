import { buildWhatsAppLink } from "@/lib/site-config";

interface Branch {
  trigger: string;
  result: string;
  href?: string;
  whatsapp?: boolean;
}

const branches: Branch[] = [
  { trigger: "Water is coming from a fixture", result: "Plumbing", href: "/plumbing-repair/" },
  { trigger: "Moisture around a wet area", result: "Waterproofing may need assessment", href: "/waterproofing/" },
  { trigger: "Damaged tile", result: "Tile / surface repair", href: "#choose-the-room" },
  { trigger: "Damp wall", result: "The source needs investigation", href: "/waterproofing/" },
  { trigger: "Not sure", result: "Send photos", whatsapp: true },
];

export default function WaterOrSurfaceDecision() {
  return (
    <section className="border-y border-ink-900/10 bg-zinc-100/70 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-emerald-800">Bathroom crossover</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Water problem or surface problem?
          </h2>
          <p className="mt-4 text-ink-700">
            This isn&rsquo;t a remote diagnosis — just a way to point you
            toward the right starting point.
          </p>
        </div>

        <div className="mt-10 divide-y divide-ink-900/15 border-y border-ink-900/15">
          {branches.map((b) =>
            b.whatsapp ? (
              <a
                key={b.trigger}
                href={buildWhatsAppLink("Hello Dammam Home Solutions, I have a bathroom problem but I'm not sure if it's plumbing or waterproofing. Here's what I'm seeing: ")}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring group flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
              >
                <span className="text-[15px] text-ink-800">{b.trigger}</span>
                <span className="flex items-center gap-2 text-sm font-medium text-emerald-800 group-hover:underline">
                  <span aria-hidden="true">→</span>
                  {b.result}
                </span>
              </a>
            ) : (
              <a
                key={b.trigger}
                href={b.href}
                className="focus-ring group flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
              >
                <span className="text-[15px] text-ink-800">{b.trigger}</span>
                <span className="flex items-center gap-2 text-sm font-medium text-emerald-800 group-hover:underline">
                  <span aria-hidden="true">→</span>
                  {b.result}
                </span>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
