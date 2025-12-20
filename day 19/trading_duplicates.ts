/**
 * Finds toys that appear more than once.
 * @param toys Array of toy numbers
 * @returns Array of toy numbers that appear more than once
 */
export function findToysToTrade(toys: number[]): number[] {
  const counts = new Map<number, number>();

  for (const toy of toys) {
    if (toy < 1 || toy > 100) {
      throw new Error("Toy number must be between 1 and 100");
    }
    counts.set(toy, (counts.get(toy) ?? 0) + 1);
  }

  const result: number[] = [];

  for (const [toy, count] of counts.entries()) {
    if (count > 1) {
      result.push(toy);
    }
  }

  result.sort((a, b) => a - b);
  return result;
}
