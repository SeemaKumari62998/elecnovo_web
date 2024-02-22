import { useState } from "react";
import styled from "styled-components";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const MenuContainer = styled.div`
  font-size: 3rem;
  font-weight: 500;
  margin-top: 10px;
  position: relative;
`;

const MenuList = styled.div`
  position: fixed;
  top: 120px;
  right: 15px;
  width: 280px;
  height: 100%;
  background-color: black;
  border-radius: 8px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  padding: 30px;
  text-align: left;
`;

const MenuItem = styled.div`
  margin: 15px;
  color: var(--color-grey-100);
  font-size: 20px;

  &:hover {
    color: var(--color-grey-600);
  }
`;

const Border = styled.div`
  border-bottom: 2px solid grey;
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
    <>
      <MenuContainer>
        <TiThMenu onClick={toggleMenu} />

        <MenuList isOpen={menuOpen}>
          <Border>
            <NavLink to="/" onClick={closeMenu}>
              <MenuItem>Home</MenuItem>
            </NavLink>
          </Border>

          <Border>
            <NavLink to="/applicationdetails" onClick={closeMenu}>
              <MenuItem>Application</MenuItem>
            </NavLink>

            <NavLink to="/technology" onClick={closeMenu}>
              <MenuItem>Technology</MenuItem>
            </NavLink>

            <NavLink to="/products" onClick={closeMenu}>
              <MenuItem>Products</MenuItem>
            </NavLink>
          </Border>

          <Border>
            <NavLink to="/about" onClick={closeMenu}>
              <MenuItem>About us</MenuItem>
            </NavLink>

            <NavLink to="/teams" onClick={closeMenu}>
              <MenuItem>Teams</MenuItem>
            </NavLink>
            <NavLink to="/achivements" onClick={closeMenu}>
              <MenuItem>Achivements</MenuItem>
            </NavLink>
          </Border>

          <div>
            <img src="elecnovoLogo.png" alt="Logo" />
            <h4>GreenMobility</h4>
          </div>
        </MenuList>
      </MenuContainer>
    </>
  );
}

export default Menu;
