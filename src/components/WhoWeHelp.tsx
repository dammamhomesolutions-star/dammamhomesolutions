const audiences = [
  {
    title: "Homeowners",
    body: "For repairs, maintenance and improvements around the home.",
  },
  {
    title: "Tenants",
    body: "For everyday property issues that need professional attention.",
  },
  {
    title: "Landlords",
    body: "For keeping rental properties maintained between tenants and throughout the year.",
  },
  {
    title: "Property Managers",
    body: "For recurring repair and maintenance requirements across properties.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <p className="section-label">Who we help</p>

        <div className="mt-8 divide-y divide-ink-900/10 border-y border-ink-900/10">
          {audiences.map((a, i) => (
            <div
              key={a.title}
              className="grid gap-2 py-7 sm:grid-cols-[1fr_2fr] sm:items-baseline sm:gap-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-sm text-ink-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl text-ink-950 sm:text-2xl">
                  {a.title}
                </h3>
              </div>
              <p className="text-ink-700 sm:text-lg sm:leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
