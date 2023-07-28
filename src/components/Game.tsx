import styled from "styled-components";

import { useGameOver } from "../hooks/useGameOver";

import Tetris from "./Tetris";
import Menu from "./Menu";

const Game = ({ rows, columns }: { rows: number; columns: number }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => {
    resetGameOver();
  };

  return (
    <Container>
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </Container>
  );
};

const Container = styled.div``;

export default Game;
