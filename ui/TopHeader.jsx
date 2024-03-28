import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: center;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Li = styled.li`
  color: var(--color-grey-100);
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
`;

function TopHeader({ navto }) {
  return (
    <Container>
      <Ul>
        <ArrowWrapper>
          <MdArrowBackIos />
        </ArrowWrapper>

        <Li>
          <Link to={"/"}>Home</Link>
        </Li>

        <Li>
          <Link to={"/technologies"}>Technology</Link>
        </Li>

        <Li>
          <Link to={"/products"}>Application</Link>
        </Li>

        <Li>
          <Link to={"/contact"}>Solutions</Link>
        </Li>
        <ArrowWrapper>
          <MdArrowForwardIos />
        </ArrowWrapper>
      </Ul>
    </Container>
  );
}

export default TopHeader;
