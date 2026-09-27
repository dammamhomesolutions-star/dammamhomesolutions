import { buildWhatsAppLink } from "@/lib/site-config";

const variables = ["Size", "Location", "Appearance", "Recurrence", "Surrounding surface condition"];

export default function CracksSection() {
  return (
    <section className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust-500">
          Cracks
        </p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
          Not every crack means the same thing.
        </h2>
        <p className="mt-5 leading-relaxed text-ink-300">
          Visible cracks vary in {variables.slice(0, -1).join(", ").toLowerCase()} and{" "}
          {variables[variables.length - 1].toLowerCase()} — which is why we
          don&rsquo;t treat every one the same way.
        </p>

        <div className="mt-8 rounded-2xl border-l-4 border-rust-500 bg-ink-900 p-6">
          <p className="text-[15px] leading-relaxed text-ink-200">
            If a crack appears significant, changes rapidly, is accompanied
            by other visible movement in the building, or anything else
            that seems concerning, it should be assessed by an
            appropriately qualified professional rather than simply
            painted over. That kind of assessment is outside what a
            painting visit can confirm.
          </p>
        </div>

        <a
          href={buildWhatsAppLink(
            "Hello Dammam Home Solutions, I'd like guidance on a crack in a wall or ceiling. Here's what I'm seeing: "
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-8 inline-flex items-center rounded-full bg-rust-600 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
        >
          Send a Photo for Initial Guidance
        </a>
      </div>
    </section>
  );
}
