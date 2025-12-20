/**
 * Function to calculate the number of items and total spent in a store
 * @param data Array of prices for items in a store
 * @returns Object containing itemCount and totalSpent
 */
function calculateCountAndTotalSpentInStore(data: number[]): {
  itemCount: number;
  totalSpent: number;
} {
  const itemCount = data.length;
  const totalSpent = calculateTotalSpent(data);
  return { itemCount, totalSpent };
}

/**
 * Function to calculate the total spent
 * @param data Array of prices for items
 * @returns Total spent
 */
function calculateTotalSpent(data: number[]): number {
  const totalSpent = data.reduce((sum, price) => {
    if (price < 0) {
      throw new Error("Price cannot be negative");
    }
    return sum + price;
  }, 0);
  return Math.round(totalSpent * 100) / 100;
}

function main() {
  const dataFromExample = [
    [1.07, 2.92, 3.45, 1.09, 0.89],
    [1.08, 2.35, 3.75, 1.12, 0.69],
    [0.98, 2.48, 3.62, 1.1, 0.72],
  ];

  const dataCustom = [
    [2.54, 4.55, 1.22, 3.66, 0.99],
    [7.01, 2.5, 3.75, 1.12, 4.69, 4.12, 9.25, 1.88, 1.25, 2.56],
    [1.98, 2.4, 4.56, 13.13, 4.34, 4.44],
    [1.98, 2.4, 4.56, 13.13, 4.34, 4.44],
    [1.98, 2.4, 4.56, 13.13, 4.34, 4.44],
  ];

  try {
    // From example
    const data = dataFromExample;
    console.log("From example:");

    for (const [index, store] of data.entries()) {
      const storeNumber = index + 1;
      const { itemCount, totalSpent } =
        calculateCountAndTotalSpentInStore(store);
      console.log(`${storeNumber} ${itemCount} ${totalSpent}`);
    }

    const totalSpentInAllStores = calculateTotalSpent(data.flat());
    console.log(totalSpentInAllStores);

    // From custom
    const data2 = dataCustom;
    console.log("\nFrom custom:");

    for (const [index, store] of data2.entries()) {
      const storeNumber = index + 1;
      const { itemCount, totalSpent } =
        calculateCountAndTotalSpentInStore(store);
      console.log(`${storeNumber} ${itemCount} ${totalSpent}`);
    }

    const totalSpentInAllStores2 = calculateTotalSpent(data2.flat());
    console.log(totalSpentInAllStores2);
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
