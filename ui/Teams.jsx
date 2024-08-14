import styled from "styled-components";
import LinkButton from "./LinkButton";
import CrossBrowserTextComponent from "../src/TextFormatter";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
  padding: 50px;
  margin-left: 40px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 5px;
    margin-left: 0;
  }
`;

const Section = styled.div`
  margin-left: 50px;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    margin-top: 10px;
    text-align: center;
    margin-left: 10px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 50%;
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    height: 300px;
    width: auto;
  }
`;

const H1 = styled.h1`
  color: var(--color-grey-700);
  text-align: center;
  margin-top: 20px;

  font-size: 35px;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const Span = styled.span`
  color: black;
  margin: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

const P = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-top: 5px;
  color: var(--color-grey-800);
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  padding: 15px;

  @media only screen and (max-width: 600px) {
    font-size: 1.4rem;
    padding: 15px;
    max-width: 92%;
    line-height: 1.4;
    top: 3%;
    text-align: justify;
    margin-left: 10px;
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

const P1 = styled.p`
  font-size: 20px;
  margin-left: 13px;
`;
const P2 = styled.p`
  font-size: 23px;
  margin-left: 12px;
  font-weight: bold;
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
          <P2>Ratul Borah</P2>
          <P1>Founder & CEO</P1>
          <P>
            <CrossBrowserTextComponent
              text={` Ratul is an entrepreneur, engineer, business strategist and
            motivational speaker. He had managed global engineering, innovation,
            marketing and business with his 25 years plus multicultural and
            multinational experience in India, USA, Germany, Japan, China,
            France, Italy, Thailand, Hong Kong and Singapore.
           
            He had done his bachelor’s in Mechanical Engineering. He did his
            master’s in Industrial Engineering. He was awarded Gold Medal for
            securing the Highest Marks in General Mathematics in High School
            final examination. He was also awarded Gold Medal for securing First
            Class First position in Mechanical Engineering in his bachelor’s
            degree. He has been mentor to individuals, students, start-ups and
            organisations. He had delivered motivational workshops at various
            schools, colleges, universities and organisations in India & abroad.
            He had influenced thousands of individuals to do better in life.
           
            Ratul is engaged in social works including water preservation, tree
            plantations, neighborhoods cleaning and promoting green
            environments.
            `}
            />
          </P>
        </Section>
      </Container>

      <Box>
        <H1>We are a team of passionate and hardworking individuals!</H1>
        <Img src="Elecnovo_Team.JPG" alt="picture" />
        <Img src="grouppic.jpg" alt="picture" />
      </Box>
    </>
  );
}

export default Teams;
