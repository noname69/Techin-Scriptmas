import { calculateLandingTime } from "./sleigh_flight_schedule";

function showHelp() {
  console.log("Usage:");
  console.log("   npx ts-node cli.ts <hours> <minutes> <sminutes>");
  console.log("Where <hours> hour when sleigh takes off");
  console.log("      <minutes> minute when sleigh takes off");
  console.log("      <cminutes> minutes sleigh stays in the air");
}

function main() {
  try {
    const args = process.argv.slice(2);

    // Validation of number of arguments
    if (args.length < 3) {
      throw new Error("Need 3 arguments. <hours> <minutes> <sminutes>");
    }

    const [h = 0, m = 0, cm = 0] = args.map(Number);

    if (!Number.isSafeInteger(h) || h < 0 || h > 23) {
      throw new Error("Take off hour should be an integer between 0 and 23.");
    }

    if (!Number.isSafeInteger(m) || m < 0 || m > 59) {
      throw new Error("Take off minute should be an integer between 0 and 59.");
    }

    if (!Number.isSafeInteger(cm) || cm < 0) {
      throw new Error("Minutes in air should be an positive integer");
    }

    const { h: hours, m: minutes } = calculateLandingTime(h, m, cm);
    console.log(`v: ${hours}`);
    console.log(`m: ${minutes}`);
    console.log(
      `Time on clock: ${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
      showHelp();
    } else {
      console.error("Enexpected error occurred.");
    }
    process.exit(1);
  }
}

main();
