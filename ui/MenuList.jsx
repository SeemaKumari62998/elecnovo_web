import { useState } from "react";
import styled from "styled-components";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { easeIn, motion } from "framer-motion";

const MenuContainer = styled.div`
  font-size: 2.6rem;
  font-weight: 500;
  margin-top: 10px;
  position: relative;
`;

const MenuList = styled.div`
  position: fixed;
  top: 90px;
  right: 0;
  width: 270px;
  height: 50%;

  background-color: black;

  border-radius: 10px;

  display: ${(props) => (props.isOpen ? "block" : "none")};

  padding: 40px;
  z-index: 2;
`;

const MenuItem = styled.div`
  margin-bottom: 5px;
  color: var(--color-grey-100);
  font-size: 20px;

  &:hover {
    color: grey;
    text-decoration: underline;
  }
`;

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <MenuContainer>
      <TiThMenu onClick={toggleMenu} />

      <MenuList isOpen={menuOpen}>
        <NavLink to="/about" onClick={closeMenu}>
          <MenuItem>About us</MenuItem>
        </NavLink>

        <NavLink to="/application" onClick={closeMenu}>
          <MenuItem>Application</MenuItem>
        </NavLink>

        <NavLink to="/technology" onClick={closeMenu}>
          <MenuItem>Technology</MenuItem>
        </NavLink>

        <NavLink to="/career" onClick={closeMenu}>
          <MenuItem>Career</MenuItem>
        </NavLink>

        <NavLink to="/teams" onClick={closeMenu}>
          <MenuItem>Teams</MenuItem>
        </NavLink>
      </MenuList>
    </MenuContainer>
  );
}

export default Menu;
