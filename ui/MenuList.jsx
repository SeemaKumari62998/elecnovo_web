import { useEffect, useRef, useState } from "react";
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

  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    // Bind the event listener only when the menu is open
    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      // Unbind the event listener when the menu is closed
      document.removeEventListener("click", handleClickOutside);
    }

    // Cleanup function to remove the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <MenuContainer ref={menuRef}>
        <TiThMenu onClick={() => setMenuOpen(!menuOpen)} />

        <MenuList isOpen={menuOpen}>
          <Border>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              <MenuItem>Home</MenuItem>
            </NavLink>
          </Border>

          <Border>
            <NavLink
              to="/applicationdetails"
              onClick={() => setMenuOpen(false)}
            >
              <MenuItem>Application</MenuItem>
            </NavLink>

            <NavLink to="/technology" onClick={() => setMenuOpen(false)}>
              <MenuItem>Technology</MenuItem>
            </NavLink>

            <NavLink to="/products" onClick={() => setMenuOpen(false)}>
              <MenuItem>Products</MenuItem>
            </NavLink>
          </Border>

          <Border>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              <MenuItem>About us</MenuItem>
            </NavLink>

            <NavLink to="/career" onClick={() => setMenuOpen(false)}>
              <MenuItem>Career</MenuItem>
            </NavLink>

            <NavLink to="/teams" onClick={() => setMenuOpen(false)}>
              <MenuItem>Teams</MenuItem>
            </NavLink>
            <NavLink to="/achivements" onClick={() => setMenuOpen(false)}>
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
