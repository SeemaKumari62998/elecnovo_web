import styled from "styled-components";
import LinkButton from "./LinkButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 10px;
  color: white;
  margin: 40px;
`;

const Ul = styled.ul`
  margin: 20px;

  @media only screen and (max-width: 600px) {
    margin: 0;
  }
`;

const Li = styled.li`
  padding: 25px;
  background-color: black;
  margin: 20px;
  width: 50%;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
`;

const P = styled.p`
  margin: 5px;
  font-size: 2rem;
  text-align: left;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;
const H1 = styled.h1`
  margin: 20px;
  color: var(--color-grey-400);

  @media only screen and (max-width: 600px) {
    font-size: 22px;
    margin: 3px;
    text-align: center;
  }
`;

const Div = styled.div`
  gap: 200px;
`;

const Span = styled.span`
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

function Career() {
  return (
    <>
      <LinkButton to="/">
        <Span>&larr;Back</Span>
      </LinkButton>
      <Container>
        <H1>Elecnovo's inventions</H1>

        <Ul>
          <Li>
            ❌ Learning based motor control system for EV (Patent granted)
          </Li>
          <Li>❌ Sensor-less control system for BLDC motor (Patent granted)</Li>
          <Li> ❌ Commutation system for electric motor (Patent pending) </Li>
        </Ul>

        <H1>The Solutions Elecnovo is bringing</H1>

        <P>
          Advanced Motor and Intelligent Controller technologies for Electric
          Vehicles Unique solutions of motors and controllers for optimised
          performance, higher efficiency and higher reliability
          Custom-engineered solutions for application specific requirements Made
          in India solution with lower total cost Competent engineering and
          technical support
        </P>

        <Div>
          <img src="certificate1.png" alt="Certification" />
          <img src="certificate2.png" alt="Certification" />
          <img src="certificate3.png" alt="Certification" />
          <img src="certificate4.png" alt="Certification" />
        </Div>
      </Container>
    </>
  );
}

export default Career;
