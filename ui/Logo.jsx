import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogo = styled.div``;

const Img = styled.img`
  height: 8.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Link to="/">
        <Img src="Elecnovo Logo White.png" alt="Logo" />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
