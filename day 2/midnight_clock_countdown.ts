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

function midnightClockCountdown(
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

/**
 * Function to show help message
 */

function showHelp() {
  console.log("Usage:");
  console.log("npx ts-node midnight_clock_countdown.ts minutes hours");
  console.log("Where minutes, hours are numbers");
  console.log("Hours: 0-23, minutes: 0-59");
}

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error("Need 2 arguments: minutes, hours");
  showHelp();
  process.exit(1);
}

const [hoursOnClock, minutesOnClock] = args.map(Number) as [number, number];

if (isNaN(hoursOnClock) || isNaN(minutesOnClock)) {
  console.error("Arguments should be numbers");
  showHelp();
  process.exit(1);
}

try {
  const result = midnightClockCountdown(hoursOnClock, minutesOnClock);
  console.log(`Total minutes until midnight: ${result.totalMinutes}`);
  console.log(`Total seconds until midnight: ${result.totalSeconds}`);
} catch (error) {
  if (error instanceof Error) {
    console.error("Error:", error.message);
  }
  process.exit(1);
}
