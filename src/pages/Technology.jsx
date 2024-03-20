import styled from "styled-components";
import LinkButton from "../../ui/LinkButton";

const Container = styled.div`
  max-height: 100vh;
  width: 100%;
  padding: 80px;
  background-color: var(--color-grey-900);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
const H1 = styled.h1`
  text-align: center;
`;
const H2 = styled.h2`
  text-align: center;
  margin-top: 200px;
`;

const Imagecontainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  width: 250px;
  height: auto;
  margin: 20px;
  border: 1px solid white;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  font-weight: bold;
  margin-top: 1px;
  font-size: 20px;
`;

function Technology() {
  return (
    <>
      <LinkButton to="/">&larr;Back</LinkButton>

      <Container>
        <H1>Elecnovo's Motor Technologies</H1>
        <Imagecontainer>
          <Div>
            <Image src="tractor.png" alt="technology" />
            <P>BLDC</P>
          </Div>

          <Div>
            <Image src="tractor.png" alt="technology" />
            <P>PMSM</P>
          </Div>
          <Div>
            <Image src="tractor.png" alt="technology" />
            <P>AF</P>
          </Div>

          <Div>
            <Image src="tractor.png" alt="technology" />
            <P>SRM</P>
          </Div>
        </Imagecontainer>

        <H2>
          BLDC: Brushless Direct Current; PMSM: Permanent Magnet Synchronous
          Motor; AF: Axial Flux; SRM: Switch Reluctance Motor
        </H2>
      </Container>
    </>
  );
}

export default Technology;
