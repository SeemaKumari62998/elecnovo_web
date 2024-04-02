import styled from "styled-components";

const Container = styled.div`
  border: 2px solid white;
  border-radius: 4px 30px;
  width: 100%;
  height: 100%;
  padding: 20px;
  backdrop-filter: blur(3px);

  @media only screen and (max-width: 600px) {
    padding: 10px;
  }
`;

const P = styled.p`
  color: yellow;
  font-size: 18px;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

function AppPopupDetails() {
  return (
    <Container>
      <P>High performance</P>
      <P>color</P>
      <P>Size</P>
      <P>speed</P>
      <P>type</P>
    </Container>
  );
}

export default AppPopupDetails;
