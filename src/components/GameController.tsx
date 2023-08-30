import styled from "styled-components";
import { Action, actionForKey } from "../business/Input";

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}: any) => {
  const handleKeyUp = ({ code }: any) => {
    const action = actionForKey(code);
    if (action === Action.Quit) setGameOver(true);
  };

  const handleKeyDown = ({ code }: any) => {
    console.log("KeyDown:", code);
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
