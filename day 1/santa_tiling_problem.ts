function calculateTotalSantaCost(length: number, width: number, m2price: number): number {
  const area = length * width;
  const areaWithExtra = area * 1.05;
  const totalCost = areaWithExtra * m2price;

  return Number(totalCost.toFixed(2));
}

console.log(calculateTotalSantaCost(110, 50, 20.33));