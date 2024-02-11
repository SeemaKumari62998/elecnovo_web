import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogo = styled.div``;

const Img = styled.img`
  height: 50px;
  width: 150px;
  display: block;
  margin: 0 auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Link to="/">
        <Img src="ElecnovoPageLogo.png" alt="Logo" />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
