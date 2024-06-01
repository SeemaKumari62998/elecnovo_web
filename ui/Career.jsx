import styled from "styled-components";
import { motion } from "framer-motion";

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
  text-align: left;
  margin: 20px 0;

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
    margin: 20px 0;
    padding: 5px 10px;
    line-height: 25px;
  }
`;

const FancyH1 = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 500;
  color: var(--color-grey-700);
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
    /* margin: 10px; */
  }
`;

function Career() {
  return (
    <>
      <Container>
        <Img src="career.jpg" alt="Career" />
        <StyledParagraph>
          Elecnovo offers excellent career opportunities for engineering,
          manufacturing, human resources and business development. Please send
          your introduction and resume at reachus@elecnovo.com if you want to
          join the journey of Elecnovo.
        </StyledParagraph>
        <FancyH1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Elecnoco offers best carrer opportunity
        </FancyH1>
      </Container>
    </>
  );
}

export default Career;
