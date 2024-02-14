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
  border: 1px solid grey;
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
  position: relative;
  color: var(--color-grey-300);
  padding-left: 40px;
  margin-top: 300px;
  font-size: 1.5rem;
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
          <h2>WITH HIGH SPEED </h2>
        </Heading>
      </Section>

      <Section>
        <Video src={motor} autoPlay loop muted />
        <Heading>
          <h1> ELECNOVO TECHNOLOGY</h1>
          <h2>BEST ELECTRIC MOTORS USAGE</h2>
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
        <Heading>
          <h1>ELECNOVO SOLUTIONS..</h1>
          <h2>PROVIDED WITH 100% SECURITY</h2>
        </Heading>

        <PerformanceVideo />
        <Content>
          <Ul>
            <LiContainer>
              <Li>HIGH RELIABILITY</Li>
            </LiContainer>

            <LiContainer>
              <Li>EFFICIENT OPERATION</Li>
            </LiContainer>
            <LiContainer>
              <Li>LOWER TOTAL COST</Li>
            </LiContainer>

            <LiContainer>
              <Li>HIGH POWER DENSITY</Li>
            </LiContainer>
            <LiContainer>
              <Li>INDEGENIOUSLY DEVELOPED</Li>
            </LiContainer>
            <LiContainer>
              <Li>BETTER USER EXPERIENCE</Li>
            </LiContainer>
          </Ul>
        </Content>
      </Section>
      <Footer />
    </Container>
  );
}

export default Home;
