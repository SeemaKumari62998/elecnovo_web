import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import styled from "styled-components";
import { motion } from "framer-motion";
import LinkButton from "../../ui/LinkButton";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100vh; */
  /* background-color: var(--color-grey-200); */
  background-color: white;
  color: var(--color-grey-900);
  border-top: 1px solid black;

  @media only screen and (max-width: 600px) {
    height: 100%;
    top: 0;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  /* margin-top: 40px; */

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledImage = styled.li`
  grid-column: span 1;
  grid-row: span 1;
  padding: 30px;
  margin: 20px;
  text-align: center;
  height: 100%;

  @media only screen and (max-width: 600px) {
    padding: 30px;
    margin: 20px;
    margin-top: 10px;
  }
`;

const H3 = styled.h3`
  font-size: 4rem;
  white-space: nowrap;
  align-items: center;
  margin-top: 40px;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin-top: 25px;
  }
`;

const Img = styled.img`
  padding: 80px;
`;

function Products() {
  const navigate = useNavigate();

  function handleExplore() {
    navigate("/productdetail");
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
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <h>Product 1</h>
            <img src="3D.PNG" alt="product" />
            <h2>1 kW BLDC / PMSM</h2>
            <h3>High Efficiency technology</h3>
            <Button onClick={handleExplore}>Explore</Button>
          </StyledImage>

          <StyledImage
            as={motion.li}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <h>Product 2</h>
            <img src="3D.PNG" alt="product" />
            <h2>3 kW BLDC / PMSM</h2>
            <h3>High Efficiency technology</h3>
            <Button onClick={handleExplore}>Explore</Button>
          </StyledImage>

          <StyledImage
            as={motion.li}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <h>Product 3</h>
            <img src="3D.PNG" alt="product" />
            <h2>5 kW BLDC / PMSM</h2>
            <h3>High Efficiency technology</h3>
            <Button onClick={handleExplore}>Explore</Button>
          </StyledImage>

          <StyledImage
            as={motion.li}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <h>Product 3</h>
            <img src="3D.PNG" alt="product" />
            <h2>8 kW BLDC / PMSM</h2>
            <h3>High Efficiency technology</h3>
            <Button onClick={handleExplore}>Explore</Button>
          </StyledImage>

          <StyledImage
            as={motion.li}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <h>Product 3</h>
            <img src="3D.PNG" alt="product" />
            <h2>10 kW BLDC / PMSM</h2>
            <h3>High Efficiency technology</h3>
            <Button onClick={handleExplore}>Explore</Button>
          </StyledImage>

          <StyledImage
            as={motion.li}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <h>Product 3</h>
            <img src="3D.PNG" alt="product" />
            <h2>15 kW BLDC / PMSM</h2>
            <h3>High Efficiency technology</h3>
            <Button onClick={handleExplore}>Explore</Button>
          </StyledImage>
        </StyledUl>
      </StyledContainer>
    </>
  );
}

export default Products;
