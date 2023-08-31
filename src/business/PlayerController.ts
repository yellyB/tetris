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
  }
};
