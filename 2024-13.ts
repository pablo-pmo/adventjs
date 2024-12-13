type Position = [number, number];

type Direction = {
  direction: Position;
  invertedMove: string;
  hasHappened: boolean;
};
type Directions = {
  [key: string]: Direction;
};

function isRobotBack(moves: string[]) {
  const directions: Directions = {
    L: {
      direction: [-1, 0],
      invertedMove: "R",
      hasHappened: false,
    },
    R: {
      direction: [1, 0],
      invertedMove: "L",
      hasHappened: false,
    },
    U: {
      direction: [0, 1],
      invertedMove: "D",
      hasHappened: false,
    },
    D: {
      direction: [0, -1],
      invertedMove: "U",
      hasHappened: false,
    },
  };

  const movePosition = (origin: Position, direction: Direction) => {
    direction.hasHappened = true;
    origin[0] += direction.direction[0];
    origin[1] += direction.direction[1];
  };

  const position: Position = [0, 0];

  for (let i = 0; i < moves.length; i++) {
    const move: string = moves[i];

    switch (move) {
      case "*":
        const nextMove: Direction = directions[moves[i + 1]];
        movePosition(position, nextMove);
        break;

      case "!":
        const invertedMoveIndex: string = directions[moves[++i]].invertedMove;
        const invertedMove: Direction = directions[invertedMoveIndex];
        movePosition(position, invertedMove);
        break;

      case "?":
        const possibleNextMove: Direction = directions[moves[++i]];
        if (!possibleNextMove.hasHappened) {
          movePosition(position, possibleNextMove);
        }
        break;

      default:
        const normalMove: Direction = directions[move];
        movePosition(position, normalMove);
    }
  }

  return (
    position.every((coordinate: number): boolean => coordinate === 0) ||
    position
  );
}
