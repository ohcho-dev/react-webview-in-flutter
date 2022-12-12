import styled, { keyframes } from "styled-components";

const handleFade = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100;
    }
`;
const BottomModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
`;
const Dimmed = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);

  transform: all;
  animation: ${handleFade} 0.2s linear alternate;
`;
const Modal = styled.div`
  width: 100%;
  max-height: 50rem;
  padding: 3rem 2.5rem 4rem;
  background: #fff;
  position: absolute;
  bottom: 0;
`;
interface CustomBottomModalProps {
  handleToggle: () => void;
}
const CustomBottomModal: React.FC<CustomBottomModalProps> = ({
  handleToggle,
}) => {
  return (
    <BottomModalWrap>
      <Dimmed onClick={handleToggle} />
      <Modal className="fadein-moveTop">123</Modal>
    </BottomModalWrap>
  );
};

export default CustomBottomModal;
