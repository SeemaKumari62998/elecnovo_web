import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const Container = styled.div`
  font-size: 18px;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  justify-content: space-between;
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

function TopHeader() {
  return (
    <Container>
      <Ul>
        <ArrowWrapper>
          <MdArrowBackIos />
        </ArrowWrapper>
        <Li>GreenMobility</Li>
        <Li>Technology</Li>
        <Li>Application</Li>
        <Li>Solutions</Li>
        <ArrowWrapper>
          <MdArrowForwardIos />
        </ArrowWrapper>
      </Ul>
    </Container>
  );
}

export default TopHeader;
