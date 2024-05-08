import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 2rem;
    padding: 1rem 2rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;

    border-radius: 12px;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-500);
    background-color: var(--color-grey-300);

    &:hover {
      background-color: var(--color-indigo-700);
      color: var(--color-grey-200);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 7px 15px;

  @media only screen and (max-width: 600px) {
    padding: 0.2rem 0%.3;
    width: 40%;
    font-size: 15px;
  }

  ${(props) => sizes[props.size]} ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};
export default Button;
