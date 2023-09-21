import {
  IBoardSnapShot,
  ICell,
  INextBoardFuncParams,
  ITables,
} from "../common/interface";
import { defaultCell } from "./Cell";
import { movePlayer } from "./PlayerController";
import { transferToBoard } from "./Tetrominoes";

export const buildBoard = ({ rows, columns }: ITables) => {
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return {
    rows: builtRows,
    size: { rows, columns },
  };
};

const findDropPosition = ({ board, position, shape }: IBoardSnapShot) => {
  let max = board.size.rows - position.row + 1;
  let row = 0;

  for (let i = 0; i < max; i++) {
    const delta = { row: i, column: 0 };
    const result = movePlayer({ delta, board, position, shape });
    const { collided } = result;

    if (collided) {
      row = position.row + i - 1;
      break;
    }
  }

  return { ...position, row };
};

export const nextBoard = ({
  board,
  player,
  resetPlayer,
  addLinesCleared,
}: INextBoardFuncParams) => {
  const { tetromino, position } = player;

  let rows = board.rows.map((row: ICell[]) =>
    row.map((cell: ICell) => (cell.occupied ? cell : { ...defaultCell }))
  );

  const dropPosition = findDropPosition({
    board,
    position,
    shape: tetromino.shape,
  });

  const className = `${tetromino.className} ${
    player.isFastDropping ? "" : "ghost"
  }`;

  // ghost 를 위한 부분
  rows = transferToBoard({
    className,
    isOccupied: player.isFastDropping,
    position: dropPosition,
    rows,
    shape: tetromino.shape,
  });

  // todo: if 문 왜 필요하지? if문은 좀 더 생각해보기
  // if (!player.isFastDropping) {
  rows = transferToBoard({
    className: tetromino.className,
    isOccupied: player.collided,
    position,
    rows,
    shape: tetromino.shape,
  });
  // }

  const blankRow = rows[0].map((_) => ({ ...defaultCell }));
  let linesCleared = 0;

  rows = rows.reduce((acc, row) => {
    if (row.every((column) => column.occupied)) {
      linesCleared++;
      acc.unshift([...blankRow] as any);
    } else {
      acc.push(row as any);
    }
    return acc;
  }, []) as any;

  if (linesCleared > 0) addLinesCleared(linesCleared);

  if (player.collided || player.isFastDropping) resetPlayer(); // 바닥에 다다르면 다음 조각 소환

  return { rows, size: { ...board.size } };
};

export const isWithinBoard = ({ board, position, shape }: IBoardSnapShot) => {
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

export const hasCollision = ({ board, position, shape }: IBoardSnapShot) => {
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
