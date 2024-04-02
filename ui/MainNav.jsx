import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "./MenuList";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
  border: 0.3rem solid var(--color-grey-700);

  border-radius: 10px;
  @media only screen and (max-width: 600px) {
    margin-right: 10px;
  }
`;

const StyledNavLink = styled(NavLink)`
  span {
    position: relative;

    &::after {
      border: 1px solid blue;
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
    color: var(--color-grey-300);
    font-size: 2rem;
    font-weight: 500;
    padding: 1.2rem 2rem;
    transition: all 0.3s;
    box-shadow: 0 3px 10px white;
    border-radius: 8px;

    @media only screen and (max-width: 600px) {
      font-size: 1rem;
      padding: 1rem 1.5rem;
    }
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: black;
    background-color: var(--color-green-100);
    border-radius: 8px;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  width: 10%;
  margin-right: auto;

  @media only screen and (max-width: 600px) {
    width: 50%;
  }
`;

const Img = styled.img`
  height: 50px;
  width: 210px;
  display: block;
  margin: 0 auto;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  text-align: center;

  span {
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      color: var(--color-grey-300);
      /* background-color: var(--color-blue-100); */
      border-radius: px;
      box-shadow: 0 3px 5px white;
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

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
`;

function MainNav() {
  return (
    <>
      <StyledLogo>
        <Link to="/">
          <Img src="logo.png" alt="Logo" />
        </Link>
      </StyledLogo>

      <Div>
        <ArrowWrapper>
          <MdArrowBackIos />
        </ArrowWrapper>
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
        <ArrowWrapper>
          <MdArrowForwardIos />
        </ArrowWrapper>
      </Div>

      <NavList>
        <li>
          <StyledNavLink to="/contact">
            <span>Contact</span>
          </StyledNavLink>
        </li>
      </NavList>

      <Menu />
    </>
  );
}

export default MainNav;
