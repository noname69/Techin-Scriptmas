import { numberValidator } from "../utils/numberValidator";
import { showHelp } from "../utils/showHelp";

function main() {
  try {
    const args = process.argv.slice(2);

    // Check or there are 3 arguments
    if (args.length !== 3) {
      throw new Error("Need 3 arguments: price1, price2, price3");
    }

    const [price1Str, price2Str, price3Str] = args;

    const price1 = numberValidator(price1Str, {
      name: "Price 1",
      positive: true,
    });
    const price2 = numberValidator(price2Str, {
      name: "Price 2",
      positive: true,
    });
    const price3 = numberValidator(price3Str, {
      name: "Price 3",
      positive: true,
    });

    const cheapestPrice = Math.min(price1, price2, price3).toFixed(2);
    console.log(`Peter will spend ${cheapestPrice}`);

    process.exit(0);
  } catch (error) {
    //Handle errors
    if (error instanceof Error) {
      console.error("Error:", error.message);
      showHelp(["price1", "price2", "price3"]);
    } else {
      console.error("Enexpected error occurred.");
    }
    process.exit(1);
  }
}

main();
