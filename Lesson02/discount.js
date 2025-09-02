export function calculateDiscount(quantity, price) {
  if (quantity < 5) {
    throw new Error("Minimum order is 5 cartridges.");
  }

  let total = quantity * price;

  if (quantity >= 100) {
    total *= 0.8; // 20% discount
  }

  return total;
}
