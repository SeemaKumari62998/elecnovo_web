import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../../ui/Footer";
import Application from "./Application";
import Solutions from "./Solutions";
import Products from "./Products";
import PMSManimationR1 from "../../public/PMSManimationR1.mp4";
import motorR2 from "../../public/motorR2.mp4";
import Text from "../../ui/Text";

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

// const Video = styled.video`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;

//   top: 0;
//   left: 0;
//   z-index: -1;
// `;
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  top: 0;
  left: 0;
  z-index: -1;
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
    font-size: 15px;
    font-weight: 400;
    top: 10%;
  }
`;

const Subheading = styled(motion.div)`
  position: absolute;
  top: 75%;
  left: 63%;
  transform: translateX(-50%);

  text-align: center;
  font-size: 5.5rem;
  font-weight: 400;
  white-space: nowrap;
  z-index: 10;

  @media only screen and (max-width: 600px) {
    top: 12%;

    left: 17%;
  }
`;

const TextContent = styled.p`
  margin: 0;
  padding: 20px;
  color: var(--color-grey-700);

  @media only screen and (max-width: 600px) {
    font-size: 15px;
    margin: 140px;

    padding: 2px;
    margin-top: 130px;
  }
`;

const Img = styled.img`
  /* width: 100%;
  height: 60%;
  margin: 90px;
  padding: 0; */

  width: 100%;
  height: auto;
  padding: 20px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    /* margin: 0; */
    padding: 10px;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* margin: 40px 0; */
  margin: 50px auto;
  gap: 30px;
  /* height: 100vh; */
  width: 90%;
  padding: 20px;
  justify-content: center;
  text-align: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 90%;
    margin: 10px auto;
    padding: 10px;
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

        <Subheading
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <TextContent>Patented Technology</TextContent>
        </Subheading>

        <Video src={PMSManimationR1} autoPlay loop muted />
      </Section>

      <Text />

      <Section>
        <Video src={motorR2} autoPlay loop muted />
        <Subheading
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <TextContent>Driving green mobility</TextContent>
        </Subheading>
      </Section>

      <Application />

      <Products />

      <Solutions />

      <Div>
        <Img src="certificate10.png" />
        <Img src="certificate9.png" />
        <Img src="certificate2.png" />
        <Img src="certificate6.png" />
      </Div>
      <Footer />
    </Container>
  );
}

export default Home;
