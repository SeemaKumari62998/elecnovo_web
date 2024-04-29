import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import { AnimatePresence } from "framer-motion";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Main = styled.main`
  margin-top: 85px;

  background-color: var(--color-grey-400);

  @media only screen and (max-width: 600px) {
    margin-top: 60px;
  }
`;

function AppLayout() {
  const location = useLocation();
  return (
    <StyledAppLayout>
      <Header />

      <Main location={location} key={location.pathname}>
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
