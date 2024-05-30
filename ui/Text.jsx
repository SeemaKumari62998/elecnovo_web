import styled from "styled-components";

const Div = styled.div`
  display: block;
  height: 100vh;
  font-size: 2rem;
  background-image: url("bg.jpg");
  background-size: cover; /* Ensure the image covers the entire div */
  background-position: center; /* Center the background image */
  color: white; /* Add a text color for better visibility on the background image */
  padding: 20px; /* Add some padding for better text spacing */
`;
const P = styled.p`
  margin-top: 200px;
  text-align: left;
  max-width: 50%;
  border: 1px solid white;
  padding: 10px;
`;

function Text() {
  return (
    <Div>
      <h1>ABOUT US</h1>
      <P>
        Elecnovo is engaged in Design, Development, Manufacture and Supply of
        Intelligent, Efficient, Reliable and Robust electric motors for Electric
        Vehicles (EV) and other applications. Elecnovo also provides motor
        control and powertrain solutions.
      </P>
    </Div>
  );
}

export default Text;
