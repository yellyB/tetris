const className = "tetromino";

export const TETROMINOES: any = {
  I: {
    shape: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
    className: `${className} ${className}__i`,
  },
  J: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    className: `${className} ${className}__j`,
  },
  L: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    className: `${className} ${className}__l`,
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    className: `${className} ${className}__o`,
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    className: `${className} ${className}__s`,
  },
  T: {
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    className: `${className} ${className}__t`,
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    className: `${className} ${className}__z`,
  },
};

export const randomTetromino = () => {
  const keys = Object.keys(TETROMINOES);
  const index = Math.floor(Math.random() * keys.length);
  const key = keys[index];
  return TETROMINOES[key];
};

export const rotate = ({
  piece,
  direction,
}: {
  piece: number[][];
  direction: number;
}) => {
  // direction이 양수면 시계방향, 음수면 시계 반대방향
  const newPiece = piece.map((_: any, index: number) =>
    piece.map((column: any) => column[index])
  );

  if (direction > 0) return newPiece.map((row: any) => row.reverse());

  return newPiece.reverse();
};

interface IProps {
  className: string;
  isOccupied: boolean;
  position: any;
  rows: any;
  shape: any;
}

export const transferToBoard = ({
  className,
  isOccupied,
  position,
  rows,
  shape,
}: IProps) => {
  shape.forEach((row: any, y: number) => {
    row.forEach((cell: any, x: number) => {
      if (cell) {
        const occupied = isOccupied;
        const _y = y + position.row;
        const _x = x + position.column;
        rows[_y][_x] = { occupied, className };
      }
    });
  });

  return rows;
};
