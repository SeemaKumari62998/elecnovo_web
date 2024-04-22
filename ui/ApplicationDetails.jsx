import styled from "styled-components";
import engine_2 from "../public/engine_2.mp4";
import LinkButton from "./LinkButton";
import Application from "../src/pages/Application";

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* salign-items: center; */
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--color-grey-300);
  /* overflow: hidden; */

  @media only screen and (max-width: 600px) {
  }
`;

const Video = styled.video`
  position: absolute;
  /* left: 0; */
  top: 0;
  transform: translateX(-50%);
  width: 50%;
  height: auto;
  border-radius: 5px;
  /* top: 150px; */

  @media only screen and (max-width: 600px) {
    width: 80%;
    left: 50%;
    top: 100px;
  }
`;

const TransparentSheet = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Div = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;

  z-index: 1;
`;

const P = styled.h1`
  color: white;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
const Styleddiv = styled.div`
  position: absolute;
  border: 1px solid grey;
  text-align: center;
  left: 55%;
  max-width: 80%;
  padding: 20px;
  margin: 0 auto;
  top: 15%;

  @media only screen and (max-width: 600px) {
    left: 20%;
    max-width: 100%;
    top: 44%;
    padding: 10px;
  }
`;
const Span = styled.span`
  color: black;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

function ApplicationDetails() {
  return (
    <>
      {/* <LinkButton to="/">
        <Span> &larr;Back</Span>
      </LinkButton> */}
      <Container>
        {/* <Video src={engine_2} loop muted autoPlay />
        <TransparentSheet />

        <Styleddiv>
          <p>Core Technology details</p>
        </Styleddiv> */}
        <Application />
      </Container>
    </>
  );
}

export default ApplicationDetails;
