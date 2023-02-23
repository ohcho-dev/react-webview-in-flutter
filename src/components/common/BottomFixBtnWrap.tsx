import styled from "styled-components";

const BottomFixWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 9rem;
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.1);
`;
interface BottomFixBtnWrapProps {
  children?: React.ReactNode;
}
const BottomFixBtnWrap: React.FC<BottomFixBtnWrapProps> = ({ children }) => {
  return <BottomFixWrap>{children}</BottomFixWrap>;
};

export default BottomFixBtnWrap;
