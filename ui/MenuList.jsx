import { useState } from "react";
import styled from "styled-components";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const MenuContainer = styled.div`
  font-size: 2.6rem;
  font-weight: 500;
  margin-top: 10px;
  position: relative;
`;

const MenuList = styled.div`
  position: absolute;

  top: 100%;
  right: 0;
  background-color: var(--color-grey-100);

  border: 10px solid white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  padding: 40px;
  z-index: 2;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0.3, 0.3, 0.3, 0.3);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 1; /* Place the overlay below the menu */
`;

const MenuItem = styled.div`
  margin-bottom: 10px;
  color: black;

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

  return (
    <li>
      <MenuContainer>
        <TiThMenu onClick={toggleMenu} />
        <Overlay isOpen={menuOpen} onClick={toggleMenu}></Overlay>
        <MenuList isOpen={menuOpen}>
          <MenuItem>About us</MenuItem>
          <NavLink to="/application">
            <MenuItem>Application</MenuItem>
          </NavLink>

          <NavLink to="/technology">
            <MenuItem>Technology</MenuItem>
          </NavLink>
          <MenuItem>Career</MenuItem>
          <MenuItem>Teams</MenuItem>
        </MenuList>
      </MenuContainer>
    </li>
  );
}

export default Menu;
