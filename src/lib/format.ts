const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
});

export function formatPrice(value: number) {
  return currency.format(value);
}

export const FREE_SHIPPING_THRESHOLD = 500;
export const SHIPPING_FEE = 49.9;

export function shippingFor(subtotal: number) {
  return subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
}
