interface CountdownResult {
  totalMinutes: number;
  totalSeconds: number;
}

/**
 * Function calculates the total minutes and total seconds passed since midnight
 * @param hours 
 * @param minutes 
 * @returns total minutes and total seconds since midnight
 * @throws Error if inputs are invalid
 */

export function midnightClockCountdown(
  hours: number,
  minutes: number
): CountdownResult {
  if (!Number.isSafeInteger(hours) || !Number.isSafeInteger(minutes)) {
    throw new Error("Hours and minutes must be integers");
  }
  if (hours < 0 || hours > 23) {
    throw new Error("Hours must be between 0 and 23");
  }
  if (minutes < 0 || minutes > 59) {
    throw new Error("Minutes must be between 0 and 59");
  }

  const totalMinutes = hours * 60 + minutes;
  const totalSeconds = totalMinutes * 60;

  return { totalMinutes, totalSeconds };
}