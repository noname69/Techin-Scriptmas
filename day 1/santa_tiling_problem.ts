function calculateTotalSantaCost(length: number, width: number, m2price: number): number {
  const area = length * width;
  const areaWithExtra = area * 1.05;
  const totalCost = areaWithExtra * m2price;

  return Number(totalCost.toFixed(2));
}

function showHelp() {
  console.log("Some help")
}

const args = process.argv.slice(2);
console.log(args)

if (args.length !== 3) {
  
  console.error("Need 3 arguments: lenght, width, price for squere meter");
  showHelp();
  process.exit(1);
}

const lenght = Number(args[0]);
const width = Number(args[1]);
const m2price = Number(args[2]);

if (isNaN(lenght) || isNaN(width) || isNaN(m2price)) {
  console.error("Arguments should be numbers");
  showHelp();
  process.exit(1);
}


try {
  const result = calculateTotalSantaCost(lenght, width, m2price);
  console.log("Total price: ", result);
 
} catch (error) {
  if (error instanceof Error) {
    console.error("Error:", error.message);
  }
  process.exit(1);
}