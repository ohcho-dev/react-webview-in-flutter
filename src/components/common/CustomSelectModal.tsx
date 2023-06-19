import { ReactElement, useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { SelectBtnArrayType } from "../../utils/type";
import UseImgix from "./Imgix";

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  title?: string;
  selectBtnArray?: SelectBtnArrayType[];
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const customStyles = {
  content: {
    width: "30.5rem",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "2rem 0 0",
  },
  overlay: {
    background: "rgba(0,0,0,0.7)",
    zIndex: "200",
  },
};

const ModalStyle = styled.div`
  animation: ${(prop: { isOpen: boolean }) => (prop.isOpen ? fadeIn : fadeOut)} 0.2s ease-in;
  visibility: ${(prop: { isOpen: boolean }) => (prop.isOpen ? "visible" : "hidden")};
  transition: visibility 0.2s ease-out;
`;

const OverlayStyle = styled.div`
  animation: ${(prop: { isOpen: boolean }) => (prop.isOpen ? fadeIn : fadeOut)} 0.2s ease-in;
  visibility: ${(prop: { isOpen: boolean }) => (prop.isOpen ? "visible" : "hidden")};
  transition: visibility 0.2s ease-out;
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  position: relative;
`;

const ModalTitle = styled.span`
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  margin-bottom: 1.2rem;
  padding: 0 2rem;
`;

const ModalContent = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
`;

const BtnItem = styled.div`
  padding: 2rem 2rem;
  border-bottom: 1px solid #efefef;

  &:first-child {
    border-top: 1px solid #efefef;
  }

  &:last-child {
    border-bottom: 0;
  }
`;

const CloseBtn = styled.span`
  position: absolute;
  top: 0;
  right: 2rem;
`;

const CustomSelectModal = (props: ModalProps) => {
  const { isOpen, toggleModal, title, selectBtnArray } = props;

  const navigate = useNavigate();
  // 컴포넌트가 사라지는 시점을 지연시키기 위한 상태
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(isOpen);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      contentElement={(props, children) => (
        <ModalStyle isOpen={visible} {...props}>
          {children}
        </ModalStyle>
      )}
      overlayElement={(props, contentElement) => (
        <OverlayStyle isOpen={visible} {...props}>
          {contentElement}
        </OverlayStyle>
      )}
    >
      <ModalWrapper>
        <ModalContentWrapper>
          <ModalTitle>{title}</ModalTitle>

          <CloseBtn onClick={toggleModal}>
            <UseImgix alt="close icon" srcUrl="/images/icon-close.svg" />
          </CloseBtn>

          <ModalContent>
            {selectBtnArray?.map(btn => (
              <BtnItem key={btn.id} onClick={btn.function}>
                {btn.name}
              </BtnItem>
            ))}
          </ModalContent>
        </ModalContentWrapper>
      </ModalWrapper>
    </Modal>
  );
};

export default CustomSelectModal;
