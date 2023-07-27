import { useState, useCallback } from "react";

export const useGameOver = () => {
  const [gameOver, setGameOver] = useState(true);

  const resetGameOver = useCallback(() => {
    setGameOver(false);
  }, []);

  return [gameOver, setGameOver, resetGameOver] as const;

  /** 
   * as const 를 안붙이면 resetGameOver를 호출하는 부분에서 아래와 같은 타입 에러가 난다.
   *  Not all constituents of type 'boolean | Dispatch<SetStateAction<boolean>>' are callable.
    Type 'false' has no call signatures.
   * 참고:
   * https://pauledenburg.com/typescript-not-all-constituents-of-type-boolean-void-are-callable/
   */
};
