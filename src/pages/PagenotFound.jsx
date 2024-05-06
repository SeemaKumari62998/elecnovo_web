import LinkButton from "../../ui/LinkButton";
import styled from "styled-components";

const Container = styled.div``;

const Span = styled.span`
  color: black;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

function PagenotFount() {
  return (
    <Container>
      <LinkButton to="/">
        <Span>&larr;Back</Span>
      </LinkButton>
      <h1>Page not Found</h1>
    </Container>
  );
}

export default PagenotFount;
