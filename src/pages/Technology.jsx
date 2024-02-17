import styled from "styled-components";

const Container = styled.div`
  max-height: 100vh;
  width: 100%;
  padding: 40px;
`;
const H1 = styled.h1`
  height: 100%;
`;

function Technology() {
  return (
    <Container>
      <H1>Elecnovo's Motor Technologies</H1>

      <img src="" />
      <img src="" />
      <img src="" />

      <div>
        <p>BLDC</p>
        <p>PMSM</p>
        <p>AF</p>
        <p>SRM</p>
      </div>

      <p>
        BLDC: Brushless Direct Current; PMSM: Permanent Magnet Synchronous
        Motor; AF: Axial Flux; SRM: Switch Reluctance Motor
      </p>
    </Container>
  );
}

export default Technology;
