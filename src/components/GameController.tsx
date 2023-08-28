import styled from "styled-components";

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}: any) => {
  const handleKeyDown = ({ code }: any) => {
    console.log("KeyDown:", code);
  };

  const handleKeyUp = ({ code }: any) => {
    console.log("KeyUp:", code);
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
