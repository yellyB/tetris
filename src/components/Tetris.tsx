import { Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";

import { IBoard } from "../common/interface";
import { useBoard } from "../hooks/useBoard";
import { useGameStats } from "../hooks/useGameStats";
import { usePlayer } from "../hooks/usePlayer";
import Board from "./Board";
import GameStats from "./GameStats";
import Previews from "./Previews";

const Tetris = ({
  rows,
  columns,
  setGameOver,
}: IBoard & {
  setGameOver: Dispatch<SetStateAction<boolean>>;
}) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  return (
    <Container>
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

export default Tetris;
