import styled from "styled-components";
import { motion } from "framer-motion";

const ImageContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  transition: transform 0.3s;
`;
const ImageItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-bottom: 70px;
  margin-top: auto;

  &:hover {
    ${Image} {
      transform: scale(1.1);
      box-shadow: 0 0 8px rgb(255, 255, 255);
    }
  }
`;

const H1 = styled(motion.h1)`
  color: var(--color-grey-400);
  margin: 40px;
  box-shadow: 0 0 6px rgb(255, 255, 255);
`;

function Application() {
  return (
    <>
      <H1>Applications</H1>

      <ImageContainer>
        <ImageItem
          as={motion.li}
          whileHover={{
            scale: [1, 1.2, 1.1],
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        >
          <Image src="auto.png" alt="Application" />
        </ImageItem>

        <ImageItem
          as={motion.li}
          whileHover={{
            scale: [1, 1.2, 1.1],
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        >
          <Image src="bike.png" alt="Application" />
        </ImageItem>

        <ImageItem
          as={motion.li}
          whileHover={{
            scale: [1, 1.2, 1.1],
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        >
          <Image src="boat.png" alt="Application" />
        </ImageItem>

        <ImageItem
          as={motion.li}
          whileHover={{
            scale: [1, 1.2, 1.1],
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        >
          <Image src="car.png" alt="Application" />
        </ImageItem>

        <ImageItem
          as={motion.li}
          whileHover={{
            scale: [1, 1.2, 1.1],
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        >
          <Image src="scooter.png" alt="Application" />
        </ImageItem>

        <ImageItem
          as={motion.li}
          whileHover={{
            scale: [1, 1.2, 1.1],
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        >
          <Image src="loader.png" alt="Application" />
        </ImageItem>

        <ImageItem
          as={motion.li}
          whileHover={{
            scale: [1, 1.2, 1.1],
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        >
          <Image src="cleaningMachine.png" alt="Application" />
        </ImageItem>

        <ImageItem
          as={motion.li}
          whileHover={{
            scale: [1, 1.2, 1.1],
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        >
          <Image src="tractor.png" alt="Application" />
        </ImageItem>
      </ImageContainer>
    </>
  );
}

export default Application;
