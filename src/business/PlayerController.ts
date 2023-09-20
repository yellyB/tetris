import { IBoardSnapShot, IDelta } from "../common/interface";
import { hasCollision, isWithinBoard } from "./Board";
import { Action } from "./Input";
import { rotate } from "./Tetrominoes";

const attempRotation = ({ board, player, setPlayer }: any) => {
  const shape = rotate({
    piece: player.tetromino.shape,
    direction: 1,
  });

  const position = player.position;
  const isValidRotation =
    isWithinBoard({ board, position, shape }) &&
    !hasCollision({ board, position, shape });

  if (isValidRotation) {
    setPlayer({
      ...player,
      tetromino: { ...player.tetromino, shape },
    });
  } else {
    return false;
  }
};

export const movePlayer = ({
  delta,
  board,
  position,
  shape,
}: IBoardSnapShot & { delta: IDelta }) => {
  const desiredNextPosition = {
    row: position.row + delta.row,
    column: position.column + delta.column,
  };

  const collided = hasCollision({
    board,
    position: desiredNextPosition,
    shape,
  });
  const isOnBoard = isWithinBoard({
    board,
    position: desiredNextPosition,
    shape,
  });

  const preventMove = !isOnBoard || (isOnBoard && collided);
  const nextPosition = preventMove ? position : desiredNextPosition;
  const isMovingDown = delta.row > 0;
  const isHit = isMovingDown && (collided || !isOnBoard);

  return { collided: isHit, nextPosition };
};

const attempMovement = ({
  board,
  player,
  setPlayer,
  action,
  setGameOver,
}: any) => {
  const delta = { row: 0, column: 0 };
  let isFastDropping = false;

  if (action === Action.FastDrop) {
    isFastDropping = true;
  } else if (action === Action.SlowDrop) {
    delta.row += 1;
  } else if (action === Action.Left) {
    delta.column -= 1;
  } else if (action === Action.Right) {
    delta.column += 1;
  }

  const { collided, nextPosition } = movePlayer({
    delta,
    position: player.position,
    shape: player.tetromino.shape,
    board,
  });

  const isGameOver = collided && player.position.row === 0;
  if (isGameOver) {
    setGameOver(isGameOver);
  }

  setPlayer({
    ...player,
    collided,
    isFastDropping,
    position: nextPosition,
  });
};

export const playerController = ({
  action,
  board,
  player,
  setPlayer,
  setGameOver,
}: any) => {
  if (!action) return;

  if (action === Action.Rotate) {
    attempRotation({ board, player, setPlayer });
  } else {
    attempMovement({ board, player, setPlayer, action, setGameOver });
  }
};
