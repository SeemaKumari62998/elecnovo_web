import styled from "styled-components";

import MainNav from "./MainNav";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-300);
  /* padding: 30px 80px; */
  height: 85px;
  width: 100%;
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 0 20px;

  @media only screen and (max-width: 600px) {
    padding: 5px 5px;

    height: 60px;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0.5, 0.9, 0.3), rgba(0, 0.5, 0.9, 0.3));
`;

function Header() {
  return (
    <StyledHeader>
      {/* <Overlay /> */}
      <MainNav />
    </StyledHeader>
  );
}

export default Header;
