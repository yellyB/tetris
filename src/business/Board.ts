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

  if (player.collided || player.isFastDropping) resetPlayer(); // 바닥에 다다르면 다음 조각 소환

  return { rows, size: { ...board.size } };
};

export const isWithinBoard = ({ board, position, shape }: any) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;
        const isValidPosition = board.rows[row] && board.rows[row][column]; // 값이 0이면 블록이 없는 공간. 때문에 블록이 차지하고 있나 아닌가 확인하기

        if (!isValidPosition) return false;
      }
    }
  }

  return true;
};

export const hasCollision = ({ board, position, shape }: any) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;

        if (
          board.rows[row] &&
          board.rows[row][column] &&
          board.rows[row][column].occupied
        )
          return true;
      }
    }
  }

  return false;
};
