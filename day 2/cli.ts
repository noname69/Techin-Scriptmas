import { numberValidator } from "../utils/numberValidator";
import { showHelp } from "../utils/showHelp";

import { midnightClockCountdown } from "./midnight_clock_countdown";

// Main function
function main() {
  try {
    const args = process.argv.slice(2);

    // Check or there are 2 arguments
    if (args.length !== 2) {
      throw new Error("Need 2 arguments: minutes, hours");
    }

    const [hoursOnClockStr, minutesOnClockStr] = args;

    // Validate arguments
    const hoursOnClock = numberValidator(hoursOnClockStr, {
      name: "Hours",
      positive: true,
      integer: true,
    });
    const minutesOnClock = numberValidator(minutesOnClockStr, {
      name: "Minutes",
      positive: true,
      integer: true,
    });

    // Calculate result
    const result = midnightClockCountdown(hoursOnClock, minutesOnClock);

    // Output result
    console.log(`Total minutes since midnight: ${result.totalMinutes}`);
    console.log(`Total seconds since midnight: ${result.totalSeconds}`);
  } catch (error) {
    //Handle errors
    if (error instanceof Error) {
      console.error("Error:", error.message);
      showHelp(["minutes", "hours"]);
    } else {
      console.error("Enexpected error occurred.");
    }
    process.exit(1);
  }
}

main();
