import styled from "styled-components";
import { Action, actionForKey } from "../business/Input";
import { playerController } from "../business/PlayerController";
import { useDropTime } from "../hooks/useDropTime";
import { useInterval } from "../hooks/useInterval";

interface KeyEvent {
  code: string;
}

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}: any) => {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({ gameStats });

  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, dropTime);

  const handleInput = ({ action }: any) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver,
    });
  };

  const handleKeyUp = ({ code }: KeyEvent) => {
    console.log(code);
    const action = actionForKey(code);
  };

  const handleKeyDown = ({ code }: KeyEvent) => {
    const action = actionForKey(code);

    if (action === Action.Pause) {
      if (dropTime) pauseDropTime();
      else resumeDropTime();
    } else if (action === Action.Quit) setGameOver(true);
    else handleInput({ action });
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
