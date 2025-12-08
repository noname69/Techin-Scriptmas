/**
 * Adds a border around a given 2D array pattern.
 * @param grid 2D array representing the pattern grid
 * @param borderPattern  pattern to use for the border
 * @returns an array of strings representing the pattern with the border added
 */
export function addBorder(grid: string[][], borderPattern: string): string[] {
  const n = grid.length;

  const topBottom = borderPattern.repeat(n + 2);
  const result: string[] = [topBottom];

  for (const row of grid) {
    result.push(`${borderPattern}${row.join("")}${borderPattern}`);
  }

  result.push(topBottom);

  return result;
}
