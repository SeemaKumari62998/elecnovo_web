import styled from "styled-components";
import LinkButton from "./LinkButton";

const Container = styled.div`
  display: flex;
  flex-direction: row;

  color: var(--color-grey-200);
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
  max-height: 200px;
  margin-top: 20px;
  border-radius: 50%;
`;

const H1 = styled.h1`
  color: white;
  text-align: center;
  margin-top: 20px;
  font-size: 25px;
`;

const Span = styled.span`
  font-size: 15px;
`;

const H3 = styled.h3`
  color: var(--color-grey-200);
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
        <Image src="ratul.jpg" alt="photo" />
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

        <Image src="ratul.jpg" alt="photo" />
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
      </Container>
    </>
  );
}

export default Teams;
