// Central, verifiable business facts.
export const siteConfig = {
  name: "Dammam Home Solutions",
  shortName: "Dammam Home Solutions",
  domain: "dammamhomesolutions.com",
  url: "https://dammamhomesolutions.com",
  locale: "en_SA",
  region: "Dammam, Saudi Arabia",
  description:
    "Home maintenance and repair in Dammam, Al Khobar, Dhahran and Qatif — AC, plumbing, electrical, waterproofing, painting and handyman work, available 24/7.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "966574205462",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+966 57 420 5462",
  // TODO: replace with the verified public contact email.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  // Confirmed by the business: available 24/7; serves these cities.
  available247: true,
  areas: ["Dammam", "Al Khobar", "Dhahran", "Qatif"],
  // TODO: add the Google Business Profile URL once shared.
  googleBusinessUrl: process.env.NEXT_PUBLIC_GBP_URL ?? "",
} as const;

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export function buildTelLink() {
  return `tel:${siteConfig.phoneDisplay.replace(/[^0-9+]/g, "")}`;
}
