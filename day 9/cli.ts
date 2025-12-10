import { numberValidator } from "../utils/numberValidator";
import { showHelp } from "../utils/showHelp";
import { perfectChristmasMelon } from "./perfect_christmas_melon";

import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

// Main function
async function main() {
  try {
    // Ask for number of melons
    const melons = await ask("Enter number of melons: ");
    const melonsCount = numberValidator(melons, {
      integer: true,
      positive: true,
      min: 2,
      name: "Number of melons",
    });

    // Ask for melon weights
    const melonsWeights = (await ask("Enter melon weights (space separated): "))
      .trim()
      .split(" ")
      .map(Number);

    // Validate melon weights
    if (melonsWeights.length !== melonsCount) {
      throw new Error(`Not enough melon weights. Must be ${melonsCount}.`);
    }

    const weights = melonsWeights.slice(0, melonsCount);

    // Ignore extra weights
    if (melonsWeights.length > melonsCount) {
      console.log("Too many melon weights. Will ignore extra weights.");
    }

    // Validate melon weights
    weights.forEach((weight) =>
      numberValidator(weight, { positive: true, name: "Weight" })
    );

    // Find perfect melon
    const perfectMelon = perfectChristmasMelon(weights);

    // Output result
    console.log(`Perfect melon: ${perfectMelon.index} ${perfectMelon.weight}`);

    rl.close();
  } catch (error) {
    // Handle errors
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
