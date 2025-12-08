import { calculateTotalSantaCost } from "./santa_tiling_problem";

function showHelp() {
  console.log("Usage:");
  console.log("   npx ts-node cli.ts <lenght> <width> <m2price>");
  console.log("where <lenght>, <width>, <m2price> are numbers");
}

function main() {
  try {
    const args = process.argv.slice(2);

    if (args.length !== 3) {
      throw new Error(
        "Need 3 arguments: lenght, width, price for squere meter"
      );
    }

    const [lengthStr, widthStr, m2priceStr] = args;
    const length = Number(lengthStr);
    const width = Number(widthStr);
    const m2price = Number(m2priceStr);

    if ([length, width, m2price].some(Number.isNaN)) {
      throw new Error("All arguments must be a number");
    }

    const result = calculateTotalSantaCost(length, width, m2price);

    if (result === 0) {
      console.log("Your tiles are free!");
    } else {
      console.log("Total price: ", result);
    }
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
