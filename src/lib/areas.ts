// Service areas confirmed by the business. Descriptions stick to general,
// verifiable facts about each city's housing — no invented local claims.

export interface Area {
  slug: string;
  name: string;
  arabic: string;
  summary: string;
  homes: string[];
  common: { label: string; href: string }[];
}

export const areas: Area[] = [
  {
    slug: "dammam",
    name: "Dammam",
    arabic: "الدمام",
    summary: "Our home base. Dammam's mix of family villas, apartment buildings and rental properties covers almost every kind of home maintenance — from roof tanks and split ACs to bathrooms, boundary walls and parking shades.",
    homes: ["Family villas", "Apartment buildings", "Rental properties", "Older and newer neighbourhoods"],
    common: [
      { label: "AC repair", href: "/ac-repair/" },
      { label: "Plumbing", href: "/plumbing-repair/" },
      { label: "Water tank cleaning", href: "/water-tank-cleaning/" },
      { label: "Waterproofing", href: "/waterproofing/" },
    ],
  },
  {
    slug: "al-khobar",
    name: "Al Khobar",
    arabic: "الخبر",
    summary: "Next door to Dammam, Al Khobar has a large share of apartments, villas and residential compounds. Rental homes there often need repairs and refreshes between tenants.",
    homes: ["Apartments", "Villas", "Residential compounds", "Rental homes"],
    common: [
      { label: "Property maintenance", href: "/property-maintenance/" },
      { label: "Handyman services", href: "/handyman-services-dammam/" },
      { label: "Electrical repair", href: "/electrical-repair/" },
      { label: "Painting", href: "/painting-wall-repair/" },
    ],
  },
  {
    slug: "dhahran",
    name: "Dhahran",
    arabic: "الظهران",
    summary: "Dhahran's villas and compound housing often need the same core services as Dammam — AC, plumbing, electrical and finishing work — plus outdoor items like shades and boundary walls.",
    homes: ["Villas", "Compound housing", "Family homes"],
    common: [
      { label: "AC repair", href: "/ac-repair/" },
      { label: "Shade & pergola repair", href: "/shade-pergola-repair-car-parking-shades-dammam/" },
      { label: "Outdoor & boundary walls", href: "/outdoor-boundary-wall-repair-dammam/" },
      { label: "Carpentry & doors", href: "/carpentry-doors-locks/" },
    ],
  },
  {
    slug: "qatif",
    name: "Qatif",
    arabic: "القطيف",
    summary: "North of Dammam, Qatif is largely family homes and villas. Older properties can need plumbing and leak repairs, waterproofing, AC work and general repairs.",
    homes: ["Family homes", "Villas", "Older properties"],
    common: [
      { label: "Water leak repair", href: "/water-leak-repair/" },
      { label: "Waterproofing", href: "/waterproofing/" },
      { label: "AC repair", href: "/ac-repair/" },
      { label: "General home repairs", href: "/general-home-repairs/" },
    ],
  },
];
