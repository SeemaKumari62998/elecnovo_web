import styled from "styled-components";
import LinkButton from "./LinkButton";

const Container = styled.div`
  display: flex;
  flex-direction: row;

  color: black;
  padding: 100px;
  /* height: 100vh; */

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 5px;
  }
`;

const Section = styled.div`
  text-align: left;
  margin-top: 50px;
  margin-left: 10px;

  @media only screen and (max-width: 600px) {
    margin-top: 10px;
    text-align: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 400px;
  margin-top: 10px;
  border-radius: 50%;
  width: 250px;
`;

const H1 = styled.h1`
  color: black;
  text-align: center;
  margin-top: 20px;
  font-size: 25px;
`;

const Span = styled.span`
  font-size: 15px;
`;

const H3 = styled.h3`
  color: black;
  margin-top: 10px;
`;

const P = styled.p`
  font-size: 12px;
  margin-top: 10px;
`;

function Teams() {
  return (
    <>
      <LinkButton to="/">
        <Span>&larr;Back</Span>
      </LinkButton>

      <H1>Elecnovo Teams</H1>
      <Container>
        <Image src="RatulPic.jpg" alt="photo" />
        <Section>
          <H3>
            Ratul Borah <br /> Founder and CEO
          </H3>
          <P>
            B.E., M. Engg. Entrepreneur and innovation expert 26 years of
            industrial & business experience 20 years of motor design,
            development & manufacturing experience
          </P>
        </Section>

        {/* 
        <Image src="ratul.jpg" alt="photo" /> */}
        {/* <Section>
          <H3>
            Ratul Borah <br /> Founder and CEO
          </H3>
          <P>
            B.E., M. Engg. Entrepreneur and innovation expert 26 years of
            industrial & business experience 20 years of motor design,
            development & manufacturing experience
          </P>
        </Section> */}
      </Container>
      <div>
        <img src="grouppic.jpg" alt="" />
      </div>
    </>
  );
}

export default Teams;
