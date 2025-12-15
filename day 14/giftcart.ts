import { GiftCartEngine } from "./cart/GiftCartEngine";

function main() {
  try {
    const cart = new GiftCartEngine();
    cart.add("train", 30);
    cart.add("doll", 20);
    cart.applyDiscount("PROMO10");
    console.log(cart.total());
    console.log(cart.list());
    cart.remove("train");
    console.log(cart.total());
    console.log(cart.list());
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
