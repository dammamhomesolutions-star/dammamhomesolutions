import DoorAlignmentSlider from "./DoorAlignmentSlider";

export default function DoorAlignmentSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-amber-800">Problem → functional result</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Drag to compare.
          </h2>
          <p className="mt-4 text-ink-700">
            A misaligned door, and the same door once it&rsquo;s been
            adjusted to close properly again.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <DoorAlignmentSlider />
        </div>
      </div>
    </section>
  );
}
