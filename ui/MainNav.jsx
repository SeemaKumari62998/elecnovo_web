import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "./MenuList";

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
  color: black;

  @media only screen and (max-width: 600px) {
    margin-right: 20px;
  }
`;

const StyledNavLink = styled(NavLink)`
  span {
    position: relative;
    /* color: var(--color-grey-900); */

    &::after {
      position: absolute;
      top: 50%;
      right: 0.5rem;
      transform: translateY(-50%);
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
    /* box-shadow: 0 0 2px green; */
    /* border-radius: 3spx; */

    @media only screen and (max-width: 600px) {
      font-size: 0.9rem;
      padding: 1rem 1.5rem;
    }
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    /* font-size: 1.8rem; */
    background-color: var(--color-grey-900);
    /* border-radius: 8px; */
    color: white;
  }
`;

const StyledLogo = styled.div`
  display: flex;

  justify-content: flex-start;
  align-items: center;
  /* height: 1000px; */
  width: 15%;
  margin-right: auto;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    width: 54%;
  }
`;

const Img = styled.img`
  height: auto;
  width: auto;
  max-height: 100%;
  max-width: 100%;
  display: block;
`;

const Div = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-green-500);

  span {
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      color: var(--color-grey-600);

      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  position: relative;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 20px;
`;

function MainNav() {
  return (
    <>
      <StyledLogo>
        <Link to="/">
          {/* <Img src="logo1.jpeg" alt="Logo" /> */}
          <Img src="ElecnovoPageLogo.png" alt="Logo" />
        </Link>
      </StyledLogo>

      {/* <Div>
        <Ul>
          <li>
            <StyledLink to="/">
              <span>Home</span>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/technology">
              <span>Technology</span>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/application">
              <span>Application</span>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/solutions">
              <span>Solution</span>
            </StyledLink>
          </li>
        </Ul>
      </Div> */}

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
