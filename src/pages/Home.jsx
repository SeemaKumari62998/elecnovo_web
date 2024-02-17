import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../../ui/Footer";
// import videobg from "../../public/videobg.mp4";
import motor from "../../public/motor.mp4";
import technology from "../../public/technology.mp4";
import { BsBoxArrowInUpRight } from "react-icons/bs";

import { Link } from "react-router-dom";
import Application from "./Application";
import PerformanceVideo from "../../ui/PerformanceVideo";
import productVideo from "../../public/productVideo.mp4";

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
`;

const Video = styled.video`
  width: 100%;
  max-height: 100vh;
  object-fit: cover;
  position: absolute;

  top: 0;
  left: 0;
`;

const Heading = styled(motion.div)`
  position: absolute;
  color: var(--color-grey-300);
  padding-left: 40px;
  top: 80%;
  left: 15%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;
const H1 = styled.h1`
  position: absolute;
  color: var(--color-grey-300);
  padding-left: 40px;
  top: 12%;
  left: 15%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const Content = styled.div`
  position: absolute;
  top: 90%;
  right: 1px;
  transform: translateY(-60%);
  text-align: center;
  color: var(--color-green-100);
  width: fit-content;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 7px;
  margin: 15px;
  margin-right: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LiContainer = styled.div`
  width: 180px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin: 20px;
  backdrop-filter: blur(60px);
  text-align: center;
`;

const Li = styled.li`
  margin: 20px;
  font-size: 15px;
`;

function Home() {
  return (
    <Container>
      <Section>
        <Video src={technology} autoPlay loop muted />
        <Heading>
          <h1>DRIVING GREEN MOBILITY</h1>
        </Heading>
      </Section>

      <Section>
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
                  Tell me more <BsBoxArrowInUpRight />
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
