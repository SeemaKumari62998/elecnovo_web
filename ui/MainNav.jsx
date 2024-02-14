import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Menu from "./MenuList";

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
  border: 0.3rem solid var(--color-grey-700);
  border-radius: 10px;
`;

const StyledNavLink = styled(NavLink)`
  span {
    position: relative;

    &::after {
      border: 1px solid blue;
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
    color: var(--color-grey-300);
    font-size: 2rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    box-shadow: 0 3px 10px white;
    border-radius: 8px;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: black;
    background-color: var(--color-green-100);
    border-radius: 8px;
  }

  /* & svg {
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
  } */
`;

function MainNav() {
  return (
    <>
      <NavList>
        <li>
          <StyledNavLink to="/contact">
            <span>Contact</span>
          </StyledNavLink>
        </li>
      </NavList>

      {/* <li>
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
        </li> */}
      <ul>
        <li>
          <NavLink to="/"></NavLink>
        </li>
        <li>
          <NavLink to="/about us"></NavLink>
        </li>

        <li>
          <NavLink to="/products"></NavLink>
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

        <li>
          <Menu />
        </li>
      </ul>
    </>
  );
}

export default MainNav;
