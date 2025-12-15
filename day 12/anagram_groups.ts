/**
 * Groups anagrams from an array of strings.
 * @param strs Array of strings
 * @returns Array of arrays of anagrams
 */
export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, Set<string>>();

  for (const str of strs) {
    const key = str.toLocaleLowerCase().split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, new Set());
    }
    map.get(key)!.add(str);
  }

  const groups = Array.from(map.values()).map((group) =>
    Array.from(group).sort()
  );

  // Sort groups by size largest first
  groups.sort((a, b) => b.length - a.length);

  return groups;
}
