import styled from "styled-components";
import LinkButton from "./LinkButton";

const Container = styled.div`
  display: flex;
  margin: 20px;
  justify-content: center;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 20px;
  gap: 100px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`;

const Span = styled.span`
  color: black;
  margin: 20px;
  @media only screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

const Img = styled.img`
  width: 600px;
  height: 400px;

  @media only screen and (max-width: 600px) {
    height: 350px;
  }
`;

const H1 = styled.h1`
  color: black;
  text-align: center;
  margin-top: 20px;
  font-size: 35px;
  font-weight: bold;
  font-family: Georgia, "Times New Roman", Times, serif;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

function Career() {
  return (
    <>
      <LinkButton to="/">
        <Span>&larr;Back</Span>
      </LinkButton>

      <H1>Certificates & Achivements</H1>
      <Container>
        <Div>
          <Img src="Admirable_Logo.pdf" alt="certificate" />
        </Div>
      </Container>
    </>
  );
}

export default Career;
