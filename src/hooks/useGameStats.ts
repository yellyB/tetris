import { useCallback, useState } from "react";
import { IGameStats } from "../common/interface";

const buildGameStats = () => ({
  level: 1,
  linesCompleted: 0,
  linesPerLevel: 10,
  points: 0,
});

export const useGameStats = () => {
  const [gameStats, setGameStats] = useState<IGameStats>(buildGameStats());

  const addLinesCleared = useCallback(() => {}, []);

  return [gameStats, addLinesCleared] as const;
};
