import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  width: 10%; /* Adjust this width as needed */
  margin-right: auto; /* Pushes the logo to the left */
`;

const Img = styled.img`
  height: 50px;
  width: 210px;
  display: block;
  margin: 0 auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Link to="/home">
        <Img src="logo.png" alt="Logo" />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
