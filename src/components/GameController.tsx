import styled from "styled-components";
import { Action, actionForKey } from "../business/Input";
import { playerController } from "../business/PlayerController";

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}: any) => {
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
