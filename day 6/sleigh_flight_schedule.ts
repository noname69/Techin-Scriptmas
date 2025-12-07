export function calculateLandingTime(
  a: number,
  b: number,
  c: number
): { h: number; m: number } {
  const totalMinutes = a * 60 + b + c;
  const wrappedMinutes = ((totalMinutes % 1440) + 1440) % 1440;

  const hours = Math.floor(wrappedMinutes / 60);
  const minutes = wrappedMinutes % 60;

  return {
    h: hours,
    m: minutes,
  };
}
