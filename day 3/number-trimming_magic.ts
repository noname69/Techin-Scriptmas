/**
 * Function to trim middle digits from a 4-digit number
 * @param number - 4 digit number
 * @returns number with middle digits removed
 * @throws Error if input is not a 4-digit number
 */

export function trimMiddleDigits(number: string): string {
  if (!/^\d{4}$/.test(number)) {
    throw new Error("Input must be a 4-digit number");
  }

  return number.charAt(0) + number.charAt(3);
}
