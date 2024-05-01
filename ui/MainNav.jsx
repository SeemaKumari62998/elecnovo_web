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
    /* font-size: 1.8rem; */
    background-color: var(--color-grey-900);
    /* border-radius: 8px; */
    color: white;
    border-radius: 11px;
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

const Div = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

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

const Text = styled.h2`
  font-size: 4rem;
  font-weight: 500;
  color: var(--color-green-500);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Add a subtle shadow */
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  /* -webkit-text-fill-color: transparent; */
  display: inline-block;
  padding: 0.5rem 1rem; /* Add some padding */
  border-radius: 10px; /* Add border radius */

  @media only screen and (max-width: 600px) {
    font-size: 3rem;
  }
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

      <Div>
        <Text>Diving Green Mobility</Text>
      </Div>

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
