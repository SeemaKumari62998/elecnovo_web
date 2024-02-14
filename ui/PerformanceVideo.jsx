import styled from "styled-components";
import solution from "../public/solution.mp4";

const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;

  margin-bottom: 757px;
`;

function PerformanceVideo() {
  return (
    <Container>
      <Video src={solution} autoPlay loop muted />
    </Container>
  );
}

export default PerformanceVideo;
