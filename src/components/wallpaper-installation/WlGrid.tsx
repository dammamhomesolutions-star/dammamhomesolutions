import { wlGrid } from "@/lib/wallpaper-installation";
import WlSwatch from "./WlSwatch";

export default function WlGrid() {
  return (
    <section aria-labelledby="wl-grid" className="border-b border-ink-900/10 bg-teal-100/40 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">Styles &amp; spaces</p>
          <h2 id="wl-grid" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Wallpaper we hang — and what each needs</h2>
          <p className="mt-4 text-sm text-ink-500">Swatches are abstract illustrations of pattern type, not specific products.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {wlGrid.map((g, i) => (
            <div key={g.name} className="group overflow-hidden rounded-2xl bg-sand-50 ring-1 ring-ink-900/10 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-teal-600">
              <div className="h-24 overflow-hidden">
                <div className="h-full transition-transform duration-500 group-hover:scale-105">
                  <WlSwatch kind={g.swatch} uid={`grid-${i}`} />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-ink-950">{g.name}</h3>
                <p className="mt-1 text-sm text-ink-600">{g.use}</p>
                <p className="mt-2 text-xs font-medium text-teal-700">Key point: {g.consider}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
