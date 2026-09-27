const steps = [
  { title: "Choose the room", body: "Bathroom or kitchen." },
  { title: "Point to the problem", body: "Sink, drain, cabinet, tile, wall, door or another area." },
  { title: "Add anything else", body: "Build a repair list." },
  { title: "Send photos", body: "Show the actual condition." },
  { title: "Clarify the work", body: "The appropriate service depends on the issue and assessment." },
  { title: "Arrange the repair", body: "Work is carried out within the agreed scope." },
];

function Bracket({ corner }: { corner: "tl" | "br" }) {
  const isTl = corner === "tl";
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className={`absolute ${isTl ? "left-0 top-0" : "bottom-0 right-0 rotate-180"} text-emerald-700`}
    >
      <path d="M1 9 V1 H9" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function RoomJourney() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-xl">
          <p className="section-label text-emerald-800">How this works</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            From room problem to repair list.
          </h2>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="relative border border-ink-900/10 p-6">
              <Bracket corner="tl" />
              <Bracket corner="br" />
              <span className="font-serif text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-serif text-lg text-ink-950">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
