import styled from "styled-components";
import LinkButton from "./LinkButton";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--color-grey-200);
  gap: 40px;
  height: 100vh;
`;

const Section = styled.div`
  width: calc(30% - 40px);
  padding: 20px;
  text-align: left;
  margin-top: 100px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 200px;
  margin-top: 100px;
  margin-left: 50px;
  border-radius: 50%;

  @media only screen and (max-width: 600px) {
    margin-top: 50px;
    margin-left: 50px;
  }
`;

const H1 = styled.h1`
  color: white;
  text-align: center;
  margin-top: 20px;
  font-size: 40px;

  @media only screen and (max-width: 600px) {
    font-size: 25px;
    text-align: left;
    margin-left: 90px;
  }
`;

const Span = styled.span`
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const H3 = styled.h3`
  color: var(--color-grey-200);

  @media only screen and (max-width: 600px) {
    margin-right: 20px;
  }
`;

const P = styled.p`
  font-size: 12px;
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
          <H3>Santanoo Medhi Co-Founder</H3>
          <P>
            B.E., M. Engg. 9 years experience as CEO / MD 28 years of management
            & manufacturing 17 years of motor design, development &
            manufacturing experience
          </P>
        </Section>
      </Container>
    </>
  );
}

export default Teams;
