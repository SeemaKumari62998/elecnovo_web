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

const Heading = styled(motion.h2)`
  position: relative;
  color: var(--color-grey-600);
  padding-left: 40px;
  margin-top: 40px;
  font-size: 3rem;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LiContainer = styled.div`
  width: 160px;
  padding: 6px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 10px;
  backdrop-filter: blur(50px);
  text-align: center;
`;

const Li = styled.li`
  margin: 10px;
  font-size: 15px;
`;

function Home() {
  return (
    <Container>
      <Section>
        {/* <Video src={productVideo} autoPlay loop muted /> */}
        <Video src={technology} autoPlay loop muted />
        {/* <Overlay /> */}
        <Heading
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          DRIVING GREEN MOBILITY
        </Heading>
      </Section>

      <Section>
        {/* <Video src={technology} autoPlay loop muted /> */}
        <Video src={motor} autoPlay loop muted />
        {/* <Overlay /> */}
        <Heading>TECHNOLOGY</Heading>
        <Content>
          <Ul>
            <LiContainer>
              <Li>PMSM</Li>
            </LiContainer>
            <LiContainer>
              <Li>BLDC</Li>
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
        <Heading>ELECNOVO SOLUTIONS</Heading>
        {/* <Overlay /> */}
        <PerformanceVideo />
        <Content>
          <Ul>
            <LiContainer>
              <Li>HIGH RELIABILITY</Li>
            </LiContainer>
            <LiContainer>
              <Li>LOWER TOTAL COST</Li>
            </LiContainer>
            <LiContainer>
              <Li>HIGH POWER DENSITY</Li>
            </LiContainer>
          </Ul>
        </Content>
      </Section>
      <Footer />
    </Container>
  );
}

export default Home;
