import FaIcon from "./FaIcon";

const depends = ["Furniture design", "How well it was first assembled", "Condition of the panels", "Condition of the hardware", "Any missing fittings", "Whether it was designed to be taken apart"];
const moveSteps = [
  { icon: "tools" as const, t: "Disassemble", b: "Wardrobes, beds, desks, tables and cabinets taken apart carefully, hardware bagged and labelled." },
  { icon: "truck" as const, t: "Move", b: "Panels and items transported to the new home or office." },
  { icon: "frame" as const, t: "Reassemble", b: "Put back together, aligned and anchored where needed in the new rooms." },
];

export default function FaReassembly() {
  return (
    <section id="reassembly" aria-label="Reassembly and moving" className="border-b border-ink-900/10 bg-walnut-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">Reassembly</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Need furniture reassembled after moving?</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10">
            <FaIcon name="box" className="h-7 w-7 text-walnut-700" />
            <h3 className="mt-3 font-serif text-2xl text-ink-950">New assembly</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">The furniture is assembled for the first time from its packaged components, with new hardware and instructions.</p>
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50">
            <FaIcon name="tools" className="h-7 w-7 text-walnut-300" />
            <h3 className="mt-3 font-serif text-2xl">Reassembly</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">Existing furniture is taken apart and put back together. How well that works depends on:</p>
            <ul className="mt-3 grid gap-1.5 text-sm text-sand-100 sm:grid-cols-2">{depends.map((d) => <li key={d}>{d}</li>)}</ul>
            <p className="mt-4 text-xs text-ink-400">Not every piece can be safely taken apart and rebuilt — particleboard that has been screwed twice, or glued joints, may not hold. We&rsquo;ll tell you before we start.</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-serif text-3xl tracking-tight text-ink-950">Moving home? Assembly can be part of the process</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-600">
            Assembly and moving are separate services, but we can do both:
            disassemble before the move, transport the furniture, and reassemble
            it at the new place.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {moveSteps.map((s, i) => (
              <li key={s.t} className="relative rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-walnut-800 text-walnut-100"><FaIcon name={s.icon} className="h-6 w-6" /></span>
                  <span className="font-mono text-xs text-walnut-700">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-4 font-semibold text-ink-950">{s.t}</h3>
                <p className="mt-1 text-sm text-ink-600">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
