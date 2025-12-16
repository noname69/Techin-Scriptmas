/**
 * Calculates the total number of gifts made in all workshops combined and the total number of gifts made in each workshop
 * @param gifts 2D structure (array of arrays) where:
 * - Each row represents a workshop
 * - Each column represents an elf
 * - Each number represents how many gifts that elf produced
 * @returns Object with:
 * - totalGifts: total number of gifts made in all workshops combined
 * - workshopGifts: array of total number of gifts made in each workshop
 */
export function giftAuditor(gifts: number[][]): {
  totalGifts: number;
  workshopGifts: number[];
} {
  let totalGifts = 0;
  const workshopGifts: number[] = [];

  for (const workshop of gifts) {
    let workshopTotal = 0;

    for (const gift of workshop) {
      workshopTotal += gift;
      totalGifts += gift;
    }

    workshopGifts.push(workshopTotal);
  }

  return {
    totalGifts,
    workshopGifts,
  };
}
