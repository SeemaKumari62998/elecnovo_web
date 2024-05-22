import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../../ui/Footer";
import Application from "./Application";
import Solutions from "./Solutions";
import Products from "./Products";
import SPM from "../../public/SPM.mp4";
import Achivements from "../../ui/Achivemets";
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

  @media only screen and (max-width: 600px) {
    height: 26vh;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;

  top: 0;
  left: 0;
  z-index: -1;
`;

const Video1 = styled.video`
  width: 80%;
  height: 80%;
  top: 0;
  left: 0;
  margin-left: 10%;
`;

const H1 = styled(motion.h1)`
  position: absolute;
  top: 85px;
  left: 5%;
  letter-spacing: 1px;
  font-weight: 500;
  color: var(--color-cream-100);
  font-size: 5rem;
  z-index: 10;
  text-align: center;

  @media only screen and (max-width: 600px) {
    /* margin-left: %; */
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
    margin: 7px;
    margin-bottom: 15px;

    flex-direction: column;
  }
`;

const Li = styled.h1`
  margin: 1px;
  font-size: 5rem;
  color: var(--color-grey-700);
  padding: 80px;
  margin-bottom: 80px;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
    margin: 1px;
    padding: 5px;
    margin-top: 40px;
  }
`;

const Img = styled.img`
  width: 500px;
  height: 280px;

  @media only screen and (max-width: 600px) {
    width: 80%; /* Adjust width for smaller screens */
    height: auto; /* Maintain aspect ratio */
    margin: 10px auto; /* Center horizontally and add margin */
    padding: 10px;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: 200px;
  height: 100vh;
  width: 100%;
  justify-content: space-around;
  grid-row-gap: 1px;
  grid-column-gap: 2px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-content: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
    margin: 10px auto; /* Center the grid container */
    padding: 10px; /* Add padding for spacing */
  }
`;

function Home() {
  return (
    <Container>
      <Section>
        <H1
          as={motion.h1}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          Electric Motor
        </H1>

        <Video src={SPM} autoPlay loop muted />

        <Content>
          <Ul>
            <Li
              as={motion.li}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              Patented Technology
            </Li>
          </Ul>
        </Content>
      </Section>

      <Div
        as={motion.div}
        initial={{ scale: 0.3, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.4,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        <Img src="A2.png" />
        <Img src="A6.png" />
        <Img src="A9.png" />
        <Img src="A10.png" />
      </Div>

      <Application />

      <Products />

      <Solutions />
      <Footer />
    </Container>
  );
}

export default Home;
