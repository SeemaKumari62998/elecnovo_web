import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-200);
  gap: 40px;
`;

const Section = styled.div`
  border: 1px solid white;
  width: 25%;
  padding: 10px;
  text-align: left;
`;

const Image = styled.img`
  border: 1px solid pink;
  margin: 30px;
  width: auto;
  max-height: 100%;
`;

function Teams() {
  return (
    <Container>
      <Image src="" alt="photo" />
      <Section>
        <h3>
          Ratul Borah <br /> Founder and CEO
        </h3>
        <p>
          B.E., M. Engg. Entrepreneur and innovation expert 26 years of
          industrial & business experience 20 years of motor design, development
          & manufacturing experience
        </p>
      </Section>

      <Image src="" alt="photo" />
      <Section>
        <p>Santanoo Medhi Co-Founder</p>
        <p>
          B.E., M. Engg. 9 years experience as CEO / MD 28 years of management &
          manufacturing 17 years of motor design, development & manufacturing
          experience
        </p>
      </Section>
    </Container>
  );
}

export default Teams;
