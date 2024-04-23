import styled from "styled-components";
import LinkButton from "../../ui/LinkButton";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: var(--color-grey-400);
  display: flex;
  flex-direction: column;
  color: var(--color-grey-900);

  @media only screen and (max-width: 600px) {
    padding: 25px;
  }
`;
const H1 = styled.h1`
  text-align: center;
  margin-top: 70px;

  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
const H2 = styled.h2`
  text-align: center;
  margin-top: 60px;

  @media only screen and (max-width: 600px) {
    font-size: 18px;
    margin-top: 5px;
    text-align: center;
  }
`;

const Imagecontainer = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 5px;
    margin: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  margin: 20px;
  border: 1px solid grey;

  @media only screen and (max-width: 600px) {
    max-width: calc(100% - 50px);
    margin: 20px;
  }
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

  @media only screen and (max-width: 600px) {
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

const Span = styled.span`
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

function Technology() {
  return (
    <>
      <LinkButton to="/">
        <Span>&larr;Back</Span>
      </LinkButton>

      <Container>
        <H1>Elecnovo's Motor Technologies</H1>
        <Imagecontainer>
          <Div>
            <Image src="Picture1.png" alt="technology" />
            <P>BLDC</P>
          </Div>

          <Div>
            <Image src="Picture2.png" alt="technology" />
            <P>PMSM</P>
          </Div>
          <Div>
            <Image src="Picture3.png" alt="technology" />
            <P>AF</P>
          </Div>

          <Div>
            <Image src="Picture4.png" alt="technology" />
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
