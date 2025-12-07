import { generateMagicalASCIINumber } from "./magical_ASCII_countdown";

function main() {
  let countdown = 10;

  const interval = setInterval(() => {
    if (countdown >= 0) {
      console.clear();
      generateMagicalASCIINumber(countdown);
      countdown--;
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

main();
