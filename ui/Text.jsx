import styled from "styled-components";
import bg from "../public/bg.jpg";

const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
`;

const Content = styled.div`
  padding: 30px;
  border-radius: 5px;
  max-width: 50%;
  margin-top: 200px;
  margin-left: 30px;
  border: 2px solid white;

  @media only screen and (max-width: 600px) {
    max-width: 80%;
    align-items: center;
    font-size: 10px;
    padding: 10px;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 2.5rem;

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
    padding: 2px;
  }
`;

function Text() {
  return (
    <Container>
      <Content>
        <Title>About us</Title>
        <Paragraph>
          Elecnovo is engaged in Design, Development, Manufacture and Supply of
          Intelligent, Efficient, Reliable and Robust electric motors for
          Electric Vehicles (EV) and other applications. Elecnovo also provides
          motor control and powertrain solutions.
        </Paragraph>
      </Content>
    </Container>
  );
}

export default Text;
