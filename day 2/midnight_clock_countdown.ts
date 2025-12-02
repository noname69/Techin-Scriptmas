interface CountdownResult {
    totalMinutes: number;
    totalSeconds: number;
}

function midnightClockCountdown(hours: number, minutes: number): CountdownResult {
    const totalMinutes = hours * 60 + minutes;
    const totalSeconds = totalMinutes * 60; 
    
    return {totalMinutes, totalSeconds }; 
}

function showHelp() {
  console.log("Usage:")
  console.log("npx ts-node midnight_clock_countdown.ts minutes hours")
  console.log("where minutes hours are numbers")
}

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error("Need 2 arguments: minutes, hours");
  showHelp();
  process.exit(1);
}

const [hoursOnClock, minutesOnClock] = args.map(Number) as [number, number]

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
