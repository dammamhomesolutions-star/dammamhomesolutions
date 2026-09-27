import { buildWhatsAppLink } from "@/lib/site-config";

const sequence = ["Stain appears", "Surface gets repainted", "Moisture returns", "Source needs investigation", "Appropriate repair / waterproofing"];

export default function PaintNotSolutionSection() {
  return (
    <section className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-500">
            Worth knowing before repainting
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            A fresh coat of paint won&rsquo;t fix every moisture problem.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            If moisture keeps reaching a surface, repainting alone may not
            address what&rsquo;s causing it. This isn&rsquo;t true of every
            case — sometimes a surface simply needed repainting — but
            it&rsquo;s a pattern worth recognizing.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4">
          {sequence.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-sand-100/20 px-4 py-2 text-sm text-sand-100">
                {step}
              </span>
              {i < sequence.length - 1 && (
                <span aria-hidden="true" className="text-cyan-500">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <a
          href={buildWhatsAppLink(
            "Hello Dammam Home Solutions, I have a moisture problem that keeps returning after repainting. Here's what's happening: "
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-9 inline-flex items-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
        >
          Ask About the Moisture Problem
        </a>
      </div>
    </section>
  );
}
