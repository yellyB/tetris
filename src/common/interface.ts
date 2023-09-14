interface ITables {
  rows: number;
  columns: number;
}
interface ITable {
  row: number;
  column: number;
}

export interface IBoard extends ITables {
  player?: any;
  resetPlayer?: any;
  addLinesCleared?: any;
}

export interface IGameStats {
  level: number;
  linesCompleted: number;
  linesPerLevel: number;
  points: number;
}

export interface IPlayer {
  collided: boolean;
  isFaseDropping: boolean;
  position: ITable;
  tetrominoes: any;
  tetromino: any;
}

export interface Tetromino {
  shape: number[][];
}

export interface IBoardSnapShot {
  board: any;
  position: any;
  shape: any;
}
