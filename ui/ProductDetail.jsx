import React from "react";
import LinkButton from "./LinkButton";
import styled from "styled-components";

const Span = styled.span`
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

function ProductDetail() {
  return (
    <div>
      <LinkButton to="/">
        <Span>&larr;Back</Span>
      </LinkButton>
      <h1>Welcome to the details page</h1>
      <p>Nice meeting u</p>
    </div>
  );
}

export default ProductDetail;
