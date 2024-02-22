import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  color: var(--color-grey-200);
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
`;

const StyledImage = styled.li`
  grid-column: span 1;
  grid-row: span 2;
  padding: 50px;
  margin: 70px;
  margin-top: 2px;
`;

const H3 = styled.h3`
  text-align: center;
  font-weight: 200px;
  font-size: 30px;
`;

// const StyledHeading = styled.h2`
//   text-align: center;
//   margin-top: 20px;
// `;
function Products() {
  const navigate = useNavigate();

  function handleExplore() {
    navigate("/productdetail");
  }

  return (
    <>
      <StyledContainer>
        {/* <StyledHeading>WELCOME</StyledHeading> */}
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
