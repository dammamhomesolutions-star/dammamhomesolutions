import FsIcon from "./FsIcon";
import FsCtas from "./FsCtas";

const steps = [
  {
    title: "Make sure everyone is safe",
    body: "People first. Get everyone out and stay out of smoke-filled areas.",
  },
  {
    title: "Don't re-enter until it's declared safe",
    body: "Follow Civil Defense instructions before going back inside.",
  },
  {
    title: "Don't wipe or wash heavy soot",
    body: "Wiping can smear residue deeper into paint and gypsum.",
  },
  {
    title: "Get the damage assessed",
    body: "Photograph from a safe spot, then ask for a professional assessment.",
  },
];

export default function FsEmergencyStrip() {
  return (
    <section aria-labelledby="fs-start-here" className="border-b border-ink-900/10 bg-sand-100">
      <div className="container-edge py-12 sm:py-14">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="fs-start-here" className="font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
            Just had a fire? Start here.
          </h2>
          <p className="text-xs text-ink-500">
            Active fire or anyone in danger: call Civil Defense (998) or 911 first.
          </p>
        </div>

        <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-4 bg-sand-50 p-5 sm:p-6">
              <span
                className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-ink-950 font-mono text-xs font-semibold text-sand-50"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-ink-950">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="flex max-w-2xl items-start gap-3 rounded-xl border border-rust-600/30 bg-rust-100/60 px-4 py-3 text-sm leading-relaxed text-rust-700">
            <FsIcon name="alert" className="mt-0.5 h-5 w-5 flex-none" />
            Do not attempt to clean electrical, structural or heavily
            smoke-damaged areas yourself.
          </p>
          <FsCtas primaryLabel="Request an Assessment" secondaryLabel="Call Now" />
        </div>
      </div>
    </section>
  );
}
