import styled from "styled-components";

const Container = styled.div`
  border: 2px solid white;
  width: 100%;
  height: 100%;
`;

const H1 = styled.h1`
  color: yellow;
`;

function AppPopupDetails() {
  return (
    <Container>
      <H1>performance</H1>
      <H1>color</H1>
      <H1>Size</H1>
      <H1>speed</H1>
      <H1>type</H1>
    </Container>
  );
}

export default AppPopupDetails;
