// Single source of truth for the service list, grouped the way customers
// think about their home. Used by the homepage, /services/, header and footer.
// Every href is an existing page.

export interface CatalogService {
  label: string;
  href: string;
  blurb: string;
  major?: boolean;
}

export interface CatalogGroup {
  key: string;
  title: string;
  intro: string;
  services: CatalogService[];
}

export const serviceGroups: CatalogGroup[] = [
  {
    key: "cooling",
    title: "Cooling & air",
    intro: "Split, central and window AC — repairs, installation and clean airflow.",
    services: [
      { label: "AC repair & maintenance", href: "/ac-repair/", blurb: "Not cooling, leaking, noisy or tripping.", major: true },
      { label: "AC installation", href: "/ac-installation-dammam/", blurb: "New and replacement units, positioned properly." },
      { label: "AC duct cleaning", href: "/ac-duct-cleaning-dammam/", blurb: "Dusty vents, smells and weak airflow." },
    ],
  },
  {
    key: "water",
    title: "Plumbing & water",
    intro: "Leaks, drains, heaters, pumps and tanks — inside the walls and on the roof.",
    services: [
      { label: "Plumbing repair", href: "/plumbing-repair/", blurb: "Taps, toilets, pipes, showers and sinks.", major: true },
      { label: "Water leak detection & repair", href: "/water-leak-repair/", blurb: "Hidden leaks, damp patches, rising bills.", major: true },
      { label: "Water heater repair & installation", href: "/water-heater-repair-installation-dammam/", blurb: "No hot water, leaks, tripping heaters." },
      { label: "Drain unblocking & sewer cleaning", href: "/drain-unblocking-sewer-line-cleaning-dammam/", blurb: "Slow drains, blockages and smells." },
      { label: "Water pump repair", href: "/water-pump-repair-dammam/", blurb: "Low pressure, noisy or non-stop pumps." },
      { label: "Water tank cleaning", href: "/water-tank-cleaning/", blurb: "Roof and ground tank cleaning." },
    ],
  },
  {
    key: "electrical",
    title: "Electrical & security",
    intro: "Faults, lighting, fittings, appliances and entry systems.",
    services: [
      { label: "Electrical repair", href: "/electrical-repair/", blurb: "Tripping breakers, dead sockets, faults.", major: true },
      { label: "Lighting & fixture installation", href: "/lighting-fixture-installation-dammam/", blurb: "Lights, fans, spotlights and fittings." },
      { label: "Appliance repair", href: "/appliance-repair-dammam/", blurb: "Washers, fridges, ovens and more." },
      { label: "CCTV & intercom installation", href: "/cctv-intercom-installation-dammam/", blurb: "Cameras, doorbells and intercoms." },
    ],
  },
  {
    key: "interior",
    title: "Interior repairs & finishes",
    intro: "Walls, floors, ceilings, doors, cabinets and the finishing details.",
    services: [
      { label: "Painting & wall repair", href: "/painting-wall-repair/", blurb: "Interior and exterior painting, cracks, peeling.", major: true },
      { label: "Carpentry, doors & locks", href: "/carpentry-doors-locks/", blurb: "Doors, frames, locks and woodwork.", major: true },
      { label: "Bathroom & kitchen repair", href: "/bathroom-kitchen-repair/", blurb: "Fixtures, sealing, tiles and fittings." },
      { label: "Kitchen cabinet repair", href: "/kitchen-cabinet-repair/", blurb: "Hinges, doors, drawers and panels." },
      { label: "Tile & grout repair", href: "/tile-repair-grout/", blurb: "Cracked tiles, failed grout, re-sealing." },
      { label: "Flooring repair", href: "/flooring-repair/", blurb: "Hollow, cracked or lifting floors." },
      { label: "Marble & granite polishing", href: "/marble-granite-polishing-dammam/", blurb: "Dull, etched or stained stone." },
      { label: "Ceiling & gypsum board repair", href: "/ceiling-gypsum-board-repair/", blurb: "Cracks, stains and sagging boards." },
      { label: "False ceiling installation", href: "/false-ceiling-installation-dammam/", blurb: "Gypsum ceilings and cove lighting." },
      { label: "Wallpaper installation", href: "/wallpaper-installation-dammam/", blurb: "Feature walls and full rooms." },
      { label: "Window, door & glass repair", href: "/window-door-glass-repair/", blurb: "Sliding doors, frames and glass." },
      { label: "Curtain & blind installation", href: "/curtain-blind-installation-dammam/", blurb: "Rods, tracks and blinds fitted level." },
      { label: "Furniture assembly", href: "/furniture-assembly-dammam/", blurb: "Flat-pack, wardrobes and office furniture." },
    ],
  },
  {
    key: "exterior",
    title: "Exterior, roof & outdoor",
    intro: "The parts of the property that take the sun, dust and rain first.",
    services: [
      { label: "Waterproofing", href: "/waterproofing/", blurb: "Roofs, bathrooms and wet areas.", major: true },
      { label: "Roof & rooftop repair", href: "/roof-repair/", blurb: "Leaks, cracks and roof surfaces." },
      { label: "Roof replacement", href: "/roof-replacement-dammam/", blurb: "When repair is no longer enough." },
      { label: "Outdoor & boundary wall repair", href: "/outdoor-boundary-wall-repair-dammam/", blurb: "Cracks, render and wall finishes." },
      { label: "Gate & garage door repair", href: "/gate-garage-door-repair/", blurb: "Sliding gates, motors and doors." },
      { label: "Shade & pergola repair", href: "/shade-pergola-repair-car-parking-shades-dammam/", blurb: "Car parking shades and pergolas." },
      { label: "Swimming pool repair & maintenance", href: "/swimming-pool-repair-maintenance-dammam/", blurb: "Pumps, filters, leaks and surfaces." },
    ],
  },
  {
    key: "restore",
    title: "Damp, damage, cleaning & pests",
    intro: "Putting things right after moisture, fire or heavy use.",
    services: [
      { label: "Mold & damp treatment", href: "/mold-damp-treatment-dammam/", blurb: "Damp walls, mold and the moisture behind it." },
      { label: "Fire & smoke damage restoration", href: "/fire-smoke-damage-restoration-dammam/", blurb: "Soot, smell and surface restoration." },
      { label: "Deep & move-in / move-out cleaning", href: "/deep-cleaning-move-in-move-out-cleaning-dammam/", blurb: "Whole-home deep cleans." },
      { label: "Sofa & carpet cleaning", href: "/sofa-carpet-cleaning-dammam/", blurb: "Upholstery, carpets and rugs." },
      { label: "Pest control", href: "/pest-control-dammam/", blurb: "Cockroaches, ants, bed bugs and more." },
    ],
  },
  {
    key: "general",
    title: "Whole-home & ongoing",
    intro: "Small job lists, bigger projects and properties that need regular care.",
    services: [
      { label: "Handyman services", href: "/handyman-services-dammam/", blurb: "Several small jobs in one visit.", major: true },
      { label: "General home repairs", href: "/general-home-repairs/", blurb: "When you're not sure which trade you need." },
      { label: "Home renovation", href: "/home-renovation-dammam/", blurb: "From one room to the whole home." },
      { label: "Property maintenance", href: "/property-maintenance/", blurb: "Ongoing care for homes and rentals.", major: true },
      { label: "Emergency home repairs", href: "/emergency-home-repairs/", blurb: "Urgent leaks, faults and breakdowns — 24/7.", major: true },
    ],
  },
];

export const allServices = serviceGroups.flatMap((g) => g.services);
export const majorServices = allServices.filter((s) => s.major);
