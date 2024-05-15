import styled from "styled-components";
import LinkButton from "./LinkButton";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
  padding: 50px;
  margin-left: 50px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 5px;
  }
`;

const Section = styled.div`
  margin-left: 50px;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    margin-top: 10px;
    text-align: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 390px;
  border-radius: 50%;
  width: 250px;

  @media only screen and (max-width: 600px) {
    height: 300px;
  }
`;

const H1 = styled.h1`
  color: var(--color-grey-700);
  text-align: center;
  margin-top: 10px;
  font-size: 35px;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const Span = styled.span`
  color: black;
  font-size: 15px;
`;

const H3 = styled.h3`
  color: black;
  margin-top: 80px;
  font-size: 27px;
`;

const P = styled.p`
  font-size: 18px;
  line-height: 25px;
  margin-top: 10px;
`;

const Img = styled.img`
  height: 50%;
  width: 50%;

  margin: 50px;

  @media only screen and (max-width: 600px) {
    height: 60%;
    width: 60%;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function Teams() {
  return (
    <>
      <LinkButton to="/">
        <Span>&larr;Back</Span>
      </LinkButton>

      <H1>Elecnovo Team</H1>
      <Container>
        <Image src="RatulPic.jpg" alt="photo" />
        <Section>
          <H3>Ratul Borah Founder and CEO</H3>
          <P>
            B.E., M. Engg. Entrepreneur and innovation expert 26 years of
            industrial & <br />
            business experience 20 years of motor design, development &
            manufacturing experience
          </P>
        </Section>
      </Container>

      <Box>
        <H1>We are a group of hardworking, passionate individuals!</H1>
        <Img src="grouppic.jpg" alt="picture" />
        <Img
          src="https://www.elecnovo.com/team/img/team/team2.jpg"
          alt="picture"
        />
      </Box>
    </>
  );
}

export default Teams;
