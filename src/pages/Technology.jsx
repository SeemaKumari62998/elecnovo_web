import styled from "styled-components";
import LinkButton from "../../ui/LinkButton";

const Container = styled.div`
  /* height: 100vh; */
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  color: black;

  @media only screen and (max-width: 600px) {
    padding: 25px;
  }
`;
const H1 = styled.h1`
  text-align: center;
  margin-top: 50px;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
const H2 = styled.h2`
  text-align: center;
  margin-top: 90px;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
    margin-top: 20px;
    text-align: center;
    margin-bottom: 5px;
  }
`;

const Imagecontainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  gap: 30px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin: 10px;
  }
`;

const Image = styled.img`
  width: 80%;
  max-height: 280px;
  height: 80%;
  /* margin: 10px; */
  margin-bottom: 10px;

  /* object-fit: cover; */

  @media only screen and (max-width: 600px) {
    max-width: calc(100% - 50px);
    margin: 20px;
    align-items: center;
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
    font-size: 16px;
    text-align: center;
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
      {/* <LinkButton to="/">
        <Span>&larr;Back</Span>
      </LinkButton> */}

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
          BLDC: Brushless Direct Current, PMSM: Permanent Magnet Synchronous
          Motor, AF: Axial Flux, SRM: Switch Reluctance Motor
        </H2>
      </Container>
    </>
  );
}

export default Technology;
