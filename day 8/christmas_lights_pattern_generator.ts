/**
 * Generates a Christmas lights pattern in a 2D array.
 * @param n - size of the Christmas lights pattern (n x n)
 * @returns an 2d array representing the Christmas lights pattern
 */
export function CLPatternGenerator(n: number): string[][] {
  const grid2d: string[][] = [];

  if (n <= 0) {
    throw new Error("N must be a positive number");
  }

  for (let r = 0; r < n; r++) {
    const row: string[] = [];

    for (let c = 0; c < n; c++) {
      const rowIndex = r + 1;
      const colIndex = c + 1;
      const sum = rowIndex + colIndex;
      if (sum % 15 === 0) {
        row.push("G");
      } else if (sum % 3 === 0) {
        row.push("T");
      } else if (sum % 5 === 0) {
        row.push("S");
      } else {
        row.push(".");
      }
    }

    grid2d.push(row);
  }

  return grid2d;
}
