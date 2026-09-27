const details = [
  { id: "grout-texture", label: "Grout texture" },
  { id: "tile-edge", label: "Tile edge" },
  { id: "chipped-corner", label: "Chipped corner" },
  { id: "joint", label: "Joint" },
  { id: "surface-finish", label: "Surface finish" },
  { id: "alignment", label: "Alignment" },
];

function MacroVisual({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      {id === "grout-texture" && (
        <rect x="0" y="0" width="100" height="100" fill="#ded2ba" filter="url(#tile-noise)" />
      )}
      {id === "tile-edge" && (
        <>
          <rect x="0" y="0" width="100" height="100" fill="url(#tile-stone)" filter="url(#tile-noise)" />
          <line x1="0" y1="30" x2="100" y2="30" stroke="#8e97a8" strokeWidth="1.4" />
        </>
      )}
      {id === "chipped-corner" && (
        <>
          <rect x="0" y="0" width="100" height="100" fill="url(#tile-stone)" filter="url(#tile-noise)" />
          <path d="M0 0 L26 0 L0 26 Z" fill="#b4bac6" />
        </>
      )}
      {id === "joint" && (
        <>
          <rect x="0" y="0" width="46" height="100" fill="url(#tile-stone)" filter="url(#tile-noise)" />
          <rect x="54" y="0" width="46" height="100" fill="url(#tile-stone)" filter="url(#tile-noise)" />
          <rect x="46" y="0" width="8" height="100" fill="#ded2ba" />
        </>
      )}
      {id === "surface-finish" && (
        <>
          <rect x="0" y="0" width="100" height="100" fill="url(#tile-stone)" />
          <rect x="0" y="0" width="100" height="45" fill="#ffffff" opacity="0.18" />
        </>
      )}
      {id === "alignment" && (
        <>
          <rect x="4" y="4" width="42" height="42" fill="url(#tile-stone)" />
          <rect x="54" y="6" width="42" height="42" fill="url(#tile-stone)" />
          <rect x="4" y="54" width="42" height="42" fill="url(#tile-stone)" />
          <rect x="56" y="52" width="42" height="42" fill="url(#tile-stone)" />
        </>
      )}
    </svg>
  );
}

export default function TrMaterialDetail() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Material detail</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Small details matter on a tiled surface.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {details.map((detail) => (
            <div key={detail.id} className="overflow-hidden rounded-sm border border-ink-900/10">
              <div className="aspect-square">
                <MacroVisual id={detail.id} />
              </div>
              <p className="border-t border-ink-900/10 bg-sand-100/60 px-3 py-2 text-xs font-medium text-ink-700">
                {detail.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
