const points = [
  { title: "Local residential focus", text: "We work on the villas, apartments and family homes found across Dammam and the Eastern Province — their AC loads, roof tanks, wet areas and exterior walls." },
  { title: "One team for multiple repairs", text: "AC, plumbing, electrical, carpentry and finishing under one company, so you don't have to coordinate several contractors for one home." },
  { title: "WhatsApp-first communication", text: "Explain the problem and send photos or a short video before anyone visits. It saves you time and helps us come prepared." },
  { title: "A clear service process", text: "We understand the problem, agree the scope with you, then carry out the work — no surprise extras added without asking." },
  { title: "Practical diagnosis", text: "We look for the cause, not just the symptom: the leak behind the damp patch, the drain behind the dripping AC." },
  { title: "Support for landlords", text: "Property maintenance and repairs between tenancies for owners and property managers." },
];

export default function HpWhy() {
  return (
    <section aria-labelledby="hp-why" className="border-y border-ink-900/10 bg-sand-100/60 py-20 sm:py-28">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="section-label">Why us</p>
          <h2 id="hp-why" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Why Dammam homeowners choose us</h2>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-2xl bg-ink-900/10 sm:grid-cols-2 lg:col-span-8">
          {points.map((p, i) => (
            <li key={p.title} className="bg-sand-50 p-6">
              <span className="font-mono text-xs text-rust-700">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-semibold text-ink-950">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
