/**
 * Helper function to parse input string to array of numbers
 * @param input - string of numbers separated by ";", ends with "0"
 * @returns array of numbers
 * @throws Error if any value is not a valid number
 */
export function parseStringToArray(input: string): number[] {
  const result: number[] = [];

  for (const raw of input.split(";")) {
    const trimmed = raw.trim();

    if (trimmed === "") continue;

    const num = Number(trimmed);

    if (num < 0) {
      throw new Error(`Price cannot be negative: "${trimmed}"`);
    }

    if (Number.isNaN(num)) {
      throw new Error(`Invalid number: "${trimmed}"`);
    }

    if (num === 0) break;
    result.push(Math.ceil(num * 100) / 100);
  }

  return result;
}
