import WlIcon from "./WlIcon";
import WlSwatch from "./WlSwatch";

const seam = ["Correct positioning", "Clean, sharp edges", "Good surface preparation", "The right adhesive and method", "Careful handling", "Suitable room conditions", "Pattern alignment"];
const edges: { icon: "corner" | "window" | "door" | "check"; t: string; b: string }[] = [
  { icon: "corner", t: "Inside corners", b: "Walls are rarely perfectly square, so the paper is wrapped slightly and re-plumbed on the next wall." },
  { icon: "corner", t: "Outside corners", b: "Edges are wrapped or finished to suit the paper and the wall so they don't lift or fray." },
  { icon: "window", t: "Windows", b: "Trimmed neatly around frames and reveals while keeping the pattern aligned above and below." },
  { icon: "door", t: "Doors", b: "Cut carefully to the architrave so the line stays clean." },
  { icon: "check", t: "Sockets & switches", b: "Paper is cut neatly around socket and switch plates." },
];
const feature = ["Choosing the wall", "Furniture in front of it", "Room lighting", "Pattern scale", "Focal point", "Wall dimensions", "Doors or windows in it"];

export default function WlFinish() {
  return (
    <section aria-label="Seams, corners and feature walls" className="border-b border-ink-900/10 bg-teal-100/40 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-teal-700">The details</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What makes a wallpaper seam look good?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              We won&rsquo;t promise &ldquo;invisible&rdquo; seams. A well-prepared
              surface and careful installation help create clean, consistent
              ones.
            </p>
            <ul className="mt-5 space-y-1.5">
              {seam.map((s) => <li key={s} className="flex gap-2 text-sm text-ink-800"><WlIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-700" />{s}</li>)}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Corners, doors &amp; windows</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {edges.map((e) => (
                <div key={e.t} className="flex gap-3 rounded-2xl bg-sand-50 p-4 ring-1 ring-ink-900/10">
                  <WlIcon name={e.icon} className="h-6 w-6 flex-none text-teal-700" />
                  <div>
                    <h3 className="font-semibold text-ink-950">{e.t}</h3>
                    <p className="mt-0.5 text-sm text-ink-600">{e.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <WlIcon name="feature" className="h-8 w-8 text-teal-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Creating a wallpaper feature wall</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">One papered wall can anchor a room; a full room creates a wrap-around look. Neither is always better. Think about:</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">{feature.map((f) => <li key={f} className="rounded-full bg-teal-100 px-2.5 py-1 text-xs text-ink-800">{f}</li>)}</ul>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-7">
            {[{ t: "Feature wall", full: false }, { t: "Full room", full: true }].map((v) => (
              <figure key={v.t}>
                <svg viewBox="0 0 160 110" className="h-auto w-full rounded-xl ring-1 ring-ink-900/10" aria-hidden="true">
                  <rect width="160" height="110" fill="#f4f0e8" />
                  <path d="M0 0l40 20v70L0 110zM160 0l-40 20v70l40 20z" fill={v.full ? "#1f5c5c" : "#ebe4d6"} />
                  <rect x="40" y="20" width="80" height="70" fill="#1f5c5c" />
                  <path d="M40 90h80l40 20H0z" fill="#ded2ba" />
                  <rect x="56" y="70" width="48" height="16" rx="4" fill="#69748a" />
                </svg>
                <figcaption className="mt-2 text-center text-sm font-medium text-ink-800">{v.t}</figcaption>
              </figure>
            ))}
            <div className="col-span-2 hidden h-16 overflow-hidden rounded-xl sm:block" aria-hidden="true"><WlSwatch kind="floral" uid="finish" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
