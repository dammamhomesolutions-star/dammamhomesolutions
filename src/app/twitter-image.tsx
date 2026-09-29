import { generateSocialImage, socialImageSize } from "./social-image";

export const alt = "Dammam Home Solutions — property repair & maintenance in Dammam, Saudi Arabia";
export const size = socialImageSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return generateSocialImage();
}
