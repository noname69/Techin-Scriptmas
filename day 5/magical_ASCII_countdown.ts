import { DIGITS } from "./digitsarray5";
import { messagesFromSanta } from "./santa_messages";

/**
 * Function to print ASCII-art number
 * @param num number to print on screen
 *
 */
export function generateMagicalASCIINumber(num: number) {
  const digits = num.toString().split("").map(Number);

  for (let i = 0; i < 16; i++) {
    console.log(digits.map((d) => DIGITS[d]![i]).join(" "));
  }
  const reversedIndex = messagesFromSanta.length - 1 - num;
  console.log(messagesFromSanta[reversedIndex]);
}
