interface Branch {
  trigger: string;
  result: string;
  href?: string;
}

const branches: Branch[] = [
  { trigger: "Surface is simply worn", result: "Painting / surface preparation", href: "#what-does-the-wall-look-like" },
  { trigger: "Paint is peeling repeatedly", result: "Surface condition needs assessment", href: "#what-does-the-wall-look-like" },
  { trigger: "Damp mark keeps returning", result: "Investigate the moisture source", href: "/waterproofing/" },
  { trigger: "Water is actively leaking", result: "Plumbing / leak investigation", href: "/plumbing-repair/" },
  { trigger: "Moisture enters through an exposed surface", result: "Waterproofing assessment", href: "/waterproofing/" },
];

export default function PaintOrWaterDecision() {
  return (
    <section className="border-y border-ink-900/10 bg-stone-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label">Choosing the right starting point</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Paint problem or water problem?
          </h2>
          <p className="mt-4 text-ink-700">
            Painting over a water problem rarely solves it. This is a
            quick way to check you&rsquo;re starting in the right place.
          </p>
        </div>

        <div className="mt-10 divide-y divide-ink-900/15 border-y border-ink-900/15">
          {branches.map((b) => (
            <a
              key={b.trigger}
              href={b.href}
              className="focus-ring group flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
            >
              <span className="text-[15px] text-ink-800">{b.trigger}</span>
              <span className="flex items-center gap-2 text-sm font-medium text-rust-700 group-hover:underline">
                <span aria-hidden="true">→</span>
                {b.result}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
