import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: auto;
  display: flex;

  margin: 50px;
`;

const Img = styled.img`
  box-shadow: 0 0 10px rgb(0 0 0);
  border-radius: 10px;
  max-height: 200px;
  max-width: 200px;
  margin: 30px;
`;

const Div = styled.div`
  margin: 100px;
  padding: 20px;
`;

const H1 = styled.h1`
  /* background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(100px); */
  margin: 100px;
  color: white;
  white-space: nowrap;
  font-size: 5rem;
`;
function HomeApp() {
  return (
    <Container>
      <Img src="bike.png" alt="Home App" />
      <Img src="car.png" alt="Home App" />
      <Div>
        <H1>High Speed Better Performance</H1>
        <H1>High Speed Better Performance</H1>
        <Link to="/application">...More</Link>
      </Div>
    </Container>
  );
}

export default HomeApp;
