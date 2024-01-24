export type Direction = "NORTH" | "EAST" | "SOUTH" | "WEST";

const unnecessaryDirections: [Direction, Direction][] = [
  ["NORTH", "SOUTH"],
  ["SOUTH", "NORTH"],
  ["EAST", "WEST"],
  ["WEST", "EAST"],
];

export function areDirectionsUnnecessary(first: Direction, second: Direction) {
  return unnecessaryDirections.some(([a, b]) => a === first && b === second);
}

export function reduceDirections(directions: Direction[]): Direction[] {
  const result: Direction[] = [];
  let i = 0;
  do {
    if (areDirectionsUnnecessary(directions[i], directions[i + 1])) {
      i += 2;
    } else {
      result.push(directions[i]);
      i += 1;
    }
  } while (i < directions.length);
  return result;
}
