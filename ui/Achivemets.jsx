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
  margin: 2s0px;
`;

const Li = styled.li`
  padding: 25px;
  background-color: black;
  margin: 20px;
  width: 0 auto;
`;

const P = styled.p`
  margin: 5px;
  font-size: 2rem;
  text-align: left;
`;
const H1 = styled.h1`
  margin: 20px;
  color: var(--color-grey-400);
`;

function Career() {
  return (
    <>
      <LinkButton to="/">&larr;Back</LinkButton>
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

        <H1>Add Certificate here</H1>
      </Container>
    </>
  );
}

export default Career;
