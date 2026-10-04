import { spProblems } from "@/lib/swimming-pool";
import SpIcon from "./SpIcon";

// Large jump-off cards into each part of the page.
export default function SpProblems() {
  return (
    <section aria-labelledby="sp-problems" className="bg-ink-950 pb-20 pt-4 text-sand-50 sm:pb-24">
      <div className="container-edge">
        <h2 id="sp-problems" className="sr-only">Common pool problems</h2>
        <ul className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-6">
          {spProblems.map((p) => (
            <li key={p.title} className="w-[70%] flex-none snap-start sm:w-auto">
              <a href={p.href} className="focus-ring group flex h-full flex-col justify-between gap-6 rounded-3xl border border-sand-100/10 bg-gradient-to-b from-teal-900/80 to-ink-900 p-5 transition-all hover:-translate-y-1 hover:border-teal-300/50">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-300/15 text-teal-300 transition-colors group-hover:bg-teal-300 group-hover:text-ink-950">
                  <SpIcon name={p.icon} className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-serif text-xl">{p.title}</span>
                  <span className="mt-1 block text-sm text-ink-300">{p.q}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
