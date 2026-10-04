import { mdLookalikes } from "@/lib/mold-damp";
import { Spec } from "./MdUi";

// "Is it mold or something else?" — clues only, never identification.
export default function MdLooks() {
  return (
    <section aria-labelledby="md-looks" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <Spec code="S-05">Surface appearance</Spec>
        <h2 id="md-looks" className="mt-4 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Is it mold or something else?</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-600">
          Appearance can provide clues, but identification may require
          appropriate inspection or testing.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
          {mdLookalikes.map((l) => (
            <li key={l.label} className="flex flex-col overflow-hidden rounded-xl border border-ink-900/10 bg-sand-50">
              <span aria-hidden="true" className="block aspect-[4/3] w-full border-b border-ink-900/10" style={{ background: l.swatch }} />
              <div className="flex-1 p-4">
                <h3 className="text-sm font-semibold text-ink-950">{l.label}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-700">{l.clue}</p>
                <p className="mt-2 text-xs leading-relaxed text-glass-700">{l.other}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-ink-500">Swatches are simplified drawings, not photographs. We don&rsquo;t offer laboratory testing; if you need growth identified, a specialist testing provider is required.</p>
      </div>
    </section>
  );
}
