// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
import { reduceDirections, Direction } from "../../src/reduceDirections";

const feature = loadFeature("./cucumber/features/directionsReduction.feature");

defineFeature(feature, (test) => {
  test("The long list of directions", ({ given, when, then }) => {
    let directions: Direction[] = [];
    let reducedDirections: Direction[] = [];
    given("the user has long list of directions", () => {
      directions = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
    });

    when("the user wants to simplify these directions", () => {
      reducedDirections = reduceDirections(directions);
    });

    then("the resulting direction is just West", () => {
      expect(reducedDirections).toEqual(["WEST"]);
    });
  });
});
