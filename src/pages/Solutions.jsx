import styled from "styled-components";
import PerformanceVideo from "../../ui/PerformanceVideo";

const Section = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    height: 30vh;
  }
`;
const H1 = styled.h1`
  position: relative;
  color: var(--color-grey-300);
  padding-left: 40px;
  font-weight: 500;
  margin-top: 2%;
  font-size: 4rem;
  z-index: 10;

  @media only screen and (max-width: 600px) {
    font-size: 17px;
    padding-left: 25px;
    margin-top: 25px;
    text-align: center;
  }
`;
const H2 = styled.h2`
  position: relative;
  padding-left: 75%;
  font-size: 3rem;
  font-weight: 500;
  color: var(--color-cream-100);

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    padding-left: 70%;
    margin-top: 8px;
  }
`;
const H3 = styled.h3`
  position: relative;
  padding-left: 80%;
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--color-cream-100);
  margin-top: 200px;

  @media only screen and (max-width: 600px) {
    font-size: 1.1rem;
    margin-top: 25px;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 95%;
  transform: translateY(-60%);
  color: var(--color-green-100);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    padding-bottom: 20px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    margin: 0;
    padding: 0;
  }
`;

const LiContainer = styled.div`
  width: auto;
  padding: 20px;
  border-radius: 8px;
  margin: 10px;

  @media only screen and (max-width: 600px) {
    width: 95px;
    padding: 2px;
    margin: 0px;
  }
`;

const Li = styled.li`
  margin: 3px;
  font-size: 17px;

  @media only screen and (max-width: 600px) {
    font-size: 9px;
    margin: 2px;
  }
`;

function Solutions() {
  return (
    <>
      <Section>
        <H1>Elecnovo Solutions</H1>

        <PerformanceVideo />
        <H2>Motor control system</H2>
        <H2>AI based</H2>
        <H3>Powertrain</H3>
        <Content>
          <Ul>
            <LiContainer>
              <Li> High Reliability</Li>
            </LiContainer>
            <LiContainer>
              <Li>Light weight</Li>
            </LiContainer>

            <LiContainer>
              <Li>Cost effective</Li>
            </LiContainer>

            <LiContainer>
              <Li>Compact size</Li>
            </LiContainer>
            <LiContainer>
              <Li>Easy to assemble</Li>
            </LiContainer>

            <LiContainer>
              <Li>Custom-engineering</Li>
            </LiContainer>
            <LiContainer>
              <Li>Technical support</Li>
            </LiContainer>

            <LiContainer>
              <Li>Easy to control</Li>
            </LiContainer>
          </Ul>
        </Content>
      </Section>
    </>
  );
}

export default Solutions;
