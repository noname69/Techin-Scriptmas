/**
 *
 * @param rows total rows in concert hal
 * @param frSeats number of seats in first row
 * @returns total number of seats
 */

function seatsCalculation(rows: number, frSeats: number): number {
  if (typeof rows !== "number" || typeof frSeats !== "number") {
    throw new Error("Both rows and frSeats should be numbers");
  }

  if (!Number.isSafeInteger(rows) || !Number.isSafeInteger(frSeats)) {
    throw new Error("Both rows and frSeats should be integers");
  }

  if (rows < 0 || frSeats < 0) {
    throw new Error("Rows and seats should be positive");
  }

  if (rows <= 0) return 0;
  if (rows === 1) return frSeats;
  return frSeats + seatsCalculation(rows - 1, frSeats + 2);
}

export default seatsCalculation;
