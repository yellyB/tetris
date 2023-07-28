import { useState } from "react";
import { IBoard } from "../common/interface";
import { buildBoard } from "../business/Board";

export const useBoard = ({ rows, columns }: IBoard) => {
  const [board] = useState(buildBoard({ rows, columns }));

  return [board];
};
