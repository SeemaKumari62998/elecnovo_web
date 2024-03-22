import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../../ui/Footer";
import motor from "../../public/motor.mp4";
import technology from "../../public/technology.mp4";
import { BsBoxArrowInUpRight } from "react-icons/bs";

import { Link } from "react-router-dom";
import Application from "./Application";
import PerformanceVideo from "../../ui/PerformanceVideo";
import TopHeader from "../../ui/TopHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100vw;
`;

const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  border: 1px solid grey;

  @media only screen and (max-width: 600px) {
    height: 31vh;
  }
`;

const Video = styled.video`
  width: 100%;
  max-height: 100vh;
  object-fit: cover;
  position: absolute;

  top: 0;
  left: 0;
`;

const Heading = styled(motion.h1)`
  position: relative;
  color: var(--color-grey-300);
  padding-left: 40px;
  margin-top: 42%;
  font-size: 2rem;
  z-index: 10;

  @media only screen and (max-width: 600px) {
    font-size: 10px;
    padding-left: 10px;
    margin-top: 180px;
  }
`;

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
  right: 1px;
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
  /* padding: 7px;
  margin: 15px;
  margin-right: 150px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

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
  margin: 10px;
  font-size: 15px;
`;

function Home() {
  return (
    <Container>
      <Section id="driving-green-mobility">
        <Video src={technology} autoPlay loop muted />
        <Heading>
          <h1>DRIVING GREEN MOBILITY</h1>
        </Heading>
      </Section>

      <Section id="elecnovo-technology">
        <Video src={motor} autoPlay loop muted />
        <Heading>
          <h1> ELECNOVO TECHNOLOGY</h1>
        </Heading>
        <Content>
          <Ul>
            <LiContainer>
              <Li>PMSM MOTORS</Li>
            </LiContainer>
            <LiContainer>
              <Li>BLDC MOTORS</Li>
            </LiContainer>

            <LiContainer>
              <Li>
                <Link to="/products">
                  Tell me More
                  <BsBoxArrowInUpRight />
                </Link>
              </Li>
            </LiContainer>
          </Ul>
        </Content>
      </Section>

      <Application />

      <Section>
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
      </Section>
      <Footer />
    </Container>
  );
}

export default Home;
