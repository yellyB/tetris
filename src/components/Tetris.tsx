import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

import { IBoard } from "../common/interface";
import { useBoard } from "../hooks/useBoard";
import Board from "./Board";

const Tetris = ({
  rows,
  columns,
  setGameOver,
}: IBoard & {
  setGameOver: Dispatch<SetStateAction<boolean>>;
}) => {
  const [board] = useBoard({ rows, columns });

  return (
    <Container>
      <Board board={board} />
    </Container>
  );
};

const Container = styled.div`
  .Tetris {
    position: relative;
  }
`;

export default Tetris;
