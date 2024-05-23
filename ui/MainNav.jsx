import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "./MenuList";

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  color: black;

  @media only screen and (max-width: 600px) {
    margin-right: 2px;
  }
`;

const StyledNavLink = styled(NavLink)`
  span {
    position: relative;
    font-size: 2.3rem;

    &::after {
      position: absolute;
      top: 50%;
      right: 0.5rem;
      transform: translateY(-50%);
    }

    @media only screen and (max-width: 600px) {
      font-size: 1.3rem;
      white-space: nowrap;
    }
  }

  &:link,
  &:visited {
    display: flex;
    align-items: center;

    font-size: 2rem;
    font-weight: 500;
    padding: 1.2rem 2rem;
    transition: all 0.3s;

    @media only screen and (max-width: 600px) {
      font-size: 2.6rem;
      padding: 1rem 1.5rem;
    }
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-grey-900);
    color: white;
    border-radius: 11px;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 15%;
  margin-right: auto;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    width: 52%;
    margin-left: 2px;
  }
`;

const Img = styled.img`
  height: auto;
  width: auto;
  max-height: 100%;
  max-width: 100%;
  display: block;
`;

function MainNav() {
  return (
    <>
      <StyledLogo>
        <Link to="/">
          <Img src="ElecnovoPageLogo.png" alt="Logo" />
        </Link>
      </StyledLogo>

      <NavList>
        <li>
          <StyledNavLink to="/contact">
            <span>Contact us</span>
          </StyledNavLink>
        </li>
      </NavList>

      <Menu />
    </>
  );
}

export default MainNav;
