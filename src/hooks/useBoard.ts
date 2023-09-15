import { useEffect, useState } from "react";
import { IUseBoardParams } from "../common/interface";
import { buildBoard, nextBoard } from "../business/Board";

export const useBoard = ({
  rows,
  columns,
  player,
  resetPlayer,
  addLinesCleared,
}: IUseBoardParams) => {
  const [board, setBoard] = useState(buildBoard({ rows, columns }));

  useEffect(() => {
    setBoard((previousBoard) =>
      nextBoard({
        board: previousBoard,
        player,
        resetPlayer,
        addLinesCleared,
      })
    );
  }, [player, resetPlayer, addLinesCleared]);

  return [board];
};
