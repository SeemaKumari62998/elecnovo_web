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
  background-color: var(--color-grey-200);
  margin-top: 116px;
  /* color: var(--color-grey-100); */
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
