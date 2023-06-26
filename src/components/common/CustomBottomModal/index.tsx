import React, { ReactNode, useEffect, useRef } from "react";
import { isAndroid } from "react-device-detect";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import * as S from "./CustomBottomModal.styled";

interface CustomBottomModalProps {
  toggle: boolean;
  handleToggle: () => void;
  children?: ReactNode;
}

const BottomSheetModalPortal = ({ children }: { children: ReactNode }) => {
  const el = document.getElementById("body");
  return el && ReactDOM.createPortal(children, el);
};

const CustomBottomModal: React.FC<CustomBottomModalProps> = ({
  toggle,
  handleToggle,
  children,
}) => {
  // 뒤로가기 제어

  const navigate = useNavigate();
  const popStateRef = useRef<boolean>(false);
  useEffect(() => {
    // 개발 환경에서는 strict mode로 인해 렌더링이 2번 진행됨에 따라 뒤로가기를 2번 해야함.
    // 배포 환경에서는 이상 없음.
    popStateRef.current = false;
    if (toggle) {
      document.getElementById("main")?.classList.add("scroll_lock");
      if (isAndroid) window.history.pushState(null, "", window.location.href);
      window.onpopstate = () => {
        // 뒤로가기가 실행될 경우 추가 action 등록
        popStateRef.current = true;
        handleToggle();
      };
      return () => {
        document.getElementById("main")?.classList.remove("scroll_lock");
        if (isAndroid && !popStateRef.current) {
          navigate(-1);
        }
      };
    }
  }, [toggle]);

  return (
    <>
      {toggle && (
        <BottomSheetModalPortal>
          <S.BottomModalWrap>
            <S.Dimmed onClick={() => handleToggle()} />
            <S.Modal className="fadein-moveTop">{children}</S.Modal>
          </S.BottomModalWrap>
        </BottomSheetModalPortal>
      )}
    </>
  );
};

export default CustomBottomModal;
