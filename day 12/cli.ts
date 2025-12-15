import { readFileSync, existsSync } from "fs";

import { groupAnagrams } from "./anagram_groups";

/**
 * Reads the input file and returns an array of strings.
 * @param filePath Input file path
 * @returns Array of strings
 */
function readInputFile(filePath: string): string[] {
  const rawFile = readFileSync(filePath, "utf-8").trim();

  return rawFile
    .split("\n")
    .map((line) => line.trim())
    .flatMap((line) => line.split(/\s+/))
    .filter(Boolean);
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
    //console.log(input);
    // const testInput = ["eat", "tea", "tan", "ate", "nat", "bat"];

    const uniqueInput = Array.from(input);
    //console.log(uniqueInput);

    console.log(groupAnagrams(uniqueInput));
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
