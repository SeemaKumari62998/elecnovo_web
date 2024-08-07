import styled from "styled-components";

const Container = styled.div`
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  color: grey;

  @media only screen and (max-width: 600px) {
    max-width: 80%;
  }
`;

const Paragraph = styled.p`
  font-size: 2.5rem;
  text-align: left;

  @media only screen and (max-width: 600px) {
    font-size: 1.6rem;
    padding: 5px;
  }
`;

function Text() {
  return (
    <Container>
      <Paragraph>
        Elecnovo is engaged in Design, Development, Manufacture and Supply of
        Intelligent, Efficient, Reliable and Robust electric motors for Electric
        Vehicles (EV) and other applications. Elecnovo also provides motor
        control and powertrain solutions.
      </Paragraph>
    </Container>
  );
}

export default Text;
