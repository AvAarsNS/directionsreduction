import {
  Direction,
  areDirectionsUnnecessary,
} from "../../src/reduceDirections";

describe("This is the areDirectionsUnnecessary function. This function determines if two given directions are unnecessary", () => {
  describe("The two directions are unnecessary if they are:", () => {
    it.each([
      ["NORTH", "SOUTH"],
      ["SOUTH", "NORTH"],
      ["EAST", "WEST"],
      ["WEST", "EAST"],
    ] as [Direction, Direction][])("%s %s", (first, second) => {
      expect(areDirectionsUnnecessary(first, second)).toBeTruthy();
    });
  });
  describe("The two directions are not unnecessary if they are:", () => {
    it.each([
      ["NORTH", "NORTH"],
      ["NORTH", "EAST"],
      ["NORTH", "WEST"],
      ["SOUTH", "SOUTH"],
      ["SOUTH", "EAST"],
      ["SOUTH", "WEST"],
      ["EAST", "EAST"],
      ["EAST", "NORTH"],
      ["EAST", "SOUTH"],
      ["WEST", "WEST"],
      ["WEST", "NORTH"],
      ["WEST", "SOUTH"],
    ] as [Direction, Direction][])("%s %s", (first, second) => {
      expect(areDirectionsUnnecessary(first, second)).toBeFalsy();
    });
  });
});
