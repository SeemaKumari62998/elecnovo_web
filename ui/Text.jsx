import styled from "styled-components";
import CrossBrowserTextComponent from "../src/TextFormatter";

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
    max-width: 90%;
  }
`;

const Paragraph = styled.p`
  font-size: 2.5rem;
  text-align: left;
  white-space: normal;
  overflow-wrap: break-word;

  @media only screen and (max-width: 600px) {
    font-size: 1.6rem;
    padding: 15px;
  }
`;

function Text() {
  return (
    <Container>
      <Paragraph>
        <CrossBrowserTextComponent
          text={`Elecnovo is engaged in Design, Development, Manufacture and Supply of
        Intelligent, Efficient, Reliable and Robust electric motors for Electric
        Vehicles (EV) and other applications. Elecnovo also provides motor
        control and powertrain solutions.`}
        />
      </Paragraph>
    </Container>
  );
}

export default Text;
