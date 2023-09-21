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

  const addLinesCleared = useCallback((lines: number) => {
    setGameStats((previous: IGameStats) => {
      const points = previous.points + lines * 100;
      const { linesPerLevel } = previous;
      const newLinesCompleted = previous.linesCompleted + lines;
      const level =
        newLinesCompleted >= linesPerLevel
          ? previous.level + 1
          : previous.level;
      const linesCompleted = newLinesCompleted % linesPerLevel; // todo: 몫을 왜?

      return { level, linesCompleted, linesPerLevel, points };
    });
  }, []);

  return [gameStats, addLinesCleared] as const;
};
