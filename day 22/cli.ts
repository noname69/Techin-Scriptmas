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

function main() {
  const lines = inputLines.split("\n");

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

  // find the longest line, this will be the y axis
  const yAxis = Math.max(...resultLines.map((l) => l.length));

  // print lines
  resultLines.forEach((line, i) => {
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

main();
