import toast from "react-hot-toast";
import Form from "./Form";
import styled from "styled-components";
import Button from "./Button";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 87vh;

  @media only screen and (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }
`;

const Div = styled.ul`
  flex: 1;
  background-color: var(--color-grey-100);
  align-content: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Img = styled.img`
  height: 100%;

  @media only screen and (max-width: 600px) {
    height: 300px;
  }
`;

const Input = styled.input`
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  padding: 1.5rem 2rem;
  box-shadow: var(--shadow-sm);

  @media only screen and (max-width: 600px) {
    padding: 0.7rem 1rem;
    font-size: 10px;
    width: 300px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const StyledTextarea = styled.textarea`
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  padding: 2rem 2rem;
  box-shadow: var(--shadow-sm);
  max-width: 200%;
  width: 100%;
  max-height: 150px;
  resize: none;

  @media only screen and (max-width: 600px) {
    width: 300px;
    font-size: 10px;
  }
`;

const SpanOr = styled.strong`
  text-align: center;
  margin: 10px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 60%;
  }
`;

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("submitted succesfully", {
      duration: 4000,
    });
  };

  return (
    <>
      <Container>
        <Div>
          <Img src="contact.jpg" alt="Contact" />
        </Div>

        <Form>
          <h1>CONTACT US</h1>

          <div>
            <p> Email: reachus@elecnovo.com</p>
            <p>Phone: +91 89712 84680</p>
          </div>

          <FormContainer>
            <SpanOr>OR</SpanOr>

            <Input type="text" placeholder="Enter your Name" disabled />
            <Input type="text" placeholder="Enter your phone number" disabled />
            <Input type="text" placeholder="Enter your Email" disabled />
            <StyledTextarea
              placeholder="Enter your Message or question"
              maxLength={200}
              disabled
            />
          </FormContainer>

          <Button
            size="small"
            variation="primary"
            disabled
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
}

export default ContactForm;
