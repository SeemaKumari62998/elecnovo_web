import styled from "styled-components";
import { motion } from "framer-motion";

import { useState } from "react";

const Container = styled.div`
  position: relative;
`;

const ImageContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 70px;
  margin: 90px;
`;

const Image = styled.img`
  width: 70%;
  height: auto;
  transition: transform 0.4s;
`;

const ImageItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 50px;
  margin-top: 50px;
  position: relative;

  &:hover {
    ${Image} {
      transform: scale(1.2);
      box-shadow: 0 0 8px rgb(0, 0, 0);
    }
  }
`;

const Span = styled.span`
  position: absolute;
  bottom: -210px;
  left: 35%;
  transform: translateX(-50%);
  color: var(--color-grey-200);
  white-space: nowrap;
  font-size: 2rem;
  padding: 150px 300px;
`;

const H2 = styled(motion.h2)`
  text-align: center;
  font-size: 3rem;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-grey-200);
  padding: 10px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
`;

const PopupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Application() {
  const [popDetail, setPopDetail] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <Container>
        {/* <Overlay /> */}
        <ImageContainer>
          <H2> ELECNOVO APPLICATIONS</H2>

          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.7 },
            }}
          >
            <Image src="bike.png" alt="Application" onClick={""} />
            <Span>Electric Motorcycle</Span>
          </ImageItem>

          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="scooter.png" alt="Application" />
            <Span> Electric Scooter</Span>
          </ImageItem>

          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="tractor.png" alt="Application" />
            <Span>Electric Tractor</Span>
          </ImageItem>

          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],

              transition: { duration: 0.5 },
            }}
          >
            <Image src="Golfkart.png" alt="Application" />
            <Span>Electric Golfkart</Span>
          </ImageItem>

          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="boat.png" alt="Application" />
            <Span>Electric Boat</Span>
          </ImageItem>

          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="car.png" alt="Application" />
            <Span>Electric Car</Span>
          </ImageItem>

          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="loader.png" alt="Application" />
            <Span>Electric Goodsvehicle</Span>
          </ImageItem>
          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="cleaningMachine.png" alt="Application" />
            <Span>Electric Cleaningvehicle</Span>
          </ImageItem>
        </ImageContainer>
        {popDetail && (
          <PopupContainer
            style={{ top: popupPosition.y, left: popupPosition.x }}
          >
            {popDetail}
          </PopupContainer>
        )}
      </Container>
    </>
  );
}

export default Application;
