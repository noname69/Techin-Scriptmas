/** 
* Function to calculate the total cost of tiling a floor for Santa's workshop,
* including an extra 5% of tiles
* @param length - length of the floor
* @param width - width of the floor
* @param m2price - price per square meter
* @returns total rounded cost
*/

function calculateTotalSantaCost(length: number, width: number, m2price: number): number {
  const area = length * width;
  const areaWithExtra = area * 1.05;
  const totalCost = areaWithExtra * m2price;

  return Number(totalCost.toFixed(2));
}

/**
 * Function to show help message
 */

function showHelp() {
  console.log("Usage:")
  console.log("npx ts-node santa_tilling_problem.ts lenght width m2price")
  console.log("where lenght, width, m2price are numbers")
}

// Get command line arguments and validate
const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error("Need 3 arguments: lenght, width, price for squere meter");
  showHelp();
  process.exit(1);
}

const [lenght, width, m2price] = args.map(Number) as [number, number, number]

if (isNaN(lenght) || isNaN(width) || isNaN(m2price)) {
  console.error("Arguments should be numbers");
  showHelp();
  process.exit(1);
}

// Calculate and display total Santa tiling price
try {
  const result = calculateTotalSantaCost(lenght, width, m2price);
  console.log("Total price: ", result);
 
} catch (error) {
  if (error instanceof Error) {
    console.error("Error:", error.message);
  }
  process.exit(1);
}