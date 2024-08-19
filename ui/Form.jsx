import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 9rem 5rem;
      width: 50%;

      background-color: var(--color-grey-100);
      border: 1px solid var(--color-grey-100);

      @media only screen and (max-width: 600px) {
        width: 100%;
        padding: 2rem 3rem;
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.5rem;
`;
Form.defaultProps = {
  type: "regular",
};

export default Form;
