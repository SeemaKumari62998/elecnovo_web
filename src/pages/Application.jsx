import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Container = styled.div`
  position: relative;
  background-color: var(--color-grey-200);
  padding: 20px;
`;

const ImageContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: auto; */
  /* gap: 15px; */
  grid-gap: 20px;
  grid-row-gap: 40px;
  padding: 20px;
  margin-top: 130px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 10px;
    margin-bottom: 30px;
    margin-top: 70px;
  }
`;

const Image = styled.img`
  width: 65%;
  height: 72%;
  transition: transform 0.4s;
`;

const ImageItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  &:hover {
    ${Image} {
      transform: scale(1.05);
    }
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
    margin-top: 10px;
    align-content: center;
  }
`;

const H2 = styled(motion.h2)`
  font-size: 3.6rem;
  font-weight: 500;
  position: absolute;
  top: 20px;
  left: 38%;
  color: var(--color-grey-600);
  padding: 10px 0;

  @media only screen and (max-width: 600px) {
    margin-top: 5px;
    left: 25%;
    font-size: 17px;
    justify-content: center;
  }
`;
const H3 = styled.h3`
  font-size: 3rem;
  font-weight: 500;
  position: absolute;
  left: 38%;
  top: 8%;
  color: var(--color-grey-600);

  @media only screen and (max-width: 600px) {
    top: 6rem;
    left: 23%;
    font-size: 15px;
    justify-content: center;
  }
`;

const Paragraph = styled.p`
  overflow: hidden;
  color: black;

  padding: ${(props) => (props.showFullText ? "20px 45px" : "15px 35px")};
  text-align: left;

  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.showFullText ? "unset" : "5")};
  -webkit-box-orient: vertical;
  background-color: var(--color-grey-200);
  box-shadow: 0 0 10px rgb(0, 0, 0);
  border-radius: 5px;
  margin-top: ${(props) => (props.showFullText ? "25px" : "20px")};
  margin-bottom: ${(props) => (props.showFullText ? "30px" : "20px")};

  @media only screen and (max-width: 600px) {
    padding: ${(props) => (props.showFullText ? "20px 10px" : "15px 5px")};
    width: 250px;
    font-size: 1rem;
    text-align: center;
    margin-top: ${(props) => (props.showFullText ? "25px" : "20px")};
    margin-bottom: ${(props) => (props.showFullText ? "30px" : "20px")};
    white-space: normal;
  }
`;

const ShowMoreLink = styled.span`
  color: blue;
  cursor: pointer;
`;

const ContactLink = styled.a`
  color: blue;
  cursor: pointer;
  text-decoration: none;
  margin-left: 5px;
`;

function Application() {
  const [showFullText, setShowFullText] = useState({});

  const handleShowMore = (itemName) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [itemName]: !prevState[itemName],
    }));
  };

  return (
    <>
      <Container>
        <ImageContainer>
          <H2> Elecnovo Application</H2>
          <H3>Electric Vehicle and more</H3>

          <ImageItem
            as={motion.li}
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Image src="bike.png" alt="Application" />

            <Paragraph>
              {showFullText["Electric Motorcycle"] ? (
                <>
                  <h3>Electric Motorcycle : </h3>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Motorcycle
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Electric Motorcycle "
              )}
              {!showFullText["Electric Motorcycle"] && (
                <ShowMoreLink
                  onClick={() => handleShowMore("Electric Motorcycle")}
                >
                  ...more
                </ShowMoreLink>
              )}
              {showFullText["Electric Motorcycle"] && (
                <ShowMoreLink
                  onClick={() => handleShowMore("Electric Motorcycle")}
                >
                  ...less
                </ShowMoreLink>
              )}
            </Paragraph>
          </ImageItem>

          <ImageItem
            as={motion.li}
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Image src="scooter.png" alt="Application" />

            <Paragraph>
              {showFullText["Electric Scooter"] ? (
                <>
                  <h3> Electric Scooter : </h3>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Scooter
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Electric Scooter"
              )}
              {!showFullText["Electric Scooter"] && (
                <ShowMoreLink
                  onClick={() => handleShowMore("Electric Scooter")}
                >
                  ...more
                </ShowMoreLink>
              )}
              {showFullText["Electric Scooter"] && (
                <ShowMoreLink
                  onClick={() => handleShowMore("Electric Scooter")}
                >
                  ...less
                </ShowMoreLink>
              )}
            </Paragraph>
          </ImageItem>

          <ImageItem
            as={motion.li}
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Image src="Four Wheel Loader.png" alt="Application" />

            <Paragraph>
              {showFullText["Electric Truck"] ? (
                <>
                  <h3>Electric Truck : </h3>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Four Wheeler Loader{" "}
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Electric Truck"
              )}
              {!showFullText["Electric Truck"] && (
                <ShowMoreLink onClick={() => handleShowMore("Electric Truck")}>
                  ...more
                </ShowMoreLink>
              )}
              {showFullText["Electric Truck"] && (
                <ShowMoreLink onClick={() => handleShowMore("Electric Truck")}>
                  ...less
                </ShowMoreLink>
              )}
            </Paragraph>
          </ImageItem>

          <ImageItem
            as={motion.li}
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Image src="car.png" alt="Application" />

            <Paragraph>
              {showFullText["Electric Car"] ? (
                <>
                  <h3>Electric Car : </h3>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Car <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Electric Car"
              )}
              {!showFullText["Electric Car"] && (
                <ShowMoreLink onClick={() => handleShowMore("Electric Car")}>
                  ...more
                </ShowMoreLink>
              )}
              {showFullText["Electric Car"] && (
                <ShowMoreLink onClick={() => handleShowMore("Electric Car")}>
                  ...less
                </ShowMoreLink>
              )}
            </Paragraph>
          </ImageItem>

          <ImageItem
            as={motion.li}
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Image src="tractor.png" alt="Application" />

            <Paragraph>
              {showFullText["Electric Tractor"] ? (
                <>
                  <h3>Electric Tractor : </h3>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Tractor{" "}
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Electric Tractor"
              )}
              {!showFullText["Electric Tractor"] && (
                <ShowMoreLink
                  onClick={() => handleShowMore("Electric Tractor")}
                >
                  ...more
                </ShowMoreLink>
              )}
              {showFullText["Electric Tractor"] && (
                <ShowMoreLink
                  onClick={() => handleShowMore("Electric Tractor")}
                >
                  ...less
                </ShowMoreLink>
              )}
            </Paragraph>
          </ImageItem>

          <ImageItem
            as={motion.li}
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Image src="Golfkart.png" alt="Application" />

            <Paragraph>
              {showFullText["Electric Golfkart"] ? (
                <>
                  <h3>Electric Golfkart : </h3>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Golfkart{" "}
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Electric Golfkart"
              )}
              {!showFullText["Electric Golfkart"] && (
                <ShowMoreLink
                  onClick={() => handleShowMore("Electric Golfkart")}
                >
                  ...more
                </ShowMoreLink>
              )}
              {showFullText["Electric Golfkart"] && (
                <ShowMoreLink
                  onClick={() => handleShowMore("Electric Golfkart")}
                >
                  ...less
                </ShowMoreLink>
              )}
            </Paragraph>
          </ImageItem>

          <ImageItem
            as={motion.li}
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Image src="Buggy.png" alt="Application" />
            <Paragraph>
              {showFullText["Electric Buggy"] ? (
                <>
                  <h3>Electric Buggy : </h3>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Buggy{" "}
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Electric Buggy"
              )}
              {!showFullText["Electric Buggy"] && (
                <ShowMoreLink onClick={() => handleShowMore("Electric Buggy")}>
                  ...more
                </ShowMoreLink>
              )}
              {showFullText["Electric Buggy"] && (
                <ShowMoreLink onClick={() => handleShowMore("Electric Buggy")}>
                  ...less
                </ShowMoreLink>
              )}
            </Paragraph>
          </ImageItem>

          <ImageItem
            as={motion.li}
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Image src="boat.png" alt="Application" />

            <Paragraph>
              {showFullText["Electric Boat"] ? (
                <>
                  <h3>Electric Boat : </h3>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Boat <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Electric Boat"
              )}
              {!showFullText["Electric Boat"] && (
                <ShowMoreLink onClick={() => handleShowMore("Electric Boat")}>
                  ...more
                </ShowMoreLink>
              )}
              {showFullText["Electric Boat"] && (
                <ShowMoreLink onClick={() => handleShowMore("Electric Boat")}>
                  ...less
                </ShowMoreLink>
              )}
            </Paragraph>
          </ImageItem>

          <ImageItem
            as={motion.li}
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Image src="loader.png" alt="Application" />

            <Paragraph>
              {showFullText["Electric Goods Vehicle"] ? (
                <>
                  <h3>Electric Goods Vehicle : </h3>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Goods Vehicle{" "}
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Electric Goods Vehicle"
              )}
              {!showFullText["Electric Goods Vehicle"] && (
                <ShowMoreLink
                  onClick={() => handleShowMore("Electric Goods Vehicle")}
                >
                  ...more
                </ShowMoreLink>
              )}
              {showFullText["Electric Goods Vehicle"] && (
                <ShowMoreLink
                  onClick={() => handleShowMore("Electric Goods Vehicle")}
                >
                  ...less
                </ShowMoreLink>
              )}
            </Paragraph>
          </ImageItem>
          <ImageItem
            as={motion.li}
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Image src="cleaningMachine.png" alt="Application" />

            <Paragraph>
              {showFullText["Electric Cleaning Vehicle"] ? (
                <>
                  <h3>Electric Cleaning Vehicle : </h3>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Cleaning Vehicle{" "}
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Electric Cleaning Vehicle"
              )}
              {!showFullText["Electric Cleaning Vehicle"] && (
                <ShowMoreLink
                  onClick={() => handleShowMore("Electric Cleaning Vehicle")}
                >
                  ...more
                </ShowMoreLink>
              )}
              {showFullText["Electric Cleaning Vehicle"] && (
                <ShowMoreLink
                  onClick={() => handleShowMore("Electric Cleaning Vehicle")}
                >
                  ...less
                </ShowMoreLink>
              )}
            </Paragraph>
          </ImageItem>

          <ImageItem
            as={motion.li}
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Image src="auto1.png" alt="Application" />
            <Paragraph>
              {showFullText["Electric Auto"] ? (
                <>
                  <h3>Electric Auto : </h3>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Auto <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Electric Auto"
              )}
              {!showFullText["Electric Auto"] && (
                <ShowMoreLink onClick={() => handleShowMore("Electric Auto")}>
                  ...more
                </ShowMoreLink>
              )}
              {showFullText["Electric Auto"] && (
                <ShowMoreLink onClick={() => handleShowMore("Electric Auto")}>
                  ...less
                </ShowMoreLink>
              )}
            </Paragraph>
          </ImageItem>

          <ImageItem
            as={motion.li}
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Image src="Streeing wheel.png" alt="Application" />

            <Paragraph>
              {showFullText["Electric Streeing wheel"] ? (
                <>
                  <h3>Electric Streeing wheel : </h3>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Streeing wheel{" "}
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Electric Streeing wheel"
              )}
              {!showFullText["Electric Streeing wheel"] && (
                <ShowMoreLink
                  onClick={() => handleShowMore("Electric Streeing wheel")}
                >
                  ...more
                </ShowMoreLink>
              )}
              {showFullText["Electric Streeing wheel"] && (
                <ShowMoreLink
                  onClick={() => handleShowMore("Electric Streeing wheel")}
                >
                  ...less
                </ShowMoreLink>
              )}
            </Paragraph>
          </ImageItem>
        </ImageContainer>
      </Container>
    </>
  );
}

export default Application;
