import { crackPatterns } from "@/lib/ceiling-repair";

const paths: Record<string, string> = {
  fine: "M30 90 L55 100 L48 112",
  joint: "M20 60 L100 60 M55 50 L65 70",
  larger: "M20 30 L60 75 L45 95 L90 130 L110 165",
};

function CrackVisual({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="120" height="120" fill="url(#ceiling-plaster)" filter="url(#ceiling-noise)" />
      {id === "joint" && <line x1="0" y1="60" x2="120" y2="60" stroke="#ded2ba" strokeWidth="2" />}
      <path
        d={paths[id]}
        fill="none"
        stroke="#333a49"
        strokeWidth={id === "larger" ? 2.4 : 1.6}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function CrCrackPatterns() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Cracks</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Not every crack tells the same story.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {crackPatterns.map((pattern) => (
            <div key={pattern.id} className="rounded-md border border-ink-900/10 bg-sand-100/40 p-5">
              <div className="aspect-square w-full overflow-hidden rounded-sm">
                <CrackVisual id={pattern.id} />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink-950">{pattern.label}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{pattern.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-ink-500">
          For larger, rapidly changing or concerning cracks, appropriate
          professional assessment is worth arranging — this graphic is here
          to explain why assessment matters, not to diagnose a photo.
        </p>
      </div>
    </section>
  );
}
