import styled from "styled-components";

const BoardCell = ({ cell }: any) => {
  return (
    <Container className={`Boardcell ${cell.className}`}>
      <div className="Sparkle"></div>
    </Container>
  );
};

const Container = styled.div`
  width: auto;
  border-radius: 6px;
  position: relative;
`;

export default BoardCell;
