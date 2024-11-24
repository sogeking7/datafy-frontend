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

export const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if necessary
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};


export function createGoogleMapsLink(address: string): string {
  const formattedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;
}

export function createYandexMapsLink(address: string): string {
  const formattedAddress = encodeURIComponent(address);
  return `https://yandex.com/maps/?text=${formattedAddress}`;
}

export const getLastPathname = (s: string) => "/" + s.split("/").pop();
