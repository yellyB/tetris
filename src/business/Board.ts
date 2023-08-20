import { IBoard } from "../common/interface";
import { defaultCell } from "./Cell";
import { transferToBoard } from "./Tetrominoes";

export const buildBoard = ({ rows, columns }: IBoard) => {
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return {
    rows: builtRows,
    size: { rows, columns },
  };
};

export const nextBoard = ({
  board,
  player,
  resetPlayer,
  addLinesCleared,
}: any) => {
  const { tetromino, position } = player;

  let rows = board.rows.map((row: any) =>
    row.map((cell: any) => (cell.occupied ? cell : { ...defaultCell }))
  );

  rows = transferToBoard({
    className: tetromino.className,
    isOccupied: player.collided,
    position,
    rows,
    shape: tetromino.shape,
  });

  return { rows, size: { ...board.size } };
};
