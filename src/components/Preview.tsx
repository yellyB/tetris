import styled from "styled-components";
import { buildBoard } from "../business/Board";
import BoardCell from "./BoardCell";
import { transferToBoard } from "../business/Tetrominoes";

interface IProps {
  tetromino: any;
  index: number;
}

const Preview = ({ tetromino, index }: IProps) => {
  const { shape, className } = tetromino;

  const board = buildBoard({ rows: 4, columns: 4 });

  const style = { top: `${index * 15}vh` };

  board.rows = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    rows: board.rows,
    shape,
  });

  return (
    <Container style={style}>
      <PreviewBoard>
        {board.rows.map((row: any, y: number) =>
          row.map((cell: any, x: number) => (
            <BoardCell key={x * board.size.columns + x} cell={cell} />
          ))
        )}
      </PreviewBoard>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 72.2vw;
  background: rgba(0, 0, 0, 0.1);
  border: 10px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
`;

const PreviewBoard = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  width: 11vh;
  height: 11vh;
`;

export default Preview;
