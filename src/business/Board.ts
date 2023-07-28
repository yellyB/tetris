import { IBoard } from "../common/interface";
import { defaultCell } from "./Cell";

export const buildBoard = ({ rows, columns }: IBoard) => {
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return {
    rows: builtRows,
    size: { rows, columns },
  };
};
