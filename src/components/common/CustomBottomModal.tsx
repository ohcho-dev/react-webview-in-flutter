import React, { ReactNode, useEffect } from "react";
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
  z-index: 150;
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
  bottom: -0.1rem;
  border-radius: 1.8rem 1.8rem 0 0;
`;

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
        <BottomModalWrap>
          <Dimmed onClick={handleToggle} />
          <Modal className="fadein-moveTop">{children}</Modal>
        </BottomModalWrap>
      )}
    </>
  );
};

export default CustomBottomModal;
