import { reduceDirections } from "../../src/reduceDirections";
import * as stubs from "../doubles/directionStubs";

describe("This is the reduceDirections function. This function removes any unnecessary directions from a list", () => {
  describe("We start with some very simple directions", () => {
    it("North -> north", () => {
      expect(reduceDirections(stubs.justNorth)).toEqual(stubs.justNorth);
    });
    it("North, south -> stand still", () => {
      expect(reduceDirections(stubs.northSouth)).toEqual(stubs.standStill);
    });
    it("North, north, south -> just north", () => {
      expect(reduceDirections(stubs.northNorthSouth)).toEqual(stubs.justNorth);
    });
    it("West, east, north -> just north", () => {
      expect(reduceDirections(stubs.westEastNorth)).toEqual(stubs.justNorth);
    });
    it("North, north, north -> north north north", () => {
      expect(reduceDirections(stubs.northTimes3)).toEqual(stubs.northTimes3);
    });
  });
  describe("Now we increase the difficulty, having a couple of directions removed", () => {
    it("North, south, east, west -> stand still", () => {
      expect(reduceDirections(stubs.northSouthEastWest)).toEqual(
        stubs.standStill
      );
    });
    it("North, est, west, south -> stand still", () => {
      expect(reduceDirections(stubs.northEastWestSouth)).toEqual(
        stubs.standStill
      );
    });
  });
});
