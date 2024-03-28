import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  top: 0; /* Adjust as needed */
  left: 0; /* Adjust as needed */
  margin: 0;
  z-index: 2; /* Ensure the button is above the video/image */
  background-color: transparent;
  border: none;
  color: yellow;
  font-size: 20px;

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

const StyledLink = styled(Link)`
  font-size: 20px;
  color: yellow;
  text-decoration: none;
  position: relative;
  top: 0;
  left: 10px;
  margin: 0;
  background-color: transparent;
  z-index: 2;

  &:hover {
    text-decoration: underline;
    color: var(--color-green-100);
  }
`;

export default LinkButton;
