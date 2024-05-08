import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import styled from "styled-components";
import { motion } from "framer-motion";
import LinkButton from "../../ui/LinkButton";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;

  @media only screen and (max-width: 600px) {
    height: 100%;
    top: 0;
    margin-top: 5px;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
    margin-top: 0;
  }
`;

const StyledImage = styled.li`
  padding: 10px;
  margin: 5px;
  text-align: center;
  height: 100%;

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
    padding: 40px;
    margin: 20px;
    margin-top: 0;
  }
`;

const H3 = styled.h3`
  font-size: 4rem;
  white-space: nowrap;
  align-items: center;
  margin-top: 40px;

  @media only screen and (max-width: 600px) {
    font-size: 25px;
    margin-top: 25px;
  }
`;

const Img = styled.img`
  margin-top: 20px;
`;

function Products() {
  const navigate = useNavigate();

  function handleExplore() {
    navigate("/contact");
  }

  return (
    <>
      {/* <LinkButton to="/">
        <Span>&larr;Back</Span>
      </LinkButton> */}

      <StyledContainer>
        <H3>Elecnovo Products</H3>

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
            <Img src="3D.PNG" alt="product" />

            <h2>1 kW BLDC / PMSM</h2>
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
            <img src="3D.PNG" alt="product" />
            <h2>3 kW BLDC / PMSM</h2>

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
            <img src="3D.PNG" alt="product" />
            <h2>5 kW BLDC / PMSM</h2>

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
            <img src="3D.PNG" alt="product" />
            <h2>8 kW BLDC / PMSM</h2>

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
            <img src="3D.PNG" alt="product" />
            <h2>10 kW BLDC / PMSM</h2>

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
            <img src="3D.PNG" alt="product" />
            <h2>15 kW BLDC / PMSM</h2>

            <Button onClick={handleExplore}>..more</Button>
          </StyledImage>
        </StyledUl>
      </StyledContainer>
    </>
  );
}

export default Products;
