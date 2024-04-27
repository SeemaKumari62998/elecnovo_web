import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../../ui/Footer";
import motor from "../../public/motor.mp4";
import technology from "../../public/technology.mp4";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Application from "./Application";
import PerformanceVideo from "../../ui/PerformanceVideo";
import Solutions from "./Solutions";
import Products from "./Products";

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
  height: auto;
  overflow: hidden;
  border: 1px solid grey;

  @media only screen and (max-width: 600px) {
    height: 25vh;
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

const H1 = styled(motion.h1)`
  position: relative;
  color: var(--color-grey-300);
  padding-left: 40px;
  margin-top: 43%;
  font-size: 2.5rem;
  z-index: 10;
  bottom: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
    padding-left: 25px;
    margin-top: 180px;
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
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin: 20px;
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

function Home() {
  return (
    <Container>
      <Section>
        <Video src={technology} autoPlay loop muted />
        <H1>DRIVING GREEN MOBILITY</H1>
      </Section>

      <Section>
        <Video src={motor} autoPlay loop muted />

        <H1> ELECNOVO TECHNOLOGY</H1>

        <Content>
          <Ul>
            <LiContainer>
              <Li>PMSM MOTORS</Li>
            </LiContainer>
            <LiContainer>
              <Li>BLDC MOTORS</Li>
            </LiContainer>
            <LiContainer>
              <Li>AF MOTORS</Li>
            </LiContainer>
            <LiContainer>
              <Li> SRM MOTORS</Li>
            </LiContainer>
          </Ul>
        </Content>
      </Section>

      <Application />
      <Solutions />
      <Products />

      <Footer />
    </Container>
  );
}

export default Home;
