import BwIcon from "./BwIcon";

const signs = ["The wall is visibly leaning", "Sections have moved or displaced", "Cracking is getting worse quickly", "Large pieces are loose", "Structural elements look damaged", "Anything feels unsafe or unstable"];
const cosmetic = ["Peeling paint", "Minor surface cracks", "Damaged plaster", "Discolouration", "Surface stains"];
const deeper = ["Recurring cracks", "Displaced masonry", "Significant movement", "Water getting into the wall", "Damaged coping", "Leaning sections", "Major deterioration"];

export default function BwWarning() {
  return (
    <section aria-labelledby="bw-warn" className="border-b border-ink-900/10 bg-clay-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-clay-700">Cosmetic or deeper?</p>
            <h2 id="bw-warn" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Not every wall crack means the same thing</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
              Small surface cracks are often cosmetic. Wider, recurring,
              displaced or movement-related cracks need a closer look. Not every
              crack is structural — and not every crack is harmless.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            <div className="rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/10">
              <h3 className="font-semibold text-ink-950">Usually cosmetic surface damage</h3>
              <ul className="mt-3 space-y-1 text-sm text-ink-700">{cosmetic.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
            <div className="rounded-2xl bg-ink-950 p-5 text-sand-50">
              <h3 className="font-semibold">Possibly deeper wall problems</h3>
              <ul className="mt-3 space-y-1 text-sm text-ink-300">{deeper.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-6 rounded-2xl border-2 border-rust-600/40 bg-rust-100/40 p-6 sm:p-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <BwIcon name="alert" className="h-8 w-8 text-rust-700" />
            <h3 className="mt-3 font-serif text-2xl text-ink-950">Get it assessed if you notice</h3>
            <p className="mt-2 text-sm text-ink-700">Keep people and cars away from the wall, and don&rsquo;t climb, prop, push or drill into it. Where structure is in question we can involve a structural engineer.</p>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-8">
            {signs.map((s) => (
              <li key={s} className="flex items-center gap-2 rounded-xl bg-sand-50 px-3 py-2.5 text-sm text-ink-900">
                <BwIcon name="alert" className="h-4 w-4 flex-none text-rust-700" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
