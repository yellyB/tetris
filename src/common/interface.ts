export interface ITables {
  rows: number;
  columns: number;
}
interface IPosition {
  row: number;
  column: number;
}

export interface IUseBoardParams extends ITables {
  player?: IPlayer;
  resetPlayer?: () => void;
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
  position: IPosition;
  tetrominoes: any;
  tetromino: any;
}

export interface Tetromino {
  shape: number[][];
}

export interface IBoardSnapShot {
  board: any;
  position: IPosition;
  shape: number[][];
}

export interface ICell {
  occupied: boolean;
  className: string;
}
export interface IBoard {
  rows: ICell[][];
  size: ITables;
}
export interface INextBoardFuncParams {
  board: IBoard;
  player: any;
  resetPlayer: any;
  addLinesCleared: any;
}
