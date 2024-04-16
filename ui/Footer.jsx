import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdOutlineMailOutline, MdPhone } from "react-icons/md";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-grey-300);
  padding: 40px;
  color: var(--color-grey-900);
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
  color: black;
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
  color: black;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }

  li {
    margin: 2px;
    padding: 2px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
  }

  li a {
    color: inherit;
    text-decoration: none;
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

const Img = styled.img`
  width: 300px;
  height: 160px;
  margin-bottom: 0;
  align-self: center;
`;

const Span = styled.span`
  margin-top: 4px;
  /* margin-right: px; */
`;

const Div = styled.div`
  margin: 5px;
`;

function Footer() {
  return (
    <StyledFooter>
      <Div>
        <Img src="ElecnovoPageLogo.png" alt="Logo" />
      </Div>

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
          <li>
            {/* <Span>
              <MdOutlineMailOutline />
            </Span> */}
            Email: REACHUS@ELECNOVO.COM
          </li>
          <li>
            {/* <Span>
              <MdPhone />
            </Span> */}
            <a href="tel:89712 84680">Phone: +91 89712 84680</a>
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
