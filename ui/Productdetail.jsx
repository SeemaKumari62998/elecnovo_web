import LinkButton from "./LinkButton";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  color: var(--color-grey-800);
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  position: relative;

  @media only screen and (max-width: 600px) {
    height: 100vh;
    padding: 25px;
    padding-bottom: 50px;
  }
`;

const Span = styled.span`
  color: black;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const Img = styled.img`
  height: 200px;
  width: 250px;

  @media only screen and (max-width: 600px) {
    height: 100px;
    width: 125px;
  }
`;

const Ul = styled.ul`
  display: flex;
  font-size: 3.5rem;
  gap: 10px;

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
    flex-direction: column;
    gap: 10px;
  }
`;

const Li = styled.li`
  background-color: var(--color-grey-200);
  border-radius: 10px;
  margin: 30px;
  padding: 10px 30px;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    margin: 10px;
    padding: 10px 25px;
  }
`;

const Div = styled.div`
  margin-top: 60px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;

  @media only screen and (max-width: 600px) {
    margin-top: 5px;

    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 5px;
  }
`;

const Contact = styled.div`
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

function Productdetail() {
  return (
    <Container>
      <LinkButton to="/">
        <Span>&larr;Back</Span>
      </LinkButton>

      <Ul>
        <Li>
          Elecnovo has a competent engineering team to provide custom-engineered
          solutions for motor and controllers.
        </Li>

        <Li>
          Elecnovo solutions includes high efficiency, high reliability, high
          robustness, long life and more compactness.
        </Li>
        <Li>
          Elecnovo offers motors ranging from 1 kW to 20 kW with hall, encoder
          and sine-cosine sensor systems.
        </Li>
      </Ul>

      <Contact>
        <h2>Please contact us for more details: </h2>
        <h2> Email: reachus@elecnovo.com</h2>
        <h2>Phone: +91 89712 84680</h2>
      </Contact>
      <Div>
        <Img src="1KW SPM R1.jpg" alt="details" />
        <Img src="2KW SPM R1.jpg" alt="details" />
        <Img src="3KW SPM R1.jpg" alt="details" />
        <Img src="5KW SPM R1.jpg" alt="details" />
        <Img src="8KW SPM R1.jpg" alt="details" />
        <Img src="173 IPM R4.jpg" alt="details" />
      </Div>
    </Container>
  );
}

export default Productdetail;
