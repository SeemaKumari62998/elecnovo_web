import toast from "react-hot-toast";
import Form from "./Form";
import styled from "styled-components";
import Button from "./Button";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline, MdPhone } from "react-icons/md";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListContainer = styled.ul`
  flex: 1;
  background-color: var(--color-grey-200);
`;

const Input = styled.input`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  padding: 2rem 3rem;
  box-shadow: var(--shadow-sm);
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: left;
  background-color: var(--color-grey-100);
  padding: 1px;
  margin: 50px;
  text-align: center;
  color: black;
  margin: 100px;
  width: 70%;

  svg {
    margin-bottom: 5px;
    font-size: 30px;
  }

  span {
    font-size: 20px;
  }
`;
const StyledBtn = styled(Button)`
  margin-top: 30px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Styledspan = styled.span`
  color: var(--color-grey-500);
  padding: 10px;
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
        <ListContainer>
          <StyledLi>
            <MdOutlineMailOutline />
            <Styledspan>REACHUS@ELECNOVO.COM</Styledspan>
          </StyledLi>

          <StyledLi>
            <MdPhone />
            <Styledspan>89712 84680</Styledspan>
          </StyledLi>

          <StyledLi>
            <CiLocationOn />
            <Styledspan>Elecnovo </Styledspan>
          </StyledLi>
        </ListContainer>

        <Form>
          <h1>CONTACT US</h1>
          <FormContainer>
            <Input type="text" placeholder="Enter Your Name" />
            <Input type="text" placeholder="Enter Your Company Name" />
            <Input type="text" placeholder="Enter Your Email" />
            <Input type="text" placeholder="Phone" />
          </FormContainer>

          <StyledBtn>
            <Button size="small" onClick={handleSubmit}>
              Submit
            </Button>
          </StyledBtn>
        </Form>
      </Container>
    </>
  );
}

export default ContactForm;
