import RoomBeforeAfterSlider from "./RoomBeforeAfterSlider";

export default function RoomBeforeAfterSection() {
  return (
    <section className="border-y border-ink-900/10 bg-zinc-100/70 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-emerald-800">Function restored</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Drag to compare.
          </h2>
          <p className="mt-4 text-ink-700">
            A damaged area, and the same area once it&rsquo;s repaired —
            working properly again, not a full remodel.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <RoomBeforeAfterSlider />
        </div>
      </div>
    </section>
  );
}
