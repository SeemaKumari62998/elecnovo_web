import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Menu from "./MenuList";
const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  span {
    position: relative;

    &::after {
      content: "";
      border: solid transparent;
      border-width: 0;
      position: absolute;
      top: 50%;
      right: 0.5em;
      transform: translateY(-50%);
    }
  }
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-300);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-400);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/">
            <span>Home</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/products">
            <span>Products</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/about">
            <span>About us</span>
          </StyledNavLink>
        </li>

        <li>
          <NavLink to="/technology"></NavLink>
        </li>

        <li>
          <NavLink to="/career"></NavLink>
        </li>
        <li>
          <NavLink to="/teams"></NavLink>
        </li>
        <li>
          <NavLink to="/appication"></NavLink>
        </li>
        {/*
        <li>
          <StyledNavLink to="/application">
            <span>Application</span>
          </StyledNavLink>
        </li> */}
        <li>
          <StyledNavLink to="/contact">
            <span>Contact</span>
          </StyledNavLink>
        </li>

        <li>
          <Menu />
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
