import { midnightClockCountdown } from "./midnight_clock_countdown";
/**
 * Function to show help message
 */

function showHelp() {
  console.log("Usage:");
  console.log("npx ts-node midnight_clock_countdown.ts minutes hours");
  console.log("Where minutes, hours are numbers");
  console.log("Hours: 0-23, minutes: 0-59");
}

// Get command line arguments and validate
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

// Calculate and display the countdown after midnight
try {
  const result = midnightClockCountdown(hoursOnClock, minutesOnClock);
  console.log(`Total minutes since midnight: ${result.totalMinutes}`);
  console.log(`Total seconds since midnight: ${result.totalSeconds}`);
} catch (error) {
  if (error instanceof Error) {
    console.error("Error:", error.message);
  }
  process.exit(1);
}
