import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;

  @media only screen and (max-width: 600px) {
    height: 100%;
    top: 0;
    /* margin-top: 5px; */
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
    margin-top: 0;
  }
`;

const StyledImage = styled.li`
  padding: 10px;
  margin: 10px;
  text-align: center;
  height: 100%;
  margin-top: 20px;
  margin-bottom: 10px;

  h2 {
    font-size: 2.1rem;

    @media only screen and (max-width: 600px) {
      font-size: 1.9rem;
    }
  }

  Button {
    @media only screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 10px;
    margin: 30px;
    margin-top: 0;
  }
`;

const H3 = styled.h3`
  font-size: 3.6rem;
  font-weight: 500;
  white-space: nowrap;
  align-items: center;
  margin-top: 40px;
  color: var(--color-grey-600);

  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
    margin-top: 25px;
  }
`;
const Pa = styled.p`
  font-size: 1.8rem;
  margin-top: 10px;

  @media only screen and (max-width: 600px) {
    font-size: 1.6rem;
    padding: 5px;
    max-width: 92%;
  }
`;

function Products() {
  const navigate = useNavigate();

  function handleExplore() {
    navigate("/productdetails");
  }

  return (
    <>
      <StyledContainer>
        <H3>Elecnovo Motors</H3>
        <Pa>
          Elecnovo provides custom-engineered and advanced motor solutions with
          enhanced performance, ease of integration, compact size and high
          efficiency and enhanced reliability.{" "}
        </Pa>

        <StyledUl>
          <StyledImage
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
            <img src="1KW SPM R1.jpg" alt="product" />
            <h4>1 kW BLDC / PMSM</h4>

            <Button onClick={handleExplore}>..more</Button>
          </StyledImage>

          <StyledImage
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
            <img src="2KW SPM R1.jpg" alt="product" />
            <h4>2 kW BLDC / PMSM</h4>

            <Button onClick={handleExplore}>..more</Button>
          </StyledImage>

          <StyledImage
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
            <img src="3KW SPM R1.jpg" alt="product" />
            <h4>3 kW BLDC / PMSM</h4>

            <Button onClick={handleExplore}>..more</Button>
          </StyledImage>

          <StyledImage
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
            <img src="5KW SPM R1.jpg" alt="product" />
            <h4>5 kW BLDC / PMSM</h4>

            <Button onClick={handleExplore}>..more</Button>
          </StyledImage>

          <StyledImage
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
            <img src="8KW SPM R1.jpg" alt="product" />
            <h4>10 kW BLDC / PMSM</h4>

            <Button onClick={handleExplore}>..more</Button>
          </StyledImage>

          <StyledImage
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
            <img src="173 IPM R4.jpg" alt="product" />

            <h4>15 kW BLDC / PMSM</h4>

            <Button onClick={handleExplore}>..more</Button>
          </StyledImage>
        </StyledUl>
      </StyledContainer>
    </>
  );
}

export default Products;
