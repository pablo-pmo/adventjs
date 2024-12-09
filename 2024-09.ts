type Space = "·" | "@" | "*" | "o";
type Board = Space[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

type Direction = [number, number];
type Directions = {
  [key: string]: Direction;
};

type Results = {
  [key: string]: Result;
};

function moveTrain(board: Board, mov: Movement) {
  const engine: string = "@";

  const directions: Directions = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };
  const [directionL, directionC]: Direction = directions[mov];

  const line: number = board.findIndex((line: string): boolean =>
    line.includes(engine)
  );
  const column: number = board[line].indexOf(engine);

  const newLine: number = line + directionL;
  const newColumn: number = column + directionC;

  if (newLine < 0 || newColumn < 0) return "crash";

  const nextStop: string | undefined = board.at(newLine)?.at(newColumn);
  if (nextStop === undefined) return "crash";

  const results: Results = {
    "·": "none",
    "*": "eat",
    o: "crash",
  };
  return results[nextStop];
}
