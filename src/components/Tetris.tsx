import { Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";

import { ITables } from "../common/interface";
import { useBoard } from "../hooks/useBoard";
import { useGameStats } from "../hooks/useGameStats";
import { usePlayer } from "../hooks/usePlayer";
import Board from "./Board";
import GameController from "./GameController";
import GameStats from "./GameStats";
import Previews from "./Previews";

const Tetris = ({
  rows,
  columns,
  setGameOver,
}: ITables & {
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
      <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
      <Guide>
        P: PAUSE/RESUME
        <br />
        Q: QUIT
        <br />
        Space: FAST DROP
      </Guide>
    </Container>
  );
};

const Guide = styled.div``;

const Container = styled.div`
  position: relative;

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

export default Tetris;
