import styled from "styled-components";
import Preview from "./Preview";

const Previews = ({ tetrominoes }: any) => {
  const previewTetrominoes = tetrominoes
    .slice(1 - tetrominoes.length)
    .reverse();

  return (
    <>
      {previewTetrominoes.map((tetromino: any, index: number) => (
        <Preview key={index} tetromino={tetromino} index={index} />
      ))}
    </>
  );
};

const Container = styled.div``;

export default Previews;
