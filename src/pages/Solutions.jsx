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
  top: 90%;
  right: 1px;
  transform: translateY(-60%);
  text-align: center;
  color: var(--color-grey-100);
  width: fit-content;

  @media only screen and (max-width: 600px) {
    padding-bottom: 20px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    margin: 25px;
    margin-bottom: 35px;
  }
`;

const LiContainer = styled.div`
  width: 180px;
  padding: 9px;
  border-radius: 10px;
  margin: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(60px);
  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 100px;
    padding: 2px;
    margin: 1px;
  }
`;

const Li = styled.li`
  margin: 3px;
  font-size: 15px;

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
              <Li>HIGH RELIABILITY</Li>
            </LiContainer>

            <LiContainer>
              <Li>EASY TO ASSEMBLE</Li>
            </LiContainer>
            <LiContainer>
              <Li>COST EFFECTIVE</Li>
            </LiContainer>

            <LiContainer>
              <Li>COMPACT SIZE</Li>
            </LiContainer>
            <LiContainer>
              <Li>LIGHT WEIGHT</Li>
            </LiContainer>
            <LiContainer>
              <Li>EASY TO CONTROL</Li>
            </LiContainer>
            <LiContainer>
              <Li>TECHNICALSUPPORT</Li>
            </LiContainer>
          </Ul>
        </Content>
      </Section>
    </>
  );
}

export default Solutions;
