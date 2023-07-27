import styled from "styled-components";

const Menu = ({ onClick }: { onClick: () => void }) => {
  return (
    <Container>
      <Button onClick={onClick}>Play Tetris</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  z-index: 100;
`;

const Button = styled.button`
  padding: 40px 80px;
  font-size: 2em;
  border-radius: 20px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 60px;
  cursor: pointer;
`;

export default Menu;
