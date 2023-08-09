import { Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";

import { IBoard } from "../common/interface";
import { useBoard } from "../hooks/useBoard";
import { useGameStats } from "../hooks/useGameStats";
import Board from "./Board";
import GameStats from "./GameStats";

const Tetris = ({
  rows,
  columns,
  setGameOver,
}: IBoard & {
  setGameOver: Dispatch<SetStateAction<boolean>>;
}) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [board] = useBoard({ rows, columns });

  return (
    <Container>
      <Board board={board} />
      <GameStats gameStats={gameStats} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

export default Tetris;