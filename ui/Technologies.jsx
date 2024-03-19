import styled from "styled-components";
import motor from "../public/motor.mp4";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Content = styled.div`
  position: absolute;
  top: 90%;
  right: 1px;
  transform: translateY(-60%);
  text-align: center;
  color: var(--color-green-100);
  width: fit-content;
`;

const Video = styled.video`
  width: 100%;
  max-height: 100vh;
  object-fit: cover;
  position: absolute;

  top: 0;
  left: 0;
`;

const LiContainer = styled.div`
  width: 180px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin: 20px;
  backdrop-filter: blur(60px);
  text-align: center;
`;

const Li = styled.li`
  margin: 20px;
  font-size: 15px;
`;

const Heading = styled(motion.div)`
  position: absolute;
  color: var(--color-grey-300);
  padding-left: 40px;
  top: 80%;
  left: 15%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;
const Ul = styled.ul`
  list-style: none;
  padding: 7px;
  margin: 15px;
  margin-right: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function Technologies() {
  return (
    <>
      <Video src={motor} autoPlay loop muted />
      <Heading>
        <h1> ELECNOVO TECHNOLOGY</h1>
      </Heading>
      <Content>
        <Ul>
          <LiContainer>
            <Li>PMSM MOTORS</Li>
          </LiContainer>
          <LiContainer>
            <Li>BLDC MOTORS</Li>
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
    </>
  );
}

export default Technologies;
