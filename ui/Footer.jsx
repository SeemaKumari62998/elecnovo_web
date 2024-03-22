import styled from "styled-components";
import Logo from "../ui/Logo";
import { NavLink } from "react-router-dom";
import { MdOutlineMailOutline, MdPhone } from "react-icons/md";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-grey-800);
  padding: 40px;
  color: var(--color-grey-600);
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
const StyledMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const MediaUl = styled.ul`
  list-style: none;
  margin-top: 20px;
  display: flex;
  gap: 20px;
  font-size: 25px;
  color: white;
  li {
    margin: 2px;
    padding: 4px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }

  li {
    margin: 2px;
    padding: 4px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &:hover {
    color: var(--color-blue-700);
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      {/* <Logo /> */}

      <StyledColumn>
        <h3>Address</h3>
        <StyledUl>
          No. 18, First Floor, Sub Layout, 4th Phase,
          <br />
          Bommasandra Industrial Area, <br /> Bengaluru, Karnataka 560099, INDIA
        </StyledUl>
      </StyledColumn>

      <StyledColumn>
        <h3>Quick links </h3>
        <StyledUl>
          <li>
            <StyledNavLink to="/products">Products</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about us">About us</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/contact">Contact</StyledNavLink>
          </li>
        </StyledUl>
      </StyledColumn>

      <StyledColumn>
        <h3>Contact Us</h3>
        <StyledUl>
          <li>
            <span>
              <MdOutlineMailOutline />
            </span>
            Email - REACHUS@ELECNOVO.COM
          </li>
          <li>
            <span>
              <MdPhone />
            </span>
            Phone - 703693586
          </li>
        </StyledUl>
      </StyledColumn>

      <StyledMedia>
        <h3>Follow Us On</h3>
        <MediaUl>
          <FaFacebook />
          <FaLinkedin />
          <FaInstagram />
          <FaTwitter />
        </MediaUl>
      </StyledMedia>
    </StyledFooter>
  );
}

export default Footer;
