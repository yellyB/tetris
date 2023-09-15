import styled from "styled-components";
import { IBoard, ICell } from "../common/interface";
import BoardCell from "./BoardCell";

const Board = ({ board }: { board: IBoard }) => {
  const boardStyles = {
    gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
    gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`,
  };

  return (
    <Container style={boardStyles}>
      {board.rows?.map((row: ICell[], y: number) =>
        row.map((cell: ICell, x: number) => (
          <BoardCell key={x * board.size.columns + x} cell={cell} />
        ))
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 2em auto;
  display: grid;
  grid-gap: 2px;
  width: 40vh;
  height: 80vh;
  background: rgb(32, 0, 64);
  border: 10px solid rgb(32, 0, 64);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default Board;
