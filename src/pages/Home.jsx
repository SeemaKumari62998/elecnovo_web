import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../../ui/Footer";
import videobg from "../../public/videobg.mp4";
import productVideo from "../../public/productVideo.mp4";
import { BsBoxArrowInUpRight } from "react-icons/bs";

import { Link } from "react-router-dom";
import Application from "./Application";
import PerformanceVideo from "../../ui/PerformanceVideo";

const Cointainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  /* height: 100vh; */
`;

const H2 = styled(motion.h2)`
  text-align: center;
  font-size: 4vw;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  position: relative;
  margin-top: 5vw;
  color: var(--color-grey-100);
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid white;
`;

const Video = styled.video`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
`;

const StyledParagraph = styled.div`
  text-align: center;
  padding: 5vw;

  @media (min-width: 768px) {
    padding: 5vw;
  }
`;

const ParagraphItem = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-weight: 500px;
  color: var(--color-grey-200);
  align-items: center;
  margin-top: 100px;
`;

const StyledWe = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5vw;
  margin-top: 5vw;
  color: white;
  gap: 10vw;
`;

const SecondVideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding: 20px;
`;

const SecondVideo = styled.video`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const SecondOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
`;

const StyledContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 60%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  width: 100%;
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  /* justify-content: space-evenly; */
  column-gap: 0;
`;

const StyledLiContainer = styled.div`
  width: 15%;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin: 20px;
  backdrop-filter: blur(50px);
`;

const StyledLi = styled.li`
  margin: 10px;
  font-size: 20px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding: 2vw;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5));
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

function Home() {
  return (
    <>
      <Cointainer>
        <VideoContainer>
          <Video src={videobg} autoPlay loop muted />
          <Overlay />

          <H2
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
            Driving Green Mobility
          </H2>
        </VideoContainer>

        <SecondVideoContainer>
          <SecondVideo src={productVideo} autoPlay loop muted />
          <SecondOverlay />

          <H2>TECHNOLOGY</H2>
          <StyledContent>
            <StyledUl>
              <StyledLiContainer>
                <StyledLi>Performance</StyledLi>
              </StyledLiContainer>
              <StyledLiContainer>
                <StyledLi>Speed</StyledLi>
              </StyledLiContainer>

              <StyledLiContainer>
                <StyledLi>
                  Tell me more
                  <Link to="/products">
                    <BsBoxArrowInUpRight />
                  </Link>
                </StyledLi>
              </StyledLiContainer>
            </StyledUl>
          </StyledContent>
        </SecondVideoContainer>

        <Application />
      </Cointainer>

      <SecondVideoContainer>
        <H2>Elecnovo solutions...</H2>
        <PerformanceVideo />

        <StyledContent>
          <StyledUl>
            <StyledLiContainer>
              <StyledLi>Performance</StyledLi>
            </StyledLiContainer>
            <StyledLiContainer>
              <StyledLi>Speed</StyledLi>
            </StyledLiContainer>

            <StyledLiContainer>
              <StyledLi>
                Tell me more
                <Link to="/products">
                  <BsBoxArrowInUpRight />
                </Link>
              </StyledLi>
            </StyledLiContainer>
          </StyledUl>
        </StyledContent>
      </SecondVideoContainer>

      {/* <StyledParagraph>
        <H2>Elecnovo solutions...</H2>

        <ParagraphItem>
          <StyledLiContainer>
            <StyledLi>Performance</StyledLi>
          </StyledLiContainer>

          <StyledLiContainer>
            <StyledLi>Speed</StyledLi>
          </StyledLiContainer>

          <StyledLiContainer>
            <StyledLi>Tell Me More...</StyledLi>
          </StyledLiContainer>
        </ParagraphItem> */}

      {/* <StyledWe>
          <h1>We Design it!</h1>
          <h1>We Build it!</h1>
        </StyledWe>
      </StyledParagraph> */}

      <Footer />
    </>
  );
}

export default Home;

//  enlarge card poping up
// initial={{ y:100, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{
//           delay: 0.2,
//           y: { type: "spring", stiffness: 60 },
//           opacity: { duration: 0.2 },
//           ease: "easeIn",
//           duration: 1,
//         }}
