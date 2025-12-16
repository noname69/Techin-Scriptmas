import { giftAuditor } from "./gift_audit";

function main() {
  try {
    const gifts: number[][] = [
      [5, 7, 3],
      [6, 4, 4, 5],
      [10, 2],
    ];

    const { totalGifts, workshopGifts } = giftAuditor(gifts);

    console.log(`Santa's total gift count is ${totalGifts}`);
    for (let i = 0; i < workshopGifts.length; i++) {
      console.log(`Workshop ${i + 1} made ${workshopGifts[i]} gifts`);
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
