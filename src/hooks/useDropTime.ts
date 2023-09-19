import { useCallback, useEffect, useState } from "react";
import { IGameStats } from "../common/interface";

const defaultDropTime = 1000;
const minimumDropTime = 100;
const speedIncrement = 50;

interface Props {
  gameStats: IGameStats;
}

export const useDropTime = ({ gameStats }: Props) => {
  const [dropTime, setDropTime] = useState<number | null>(defaultDropTime);
  const [previousDropTime, setPreviousDropTime] = useState<number | null>();

  const pauseDropTime = useCallback(() => {
    if (dropTime) setPreviousDropTime(dropTime);
    setDropTime(null);
  }, [dropTime, setPreviousDropTime]);

  const resumeDropTime = useCallback(() => {
    if (!previousDropTime) return;
    setDropTime(previousDropTime);
    // setPreviousDropTime(null);  // 굳이 비울 필요 있을까..?
  }, [previousDropTime]);

  useEffect(() => {
    const speed = speedIncrement * (gameStats.level - 1);
    const newDropTime = Math.max(defaultDropTime - speed, minimumDropTime);

    setDropTime(newDropTime);
  }, [gameStats.level, setDropTime]);

  return [dropTime, pauseDropTime, resumeDropTime] as const;
};
