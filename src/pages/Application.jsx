import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Container = styled.div`
  position: relative;
  /* border: 1px solid grey; */
  background-color: var(--color-grey-200);
`;

const ImageContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;
  margin: 90px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 10px;
    margin-bottom: 30px;
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
  /* margin-bottom: 20px; */
  margin-top: 60px;
  position: relative;
  align-items: center;

  &:hover {
    ${Image} {
      transform: scale(1);
      /* box-shadow: 0 0 5px rgb(0, 0, 0); */
    }
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
    margin-top: 30px;
    align-items: center;
  }
`;

const Span = styled.span`
  position: absolute;
  top: 0;
  left: 35%;
  transform: translateX(-50%);
  text-align: center;
  color: black;
  white-space: nowrap;
  font-size: 1.8rem;
  padding: 2px 20px;

  @media only screen and (max-width: 600px) {
    bottom: -153px;
    left: 50%;
    padding: 120px;
  }
`;

const H2 = styled(motion.h2)`
  font-size: 2.8rem;
  position: absolute;
  top: 10px;
  left: 650px;
  color: black;
  padding: 35px;
  margin: 10px;

  @media only screen and (max-width: 600px) {
    margin-top: 5px;
    left: 13%;
    font-size: 20px;
  }
`;

function Application() {
  const [showFullText, setShowFullText] = useState({});

  const handleShowMore = (itemName) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [itemName]: !prevState[itemName],
    }));
  };

  const Paragraph = styled.p`
    overflow: hidden;
    color: black;
    padding: 20px 20px;
    text-align: center;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${showFullText ? "unset" : "3"};
    -webkit-box-orient: vertical;

    background-color: var(--color-grey-200);
    box-shadow: 0 0 10px rgb(0, 0, 0);
    border-radius: 5px;
    margin-top: 20px;

    @media only screen and (max-width: 600px) {
      padding: 20px 10px;
      width: 300px;
      font-size: 1rem;
      text-align: center;
      margin-top: 20px;
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
  return (
    <>
      <Container>
        <ImageContainer>
          <H2> ELECNOVO APPLICATIONS</H2>

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
                  <h3>Electric Motorcycle :</h3>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Motorcycle{" "}
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Elecnovo offers custom engineered"
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
                  <h3> Electric Scooter</h3>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Scooter
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Elecnovo offers custom engineered"
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
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="tractor.png" alt="Application" />
            <Span>Electric Tractor</Span>
            <Paragraph>
              {showFullText["Electric Tractor"] ? (
                <>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Tractor{" "}
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Elecnovo offers custom engineered"
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
            whileHover={{
              scale: [1, 1.2, 1.1],

              transition: { duration: 0.5 },
            }}
          >
            <Image src="Golfkart.png" alt="Application" />
            <Span>Electric Golfkart</Span>
            <Paragraph>
              {showFullText["Electric Golfkart"] ? (
                <>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Golfkart{" "}
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Elecnovo offers custom engineered"
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
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="boat.png" alt="Application" />
            <Span>Electric Boat</Span>
            <Paragraph>
              {showFullText["Electric Boat"] ? (
                <>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Boat <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Elecnovo offers custom engineered"
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
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="car.png" alt="Application" />
            <Span>Electric Car</Span>
            <Paragraph>
              {showFullText["Electric Car"] ? (
                <>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Car <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Elecnovo offers custom engineered"
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
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="loader.png" alt="Application" />
            <Span>Electric Goods Vehicle</Span>
            <Paragraph>
              {showFullText["Electric Goods Vehicle"] ? (
                <>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Goods Vehicle{" "}
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Elecnovo offers custom engineered"
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
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="cleaningMachine.png" alt="Application" />
            <Span>Electric Cleaning Vehicle</Span>
            <Paragraph>
              {showFullText["Electric Cleaning Vehicle"] ? (
                <>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Cleaning Vehicle{" "}
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Elecnovo offers custom engineered"
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
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="auto1.png" alt="Application" />
            <Span>Electric Auto</Span>
            <Paragraph>
              {showFullText["Electric Auto"] ? (
                <>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Auto <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Elecnovo offers custom engineered"
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
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="Buggy.png" alt="Application" />
            <Span>Electric Buggy</Span>
            <Paragraph>
              {showFullText["Electric Buggy"] ? (
                <>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Buggy{" "}
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Elecnovo offers custom engineered"
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
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="Four Wheel Loader.png" alt="Application" />
            <Span>Electric Four Wheeler Loader</Span>
            <Paragraph>
              {showFullText["Electric Four Wheeler Loader"] ? (
                <>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Four Wheeler Loader{" "}
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Elecnovo offers custom engineered"
              )}
              {!showFullText["Electric Four Wheeler Loader"] && (
                <ShowMoreLink
                  onClick={() => handleShowMore("Electric Four Wheeler Loader")}
                >
                  ...more
                </ShowMoreLink>
              )}
              {showFullText["Electric Four Wheeler Loader"] && (
                <ShowMoreLink
                  onClick={() => handleShowMore("Electric Four Wheeler Loader")}
                >
                  ...less
                </ShowMoreLink>
              )}
            </Paragraph>
          </ImageItem>
          <ImageItem
            as={motion.li}
            whileHover={{
              scale: [1, 1.2, 1.1],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="Streeing wheel.png" alt="Application" />
            <Span>Electric Streeing wheel</Span>
            <Paragraph>
              {showFullText["Electric Streeing wheel"] ? (
                <>
                  Elecnovo offers custom engineered motorsolutions to electric
                  Streeing wheel{" "}
                  <ContactLink href="/contact"> "Contact us" </ContactLink>
                  for more details
                </>
              ) : (
                "Elecnovo offers custom engineered"
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
