import { trimMiddleDigits } from "./number-trimming_magic";
/**
 * Function to show help message
 */
function showHelp() {
  console.log("Usage:");
  console.log("   npx ts-node cli.ts <number>");
  console.log("Where <number> is a 4 digit number");
}

// Get command line arguments
const args = process.argv.slice(2);

try {
  if (args.length !== 1) {
    throw new Error("Need 1 argument: <number>");
  }

  const number = args[0]!;

  const result = trimMiddleDigits(number);
  console.log("Trimmed number:", result);
} catch (error) {
  if (error instanceof Error) {
    console.error("Error:", error.message);
    showHelp();
  } else {
    console.error("Enexpected error occurred.");
  }
  process.exit(1);
}
