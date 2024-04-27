import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  margin: 0;
  z-index: 2;
  background-color: transparent;
  border: none;
  color: yellow;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
    color: var(--color-green-100);
  }
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  color: yellow;
  text-decoration: none;
  /* position: fixed; */
  top: 90px;
  left: 20px;
  margin: 0;
  background-color: transparent;
  z-index: 2;

  &:hover {
    text-decoration: underline;
    color: var(--color-green-100);
  }
`;

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to === "-1") {
      navigate(-1);
    }
  };

  return to === "-1" ? (
    <StyledButton onClick={handleClick}>{children}</StyledButton>
  ) : (
    <StyledLink to={to}>{children}</StyledLink>
  );
}

export default LinkButton;
