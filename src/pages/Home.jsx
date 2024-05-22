import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../../ui/Footer";
import Application from "./Application";
import Solutions from "./Solutions";
import Products from "./Products";
import SPM from "../../public/SPM.mp4";
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

function Home() {
  return (
    <Container>
      {/* <Section> */}
      {/* <H1>DRIVING GREEN MOBILITY</H1> */}
      {/* <Video src={technology} autoPlay loop muted /> */}
      {/* <Video src={SPM} autoPlay loop muted /> */}
      {/* <Video1 src={productVideo} autoPlay loop muted /> */}
      {/* </Section> */}

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

      <Application />

      <Products />

      <Solutions />
      <Footer />
    </Container>
  );
}

export default Home;
