import { rnStories } from "@/lib/renovation";
import RnSlider from "./RnSlider";
import { Eyebrow } from "./RnUi";

// Before / after slider, then full-width transformation stories. Stories are
// typical scenarios, not claims about specific completed projects.
export default function RnStories() {
  return (
    <section id="transformations" aria-labelledby="rn-stories" className="scroll-mt-20 border-t border-ink-950/10 bg-sand-100 py-20 sm:py-28">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow n="12">Before &amp; after</Eyebrow>
            <h2 id="rn-stories" className="mt-5 font-serif text-4xl font-light tracking-tight text-ink-950 sm:text-5xl">How a transformation unfolds</h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-600 lg:col-span-5">
            Drag the divider to compare. The scenes are drawn to show the kind of
            change involved — not photos of completed projects.
          </p>
        </div>

        <div className="mt-10">
          <RnSlider />
        </div>

        <div className="mt-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">Typical scenarios</p>
          <div className="mt-4 border-t border-ink-950/15">
            {rnStories.map((s, n) => (
              <article key={s.title} className="grid gap-6 border-b border-ink-950/15 py-10 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <span className="font-mono text-xs text-walnut-700">{String(n + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-serif text-3xl leading-tight text-ink-950">&ldquo;{s.title}&rdquo;</h3>
                </div>
                <div className="grid gap-px bg-ink-950/10 sm:grid-cols-3 lg:col-span-9">
                  {[
                    { k: "Before", v: s.before, cls: "bg-sand-50 text-ink-700" },
                    { k: "Planning", v: s.planning, cls: "bg-sand-50 text-ink-900" },
                    { k: "After", v: s.after, cls: "bg-ink-950 text-sand-50" },
                  ].map((col) => (
                    <div key={col.k} className={`p-5 ${col.cls}`}>
                      <p className={`font-mono text-[10px] uppercase tracking-[0.22em] ${col.k === "After" ? "text-ember-500" : "text-ink-500"}`}>{col.k}</p>
                      <ul className="mt-3 space-y-1.5 text-sm">
                        {col.v.map((x) => <li key={x}>{x}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
