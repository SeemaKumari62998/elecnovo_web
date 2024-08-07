import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const StyledFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: var(--color-grey-900);
  padding: 20px 100px 10px 10px;
  width: 100%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2px;
    padding-left: 30px;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--color-grey-500);

  @media only screen and(max-width: 600px) {
    display: flex;
    align-items: flex-start;
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
  margin: 2px;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
    padding-bottom: 20px;
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
  width: 300px;
  height: auto;
  margin-bottom: 0;

  @media only screen and (max-width: 600px) {
    width: 70%;

    margin: 0 auto;
    display: block;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledColumn>
        <Img src="ElecnovoPageLogo.png" alt="Logo" />
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
        <h3>Quick links</h3>
        <StyledUl>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about">About us</StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/teams">Team</StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/application">Application</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/products">Products</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/career">Career</StyledNavLink>
          </li>
        </StyledUl>
      </StyledColumn>

      <StyledColumn>
        <h3>Contact us</h3>
        <StyledUl>
          <li>Email: reachus@elecnovo.com</li>
          <li>
            <a href="tel:89712 84680">Phone: +91 89712 84680</a>
          </li>
        </StyledUl>
      </StyledColumn>

      <StyledColumn>
        <h3>Follow us on</h3>
        <MediaUl>
          <a
            href="https://www.facebook.com/Elecnovo-269357897205345/"
            alt="Facebook "
            target="blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/company/elecnovo-private-limited/"
            alt="Linkedin"
            target="blank"
          >
            <FaLinkedin />
          </a>

          <FaInstagram />

          <FaTwitter />
        </MediaUl>
      </StyledColumn>
    </StyledFooter>
  );
}

export default Footer;
