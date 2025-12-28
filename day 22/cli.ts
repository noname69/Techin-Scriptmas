const inputLines = `Ei, drauguži, žiemos vidury
Roges jei turi, tai gerai! tra tra tra tra tra
Į kalną aukščiausią, patį balčiausią
Įkopt jei gali, tai gerai!
Iš aukštai pamatai
Šviesų daug mieste -
Su vėju šventė artėja3 artėja3 artėja3 artėja4 artėja4 artėja4 
Pas tave.
Kalėdos? Teisingai tu sakai.
Kalėdos! Laukia jau visi vaikai.
Kalėdos! Jau norim dovanų!
Kur gi senelis?
Kur Kalėdų senis? a-uuu?`;

/* Convert lines to blocks
 * @param lines - array of lines
 * @returns array of blocks
 */
function converteLinesToBlocks(lines: string[]) {
  const resultLines: string[] = [];

  // split lines into blocks
  for (const line of lines) {
    const words = line.split(" ").filter(Boolean);

    // index is the start of the block
    let index = 0;
    // take is the number of words to take
    let take = 1;

    while (index < words.length) {
      const block = words.slice(index, index + take);
      resultLines.push(block.join(" "));
      index += take;
      take++;
    }
  }

  return resultLines;
}

/* Print tree
 * @param lines - array of lines
 */
function printTree(lines: string[]): void {
  const yAxis = Math.max(...lines.map((l) => l.length));

  if (yAxis > 255) {
    throw new Error("Input lines are too long.");
  }

  lines.forEach((line, i) => {
    const isLeftAligned = i % 2 === 0;

    if (isLeftAligned) {
      const leftPadding = yAxis - line.length;
      console.log(" ".repeat(leftPadding) + line);
    } else {
      const rightPadding = yAxis - 1;
      console.log(" ".repeat(rightPadding) + line);
    }
  });
}

/* Main function */
function main() {
  try {
    if (!inputLines) {
      throw new Error("Input lines are not defined.");
    }
    const lines = inputLines.split("\n");

    if (lines.length > 100) {
      throw new Error("Input lines are too long.");
    }
    const resultLines = converteLinesToBlocks(lines);

    printTree(resultLines);
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
