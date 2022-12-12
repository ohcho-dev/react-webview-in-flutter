import { ReactElement } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  toggleModal?: () => void;
  topImage?: ReactElement;
  title?: string;
  content?: string;
  okBtnName?: string;
  cancelBtnName?: string;
  okBtnClick?: () => void;
  cancelBtnClick?: () => void;
}

const customStyles = {
  content: {
    width: "30.5rem",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "rgba(0,0,0,0.7)",
    zIndex: "200",
  },
};

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
`;

const ModalImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const ModalBtnsWrapper = styled.div`
  display: flex;
  column-gap: 1rem;
`;

const ModalTitle = styled.span`
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  margin-bottom: 1.2rem;
`;

const ModalContent = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  margin-bottom: 3rem;
`;

const CustomModal = (props: ModalProps) => {
  const {
    isOpen,
    title,
    content,
    toggleModal,
    okBtnName,
    cancelBtnName,
    okBtnClick,
    cancelBtnClick,
    topImage,
  } = props;
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <ModalWrapper>
        <ModalContentWrapper>
          {topImage && <ModalImageWrapper>{topImage}</ModalImageWrapper>}
          <ModalTitle>{title}</ModalTitle>
          <ModalContent>{content}</ModalContent>
        </ModalContentWrapper>
        <ModalBtnsWrapper>
          {cancelBtnName && (
            <Button
              theme={"white"}
              onClick={cancelBtnClick}
              content={cancelBtnName}
            />
          )}
          <Button
            theme={"black"}
            onClick={okBtnClick ? okBtnClick : toggleModal}
            content={okBtnName ? okBtnName : "확인"}
          />
        </ModalBtnsWrapper>
      </ModalWrapper>
    </Modal>
  );
};

export default CustomModal;
