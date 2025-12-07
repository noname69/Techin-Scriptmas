import readline from "readline";
import { parseStringToArray } from "./helpers";
import { magicalToys } from "./gift_bag";

/**
 * Function to show help message
 */
function showHelp() {
  console.log("Usage:");
  console.log(`Enter real numbers separated by ";" and ends with 0`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  `Enter toy prices (real numbers) seperated by ";" end of input is "0" `
);
console.log(`example: 10.2; 15.2; 1.25; 9.25; 0 `);

rl.question("Input: ", (answer: string) => {
  try {
    const numbers = parseStringToArray(answer.trim());
    const { totalToysPrice, totalToysCount } = magicalToys(numbers);

    console.log(`Total price of magical toys: ${totalToysPrice} EUR`);
    console.log(`Number of magical toys: ${totalToysCount}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
      showHelp();
    } else {
      console.error("Enexpected error occurred.");
    }
    process.exit(1);
  } finally {
    rl.close();
  }
});
