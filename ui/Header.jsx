import styled from "styled-components";
import Logo from "../ui/Logo";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-grey-900);
  padding: 1px 90px;
  border-bottom: 2px solid var(--color-grey-800);
  width: 100%;
  color: white;

  position: fixed;
  top: 0;
  z-index: 100;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <MainNav />
    </StyledHeader>
  );
}

export default Header;
