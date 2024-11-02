import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const isClient = () => {
  if (typeof window === "undefined") {
    return false;
  }
  return true;
};

export function createGoogleMapsLink(address: string): string {
  const formattedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;
}

export function createYandexMapsLink(address: string): string {
  const formattedAddress = encodeURIComponent(address);
  return `https://yandex.com/maps/?text=${formattedAddress}`;
}
