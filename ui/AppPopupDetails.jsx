import styled from "styled-components";

const Container = styled.div`
  border: 2px solid white;
  border-radius: 4px 30px;
  width: 100%;
  height: 100%;
  padding: 20px;
  backdrop-filter: blur(3px);
`;

const P = styled.p`
  color: yellow;
  font-size: 18px;
`;

function AppPopupDetails() {
  return (
    <Container>
      <P>High quality performance </P>
      <P>color</P>
      <P>Size</P>
      <P>speed</P>
      <P>type</P>
    </Container>
  );
}

export default AppPopupDetails;
