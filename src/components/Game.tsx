import Menu from "./Menu";
import styled from "styled-components";
import { useGameOver } from "../hooks/useGameOver";

const Game = ({ row, column }: { row: number; column: number }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => {
    resetGameOver();
    console.log(gameOver);
  };

  return (
    <Container>
      <Menu onClick={start} />
    </Container>
  );
};

const Container = styled.div``;

export default Game;
