import styled from "styled-components";
import Application from "../src/pages/Application";

const Div = styled.div`
  margin-top: 0;
  display: flex;

  @media only screen and (max-width: 600px) {
    display: flex;
    left: 10%;
  }
`;

function MenuApplication() {
  return (
    <Div>
      <Application />
    </Div>
  );
}

export default MenuApplication;
