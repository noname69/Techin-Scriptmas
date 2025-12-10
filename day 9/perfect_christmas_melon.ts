interface PerfectChristmasMelon {
  index: number;
  weight: number;
}

/**
 * Finds the perfect Christmas melon
 * @param weights Array of melon weights
 * @returns Object containing the index and weight of the perfect Christmas melon
 */
export function perfectChristmasMelon(
  weights: number[]
): PerfectChristmasMelon {
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  const averageWeight = totalWeight / weights.length;

  const closestMelon = weights.reduce((a, b) => {
    const aDiff = Math.abs(a - averageWeight);
    const bDiff = Math.abs(b - averageWeight);
    return aDiff < bDiff ? a : b;
  });

  return {
    index: weights.indexOf(closestMelon) + 1,
    weight: closestMelon,
  };
}
