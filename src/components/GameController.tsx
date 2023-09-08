import styled from "styled-components";
import { Action, actionForKey } from "../business/Input";
import { playerController } from "../business/PlayerController";
import { useInterval } from "../hooks/useInterval";

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}: any) => {
  const GAME_SPEED = 1000; // 작을수록 빠름

  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, GAME_SPEED);

  const handleInput = ({ action }: any) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver,
    });
  };

  const handleKeyUp = ({ code }: any) => {
    const action = actionForKey(code);
    if (action === Action.Quit) setGameOver(true);
  };

  const handleKeyDown = ({ code }: any) => {
    const action = actionForKey(code);
    handleInput({ action });
  };

  return (
    <Input
      type="text"
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      autoFocus
    />
  );
};

const Input = styled.input`
  position: absolute;
  top: -100em;
`;

export default GameController;
