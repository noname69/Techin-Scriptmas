import seatsCalculation from "./christmas_concerts_seating_plan";

function showHelp() {
  console.log("Usage:");
  console.log("   npx ts-node cli.ts <rows> <seats>");
  console.log("Where <rows> number of total rows");
  console.log("      <seats> number of seats in first row");
}

function main() {
  try {
    const args = process.argv.slice(2);

    // Validation of number of arguments
    if (args.length < 2) {
      throw new Error("Need 3 arguments. <rows> <seats>");
    }

    const rows = Number(args[0]);
    const seats = Number(args[1]);

    const totalSeats = seatsCalculation(rows, seats);
    console.log("Total number of seats:", totalSeats);
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
