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
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 200px;
  margin-top: 100px;
  margin-left: 50px;
`;

const H1 = styled.h1`
  color: white;
  text-align: center;
  margin-top: 20px;
  font-size: 40px;
`;
function Teams() {
  return (
    <>
      <LinkButton to="/">&larr;Back</LinkButton>
      <H1>Elecnovo Teams</H1>
      <Container>
        <Image src="elecnovoLogo.png" alt="photo" />
        <Section>
          <h3>
            Ratul Borah <br /> Founder and CEO
          </h3>
          <p>
            B.E., M. Engg. Entrepreneur and innovation expert 26 years of
            industrial & business experience 20 years of motor design,
            development & manufacturing experience
          </p>
        </Section>

        <Image src="elecnovoLogo.png" alt="photo" />
        <Section>
          <p>Santanoo Medhi Co-Founder</p>
          <p>
            B.E., M. Engg. 9 years experience as CEO / MD 28 years of management
            & manufacturing 17 years of motor design, development &
            manufacturing experience
          </p>
        </Section>
      </Container>
    </>
  );
}

export default Teams;
