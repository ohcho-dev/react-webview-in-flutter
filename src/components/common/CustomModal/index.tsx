import { ReactElement, useEffect, useState } from "react";
import Modal from "react-modal";

import Button from "../Button";
import * as S from "./CustomModal.styled";

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
        <S.ModalStyle isOpen={visible} {...props}>
          {children}
        </S.ModalStyle>
      )}
      overlayElement={(props, contentElement) => (
        <S.OverlayStyle isOpen={visible} {...props}>
          {contentElement}
        </S.OverlayStyle>
      )}
    >
      <S.ModalWrapper>
        <S.ModalContentWrapper>
          {topImage && <S.ModalImageWrapper>{topImage}</S.ModalImageWrapper>}
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.ModalContent>{content ? content : contentMarkup}</S.ModalContent>
        </S.ModalContentWrapper>
        <S.ModalBtnsWrapper>
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
        </S.ModalBtnsWrapper>
      </S.ModalWrapper>
    </Modal>
  );
};

export default CustomModal;