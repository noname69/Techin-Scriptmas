/**
 * Calculate total cost of calls for an elf
 * @param calls Array of calls
 * @param priceList Price list for cities
 * @returns Total cost of calls
 */
function calculateTotalCost(
  calls: { city: string; minutes: number }[],
  priceList: { [city: string]: number }
): number {
  let totalCost = 0;
  for (const call of calls) {
    const price = priceList[call.city];
    if (price === undefined) {
      throw new Error(`Price for city '${call.city}' not found.`);
    }
    totalCost += call.minutes * price;
  }
  return totalCost;
}

function main() {
  // Example data
  const elves = [
    {
      firstName: "Jingle",
      lastName: "Sparkfoot",
      calls: [
        { city: "London", minutes: 12 },
        { city: "Paris", minutes: 7 },
      ],
    },
    {
      firstName: "Twinkle",
      lastName: "Icicletoes",
      calls: [
        { city: "NewYork", minutes: 20 },
        { city: "London", minutes: 5 },
      ],
    },
    {
      firstName: "Pudding",
      lastName: "Gumdrops",
      calls: [{ city: "Paris", minutes: 15 }],
    },
  ];

  const priceList = {
    London: 0.5,
    Paris: 0.4,
    NewYork: 0.7,
  };

  try {
    // Sort elves by last name
    elves.sort((a, b) => a.lastName.localeCompare(b.lastName));

    let totalAllElvesCost = 0;

    for (const [index, elf] of elves.entries()) {
      const elfNumber = index + 1;
      const totalCost = calculateTotalCost(elf.calls, priceList);
      console.log(
        `${elfNumber} ${elf.lastName} ${elf.firstName} ${totalCost.toFixed(2)}`
      );
      totalAllElvesCost += totalCost;
    }
    console.log(`Total: ${totalAllElvesCost.toFixed(2)}`);
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
