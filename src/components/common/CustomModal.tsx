import { ReactElement, useEffect, useState } from "react";
import Modal from "react-modal";
import styled, { keyframes } from "styled-components";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  topImage?: ReactElement;
  title?: string;
  content?: string;
  contentMarkup?: ReactElement;
  okBtnName?: string;
  cancelBtnName?: string;
  okBtnClick?: () => void;
  cancelBtnClick?: () => void;
  cancelbtn: boolean;
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
  animation: ${(prop: { isOpen: boolean }) => (prop.isOpen ? fadeIn : fadeOut)} 0.1s ease-in;
  visibility: ${(prop: { isOpen: boolean }) => (prop.isOpen ? "visible" : "hidden")};
  transition: visibility 0.1s ease-out;
`;

const OverlayStyle = styled.div`
  animation: ${(prop: { isOpen: boolean }) => (prop.isOpen ? fadeIn : fadeOut)} 0.1s ease-in;
  visibility: ${(prop: { isOpen: boolean }) => (prop.isOpen ? "visible" : "hidden")};
  transition: visibility 0.1s ease-out;
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
    cancelbtn,
    topImage,
    contentMarkup,
  } = props;

  // 컴포넌트가 사라지는 시점을 지연시키기 위한 상태
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(isOpen);
    }
  }, [isOpen]);

  const handleCloseBtnClick = (btnName: "cancel" | "ok") => {
    // visible의 상태를 false로 바꿔줌과 동시에 애니메이션 동작
    setVisible(false);
    // 애니메이션이 끝나면 toggleModal함수 실행으로 모달창 닫기
    setTimeout(() => {
      if (btnName === "ok" && okBtnClick) {
        okBtnClick();
      } else if (btnName === "cancel" && cancelBtnClick) {
        cancelBtnClick();
      }
      toggleModal();
    }, 100);
  };

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
          <ModalContent>{content ? content : contentMarkup}</ModalContent>
        </ModalContentWrapper>
        <ModalBtnsWrapper>
          {cancelbtn && (
            <Button
              theme={cancelBtnName === "탈퇴" ? "red" : "white"}
              onClick={() => handleCloseBtnClick("cancel")}
              content={cancelBtnName ? cancelBtnName : "취소"}
            />
          )}
          <Button
            theme={"black"}
            onClick={() => handleCloseBtnClick("ok")}
            content={okBtnName ? okBtnName : "확인"}
          />
        </ModalBtnsWrapper>
      </ModalWrapper>
    </Modal>
  );
};

export default CustomModal;
