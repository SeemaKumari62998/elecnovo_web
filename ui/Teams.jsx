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
    padding: 10px;
    margin-left: 0;
  }
`;

const Section = styled.div`
  margin-left: 50px;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    margin-top: 10px;
    /* text-align: center; */
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
  margin-top: 50px;
  font-size: 27px;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
    text-align: left;
  }
`;

const P = styled.p`
  font-size: 18px;
  line-height: 30px;
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 13px;
    text-align: left;
  }
`;

const Img = styled.img`
  height: 50%;
  width: 50%;
  margin: 50px;

  @media only screen and (max-width: 600px) {
    height: 7%;
    width: 80%;
    align-items: center;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledBr = styled.div`
  margin-bottom: ${(props) => props.marginBottom || "20px"};
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
            Ratul is an entrepreneur, engineer business strategist and
            motivational speaker. He had managed global engineering, innovation,
            marketing and business with his 25 years plus multicultural and
            multinational experience in India, USA, Germany, Japan, China,
            France, Italy, Thailand, Hong Kong and Singapore.
            <StyledBr marginBottom="30px" />
            He had done his bachelor’s in Mechanical Engineering. He did his
            master’s in Industrial Engineering. He was awarded Gold Medal for
            securing the Highest Marks in General Mathematics in High School
            final examination. He was also awarded Gold Medal for securing First
            Class First position in Mechanical Engineering in his bachelor’s
            degree. He has been mentor to individuals, students, start-ups and
            organisations. He had delivered motivational workshops at various
            schools, colleges, universities and organisations in India & abroad.
            He had influenced thousands of individuals to do better in life.
            <StyledBr marginBottom="30px" />
            Ratul is engaged in social works including water preservation, tree
            plantations and neighborhoods cleaning and promoting green
            environments.
            <StyledBr marginBottom="30px" />
            Please do feel free to contact me via email:
            ratul.borah@elecnovo.com
          </P>
        </Section>
      </Container>

      <Box>
        <H1>We are a group of hardworking, passionate individuals!</H1>
        <Img src="grouppic.jpg" alt="picture" />
        <Img src="Elecnovo_Team.JPG" alt="picture" />
      </Box>
    </>
  );
}

export default Teams;
