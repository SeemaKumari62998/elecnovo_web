import styled from "styled-components";
import Footer from "../../ui/Footer";
import { motion } from "framer-motion";
import CrossBrowserTextComponent from "../TextFormatter";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-300);

  @media (min-width: 768px) {
    padding: 5%;
  }
`;

const Paragraph = styled.p`
  text-align: left;
  max-width: 100%;
  margin: 2% auto;
  font-size: 1.8rem;
  color: balck;
  left: 5%;

  @media only screen and (max-width: 600px) {
    font-size: 1.4rem;
    padding: 15px;
    max-width: 92%;
    line-height: 1.4;
    top: 3%;
    /* text-align: justify; */
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Img = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;

  @media only screen and (max-width: 600px) {
    height: 20%;
  }
`;

const H1 = styled.h1`
  color: black;

  @media only screen and (max-width: 600px) {
    font-size: 25px;
    margin-top: 25px;
  }
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
        <Img src="about.jpg" alt="About" />
      </Container>

      <Wrapper>
        <H1>ABOUT US</H1>
        <Paragraph>
          <CrossBrowserTextComponent
            text={`Elecnovo is engaged in Design, Development, Manufacture and Supply of
          Intelligent, Efficient, Reliable and Robust electric motors for
          Electric Vehicles (EV) and other applications. Elecnovo also provides
          motor control and powertrain solutions. Based in Bengaluru, India,
          Elecnovo team consists of motor experts, electronics engineers,
          electrical engineers, mechanical designers and manufacturing experts.
          Elecnovo provides motor solutions in Brushless DC (BLDC) and Permanent
          Magnet Synchronous Motor (PMSM) technologies ranging from 1kW and
          20kW. Elecnovo applications include electric bicycles, electric
          scooters, electric motorcycles, electric three wheelers, electric
          boats, electric cleaning vehicles, electric light duty goods vehicles
          and electric light duty passenger vehicles. Elecnovo has patented
          inventions on motor control system for Electric Vehicles, learning
          based motor control system for Electric Vehicles and commutation
          system for BLDC motors, and patent-pending invention on an electronic
          commutation system for electric motor. Elecnovo is an initiative of R
          & D in India and Make in India.`}
          />
        </Paragraph>
      </Wrapper>
      <Footer />
    </>
  );
}

export default About;
