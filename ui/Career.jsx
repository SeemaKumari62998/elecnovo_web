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

const Span = styled.span`
  font-size: 15px;
  color: black;
`;

const StyledParagraph = styled.h1`
  font-size: 18px;
  line-height: 1.6;
  color: var(--color-text); /* Adjust color as needed */
  margin: 20px;
`;

function Carrer() {
  return (
    <>
      {/* <LinkButton to="/">
        <Span>&larr;Back</Span>
      </LinkButton> */}
      <Container>
        <Img src="career10.jpg" alt="Career" />

        <div>
          <StyledParagraph>
            Elecnovo offers excellent carerr opportunity for Engineering
            manifacturing human resource and business development please send
            your interduction and resume to reach us on elecnovo.com if you want
            to join the journey of elecnovo
          </StyledParagraph>
        </div>
      </Container>
    </>
  );
}

export default Carrer;
