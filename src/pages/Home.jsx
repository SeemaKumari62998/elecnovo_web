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
import HomeApp from "../../ui/HomeApp";

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
    height: 26vh;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* position: absolute; */
  top: 0;
  left: 0;
  z-index: -1;
`;

const H1 = styled(motion.h1)`
  position: absolute;
  top: 85px;
  left: 20%;
  transform: translateX(-50%);
  color: white;

  font-size: 3.5rem;
  z-index: 10;
  width: 100%;
  text-align: center;

  @media only screen and (max-width: 600px) {
    margin-left: 12%;
    font-size: 15px;
    font-weight: 400;
    top: 10%;
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
        {/* <H1>DRIVING GREEN MOBILITY</H1> */}
        <Video src={technology} autoPlay loop muted />
      </Section>

      <Section>
        <H1> ELECNOVO TECHNOLOGY</H1>
        <Video src={motor} autoPlay loop muted />

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
      {/* <HomeApp /> */}
      <Products />

      <Solutions />
      <Footer />
    </Container>
  );
}

export default Home;
