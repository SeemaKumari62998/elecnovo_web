import styled from "styled-components";
import engine_2 from "../public/engine_2.mp4";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  overflow: hidden;
`;

const Video = styled.video`
  position: absolute;
  left: 30%;
  transform: translateX(-50%);
  width: 40%;
  height: auto;
  border-radius: 5px;
  top: 150px;
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
  top: 40px;
  left: 20%;
  z-index: 1;
`;

const H1 = styled.h1`
  color: white;
`;
const Styleddiv = styled.div`
  position: absolute;
  border: 1px solid grey;
  padding: 100px;
  height: 70%;
  text-align: left;
  right: 8%;
  width: 40%;
`;

function ApplicationDetails() {
  return (
    <>
      <Container>
        <Video src={engine_2} loop muted autoPlay />
        <TransparentSheet />
        <Div>
          <H1>Elecnovo Technology </H1>
        </Div>

        <Styleddiv>
          <p>Write up</p>
        </Styleddiv>
      </Container>
    </>
  );
}

export default ApplicationDetails;
