import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  background-color: var(--color-grey-200);
  padding: 20px;
`;

const ImageContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-row-gap: 40px;
  padding: 20px;
  margin-top: 170px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 10px;
    margin-bottom: 30px;
    margin-top: 240px;
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
  padding: 10px;

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

const Paragraph = styled.p`
  overflow: hidden;
  color: black;
  font-size: 1.5rem;
  padding: ${(props) => (props.showFullText ? "40px 20px" : "20px 10px")};
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.showFullText ? "unset" : "5")};
  -webkit-box-orient: vertical;
  background-color: var(--color-grey-200);
  /* box-shadow: 0 0 5px rgb(0, 0, 0); */
  border-radius: 5px;
  margin-top: ${(props) => (props.showFullText ? "15px" : "10px")};
  margin-bottom: ${(props) => (props.showFullText ? "10px" : "5px")};

  @media only screen and (max-width: 600px) {
    padding: ${(props) => (props.showFullText ? "20px 10px" : "15px 5px")};
    width: 250px;
    font-size: 1rem;
    text-align: center;
    margin-top: ${(props) => (props.showFullText ? "15px" : "10px")};
    margin-bottom: ${(props) => (props.showFullText ? "10px" : "5px")};
    white-space: normal;
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
const H4 = styled.h4`
  font-size: 1.9rem;
  font-weight: 500;
  position: absolute;
  left: 4%;
  top: 14%;
  width: 90%;
  color: var(--color-grey-600);
  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: break-word;

  @media only screen and (max-width: 600px) {
    font-size: 1.6rem;
    padding: 5px;
    max-width: 92%;
    top: 3%;
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
  const navigate = useNavigate();

  const handleShowMore = (itemName) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [itemName]: !prevState[itemName],
    }));
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <Container>
        <ImageContainer>
          <H2> Elecnovo Application</H2>

          <H3>Electric Vehicle and more</H3>

          <H4>
            Elecnovo provides motor solutions to light duty electric vehicles
            and electrically operated machines and equipment. Energy efficiency,
            high performance, compact size, increased robustness and enhanced
            reliability are key solutions of products and technologies of
            Elecnovo.
          </H4>

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
                  Elecnovo offers custom engineered motor solutions to electric
                  motorcycle
                  <ContactLink onClick={handleContactClick}>
                    "Contact us"
                  </ContactLink>
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
                  Elecnovo offers custom engineered motor solutions to electric
                  scooter
                  <ContactLink onClick={handleContactClick}>
                    "Contact us"
                  </ContactLink>
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
                  Elecnovo offers custom engineered motor solutions to electric
                  truck
                  <ContactLink onClick={handleContactClick}>
                    "Contact us"
                  </ContactLink>
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
                  Elecnovo offers custom engineered motor solutions to electric
                  Car{" "}
                  <ContactLink onClick={handleContactClick}>
                    "Contact us"
                  </ContactLink>
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
                  Elecnovo offers custom engineered motor solutions to electric
                  tractor
                  <ContactLink onClick={handleContactClick}>
                    "Contact us"
                  </ContactLink>
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
                  Elecnovo offers custom engineered motor solutions to electric
                  Golfkart{" "}
                  <ContactLink onClick={handleContactClick}>
                    "Contact us"
                  </ContactLink>
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
                  Elecnovo offers custom engineered motor solutions to electric
                  buggy
                  <ContactLink onClick={handleContactClick}>
                    "Contact us"
                  </ContactLink>
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
                  Elecnovo offers custom engineered motor solutions to electric
                  boat{" "}
                  <ContactLink onClick={handleContactClick}>
                    "Contact us"
                  </ContactLink>
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
                  Elecnovo offers custom engineered motor solutions to electric
                  goods vehicle
                  <ContactLink onClick={handleContactClick}>
                    "Contact us"
                  </ContactLink>
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
                  Elecnovo offers custom engineered motor solutions to electric
                  cleaning vehicle
                  <ContactLink onClick={handleContactClick}>
                    "Contact us"
                  </ContactLink>
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
                  Elecnovo offers custom engineered motor solutions to electric
                  auto{" "}
                  <ContactLink onClick={handleContactClick}>
                    "Contact us"
                  </ContactLink>
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
                  Elecnovo offers custom engineered motor solutions to electric
                  streeing wheel
                  <ContactLink onClick={handleContactClick}>
                    "Contact us"
                  </ContactLink>
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
