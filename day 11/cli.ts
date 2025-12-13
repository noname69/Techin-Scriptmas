import { readFileSync, existsSync } from "fs";
import { numberValidator } from "../utils/numberValidator";
import { Target } from "./magical_archerychallenge";

interface InputData {
  xc: number;
  yc: number;
  radius: number[];
  points: number[];
  shots: { x: number; y: number }[];
}

/**
 * Validates the shots line.
 * @param line Array of strings representing the shots
 * @throws {Error} If the shots line is invalid
 */
function validateShotsLine(line: string[]): void {
  const POINT_REGEX = /^\(-?\d+,-?\d+\)$/;

  for (const shot of line) {
    if (!POINT_REGEX.test(shot)) {
      throw new Error(`Invalid shot format: ${shot}`);
    }
  }
}

/**
 * Reads the input file and returns the input data.
 * @param filePath Input file path
 * @returns Input data object {xc, yc, radius, points, shots}
 * @throws {Error} If the input file is invalid
 */
function readInputFile(filePath: string): InputData {
  const rawFile = readFileSync(filePath, "utf-8").trim();
  const lines = rawFile.split("\n").map((line) => line.trim());

  if (lines.length < 4) {
    throw new Error("Invalid input file format");
  }

  if (!lines[0]) {
    throw new Error("Invalid input file format. Xc and Yc are missing");
  }

  const [xcStr, ycStr] = lines[0].split(" ");

  const xc = numberValidator(xcStr, {
    name: "Xc",
    positive: true,
    integer: true,
  });

  const yc = numberValidator(ycStr, {
    name: "Yc",
    positive: true,
    integer: true,
  });

  if (!lines[1]) {
    throw new Error("Invalid input file format. Radius line is missing");
  }

  const radiusStr = lines[1].split(" ");
  const radius = radiusStr.map((r) =>
    numberValidator(r, {
      name: "Radius",
      positive: true,
      integer: true,
    })
  );

  if (!lines[2]) {
    throw new Error("Invalid input file format. Points line is missing");
  }

  const pointsStr = lines[2].split(" ");
  const points = pointsStr.map((p) =>
    numberValidator(p, {
      name: "Points",
      positive: true,
      integer: true,
    })
  );

  if (radius.length !== points.length) {
    throw new Error("Radius and points arrays must have the same length");
  }

  if (!lines[3]) {
    throw new Error("Invalid input file format. Shots line is missing");
  }

  const shotsStr = lines[3].split(/\s+/);

  validateShotsLine(shotsStr);

  const shots = shotsStr.map((shoot) => {
    try {
      const [xStr, yStr] = shoot.replace(/[()]/g, "").split(",");
      const x = numberValidator(xStr, {
        name: "X",
        positive: false,
        integer: true,
      });
      const y = numberValidator(yStr, {
        name: "Y",
        positive: false,
        integer: true,
      });
      return { x, y };
    } catch (error) {
      throw new Error("Coordinates (X,Y) must be numbers");
    }
  });

  return {
    xc,
    yc,
    radius,
    points,
    shots,
  };
}

function main() {
  try {
    const args = process.argv.slice(2);

    if (args.length !== 1) {
      throw new Error("Need 1 argument: input file path");
    }

    const filePath = args[0];

    if (!filePath) {
      throw new Error("Need 1 argument: input file path");
    }

    // Check or file exists
    if (!existsSync(filePath)) {
      throw new Error("File does not exist");
    }

    const input = readInputFile(filePath);

    // Create target
    const target = new Target(input.xc, input.yc, input.radius, input.points);

    // Calculate scores
    const scores = target.scoreAll(input.shots);
    const sum = target.scoreSum(scores);

    // Print results
    console.log("Number of shots:", input.shots.length);
    console.log("Shots scores:", scores);
    console.log("Sum:", sum);
  } catch (error) {
    //Handle errors
    if (error instanceof Error) {
      console.error("Error:", error.message);
      //showHelp(["minutes", "hours"]);
    } else {
      console.error("Enexpected error occurred.");
    }
    process.exit(1);
  }
}

main();
