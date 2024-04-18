import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdOutlineMailOutline, MdPhone } from "react-icons/md";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const StyledFooter = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  background-color: var(--color-grey-900);
  padding: 60px 100px 60px 10px;
  /* color: var(--color-grey-100); */
  width: 100%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: left;
    padding: 30px;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 500px; */
  color: var(--color-grey-500);

  @media only screen and(max-width: 600px) {
    margin-bottom: 0;
  }
`;

const MediaUl = styled.ul`
  list-style: none;
  margin-top: 20px;

  display: flex;
  gap: 20px;
  font-size: 25px;
  justify-content: center;
  color: var(--color-grey-300);
  cursor: pointer;
`;

const StyledUl = styled.ul`
  list-style: none;
  color: var(--color-grey-300);
  margin: 10px;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }

  li {
    margin: 3px;
    padding: 1px;
    cursor: pointer;
  }

  li a {
    color: inherit;
    text-decoration: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: var(--color-blue-700);
    text-decoration: underline;
  }
`;

const Img = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 0;

  @media only screen and (max-width: 600px) {
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledColumn>
        <Img src="ElecnovoPageLogo.png" alt="Logo" />
        {/* <Img src="logo1.jpeg" alt="Logo" /> */}
      </StyledColumn>

      <StyledColumn>
        <h3>Location</h3>
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
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/products">Products</StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/about">About us</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/contact">Contact us</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/application">Application</StyledNavLink>
          </li>
        </StyledUl>
      </StyledColumn>

      <StyledColumn>
        <h3>Contact Us</h3>
        <StyledUl>
          <li>Email: REACHUS@ELECNOVO.COM</li>
          <li>
            <a href="tel:89712 84680">Phone: +91 89712 84680</a>
          </li>
        </StyledUl>
      </StyledColumn>

      <StyledColumn>
        <h3>Follow Us On</h3>
        <MediaUl>
          <FaFacebook />
          <FaLinkedin />
          <FaInstagram />
          <FaTwitter />
        </MediaUl>
      </StyledColumn>
    </StyledFooter>
  );
}

export default Footer;
