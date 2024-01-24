import { Direction } from "../../src/reduceDirections";

export const standStill: Direction[] = [];
export const justNorth: Direction[] = ["NORTH"];
export const northTimes3: Direction[] = ["NORTH", "NORTH", "NORTH"];
export const northSouth: Direction[] = ["NORTH", "SOUTH"];
export const northNorthSouth: Direction[] = ["NORTH", "NORTH", "SOUTH"];
export const westEastNorth: Direction[] = ["WEST", "EAST", "NORTH"];
export const northSouthEastWest: Direction[] = [
  "NORTH",
  "SOUTH",
  "EAST",
  "WEST",
];
export const northEastWestSouth: Direction[] = [
  "NORTH",
  "EAST",
  "WEST",
  "SOUTH",
];
