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

function removeUnnecessaryDirections(directions: Direction[]): Direction[] {
  const result = [...directions];

  const index = directions.findIndex((_, i) =>
    areDirectionsUnnecessary(directions[i], directions[i + 1])
  );

  if (index !== -1) result.splice(index, 2);

  return result;
}

export function reduceDirections(directions: Direction[]): Direction[] {
  let before = [...directions];
  let after = [...directions];

  do {
    before = after;
    after = removeUnnecessaryDirections(before);
  } while (JSON.stringify(before) !== JSON.stringify(after));

  return after;
}
