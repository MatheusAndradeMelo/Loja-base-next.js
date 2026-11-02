import { storeConfig } from "../store.config";

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat(storeConfig.locale, {
    style: "currency",
    currency: storeConfig.currency,
  }).format(cents / 100);
}