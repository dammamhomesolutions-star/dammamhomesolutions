import Link from "next/link";

const noticeItems = [
  "An active leak",
  "Water around fixtures",
  "Ceiling or wall moisture",
  "Drainage backup",
  "Water appearing somewhere sudden",
];

export default function EhWaterSection() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="section-label !text-ember-700">Water</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Water problems need context.
          </h2>
          <p className="mt-4 text-sm text-ink-600">You might be noticing:</p>
          <ul className="mt-3 space-y-2">
            {noticeItems.map((item) => (
              <li key={item} className="text-sm text-ink-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md border border-ember-700/30 bg-ember-100/40 p-6 sm:p-7">
          <p className="font-medium leading-relaxed text-ink-950">
            If there is a serious active water problem, prioritise personal
            safety and avoid electrical hazards. Contact the appropriate
            emergency support where necessary, then contact a qualified
            repair provider for the property issue.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/plumbing-repair/"
              className="focus-ring text-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4 hover:text-ember-700"
            >
              Plumbing
            </Link>
            <Link
              href="/waterproofing/"
              className="focus-ring text-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4 hover:text-ember-700"
            >
              Waterproofing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
