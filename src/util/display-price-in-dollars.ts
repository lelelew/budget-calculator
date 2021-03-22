export function displayPriceInDollars(price: number) {
  // insert decimal
  let formattedPrice = Number((price / 100).toFixed(2));
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(formattedPrice);
}
