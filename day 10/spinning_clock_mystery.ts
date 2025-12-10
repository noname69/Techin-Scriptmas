/**
 * Function calculates the time after the minute hand completes one full rotation
 * @param hours hours on the clock
 * @param minutes minutes on the clock
 * @returns new time after the minute hand completes one full rotation
 */
export function spinningClockMystery(hours: number, minutes: number) {
  if (hours < 0 || hours > 23) {
    throw new Error("Hours must be between 0 and 23");
  }
  if (minutes < 0 || minutes > 59) {
    throw new Error("Minutes must be between 0 and 59");
  }

  const newHours = (hours + 1) % 24;
  const newMinutes = minutes;

  return { hours: newHours, minutes: newMinutes };
}
