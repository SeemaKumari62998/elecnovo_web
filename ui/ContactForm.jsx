import toast from "react-hot-toast";
import Form from "./Form";
import styled from "styled-components";
import Button from "./Button";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline, MdPhone } from "react-icons/md";
import LinkButton from "./LinkButton";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const ListContainer = styled.ul`
  flex: 1;
  background-color: var(--color-grey-100);
  align-content: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Input = styled.input`
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  padding: 1.5rem 2rem;
  box-shadow: var(--shadow-sm);
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: left;
  background-color: var(--color-grey-100);
  padding: 1px;

  text-align: center;
  color: black;
  margin: 100px;
  width: 70%;

  svg {
    margin-bottom: 5px;
    font-size: 30px;
  }

  span {
    font-size: 15px;
  }

  @media only screen and (max-width: 600px) {
    width: 80%;
    margin: 20px;
  }
`;
const StyledBtn = styled(Button)`
  margin-top: 30px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    // margin: 20px;
  }
`;

const Styledspan = styled.span`
  color: var(--color-grey-500);
  padding: 10px;
`;

const Span = styled.span`
  color: var(--color-blue-700);
  margin-top: 10px;
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
      {/* <LinkButton to="/">&larr;Back</LinkButton> */}
      <Container>
        <ListContainer>
          <img src="Contact1.jpg" alt="Contact" />
        </ListContainer>
        {/*
        <ListContainer>
          <StyledLi>
            <MdOutlineMailOutline />
            <Span>Email-</Span>
            <Styledspan>REACHUS@ELECNOVO.COM</Styledspan>
          </StyledLi>

          <StyledLi>
            <MdPhone />
            <Span>Phone -</Span>
            <Styledspan>89712 84680</Styledspan>
          </StyledLi>

          <StyledLi>
            <CiLocationOn />
            <Span> Address -</Span>
            <Styledspan>Elecnovo </Styledspan>
          </StyledLi>
        </ListContainer> */}

        <Form>
          <h1>CONTACT US</h1>

          <p>Fill out the form below</p>
          <FormContainer>
            <Input type="text" placeholder="Enter Your Name" />
            <Input type="text" placeholder=" +91 Phone No." />
            <Input type="text" placeholder="Enter Your Email" />
            <Input type="text" placeholder="Subject" />
            {/* <Input type="text" placeholder="Message or question" /> */}
            <StyledTextarea placeholder="Message or question" maxLength={200} />
          </FormContainer>

          <Button size="small" variation="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default ContactForm;
