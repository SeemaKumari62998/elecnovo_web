import styled from "styled-components";
import Footer from "../../ui/Footer";
import { motion } from "framer-motion";
import ScrollingAnimation from "../../ui/ScrollingAnimation";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2%;
  /* height: 100vh;
  margin-top: 210px; */

  @media (min-width: 768px) {
    padding: 5%;
  }
`;

const Paragrapg = styled.p`
  text-align: center;
  max-width: 800px;
  margin-bottom: 5%;
  font-weight: bold;
  font-size: 1.2em;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Img = styled.img`
  max-height: 70vh;
  width: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  z-index: 1;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 40px;
`;

function About() {
  return (
    <>
      <Container
        as={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Img src="Elecnovo SIGN board.png" alt="About" />
        <Overlay />
      </Container>

      <Wrapper>
        <SectionContainer>
          <h2>Mission</h2>
          <p>Design, Development and Supply</p>
        </SectionContainer>

        <SectionContainer>
          <h2>Vision</h2>
          <p> Elecnovo provides motor solutions ranging from 1kW and 20kW</p>
        </SectionContainer>

        <h1>ABOUT US</h1>
        <Paragrapg>
          ELECNOVO is engaged in Design, Development and Supply of Intelligent,
          Efficient and Reliable electric motors and controllers for electric
          vehicles (EV). Based in Bangalore, India, elecnovo team consists of
          motor experts, electronics engineers, electrical engineers, mechanical
          designers and manufacturing experts. Elecnovo provides motor solutions
          ranging from 1kW and 20kW. Elecnovo applications include electric
          bicycles, electric scooters, electric motorcycles, electric three
          wheelers, electic boats, electric cleaning vehicles, electric light
          duty goods vehicles and electric light duty passenger vehicles.
          Elecnovo is an iniative of R & D in India and Make in India.
        </Paragrapg>

        <div>
          <ul>
            <h3>Our History</h3>
            <li>Established</li>
            <li>Strategic investment</li>
            <li>Acquired</li>
          </ul>
        </div>

        <Footer />

        <p>Copyrights </p>
      </Wrapper>
    </>
  );
}

export default About;
