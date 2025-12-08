import { CLPatternGenerator } from "./christmas_lights_pattern_generator";
import { addBorder } from "./helper";

function showHelp() {
  console.log("Usage:");
  console.log("   npx ts-node cli.ts <N>");
  console.log("Where <N> pattern size NxN");
}

function main() {
  try {
    const args = process.argv.slice(2);

    // Validation of number of arguments
    if (args.length < 1 || args.length > 1) {
      throw new Error("Need 1 argument. <N>");
    }

    const N = Number(args[0]);

    if (Number.isNaN(N)) {
      throw new Error("N must be a number");
    }

    const pattern = CLPatternGenerator(N);
    const bordered = addBorder(pattern, "*");

    for (const row of bordered) {
      console.log(row); // print one row as a single line
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
