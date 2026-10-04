import Link from "next/link";
import FcIcon from "./FcIcon";

const linkClass = "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-glass-600 decoration-2 underline-offset-4 hover:text-glass-700";
const edge = ["Perimeter finishing", "Clean, straight lines", "Shadow gaps where designed", "Cove details", "Curtain tracks and pelmets", "Wall condition", "Paint transition"];

// Detail at the wall-to-ceiling junction: shadow gap and a curtain recess.
function EdgeDetail() {
  return (
    <svg viewBox="0 0 300 200" className="h-auto w-full" role="img" aria-labelledby="fc-edge-title">
      <title id="fc-edge-title">{`Detail of where the false ceiling meets the wall: a shadow gap, a recessed curtain pocket with a track, and the curtain hanging below`}</title>
      <rect width="300" height="200" fill="#eef3f5" />
      <rect width="300" height="24" fill="#7fa0b0" />
      <rect x="0" y="24" width="20" height="176" fill="#d7e4ea" stroke="#3d5a6b" />
      <path d="M40 24v40M160 24v40M260 24v40" stroke="#5b7d8f" strokeWidth="2" />
      <path d="M26 64h274v10H26z" fill="#faf8f4" stroke="#26333f" />
      <rect x="20" y="64" width="6" height="10" fill="#1c2733" />
      <text x="34" y="94" fontFamily="ui-monospace, monospace" fontSize="9" fill="#1c2733">← SHADOW GAP</text>
      <path d="M200 74v-26h60v26" fill="none" stroke="#26333f" strokeWidth="1.5" />
      <rect x="212" y="60" width="36" height="5" fill="#c76a3f" />
      <path d="M216 65c-4 40-4 90 2 135h28c4-45 4-95 0-135z" fill="#9c7752" opacity="0.85" />
      <text x="176" y="44" fontFamily="ui-monospace, monospace" fontSize="9" fill="#c76a3f">CURTAIN TRACK</text>
    </svg>
  );
}

export default function FcCoordination() {
  return (
    <section aria-label="Coordinating the ceiling with walls, curtains and finishes" className="border-b border-ink-900/10 bg-glass-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="section-label !text-glass-700">Coordination</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">The wall-to-ceiling edge matters</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">The junction is where a ceiling looks finished or doesn&rsquo;t. We plan it with:</p>
            <ul className="mt-4 flex flex-wrap gap-2">{edge.map((e) => <li key={e} className="rounded-full bg-sand-50 px-3 py-1 text-sm text-ink-800 ring-1 ring-ink-900/10">{e}</li>)}</ul>
          </div>
          <div className="rounded-2xl bg-sand-50 p-4 ring-1 ring-ink-900/10 lg:col-span-6">
            <EdgeDetail />
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10">
            <FcIcon name="curtain" className="h-7 w-7 text-glass-700" />
            <h3 className="mt-3 font-serif text-2xl text-ink-950">Ceilings and curtains</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              A recessed curtain pocket, a pelmet or support for a ceiling-mounted
              track is easiest to build in before the ceiling is finished. It
              also sets the curtain drop and keeps cove lighting clear of the
              fabric. See{" "}
              <Link href="/curtain-blind-installation-dammam/" className={linkClass}>curtain &amp; blind installation</Link>.
            </p>
          </div>
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10">
            <FcIcon name="wall" className="h-7 w-7 text-glass-700" />
            <h3 className="mt-3 font-serif text-2xl text-ink-950">Should the ceiling match the room?</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              A feature ceiling works best when it lines up with the feature wall,
              furniture and flooring beneath it. If you&rsquo;re planning a{" "}
              <Link href="/wallpaper-installation-dammam/" className={linkClass}>wallpaper feature wall</Link>{" "}
              or new{" "}
              <Link href="/lighting-fixture-installation-dammam/" className={linkClass}>light fixtures</Link>, tell us so the ceiling design supports them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
