/**
 * Function to calculate the total cost of tiling a floor for Santa's workshop,
 * including an extra 5% of tiles
 * @param length - length of the floor
 * @param width - width of the floor
 * @param m2price - price per square meter
 * @param extra - extra tiles in pronteges, default 5
 * @returns total rounded cost
 */

export function calculateTotalSantaCost(
  length: number,
  width: number,
  m2price: number,
  extra = 5
): number {
  if (length <= 0 || width <= 0 || m2price < 0) {
    throw new Error(
      "Length and width must be positive numbers, price cannot be negative"
    );
  }

  const area = length * width;
  const areaWithExtra = area * (1 + extra / 100);
  const totalCost = areaWithExtra * m2price;

  return Math.round(totalCost * 100) / 100;
}
