import { wlPrepIssues, wlPrepSteps } from "@/lib/wallpaper-installation";
import WlIcon from "./WlIcon";

const paint = ["Paint condition", "Smoothness", "Cleanliness", "Adhesion", "Wall material", "The wallpaper's requirements"];
const old = ["Type of old wallpaper", "Its condition", "Number of layers", "How flat it is", "How well it's stuck", "The new product's requirements", "The finish you expect"];
const removal = ["Old wallpaper may need to come off", "Old adhesive needs removing", "Hidden damage may appear underneath", "The wall usually needs preparing afterwards"];
const compare = [
  { install: "Prepare the surface", remove: "Remove the existing covering" },
  { install: "Plan the layout", remove: "Assess the wall underneath" },
  { install: "Hang the new material", remove: "Remove adhesive and residue" },
  { install: "Match patterns", remove: "Repair and prepare the revealed surface" },
  { install: "Finish edges and seams", remove: "Ready for the new finish" },
];

export default function WlPrep() {
  return (
    <section id="preparation" aria-label="Wall preparation, painted walls, old wallpaper and removal" className="border-b border-ink-900/10 bg-teal-100/40 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-teal-700">Preparation</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Why wall preparation matters</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Wallpaper follows the wall underneath it. Every bump, crack or
              loose patch can show through or cause lifting later. We repair
              gypsum and plaster as part of the preparation.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {wlPrepIssues.map((p) => <li key={p} className="rounded-full bg-sand-50 px-3 py-1 text-sm text-ink-800 ring-1 ring-ink-900/10">{p}</li>)}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <ol className="flex flex-wrap items-center gap-2" aria-label="Preparation process">
              {wlPrepSteps.map((s, i) => (
                <li key={s} className="flex items-center gap-2">
                  <span className={`rounded-full px-4 py-2 text-sm font-semibold ${i === wlPrepSteps.length - 1 ? "bg-teal-800 text-sand-50" : "bg-sand-50 text-ink-900 ring-1 ring-ink-900/10"}`}>{s}</span>
                  {i < wlPrepSteps.length - 1 && <WlIcon name="arrow" className="h-4 w-4 text-teal-600" />}
                </li>
              ))}
            </ol>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/10">
                <h3 className="font-serif text-xl text-ink-950">Can wallpaper go over painted walls?</h3>
                <p className="mt-2 text-sm text-ink-600">Often — if the paint is sound. It depends on:</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">{paint.map((p) => <li key={p} className="rounded-full bg-teal-100 px-2.5 py-1 text-xs text-ink-800">{p}</li>)}</ul>
                <p className="mt-3 text-xs text-ink-500">Peeling or unstable paint shouldn&rsquo;t simply be covered.</p>
              </div>
              <div className="rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/10">
                <h3 className="font-serif text-xl text-ink-950">Can new wallpaper go over old?</h3>
                <p className="mt-2 text-sm text-ink-600">Sometimes. It depends on:</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">{old.map((p) => <li key={p} className="rounded-full bg-teal-100 px-2.5 py-1 text-xs text-ink-800">{p}</li>)}</ul>
                <p className="mt-3 text-xs text-ink-500">Removing it often gives a flatter base and a longer-lasting finish.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <WlIcon name="scraper" className="h-8 w-8 text-teal-300" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight">Removing old wallpaper before installation</h2>
            <ul className="mt-5 space-y-1.5">
              {removal.map((r) => <li key={r} className="flex gap-2 text-sm text-ink-300"><WlIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-300" />{r}</li>)}
            </ul>
            <p className="mt-4 text-xs text-ink-400">We offer wallpaper removal on its own or before a new installation.</p>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-2 md:hidden">
              {compare.map((c) => (
                <li key={c.install} className="rounded-xl bg-ink-900 p-3 text-sm">
                  <p><span className="text-teal-300">Install:</span> {c.install}</p>
                  <p className="mt-1"><span className="text-teal-300">Removal:</span> {c.remove}</p>
                </li>
              ))}
            </ul>
            <table className="hidden w-full overflow-hidden rounded-xl text-left text-sm md:table">
              <thead className="bg-ink-900">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold text-teal-300">Wallpaper installation</th>
                  <th scope="col" className="px-4 py-3 font-semibold text-teal-300">Wallpaper removal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-100/10">
                {compare.map((c) => (
                  <tr key={c.install}>
                    <td className="px-4 py-3 text-ink-300">{c.install}</td>
                    <td className="px-4 py-3 text-ink-300">{c.remove}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-sm text-ink-400">Removal can reveal imperfections that the old paper was hiding.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
