import styled from "styled-components";
import PerformanceVideo from "../../ui/PerformanceVideo";

const H1 = styled.h1`
  position: absolute;
  color: var(--color-grey-300);
  padding-left: 40px;
  top: 12%;
  left: 15%;
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 3rem;

  @media only screen and (max-width: 600px) {
    padding-bottom: 50px;
    font-size: 18px;
    left: 25%;
    top: 15%;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 90%;
  /* right: 1px; */
  transform: translateY(-60%);
  text-align: center;
  color: var(--color-green-100);
  width: fit-content;

  @media only screen and (max-width: 600px) {
    padding-bottom: 50px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  padding: 7px;
  margin: 15px;
  margin-right: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    margin-right: 0px;
  }
`;

const LiContainer = styled.div`
  width: 180px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin: 20px;
  backdrop-filter: blur(60px);
  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 100px;
    padding: 5px;
    margin: 5px;
  }
`;

const Li = styled.li`
  margin: 20px;
  font-size: 15px;
`;

function Solutions() {
  return (
    <>
      <H1>ELECNOVO SOLUTIONS..</H1>

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
        </Ul>
      </Content>
    </>
  );
}

export default Solutions;
