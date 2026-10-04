import { cvFeatures, cvQuality } from "@/lib/cctv-intercom";
import CvIcon from "./CvIcon";

const outdoor = ["Sun, heat and weather exposure", "Secure mounting", "Protected cable runs", "Lighting at night", "Field of view", "Glare from sun or lights", "Dust on lenses and housings"];
const indoor = ["Entrances and hallways", "Office receptions", "Shop floors and stock areas", "Building common areas"];

export default function CvCameras() {
  return (
    <section aria-label="Outdoor, indoor and camera quality" className="border-b border-ink-900/10 bg-moss-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-8">
            <CvIcon name="sun" className="h-7 w-7 text-moss-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Outdoor cameras need more than a camera</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              In Dammam, outdoor cameras deal with strong sun, summer heat,
              humidity and dust. The camera has to suit its spot, and so does
              everything around it:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {outdoor.map((o) => (
                <li key={o} className="flex gap-2 text-sm text-ink-800">
                  <CvIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-moss-600" />
                  {o}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink-500">Not every outdoor camera suits every location — we check the equipment&rsquo;s rating against where it will go.</p>
          </div>
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-8">
            <CvIcon name="eye" className="h-7 w-7 text-moss-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Indoor security cameras</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">Indoor cameras are usually best kept to:</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {indoor.map((o) => (
                <li key={o} className="flex gap-2 text-sm text-ink-800">
                  <CvIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-moss-600" />
                  {o}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-moss-100 p-3 text-sm leading-relaxed text-ink-800">
              Never in bedrooms, bathrooms, changing or prayer rooms, or other
              private spaces — and tell household members, staff or tenants
              where cameras are.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Don&rsquo;t choose a camera by megapixels alone</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              A high-resolution camera pointed at the wrong spot, into glare,
              or recorded at heavy compression can still give a poor picture.
              Image quality comes from all of these together:
            </p>
          </div>
          <ul className="flex flex-wrap content-start gap-2 lg:col-span-7">
            {cvQuality.map((q, i) => (
              <li key={q} className={`rounded-full px-4 py-2 text-sm ${i === 0 ? "bg-ink-950 text-sand-50" : "bg-sand-50 text-ink-800 ring-1 ring-ink-900/10"}`}>{q}</li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <h2 className="font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Common system features</h2>
          <p className="mt-3 max-w-2xl text-[15px] text-ink-600">Not every CCTV or intercom setup has every feature — it depends on the equipment chosen.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cvFeatures.map((f) => (
              <div key={f.title} className="group rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/10 transition-colors hover:ring-moss-600">
                <CvIcon name={f.icon} className="h-6 w-6 text-moss-700" />
                <h3 className="mt-3 font-semibold text-ink-950">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
