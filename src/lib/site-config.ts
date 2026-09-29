// Central, verifiable business facts.
export const siteConfig = {
  name: "Dammam Home Solutions",
  shortName: "Dammam Home Solutions",
  domain: "dammamhomesolutions.com",
  url: "https://dammamhomesolutions.com",
  locale: "en_SA",
  region: "Dammam, Saudi Arabia",
  description:
    "Property repair and maintenance in Dammam — AC, plumbing, electrical, waterproofing, painting and general home repairs, handled directly.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "966574205462",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+966 57 420 5462",
  // TODO: replace with the verified public contact email.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
} as const;

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export function buildTelLink() {
  return `tel:${siteConfig.phoneDisplay.replace(/[^0-9+]/g, "")}`;
}
