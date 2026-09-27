import { commonPlaces } from "@/lib/tile-repair";

export default function TrCommonPlaces() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Common places</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Where tile problems tend to show up.
          </h2>
        </div>

        <div
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="list"
        >
          {commonPlaces.map((place) => (
            <div
              key={place.id}
              role="listitem"
              className="w-[68%] flex-none snap-start rounded-md border border-ink-900/10 bg-sand-50 p-5 sm:w-[30%] lg:w-[22%]"
            >
              <h3 className="font-serif text-base text-ink-950">{place.label}</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
                Typical concerns
              </p>
              <ul className="mt-1.5 space-y-1">
                {place.concerns.map((concern) => (
                  <li key={concern} className="text-sm text-ink-700">
                    {concern}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
