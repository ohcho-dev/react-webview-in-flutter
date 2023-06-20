import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import UseImgix from "../Imgix";
import * as S from "./CustomSelectModal.styled";

interface SelectBtnArrayType {
  id: number;
  name: string;
  function?: () => void;
}

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  title?: string;
  selectBtnArray?: SelectBtnArrayType[];
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
    padding: "2rem 0 0",
  },
  overlay: {
    background: "rgba(0,0,0,0.7)",
    zIndex: "200",
  },
};

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
          <S.ModalTitle>{title}</S.ModalTitle>

          <S.CloseBtn onClick={toggleModal}>
            <UseImgix alt="close icon" srcUrl="/images/icon-close.svg" />
          </S.CloseBtn>

          <S.ModalContent>
            {selectBtnArray?.map(btn => (
              <S.BtnItem key={btn.id} onClick={btn.function}>
                {btn.name}
              </S.BtnItem>
            ))}
          </S.ModalContent>
        </S.ModalContentWrapper>
      </S.ModalWrapper>
    </Modal>
  );
};

export default CustomSelectModal;
