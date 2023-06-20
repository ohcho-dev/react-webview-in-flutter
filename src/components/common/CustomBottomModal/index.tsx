import React, { ReactNode, useEffect } from "react";
import * as S from "./CustomBottomModal.styled";

interface CustomBottomModalProps {
  toggle: boolean;
  handleToggle: () => void;
  children?: ReactNode;
}
const CustomBottomModal: React.FC<CustomBottomModalProps> = ({
  toggle,
  handleToggle,
  children,
}) => {
  // 뒤로가기 제어
  useEffect(() => {
    // 개발 환경에서는 strict mode로 인해 렌더링이 2번 진행됨에 따라 뒤로가기를 2번 해야함.
    // 배포 환경에서는 이상 없음.
    if (toggle) {
      document.getElementById("main")?.classList.add("scroll_lock");
      window.history.pushState(null, "", window.location.href); // 현재 페이지 history stack 한개 더 쌓기
      window.onpopstate = () => {
        // 뒤로가기가 실행될 경우 추가 action 등록
        handleToggle();
      };
      return () => {
        document.getElementById("main")?.classList.remove("scroll_lock");
      };
    }
  }, [toggle]);

  return (
    <>
      {toggle && (
        <S.BottomModalWrap>
          <S.Dimmed onClick={handleToggle} />
          <S.Modal className="fadein-moveTop">{children}</S.Modal>
        </S.BottomModalWrap>
      )}
    </>
  );
};

export default CustomBottomModal;
