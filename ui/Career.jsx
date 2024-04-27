import styled from "styled-components";
import LinkButton from "./LinkButton";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: var(--color-grey-200);
  margin-top: 30px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  width: 40%;
  height: 10%;
  object-fit: cover;
  padding: 40px;
  margin: 20px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 20px;
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 600px) {
    margin-top: 20px;
  }
`;

const IconImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 10px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const Span = styled.span`
  font-size: 15px;
  color: black;
`;

function Carrer() {
  return (
    <>
      <LinkButton to="/">
        <Span>&larr;Back</Span>
      </LinkButton>
      <Container>
        <Img src="career10.jpg" alt="Career" />

        <div>
          <p>
            Elecnovo offers excellent carerr opportunity for Engineering
            manifacturing human resource and business development please send
            your interduction and resume to reach us on elecnovo.com if you want
            to join the journey of elecnovo
          </p>

          {/* <p>
            Elecnovo offers excellent carerr opportunity for Engineering
            manifacturing human resource business development , supply chain
            ,sells and marketing .. etc please send your interduction and resume
            to reach us on elecnovo.com if you want to join the journey of
            elecnovo
          </p> */}
        </div>

        {/* <ImageContainer>
          <Div>
            <IconImg src="Invention1.jpg" alt="Img" />
            <p> Learning based motor control system for EV (Patent granted)</p>
          </Div>
          <Div>
            <IconImg src="Invention2.jpg" alt="Img" />
            <p>Sensor-less control system for BLDC motor (Patent granted)</p>
          </Div>
          <Div></Div>
          <Div>
            <IconImg src="Invention3.jpg" alt="Img" />
            <p>Intelligent motor control system for EV (Patent granted)</p>
          </Div>

          <Div>
            <IconImg src="Invention4.jpg" alt="Img" />
            <p>Commutation system for electric motor (Patent pending)</p>
          </Div>
        </ImageContainer> */}
      </Container>
    </>
  );
}

export default Carrer;
