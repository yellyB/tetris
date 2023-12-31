import { useCallback, useState } from "react";
import { randomTetromino } from "../business/Tetrominoes";
import { IPlayer } from "../common/interface";

const buildPlayer = (previous?: IPlayer) => {
  let tetrominoes: any;

  if (previous) {
    tetrominoes = [...previous.tetrominoes];
    tetrominoes.unshift(randomTetromino());
  } else {
    tetrominoes = Array(5)
      .fill(0)
      .map((_) => randomTetromino());
  }

  return {
    collided: false,
    isFaseDropping: false,
    position: { row: 0, column: 4 },
    tetrominoes,
    tetromino: tetrominoes.pop(),
  };
};

export const usePlayer = () => {
  const [player, setPlayer] = useState<IPlayer>(buildPlayer());

  const resetPlayer = useCallback(() => {
    setPlayer((prev) => buildPlayer(prev));
  }, []);

  return [player as any, setPlayer, resetPlayer];
};
