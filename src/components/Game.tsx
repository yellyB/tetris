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

const Container = styled.div`
  .tetromino {
    border-top: 3px solid rgba(255, 255, 255, 0.1);
    border-left: 3px solid rgba(255, 255, 255, 0.1);
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
    border-right: 3px solid rgba(0, 0, 0, 0.1);
  }

  .tetromino .Sparkle {
    position: absolute;
    z-index: 10;
    width: 6px;
    height: 6px;
    left: -2px;
    top: -2px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 4px 4px;
  }

  .tetromino.ghost {
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .tetromino.ghost .Sparkle {
    opacity: 0;
  }

  .tetromino__i {
    background-color: rgba(80, 227, 230, 1);
  }
  .tetromino__j {
    background-color: rgba(36, 95, 223, 1);
  }
  .tetromino__l {
    background-color: rgba(223, 173, 36, 1);
  }
  .tetromino__o {
    background-color: rgba(223, 217, 36, 1);
  }
  .tetromino__s {
    background-color: rgba(48, 211, 56, 1);
  }
  .tetromino__t {
    background-color: rgba(132, 61, 198, 1);
  }
  .tetromino__z {
    background-color: rgba(240, 80, 195, 1);
  }
`;

export default Game;
