interface ValidateNumberOptions {
  integer?: boolean;
  positive?: boolean;
  min?: number;
  max?: number;
  name?: string;
}

/**
 * Validates a number based on the provided options.
 * @param raw The number to validate.
 * @param options The options to validate the number with.
 * @returns The validated number.
 * @throws {Error} If the number is not valid.
 */

export function NumberValidator(
  raw: number | string,
  options: ValidateNumberOptions = {}
): number {
  const name = options.name || "Number";

  const num = typeof raw === "string" ? Number(raw.trim()) : raw;

  // Validate the number
  if (!Number.isFinite(num)) {
    throw new Error(`${name} must be a number.`);
  }

  // Validate the integer
  if (options.integer && !Number.isSafeInteger(num)) {
    throw new Error(`${name} must be an integer.`);
  }

  // Validate the positive
  if (options.positive && num <= 0) {
    throw new Error(`${name} must be positive.`);
  }

  // Validate the min
  if (options.min && num < options.min) {
    throw new Error(`${name} must be ≥ ${options.min}.`);
  }

  // Validate the max
  if (options.max && num > options.max) {
    throw new Error(`${name} must be ≤ ${options.max}.`);
  }

  return num;
}
