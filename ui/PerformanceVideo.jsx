import styled from "styled-components";
import engine from "../public/engine.mp4";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Video = styled.video`
  width: 100%;
`;

function PerformanceVideo() {
  return (
    <Container>
      <Video src={engine} autoPlay loop muted />
    </Container>
  );
}

export default PerformanceVideo;
