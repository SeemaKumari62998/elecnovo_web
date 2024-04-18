import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import AppPopupDetails from "../../ui/AppPopupDetails";

const Container = styled.div`
  position: relative;
  border: 1px solid grey;

  background-color: var(--color-grey-600);
`;

const ImageContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 70px;
  margin: 90px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 10px;
    mmargin-bottom: 50px;
  }
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
  margin-bottom: 70px;
  margin-top: auto;
  position: relative;

  &:hover {
    ${Image} {
      transform: scale(1.2);
      box-shadow: 0 0 8px rgb(0, 0, 0);
    }
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 40px;
  }
`;

const Span = styled.span`
  position: absolute;
  bottom: -220px;
  left: 38%;
  transform: translateX(-50%);
  color: var(--color-grey-300);
  white-space: nowrap;
  padding: 150px 300px;
  font-size: 1.8rem;

  @media only screen and (max-width: 600px) {
    text-align: center;
    margin-top: 40px;
    padding: 180px 400px;
  }
`;

const H2 = styled(motion.h2)`
  font-size: 2.8rem;
  position: absolute;
  top: 10px;
  left: 0;
  color: var(--color-grey-300);
  padding: 35px;
  margin: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    margin-top: 15px;
  }
`;

const PopupContainer = styled.div`
  position: absolute;
  top: ${({ position }) => position?.top}px;
  left: ${({ position }) => position?.left}px;
  transform: translate(-30%, -30%);
`;

function Application() {
  const [popDetail, setPopDetail] = useState(null);
  const [popupPosition, setPopupPosition] = useState(null);

  const togglePopup = (position) => {
    if (
      popDetail &&
      popupPosition &&
      position.top === popupPosition.top &&
      position.left === popupPosition.left
    ) {
      // Close the popup if it's already open and the same image is clicked
      setPopDetail(null);
      setPopupPosition(null);
    } else {
      setPopupPosition(position);
      setPopDetail(<AppPopupDetails />);
    }
  };

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
            onClick={(e) =>
              togglePopup({
                top: e.currentTarget.offsetTop,
                left: e.currentTarget.offsetLeft,
              })
            }
          >
            <Image src="bike.png" alt="Application" />
            <Span>Electric Motorcycle</Span>
          </ImageItem>

          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
            onClick={(e) =>
              togglePopup({
                top: e.currentTarget.offsetTop,
                left: e.currentTarget.offsetLeft,
              })
            }
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
            onClick={(e) =>
              togglePopup({
                top: e.currentTarget.offsetTop,
                left: e.currentTarget.offsetLeft,
              })
            }
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
            onClick={(e) =>
              togglePopup({
                top: e.currentTarget.offsetTop,
                left: e.currentTarget.offsetLeft,
              })
            }
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
            onClick={(e) =>
              togglePopup({
                top: e.currentTarget.offsetTop,
                left: e.currentTarget.offsetLeft,
              })
            }
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
            onClick={(e) =>
              togglePopup({
                top: e.currentTarget.offsetTop,
                left: e.currentTarget.offsetLeft,
              })
            }
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
            onClick={(e) =>
              togglePopup({
                top: e.currentTarget.offsetTop,
                left: e.currentTarget.offsetLeft,
              })
            }
          >
            <Image src="loader.png" alt="Application" />
            <Span>Electric Goods Vehicle</Span>
          </ImageItem>
          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
            onClick={(e) =>
              togglePopup({
                top: e.currentTarget.offsetTop,
                left: e.currentTarget.offsetLeft,
              })
            }
          >
            <Image src="cleaningMachine.png" alt="Application" />
            <Span>Electric Cleaning Vehicle</Span>
          </ImageItem>
        </ImageContainer>

        {popDetail && (
          <PopupContainer position={popupPosition}>{popDetail}</PopupContainer>
        )}
      </Container>
    </>
  );
}

export default Application;
