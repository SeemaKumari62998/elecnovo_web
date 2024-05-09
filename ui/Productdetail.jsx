import LinkButton from "./LinkButton";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  top: 20px;
  color: var(--color-grey-800);
  height: 100vh;
  margin: 10px 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  position: fixed;
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
`;

const Ul = styled.ul`
  display: flex;
  font-size: 3.5rem;
  gap: 10px;
`;

const Li = styled.li`
  background-color: var(--color-grey-100);
  border-radius: 10px;
  margin: 30px;
  padding: 10px 30px;
  justify-content: center;
`;

const Div = styled.div`
  margin-top: 60px;
  text-align: center;
`;

const Contact = styled.div`
  text-align: center;
`;

function Productdetail() {
  return (
    <Container>
      <LinkButton>
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
        <Img src="173 IPM.jpg" alt="details" />
      </Div>
    </Container>
  );
}

export default Productdetail;
