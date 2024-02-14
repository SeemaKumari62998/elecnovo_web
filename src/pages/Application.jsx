import styled from "styled-components";
import { motion } from "framer-motion";

const Cointainer = styled.div`
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
  /* align-items: center; */
  /* text-align: center; */
  margin-bottom: 50px;
  margin-top: auto;
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
  bottom: -200px;
  left: 35%;
  transform: translateX(-50%);
  color: var(--color-grey-200);
  /* background-color: rgba(0, 0, 0, 0.5); */
  padding: 150px 300px;
`;

const H2 = styled(motion.h2)`
  text-align: center;
  font-size: 3rem;
  position: absolute;
  top: 20px; /* Adjust this value to move it down from the top */
  left: 50%; /* Center horizontally */
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

function Application() {
  return (
    <>
      <Cointainer>
        {/* <Overlay /> */}
        <ImageContainer>
          <H2> ELECNOVO APPLICATIONS FOR BEST VEHICLE </H2>

          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.7 },
            }}
          >
            <Image src="bike.png" alt="Application" />
            <Span>Bike</Span>
          </ImageItem>

          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="scooter.png" alt="Application" />
            <Span>Scooter</Span>
          </ImageItem>

          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="tractor.png" alt="Application" />
            <Span>Tractor</Span>
          </ImageItem>

          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],

              transition: { duration: 0.5 },
            }}
          >
            <Image src="Golfkart.png" alt="Application" />
            <Span>Golfkart</Span>
          </ImageItem>

          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="boat.png" alt="Application" />
            <Span>Boat</Span>
          </ImageItem>

          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="car.png" alt="Application" />
            <Span>Car</Span>
          </ImageItem>

          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="loader.png" alt="Application" />
            <Span>Loader</Span>
          </ImageItem>
          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="cleaningMachine.png" alt="Application" />
            <Span>CleaningMachine</Span>
          </ImageItem>
        </ImageContainer>
      </Cointainer>
    </>
  );
}

export default Application;
