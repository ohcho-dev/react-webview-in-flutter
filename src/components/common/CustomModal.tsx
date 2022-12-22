import { ReactElement, useEffect, useLayoutEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Modal from "react-modal";
import Button from "./Button";
import { createBrowserHistory } from "history";

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  topImage?: ReactElement;
  title?: string;
  content?: string;
  okBtnName?: string;
  cancelBtnName?: string;
  okBtnClick?: () => void;
  cancelBtnClick?: () => void;
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
  },
  overlay: {
    background: "rgba(0,0,0,0.7)",
    zIndex: "200",
  },
};

const ModalStyle = styled.div`
  animation: ${(prop: { isOpen: boolean }) => (prop.isOpen ? fadeIn : fadeOut)}
   0.2s ease-in;
    visibility: ${(prop: { isOpen: boolean }) => (prop.isOpen ? "visible" : "hidden")}
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

  const history = createBrowserHistory();
  // 컴포넌트가 사라지는 시점을 지연시키기 위한 상태
  const [visible, setVisible] = useState<boolean>(false);

  const closeModal = () => {
    history.back();
    setVisible(false);
    setTimeout(() => {
      toggleModal();
      if (okBtnClick) okBtnClick();
    }, 200);
  };

  useEffect(() => {
    if (isOpen) {
      window.history.pushState(null, "", window.location.href);
    }
    setVisible(isOpen);
  }, [isOpen]);

  useLayoutEffect(() => {
    const event = history.listen(listener => {
      if (listener.action === "POP") {
        closeModal();
      }
    });
    return event;
  }, [history]);

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
          {topImage && <ModalImageWrapper>{topImage}</ModalImageWrapper>}
          <ModalTitle>{title}</ModalTitle>
          <ModalContent>{content}</ModalContent>
        </ModalContentWrapper>
        <ModalBtnsWrapper>
          {cancelBtnName && (
            <Button theme={"white"} onClick={cancelBtnClick} content={cancelBtnName} />
          )}
          <Button theme={"black"} onClick={closeModal} content={okBtnName ? okBtnName : "확인"} />
        </ModalBtnsWrapper>
      </ModalWrapper>
    </Modal>
  );
};

export default CustomModal;
