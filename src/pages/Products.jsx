import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import styled from "styled-components";
import { motion } from "framer-motion";
import Application from "../pages/Application";
import Technology from "../pages/Technology";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 50px;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 70px;
`;

const StyledLi = styled.li`
  grid-column: span 1;
  grid-row: span 1;
`;

const H3 = styled.h3`
  text-align: center;
  font-weight: 200px;
  font-size: larger;
`;

const StyledHeading = styled.h2`
  text-align: center;
  margin-top: 200px;
`;
function Products() {
  const navigate = useNavigate();

  function handleExplore() {
    navigate("/productDetail");
  }

  return (
    <>
      <StyledContainer>
        <StyledUl>
          <StyledLi
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
            <H3>Product 1</H3>
            <img src="3D.PNG" alt="product" />
            <h2>1 KW BLDC/PMSM</h2>
            <h3>High Efficiency technology</h3>
            <Button onClick={handleExplore}>Explore</Button>
          </StyledLi>

          <StyledLi
            as={motion.h3}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <H3>Product2</H3>
            <img src="3D.PNG" alt="product" />
            <h2>1 KW BLDC/PMSM</h2>
            <h3>High Efficiency technology</h3>
            <Button onClick={handleExplore}>Explore</Button>
          </StyledLi>

          <StyledLi
            as={motion.h3}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <H3>Product 3</H3>
            <img src="3D.PNG" alt="product" />
            <h2>1 KW BLDC/PMSM</h2>
            <h3>High Efficiency technology</h3>
            <Button onClick={handleExplore}>Explore</Button>
          </StyledLi>

          <StyledLi
            as={motion.h3}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <H3>Product4</H3>
            <img src="3D.PNG" alt="product" />
            <h2>1 KW BLDC/PMSM</h2>
            <h3>High Efficiency technology</h3>
            <Button onClick={handleExplore}>Explore</Button>
          </StyledLi>
        </StyledUl>
      </StyledContainer>

      <StyledHeading>
        <Application />
      </StyledHeading>

      <StyledHeading>
        <Technology />
      </StyledHeading>
    </>
  );
}

export default Products;
