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
  width: 300px;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.9);
  border: 1px solid black;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isOpen ? "block" : "none")};

  padding: 20px;
  z-index: 2;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 1;
`;

const MenuItem = styled.div`
  margin-bottom: 40px;
  color: var(--color-grey-300);

  &:hover {
    color: blue;
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

      <Overlay
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.5,
          scale: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.5 },

          ease: easeIn,
          duration: 5,
        }}
        isOpen={menuOpen}
        onClick={toggleMenu}
      ></Overlay>
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
