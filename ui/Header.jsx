import styled from "styled-components";
// import Logo from "../ui/Logo";
import MainNav from "./MainNav";
import TopHeader from "./TopHeader";
import Logo from "./Logo";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: black;
  padding: 8px 50px;

  width: 100%;
  color: white;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  @media only screen and (max-width: 600px) {
    padding: 8px 20px;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0.5, 0.9, 0.3), rgba(0, 0.5, 0.9, 0.3));
`;

const CenteredTopHeader = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <>
        {/* <img
          src="logo.png"
          style={{ width: "155px", height: "100px" }}
          alt="logo"
        /> */}
        {/* <Logo /> */}
        {/* <CenteredTopHeader>
          <TopHeader />
        </CenteredTopHeader> */}
      </>
      <Overlay />
      <MainNav />
    </StyledHeader>
  );
}

export default Header;
