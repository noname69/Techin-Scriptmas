interface Bottles {
  fiveLiter: number;
  twoLiter: number;
  oneLiter: number;
}

/**
 * function to calculate the number of bottles
 * @param liters amount of juice in liters
 * @returns bottles object with number of bottles
 * {fiveLiter, twoLiter, oneLiter}
 */
function bottleJuice(liters: number): Bottles {
  if (liters < 0) {
    throw new Error("Liters cannot be negative");
  }

  const fiveLiter = Math.floor(liters / 5);
  const twoLiter = Math.floor((liters % 5) / 2);
  const oneLiter = (liters % 5) % 2;
  return { fiveLiter, twoLiter, oneLiter };
}

function main() {
  try {
    const elves = [
      { name: "Sparkle", liters: 45 },
      { name: "Twinkle", liters: 92 },
      { name: "Jingle", liters: 33 },
    ];

    const juiceAmounts = [45, 92, 33];

    // when we have object
    console.log("When we have object:");
    for (const elf of elves) {
      const {
        fiveLiter: number_of_5L_barrels,
        twoLiter: number_of_2L_jugs,
        oneLiter: number_of_1L_flasks,
      } = bottleJuice(elf.liters);
      console.log(
        `${elf.name}: ${number_of_5L_barrels} ${number_of_2L_jugs} ${number_of_1L_flasks}`
      );
    }

    // when we have array
    console.log("\nWhen we have array:");
    for (const amount of juiceAmounts) {
      const {
        fiveLiter: number_of_5L_barrels,
        twoLiter: number_of_2L_jugs,
        oneLiter: number_of_1L_flasks,
      } = bottleJuice(amount);
      console.log(
        `${amount}: ${number_of_5L_barrels} ${number_of_2L_jugs} ${number_of_1L_flasks}`
      );
    }
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
