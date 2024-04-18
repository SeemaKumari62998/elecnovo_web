import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import styled from "styled-components";
import { motion } from "framer-motion";
import LinkButton from "../../ui/LinkButton";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: var(--color-grey-400);
  color: var(--color-grey-200);

  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  top: 0;
  left: 0;
  width: 100%;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledImage = styled.li`
  grid-column: span 1;
  grid-row: span 2;
  padding: 50px;
  margin: 70px;
  margin-top: 2px;

  @media only screen and (max-width: 600px) {
    padding: 20px;
    margin: 4px;
  }
`;

const H3 = styled.h3`
  text-align: center;
  font-weight: 200px;
  font-size: 3rem;
  margin-top: 10px;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin-top: 25px;
  }
`;

const Span = styled.span`
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

function Products() {
  const navigate = useNavigate();

  function handleExplore() {
    navigate("/productdetail");
  }

  return (
    <>
      <LinkButton to="/">
        <Span>&larr;Back</Span>
      </LinkButton>
      <H3>Elecnovo Products</H3>

      <StyledContainer>
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
            <H3>Product 1</H3>
            <img src="3D.PNG" alt="product" />
            <h2>1 KW BLDC/PMSM</h2>
            <h3>High Efficiency technology</h3>
            <Button onClick={handleExplore}>Explore</Button>
          </StyledImage>

          <StyledImage
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
          </StyledImage>

          <StyledImage
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
          </StyledImage>
        </StyledUl>
      </StyledContainer>
    </>
  );
}

export default Products;
