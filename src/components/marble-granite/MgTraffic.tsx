"use client";

import { useState } from "react";
import MgIcon from "./MgIcon";
import MgSlab from "./MgSlab";

const commercial = ["Hotels", "Offices", "Restaurants", "Retail", "Showrooms", "Reception areas", "Apartment buildings"];
const commercialNeeds = ["Visible traffic lanes", "An even look across large areas", "Maintenance planning", "Work scheduled around opening hours", "Keeping disruption low"];
const local = [
  { t: "Sand and dust", b: "Fine sand carried indoors acts like sandpaper underfoot — entrance mats help a lot." },
  { t: "Frequent cleaning", b: "Floors are mopped often, so the cleaning products used matter more than you'd think." },
  { t: "Indoor–outdoor transitions", b: "Entrances and majlis doors to the garden see the most grit and wear." },
  { t: "Wet areas", b: "Bathrooms and kitchens collect water marks and residue." },
];

// Slider shows how much of the traffic path has worn compared with the edges.
export default function MgTraffic() {
  const [wear, setWear] = useState(60);

  return (
    <section aria-label="Traffic wear, commercial stone and local conditions" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="section-label !text-concrete-700">Traffic wear</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Why some areas look more worn than others</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Every step grinds a little grit into the surface along the same
              path. The edges of a room stay shiny while the path dulls — so the
              whole area is usually refined together for an even result.
            </p>
            <label className="mt-6 block text-sm font-semibold text-ink-950" htmlFor="mg-wear">
              Years of use: <span className="font-normal text-ink-600">{wear < 30 ? "a little" : wear < 70 ? "several years" : "heavy wear"}</span>
            </label>
            <input id="mg-wear" type="range" min={0} max={100} value={wear} onChange={(e) => setWear(Number(e.target.value))} className="mt-3 w-full accent-concrete-700" />
          </div>
          <div className="lg:col-span-7">
            <div className="relative aspect-[400/260] overflow-hidden rounded-2xl ring-1 ring-ink-900/10" role="img" aria-label={`Illustrated stone floor with a traffic path that looks ${wear < 30 ? "slightly" : wear < 70 ? "noticeably" : "heavily"} duller than the lower-traffic edges`}>
              <MgSlab uid="traffic" />
              <div aria-hidden="true" className="absolute inset-y-0 left-[30%] w-[40%] bg-concrete-500 blur-lg transition-opacity duration-300" style={{ opacity: wear / 180 }} />
              <div aria-hidden="true" className="absolute inset-y-0 left-[30%] w-[40%] transition-opacity duration-300" style={{ opacity: wear / 120, backgroundImage: "repeating-linear-gradient(100deg, transparent 0 10px, rgba(53,51,46,0.12) 10px 11px)" }} />
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-concrete-900/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-sand-50">High-traffic zone</span>
              <span className="absolute left-3 top-3 rounded-full bg-concrete-900/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-sand-50">Lower traffic</span>
            </div>
            <p className="mt-2 text-xs text-ink-500">Illustration, not a photo of a project.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <MgIcon name="building" className="h-8 w-8 text-concrete-300" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight">High-traffic &amp; commercial stone</h2>
            <p className="mt-3 text-sm text-ink-300">{commercial.join(" · ")}</p>
            <ul className="mt-5 space-y-1.5">{commercialNeeds.map((c) => <li key={c} className="flex gap-2 text-sm text-sand-100"><MgIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-concrete-300" />{c}</li>)}</ul>
          </div>
          <div className="rounded-2xl bg-concrete-100/70 p-6 sm:p-8">
            <MgIcon name="foot" className="h-8 w-8 text-concrete-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Stone surfaces in Dammam properties</h2>
            <ul className="mt-5 space-y-3">
              {local.map((l) => <li key={l.t} className="text-sm leading-relaxed text-ink-700"><span className="font-semibold text-ink-950">{l.t}. </span>{l.b}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
