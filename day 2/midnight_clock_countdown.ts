interface CountdownResult {
  totalMinutes: number;
  totalSeconds: number;
}

/**
 * Function calculates the total minutes and total seconds passed since midnight
 * @param hours hours on the clock
 * @param minutes minutes on the clock
 * @returns total minutes and total seconds since midnight
 */

export function midnightClockCountdown(
  hours: number,
  minutes: number
): CountdownResult {
  // Validate arguments
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
