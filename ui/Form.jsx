import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 9.4rem 6rem;
      width: 50%;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      @media only screen and (max-width: 600px) {
        width: 100%;
        padding: 9.4rem 2rem;
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;
Form.defaultProps = {
  type: "regular",
};

export default Form;
