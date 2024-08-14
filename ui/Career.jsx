import styled from "styled-components";
import { motion } from "framer-motion";
import CrossBrowserTextComponent from "../src/TextFormatter";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-200);
  min-height: 85vh;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    min-height: 85vh;
  }
`;

const Img = styled.img`
  width: 40%;
  height: auto;
  object-fit: cover;
  margin-top: 1px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;

const StyledParagraph = styled.p`
  font-size: 23px;
  text-align: center;
  margin: 20px 0;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    font-size: 1.4rem;
    padding: 15px;
    max-width: 92%;
    line-height: 1.4;
    top: 3%;
    text-align: justify;
  }
`;

function Career() {
  return (
    <>
      <Container>
        <Img src="career.jpg" alt="Career" />
        <StyledParagraph>
          <CrossBrowserTextComponent
            text={` Elecnovo offers excellent career opportunities for engineering,
          manufacturing, human resources and business development. Please send
          your introduction and resume at reachus@elecnovo.com if you want to
          join the journey of Elecnovo.`}
          />
        </StyledParagraph>
      </Container>
    </>
  );
}

export default Career;
