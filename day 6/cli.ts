import { calculateLandingTime } from "./sleigh_flight_schedule";

function main() {
  const { v: hours, m: minutes } = calculateLandingTime(0, 0, 0);
  console.log(`${hours}:${minutes}`);
}

main();
