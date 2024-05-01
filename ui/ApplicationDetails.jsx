import styled from "styled-components";
import LinkButton from "./LinkButton";
import Application from "../src/pages/Application";

const Container = styled.div`
  display: flex;
  justify-content: center;

  position: relative;
  width: 100%;
  height: 100vh;

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    position: absolute;
  }
`;

const Span = styled.span`
  color: black;
  padding: 20px;

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
        <Application />
      </Container>
    </>
  );
}

export default ApplicationDetails;
