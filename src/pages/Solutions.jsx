import styled from "styled-components";
import PerformanceVideo from "../../ui/PerformanceVideo";

const Section = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  border: 1px solid grey;

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

const Content = styled.div`
  position: absolute;
  top: 95%;
  /* right: 1px; */
  transform: translateY(-60%);
  /* text-align: center; */
  color: var(--color-grey-200);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    padding-bottom: 20px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    margin: 25px;
    margin-bottom: 35px;
  }
`;

const LiContainer = styled.div`
  width: auto;
  padding: 20px;
  border-radius: 8px;
  margin: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(60px);

  @media only screen and (max-width: 600px) {
    width: 100px;
    padding: 2px;
    margin: 1px;
  }
`;

const Li = styled.li`
  margin: 3px;
  font-size: 17px;

  @media only screen and (max-width: 600px) {
    font-size: 9px;
    margin: 7px;
  }
`;

function Solutions() {
  return (
    <>
      <Section>
        <H1>Elecnovo Solutions</H1>

        <PerformanceVideo />
        <Content>
          <Ul>
            <LiContainer>
              <Li> High Reliability</Li>
            </LiContainer>

            <LiContainer>
              <Li>Easy to assemble</Li>
            </LiContainer>
            <LiContainer>
              <Li>Cost effective</Li>
            </LiContainer>

            <LiContainer>
              <Li>Compact size</Li>
            </LiContainer>
            <LiContainer>
              <Li>Light weight</Li>
            </LiContainer>
            <LiContainer>
              <Li>Easy to control</Li>
            </LiContainer>
            <LiContainer>
              <Li>Technical support</Li>
            </LiContainer>
          </Ul>
        </Content>
      </Section>
    </>
  );
}

export default Solutions;
