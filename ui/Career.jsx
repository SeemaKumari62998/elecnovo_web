import styled from "styled-components";
import LinkButton from "./LinkButton";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  background-color: var(--color-grey-200);

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  width: 40%;
  object-fit: cover;
  padding: 40px;
  margin: 20px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 20px;
    margin: 0;
  }
`;

const Span = styled.span`
  font-size: 15px;
  color: black;
`;

const StyledParagraph = styled.p`
  font-size: 23px;
  text-align: left;
  margin: 40px;
  margin-top: 200px;

  @media only screen and (max-width: 600px) {
    font-size: 1.4rem;
    margin: 20px;
    padding: 10px;
  }
`;

function Carrer() {
  return (
    <>
      {/* <LinkButton to="/">
        <Span>&larr;Back</Span>
      </LinkButton> */}
      <Container>
        <Img src="career10.jpg" alt="Career" />

        <StyledParagraph>
          Elecnovo offers excellent career opportunities for engineering,
          manufacturing, human resources, and business development. Please send
          your introduction and resume at reachus@elecnovo.com if you want to
          join the journey of Elecnovo.
        </StyledParagraph>
      </Container>
    </>
  );
}

export default Carrer;
