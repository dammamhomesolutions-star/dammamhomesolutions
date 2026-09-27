// Central, verifiable business facts. Replace placeholder contact values with
// the real, confirmed WhatsApp number, phone number and email before launch.
export const siteConfig = {
  name: "Dammam Home Solutions",
  shortName: "Dammam Home Solutions",
  domain: "dammamhomesolutions.com",
  url: "https://dammamhomesolutions.com",
  locale: "en_SA",
  region: "Dammam, Saudi Arabia",
  description:
    "Dammam Home Solutions provides property repair and maintenance services in Dammam, including AC, plumbing, electrical, waterproofing, painting and general repairs.",
  // TODO: replace with the verified WhatsApp business number in international
  // format, digits only (e.g. 9665XXXXXXXX), before this site goes live.
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "9665XXXXXXXX",
  // TODO: replace with the verified public contact phone number.
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "",
  // TODO: replace with the verified public contact email.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
} as const;

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
