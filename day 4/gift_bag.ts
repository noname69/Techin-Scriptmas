export function magicalToys(numbers: number[]): {
  totalToysPrice: number;
  totalToysCount: number;
} {
  let totalToysPrice = 0;
  let totalToysCount = 0;

  for (const n of numbers) {
    if (n > 10) {
      totalToysPrice += n;
      totalToysCount++;
    }
  }

  return { totalToysPrice, totalToysCount };
}
