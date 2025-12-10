import { numberValidator } from "../utils/numberValidator";
import { showHelp } from "../utils/showHelp";

import { calculateTotalSantaCost } from "./santa_tiling_problem";

//Main function
function main() {
  try {
    const args = process.argv.slice(2);

    //Check if there are 3 arguments
    if (args.length !== 3) {
      throw new Error(
        "Need 3 arguments: lenght, width, price for squere meter"
      );
    }

    const [lengthStr, widthStr, m2priceStr] = args;

    //Validate arguments
    const length = numberValidator(lengthStr, {
      name: "Length",
      positive: true,
    });
    const width = numberValidator(widthStr, { name: "Width", positive: true });
    const m2price = numberValidator(m2priceStr, {
      name: "Price",
      positive: true,
    });

    //Calculate total cost
    const totalCost = calculateTotalSantaCost(length, width, m2price);

    //Output result
    if (totalCost === 0) {
      console.log("Your tiles are free!");
    } else {
      console.log("Total cost:", totalCost);
    }
  } catch (error) {
    //Handle errors
    if (error instanceof Error) {
      console.error("Error:", error.message);
      showHelp(["length", "width", "price"]);
    } else {
      console.error("Enexpected error occurred.");
    }
    process.exit(1);
  }
}

main();
