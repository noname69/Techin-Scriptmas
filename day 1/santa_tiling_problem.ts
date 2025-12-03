/**
 * Function to calculate the total cost of tiling a floor for Santa's workshop,
 * including an extra 5% of tiles
 * @param length - length of the floor
 * @param width - width of the floor
 * @param m2price - price per square meter
 * @returns total rounded cost
 */

export function calculateTotalSantaCost(
  length: number,
  width: number,
  m2price: number
): number {
  if (isNaN(length) || isNaN(width) || isNaN(m2price)) {
    throw new Error("All inputs must be numbers");
  }

  if (length <= 0 || width <= 0 || m2price < 0) {
    throw new Error(
      "Length and width must be positive numbers, price cannot be negative"
    );
  } else if (m2price === 0) {
    return 0;
  }

  const area = length * width;
  const areaWithExtra = area * 1.05;
  const totalCost = areaWithExtra * m2price;

  return Number(totalCost.toFixed(4));
}
