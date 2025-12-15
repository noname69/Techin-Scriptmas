/**
 * Finds the number of girls names and the names themselves.
 * @param namesList Array of names
 * @returns Object of count and names
 */
export function studentNameMagic(namesList: string[]): {
  count: number;
  names: string[];
} {
  const girlsNames = namesList.filter((name) => {
    const nameParts = name.trim().split(/\s+/);

    const firstName = nameParts[nameParts.length - 1];

    if (!firstName) {
      throw new Error("Invalid name: " + name);
    }

    return firstName.endsWith("a") || firstName.endsWith("ė");
  });

  return {
    count: girlsNames.length,
    names: girlsNames,
  };
}
