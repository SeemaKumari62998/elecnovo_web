import styled from "styled-components";

import MainNav from "./MainNav";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-200);
  padding: 30px 80px;

  height: 85px;
  width: 100%;
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 0 20px;
  box-shadow: 0 0 15px rgb(0, 0, 0);

  @media only screen and (max-width: 600px) {
    padding: 5px 5px;
    height: 60px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <MainNav />
    </StyledHeader>
  );
}

export default Header;
