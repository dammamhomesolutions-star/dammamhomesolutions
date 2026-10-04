import Link from "next/link";
import { Eyebrow } from "./RnUi";

const a = "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-walnut-600 decoration-1 underline-offset-4 hover:text-walnut-700";

// Local context, written once, plus contextual links to individual services.
export default function RnLocal() {
  return (
    <section aria-labelledby="rn-local" className="bg-sand-50 py-20 sm:py-28">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow n="17">Local context</Eyebrow>
          <h2 id="rn-local" className="mt-5 font-serif text-4xl font-light tracking-tight text-ink-950 sm:text-5xl">Renovating homes in Dammam</h2>
        </div>
        <div className="space-y-5 text-[15px] leading-relaxed text-ink-700 lg:col-span-7">
          <p>
            Homes here range from large family villas with majlis, courtyards and
            boundary walls to compact apartments and older properties that were
            last updated many years ago. Each asks something different of a
            renovation: villas often need several rooms and outdoor areas planned
            together, while apartments usually mean working within building rules,
            lift access and neighbours.
          </p>
          <p>
            Heat, strong sun, dust and humidity shape the choices too. Finishes
            that are easy to clean, surfaces suited to wet areas and exterior
            walls repaired before they&rsquo;re refinished tend to last better than
            appearance-only upgrades. A renovation can start as a move-in refresh or a
            single room and grow into a planned, room-by-room renovation.
          </p>
          <p>
            Some parts of a renovation are also available on their own:{" "}
            <Link href="/false-ceiling-installation-dammam/" className={a}>false ceilings</Link>,{" "}
            <Link href="/lighting-fixture-installation-dammam/" className={a}>lighting and fixtures</Link>,{" "}
            <Link href="/wallpaper-installation-dammam/" className={a}>wallpaper</Link>,{" "}
            <Link href="/painting-wall-repair/" className={a}>painting and wall repair</Link>,{" "}
            <Link href="/tile-repair-grout/" className={a}>tile and grout repair</Link>,{" "}
            <Link href="/marble-granite-polishing-dammam/" className={a}>marble and granite polishing</Link>,{" "}
            <Link href="/kitchen-cabinet-repair/" className={a}>kitchen cabinet repair</Link>,{" "}
            <Link href="/bathroom-kitchen-repair/" className={a}>bathroom and kitchen repair</Link>{" "}
            and{" "}
            <Link href="/outdoor-boundary-wall-repair-dammam/" className={a}>outdoor and boundary wall repair</Link>.
            For the services behind the walls, see{" "}
            <Link href="/electrical-repair/" className={a}>electrical</Link> and{" "}
            <Link href="/plumbing-repair/" className={a}>plumbing</Link>; for a list
            of small jobs rather than a renovation,{" "}
            <Link href="/handyman-services-dammam/" className={a}>handyman services</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
