# NOTES

## 🍅 1
Create the given end-to-end case:
[North, South, South, East, West, North, West]

Create a type for directions to let the type errors go away

Create components:
- Going north once -> north
- Going north souhth -> stand still
- - This one needs a unit to determine if a direction is unnecessary

## 🍅 2
Finish unit to determine if a direction is unnecessary:
- NS
- SN
- EW
- WE

## 🍅 3
Additional component tests, introducting east and west:
- Go north, north south -> north
- Go west, east, north -> north
- Go north, north, north -> stays the same

## 🍅 4
Increase the difficulty, remove more than 2 directions
- Go north, south, east, west -> stand still
- Go north, east, west, south -> stand still
