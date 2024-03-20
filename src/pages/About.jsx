import styled from "styled-components";
import Footer from "../../ui/Footer";
import { motion } from "framer-motion";
import ScrollingAnimation from "../../ui/ScrollingAnimation";
import LinkButton from "../../ui/LinkButton";
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
  text-align: left;
  max-width: 80%;
  margin: 4% auto;
  font-size: 2rem;
  color: var(--color-grey-200);
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Img = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
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
const H1 = styled.h1`
  color: var(--color-grey-200);
`;

function About() {
  return (
    <>
      <LinkButton to="/">&larr;Back</LinkButton>
      <Container
        as={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Img src="aboutpageimage.jpg" alt="About" />
        <Overlay />
      </Container>

      <Wrapper>
        <H1>ABOUT US</H1>
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

        <Footer />
      </Wrapper>
    </>
  );
}

export default About;

/*Design, Development, Manufacture and Supply 
of 
Electric Motors
for 
Electric Vehicles
*/
