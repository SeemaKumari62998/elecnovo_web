import styled from "styled-components";
import Solutionvideo from "../public/Solutionvideo.mp4";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function PerformanceVideo() {
  return (
    <Container>
      <Video src={Solutionvideo} autoPlay loop muted />
    </Container>
  );
}

export default PerformanceVideo;
