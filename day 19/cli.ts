import { readFileSync, existsSync } from "fs";
import { numberValidator } from "../utils/numberValidator";
import { findToysToTrade } from "./trading_duplicates";

/**
 * Reads the input file and returns an array, one line from file, as one element.
 * @param filePath Input file path
 * @returns Array of strings
 */
function readInputFile(filePath: string): string[] {
  const rawFile = readFileSync(filePath, "utf-8").trim();

  return rawFile.split("\n").map((line) => line.trim());
}

function main() {
  try {
    const args = process.argv.slice(2);

    if (args.length !== 1) {
      throw new Error("Need 1 argument: input file path");
    }

    const filePath = args[0];

    if (!filePath) {
      throw new Error("Need 1 argument: input file path");
    }

    // Check or file exists
    if (!existsSync(filePath)) {
      throw new Error("File does not exist");
    }

    const input = readInputFile(filePath);

    const firstLine = input[0];
    const secondLine = input[1];

    if (typeof firstLine === "undefined" || typeof secondLine === "undefined") {
      throw new Error("Input file must contain at least 2 lines");
    }

    const numberOfToys = numberValidator(firstLine, {
      integer: true,
      positive: true,
      name: "Number of toys",
    });
    const toys = secondLine.split(/\s+/).map((toy) =>
      numberValidator(toy, {
        integer: true,
        positive: true,
        name: "Toy number",
      })
    );

    if (numberOfToys !== toys.length) {
      throw new Error(`Expected ${numberOfToys} toys, but got ${toys.length}`);
    }
    const result = findToysToTrade(toys);
    console.log(result);
  } catch (error) {
    //Handle errors
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Enexpected error occurred.");
    }
    process.exit(1);
  }
}

main();
