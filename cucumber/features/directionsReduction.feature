Feature: Directions Reduction

Scenario: The long list of directions
	Given the user has long list of directions
	When the user wants to simplify these directions
    Then the resulting direction is just West