import styled from "styled-components";
import { Action, actionForKey, actionIsDrop } from "../business/Input";
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
    const action = actionForKey(code);
    if (actionIsDrop(action)) resumeDropTime(); // 게임 일시정지했는데 내려가는 키 누르면 다시 시작처리
  };

  const handleKeyDown = ({ code }: KeyEvent) => {
    const action = actionForKey(code);

    if (action === Action.Pause) {
      if (dropTime) pauseDropTime();
      else resumeDropTime();
      return;
    }

    if (action === Action.Quit) {
      setGameOver(true);
      return;
    }

    // if (actionIsDrop(action)) pauseDropTime();  // todo: 필요 있나..?
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
